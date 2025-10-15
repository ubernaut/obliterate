import { MusicComposer } from './MusicComposer';

/**
 * Audio Manager - Singleton
 * Manages all game audio including SFX and music
 */
class AudioManager {
  constructor() {
    this.sounds = new Map();
    this.musicComposer = new MusicComposer();
    this.currentTrack = null;
    this.initialized = false;
  }

  /**
   * Initialize audio system
   * Must be called after user interaction (browser requirement)
   */
  async init(settings = {}) {
    if (this.initialized) return;
    
    console.log('Initializing Audio Manager...');
    this.initialized = true;
    
    // Initialize music composer with current settings
    this.musicComposer.init(settings);
    
    this.loadSounds();
    
    return true;
  }

  /**
   * Load all sound effects
   * Uses procedurally generated 8-bit style sounds
   */
  loadSounds() {
    // For now, we'll use the Web Audio API to generate sounds
    // In production, these would be pre-recorded audio files
    
    console.log('Audio files would be loaded here');
    // The actual sound generation will happen on-demand using SoundGenerator
  }

  /**
   * Play a sound effect
   * @param {string} name - Sound effect name
   * @param {object} options - Playback options (volume, rate, etc.)
   */
  playSFX(name, options = {}) {
    if (!this.initialized) {
      this.init();
    }

    // Ensure music composer is initialized
    if (!this.musicComposer.initialized) {
      this.musicComposer.init();
    }

    // Ensure context and gain nodes exist
    if (!this.musicComposer.context || !this.musicComposer.sfxGain) {
      console.warn('Audio context not ready, skipping SFX');
      return;
    }

    // Share MusicComposer's context and sfx gain node
    const generator = new SoundGenerator(
      this.musicComposer.context,
      this.musicComposer.sfxGain
    );
    
    switch (name) {
      case 'launch':
        generator.generateLaunchSound(options.volume);
        break;
      case 'explosion-small':
        generator.generateExplosionSound(false, options.volume);
        break;
      case 'explosion-large':
        generator.generateExplosionSound(true, options.volume);
        break;
      case 'hit':
        generator.generateHitSound(options.volume);
        break;
      case 'ui-click':
        generator.generateUIClick(options.volume);
        break;
      case 'low-fuel':
        generator.generateWarningSound(options.volume);
        break;
      case 'victory':
        generator.generateVictorySound(options.volume);
        break;
      default:
        console.warn(`Unknown sound: ${name}`);
    }
  }

  /**
   * Play background music using MusicComposer
   * @param {string} track - Music track name (menu, game, victory, boss, defeat)
   */
  playMusic(track) {
    if (!this.initialized) {
      console.warn('Audio not initialized, initializing now...');
      this.init();
    }
    
    this.currentTrack = track;
    console.log(`Playing music track: ${track}`);
    
    // Use the MusicComposer to play chromatic music
    this.musicComposer.playTrack(track);
  }

  /**
   * Stop currently playing music
   */
  stopMusic() {
    console.log('Stopping music');
    this.musicComposer.stop();
    this.currentTrack = null;
  }
  
  /**
   * Set music volume
   * @param {number} volume - Volume level (0-1)
   */
  setMusicVolume(volume) {
    this.musicComposer.setMusicVolume(volume);
  }

  /**
   * Update master volume - affects ALL audio
   * @param {number} volume - Volume level (0-1)
   */
  updateVolume(volume) {
    this.musicComposer.setMasterVolume(volume);
  }

  /**
   * Mute all audio
   * @param {boolean} muted - Mute state
   */
  mute(muted) {
    this.musicComposer.setMasterVolume(muted ? 0 : 1);
  }
  
  /**
   * Update SFX volume
   * @param {number} volume - Volume level (0-1)
   */
  updateSFXVolume(volume) {
    this.musicComposer.setSFXVolume(volume);
  }
}

/**
 * Sound Generator - Creates procedural 8-bit style sounds
 * Now shares AudioContext and gain node with MusicComposer
 */
class SoundGenerator {
  constructor(audioContext, sfxGainNode) {
    this.audioContext = audioContext;
    this.sfxGainNode = sfxGainNode;
  }

  /**
   * Generate launch sound (whoosh)
   */
  generateLaunchSound(volume = 0.3) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      600,
      this.audioContext.currentTime + 0.2
    );

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.2
    );

    oscillator.connect(gainNode);
    gainNode.connect(this.sfxGainNode); // Route through SFX bus!

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.2);
  }

  /**
   * Generate explosion sound
   */
  generateExplosionSound(large = false, volume = 0.4) {
    if (!this.audioContext) return;
    
    const duration = large ? 0.4 : 0.3;
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(large ? 1000 : 800, this.audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(
      50,
      this.audioContext.currentTime + duration
    );

    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + duration
    );

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.sfxGainNode); // Route through SFX bus!

    noise.start(this.audioContext.currentTime);
    noise.stop(this.audioContext.currentTime + duration);
  }

  /**
   * Generate hit confirmation sound (success)
   */
  generateHitSound(volume = 0.2) {
    if (!this.audioContext) return;
    
    const times = [0, 0.1, 0.2];
    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5

    times.forEach((time, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(
        frequencies[index],
        this.audioContext.currentTime + time
      );

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime + time);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + time + 0.15
      );

      oscillator.connect(gainNode);
      gainNode.connect(this.sfxGainNode); // Route through SFX bus!

      oscillator.start(this.audioContext.currentTime + time);
      oscillator.stop(this.audioContext.currentTime + time + 0.15);
    });
  }

  /**
   * Generate UI click sound
   */
  generateUIClick(volume = 0.15) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.05
    );

    oscillator.connect(gainNode);
    gainNode.connect(this.sfxGainNode); // Route through SFX bus!

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.05);
  }

  /**
   * Generate warning sound (low fuel)
   */
  generateWarningSound(volume = 0.2) {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
    oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + 0.1);
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 0.3
    );

    oscillator.connect(gainNode);
    gainNode.connect(this.sfxGainNode); // Route through SFX bus!

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  /**
   * Generate victory fanfare
   */
  generateVictorySound(volume = 0.3) {
    if (!this.audioContext) return;
    
    const melody = [
      { freq: 523.25, time: 0 },    // C5
      { freq: 659.25, time: 0.15 },  // E5
      { freq: 783.99, time: 0.3 },   // G5
      { freq: 1046.5, time: 0.45 },  // C6
    ];

    melody.forEach(({ freq, time }) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + time);

      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime + time);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + time + 0.2
      );

      oscillator.connect(gainNode);
      gainNode.connect(this.sfxGainNode); // Route through SFX bus!

      oscillator.start(this.audioContext.currentTime + time);
      oscillator.stop(this.audioContext.currentTime + time + 0.2);
    });
  }
}

// Export singleton instance
export const audioManager = new AudioManager();