
/**
 * Music Composer - Procedural Chiptune Music Generator
 * Uses simple text notation to create fully chromatic 8-bit style music
 *
 * Notation Format:
 * "NOTE:DURATION NOTE:DURATION ..."
 *
 * Notes: C4, C#4/Db4, D4, D#4/Eb4, E4, F4, F#4/Gb4, etc. (or R for rest)
 * Duration: Fraction of a beat (0.25 = quarter note, 0.5 = half, 1.0 = whole)
 *
 * Examples:
 * - Major scale: "C4:0.5 D4:0.5 E4:0.5 F4:0.5 G4:0.5 A4:0.5 B4:0.5 C5:1"
 * - Chromatic: "C4:0.25 C#4:0.25 D4:0.25 D#4:0.25 E4:0.5"
 * - Rest: "C4:1 R:0.5 E4:1"
 */

// Full chromatic scale - 12-tone equal temperament
// Frequencies calculated as: 440 * 2^((n-49)/12) where n is semitone number
const NOTE_FREQUENCIES = {
  // Octave 2
  'C2': 65.41, 'C#2': 69.30, 'Db2': 69.30,
  'D2': 73.42, 'D#2': 77.78, 'Eb2': 77.78,
  'E2': 82.41,
  'F2': 87.31, 'F#2': 92.50, 'Gb2': 92.50,
  'G2': 98.00, 'G#2': 103.83, 'Ab2': 103.83,
  'A2': 110.00, 'A#2': 116.54, 'Bb2': 116.54,
  'B2': 123.47,
  
  // Octave 3
  'C3': 130.81, 'C#3': 138.59, 'Db3': 138.59,
  'D3': 146.83, 'D#3': 155.56, 'Eb3': 155.56,
  'E3': 164.81,
  'F3': 174.61, 'F#3': 185.00, 'Gb3': 185.00,
  'G3': 196.00, 'G#3': 207.65, 'Ab3': 207.65,
  'A3': 220.00, 'A#3': 233.08, 'Bb3': 233.08,
  'B3': 246.94,
  
  // Octave 4 (Middle C)
  'C4': 261.63, 'C#4': 277.18, 'Db4': 277.18,
  'D4': 293.66, 'D#4': 311.13, 'Eb4': 311.13,
  'E4': 329.63,
  'F4': 349.23, 'F#4': 369.99, 'Gb4': 369.99,
  'G4': 392.00, 'G#4': 415.30, 'Ab4': 415.30,
  'A4': 440.00, 'A#4': 466.16, 'Bb4': 466.16,
  'B4': 493.88,
  
  // Octave 5
  'C5': 523.25, 'C#5': 554.37, 'Db5': 554.37,
  'D5': 587.33, 'D#5': 622.25, 'Eb5': 622.25,
  'E5': 659.25,
  'F5': 698.46, 'F#5': 739.99, 'Gb5': 739.99,
  'G5': 783.99, 'G#5': 830.61, 'Ab5': 830.61,
  'A5': 880.00, 'A#5': 932.33, 'Bb5': 932.33,
  'B5': 987.77,
  
  // Octave 6
  'C6': 1046.5, 'C#6': 1108.7, 'Db6': 1108.7,
  'D6': 1174.7, 'D#6': 1244.5, 'Eb6': 1244.5,
  'E6': 1318.5,
  'F6': 1396.9, 'F#6': 1480.0, 'Gb6': 1480.0,
  'G6': 1568.0, 'G#6': 1661.2, 'Ab6': 1661.2,
  'A6': 1760.0, 'A#6': 1864.7, 'Bb6': 1864.7,
  'B6': 1975.5,
  
  // Rest
  'R': 0,
};

export class MusicComposer {
  constructor() {
    this.context = null;
    this.isPlaying = false;
    this.currentTrack = null;
    this.tempo = 120; // BPM
    this.volume = 0.15; // Default music volume
    this.initialized = false;
    this.loopTimeout = null; // Track the setTimeout for looping
    this.masterGain = null; // Persistent master gain node for volume control
  }

  /**
   * Initialize AudioContext
   * Should be called after user interaction due to browser policies
   */
  init(settings = {}) {
    if (this.initialized) return;
    
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      
      // Get initial volume values from settings or use defaults
      const masterVol = settings.masterVolume !== undefined ? settings.masterVolume : 1.0;
      const musicVol = settings.musicVolume !== undefined ? settings.musicVolume / 0.15 : 1.0;
      const sfxVol = settings.sfxVolume !== undefined ? settings.sfxVolume : 1.0;
      
      // Create master gain node for ALL audio (music + SFX)
      this.masterGain = this.context.createGain();
      this.masterGain.gain.setValueAtTime(masterVol, this.context.currentTime);
      this.masterGain.connect(this.context.destination);
      
      // Create music bus
      this.musicGain = this.context.createGain();
      this.musicGain.gain.setValueAtTime(musicVol, this.context.currentTime);
      this.musicGain.connect(this.masterGain);
      
      // Create SFX bus
      this.sfxGain = this.context.createGain();
      this.sfxGain.gain.setValueAtTime(sfxVol, this.context.currentTime);
      this.sfxGain.connect(this.masterGain);
      
      this.initialized = true;
      console.log('MusicComposer initialized with volumes:', { masterVol, musicVol, sfxVol });
    } catch (e) {
      console.error('Failed to initialize AudioContext:', e);
    }
  }

  /**
   * Parse music notation string into playable notes
   * @param {string} notation - Music notation "NOTE:DURATION NOTE:DURATION ..."
   * @returns {Array} Array of {frequency, duration, startTime}
   */
  parseNotation(notation) {
    const beatDuration = 60 / this.tempo; // Duration of one beat in seconds
    const notes = notation.split(' ').filter(n => n.trim());
    const parsed = [];
    let currentTime = 0;

    notes.forEach(noteStr => {
      const [note, durationStr] = noteStr.split(':');
      const frequency = NOTE_FREQUENCIES[note.toUpperCase()] || 0;
      const duration = parseFloat(durationStr) * beatDuration;

      parsed.push({
        frequency,
        duration,
        startTime: currentTime,
      });

      currentTime += duration;
    });

    return parsed;
  }

  /**
   * Play a melody
   * @param {string} notation - Music notation string
   * @param {object} options - Playback options
   */
  playMelody(notation, options = {}) {
    if (!this.context) {
      this.init();
    }
    
    if (!this.context) {
      console.warn('AudioContext not available');
      return;
    }

    const waveType = options.waveType || 'square';
    const volume = options.volume || this.volume;
    const notes = this.parseNotation(notation);

    notes.forEach(note => {
      if (note.frequency === 0) return; // Skip rests

      const oscillator = this.context.createOscillator();
      const gainNode = this.context.createGain();

      oscillator.type = waveType;
      oscillator.frequency.setValueAtTime(note.frequency, this.context.currentTime + note.startTime);

      gainNode.gain.setValueAtTime(volume, this.context.currentTime + note.startTime);
      gainNode.gain.linearRampToValueAtTime(
        volume * 0.8,
        this.context.currentTime + note.startTime + note.duration * 0.9
      );
      gainNode.gain.linearRampToValueAtTime(
        0,
        this.context.currentTime + note.startTime + note.duration
      );

      oscillator.connect(gainNode);
      gainNode.connect(this.musicGain); // Connect through music bus!

      oscillator.start(this.context.currentTime + note.startTime);
      oscillator.stop(this.context.currentTime + note.startTime + note.duration);
    });
  }

  /**
   * Play a looping background track
   * @param {string} trackName - Track identifier
   */
  playTrack(trackName) {
    if (!this.context) {
      this.init();
    }
    
    if (!this.context) {
      console.warn('Cannot play music: AudioContext not available');
      return;
    }
    
    // ALWAYS stop any existing music first
    if (this.isPlaying) {
      this.stop();
      // Wait a bit for cleanup before starting new track
      setTimeout(() => this.startTrack(trackName), 100);
      return;
    }

    this.startTrack(trackName);
  }

  /**
   * Internal method to actually start a track
   * @param {string} trackName - Track to play
   */
  startTrack(trackName) {
    this.currentTrack = trackName;
    this.isPlaying = true;

    const tracks = this.getTrackLibrary();
    const track = tracks[trackName] || tracks.game;

    this.playLoopingTrack(track);
  }

  /**
   * Play a track in a loop
   * @param {object} track - Track object with melody, bass, harmony
   */
  playLoopingTrack(track) {
    if (!this.context) {
      console.warn('Cannot play looping track: AudioContext not available');
      return;
    }

    const playPattern = () => {
      if (!this.isPlaying) {
        console.log('Loop stopped');
        return;
      }

      // Play melody
      if (track.melody) {
        this.playMelody(track.melody, { waveType: 'square', volume: this.volume });
      }

      // Play bass (lower frequency, triangle wave)
      if (track.bass) {
        this.playMelody(track.bass, { waveType: 'triangle', volume: this.volume * 0.7 });
      }

      // Play harmony (pulse wave)
      if (track.harmony) {
        this.playMelody(track.harmony, { waveType: 'sawtooth', volume: this.volume * 0.3 });
      }

      // Calculate total duration and schedule next loop
      const notes = this.parseNotation(track.melody);
      const totalDuration = Math.max(...notes.map(n => n.startTime + n.duration));
      
      // Store timeout so we can cancel it
      this.loopTimeout = setTimeout(() => playPattern(), totalDuration * 1000);
    };

    playPattern();
  }

  /**
   * Get music track library
   * @returns {object} Track library
   */
  getTrackLibrary() {
    return {
      menu: {
        // EPIC MAIN MENU THEME - Memorable, exciting, chromatic (~60 beats, ~30 seconds)
        // Strong melody with heroic feel
        melody: 'C5:0.5 R:0.25 C5:0.25 D5:0.5 E5:0.5 G5:1 R:0.5 ' +
                'G5:0.5 F#5:0.5 F5:0.5 E5:0.5 D5:1 C5:1 R:0.5 ' +
                // Chromatic run up
                'E5:0.5 F5:0.5 F#5:0.5 G5:0.5 G#5:0.5 A5:0.5 B5:1 R:0.5 ' +
                'C6:2 B5:0.5 A5:0.5 G5:2 R:1 ' +
                // Middle section - adventurous
                'D5:0.5 E5:0.5 F#5:0.5 G5:0.5 A5:1 G5:0.5 F#5:0.5 ' +
                'E5:1 D5:0.5 C#5:0.5 D5:2 R:1 ' +
                // Build back up with chromatic flavor
                'G4:0.5 A4:0.5 Bb4:0.5 B4:0.5 C5:1 D5:1 E5:2 ' +
                'F5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:0.5 G4:1 R:0.5 ' +
                // Grand ending phrase
                'C5:1 E5:1 G5:1.5 C6:2.5 R:1',
        bass: 'C3:2 G3:2 C3:2 E3:2 ' +
              'F3:2 G3:2 C3:4 ' +
              'D3:2 A3:2 D3:4 ' +
              'G3:2 D3:2 G3:2 C3:2 ' +
              'C3:4 G3:2 C3:6',
        harmony: 'E4:2 G4:2 C5:2 B4:2 ' +
                 'A4:2 B4:2 C5:4 ' +
                 'F#4:2 A4:2 D5:4 ' +
                 'B4:2 G4:2 C5:4 ' +
                 'E5:4 G5:2 C6:6',
      },
      
      settings: {
        // Calm, atmospheric space theme (~48 beats, ~24 seconds at 120 BPM)
        melody: 'C4:2 E4:1 G4:1 A4:2 G4:1 E4:1 ' +
                'D4:2 F4:1 A4:1 Bb4:2 A4:1 F4:1 ' +
                'E4:2 G4:1 B4:1 C5:4 R:2 ' +
                'G4:1 E4:1 C4:2 A3:2 G3:1 F3:1 ' +
                'E3:4 R:2 C4:1 E4:1 ' +
                'G4:2 A4:1 Bb4:1 A4:2 G4:2',
        bass: 'C3:4 C3:4 G3:4 G3:4 ' +
              'A3:4 A3:4 F3:4 F3:4 ' +
              'E3:4 E3:4 C3:8',
        harmony: 'E4:4 G4:4 B4:4 A4:4 ' +
                 'C5:4 E5:4 G4:8 ' +
                 'E4:8 C4:8',
      },
      
      game: {
        // Driving action theme with smooth loop (~72 beats, ~36 seconds)
        // Structured to loop back gracefully to the beginning
        melody: 'E4:0.5 E4:0.5 F4:0.5 E4:0.5 E4:1 C4:1 E4:2 ' +
                'F4:0.5 F4:0.5 G4:0.5 F4:0.5 F4:1 D4:1 F4:2 ' +
                'G4:0.5 G4:0.5 A4:0.5 G4:0.5 G4:1 E4:1 G4:2 ' +
                'A4:0.5 B4:0.5 C5:0.5 B4:0.5 A4:1 G4:1 E4:2 ' +
                // Middle section
                'R:1 C5:0.5 B4:0.5 A4:0.5 G4:0.5 F4:1 E4:1 D4:2 ' +
                'E4:1 F#4:0.5 G4:0.5 A4:2 G4:1 E4:1 ' +
                'D4:1 E4:0.5 F4:0.5 G4:2 F4:1 D4:1 ' +
                // Transition back to start
                'C4:2 D4:1 E4:1 G4:2 E4:2 ' +
                'D4:1 C4:1 B3:1 A3:1 G3:2 R:1 C4:1',
        bass: 'C3:2 C3:2 G3:2 G3:2 ' +
              'F3:2 F3:2 C3:2 C3:2 ' +
              'A3:2 A3:2 E3:2 E3:2 ' +
              'D3:2 D3:2 G3:2 G3:2 ' +
              // Smooth return to C
              'C3:4 G3:2 C3:2 F3:4 C3:4 ' +
              'G3:2 C3:2 C3:4',
        harmony: 'G4:2 C5:2 E5:2 D5:2 ' +
                 'C5:2 A4:2 G4:2 F4:2 ' +
                 'E4:4 G4:4 ' +
                 // Resolves back to C major
                 'C5:4 E5:2 G4:2 ' +
                 'C5:4 E4:4',
      },
      
      victory: {
        // Triumphant fanfare (~16 beats, ~8 seconds, plays once)
        melody: 'C5:0.25 D5:0.25 E5:0.25 F5:0.25 G5:0.5 R:0.5 G5:0.5 R:0.5 ' +
                'C6:1 B5:0.5 A5:0.5 G5:1 E5:1 ' +
                'F5:0.5 G5:0.5 A5:0.5 B5:0.5 C6:4',
        bass: 'C3:2 G3:2 C4:4 C3:4 C4:4',
        harmony: 'E5:2 G5:2 C6:4 E6:2 C6:6',
      },
      
      boss: {
        // Intense, driving boss theme (~56 beats, ~28 seconds)
        melody: 'D4:0.5 D4:0.5 D#4:0.5 E4:0.5 F4:0.5 F#4:0.5 G4:1 R:0.5 ' +
                'A4:0.5 A4:0.5 Bb4:0.5 A4:0.5 G4:0.5 F#4:0.5 F4:1 R:0.5 ' +
                'D4:0.5 E4:0.5 F#4:0.5 G4:0.5 A4:2 R:1 ' +
                'G4:0.5 F#4:0.5 F4:0.5 E4:0.5 D4:2 R:1 ' +
                'F4:0.5 G4:0.5 A4:0.5 Bb4:0.5 C5:1 Bb4:0.5 A4:0.5 ' +
                'G4:0.5 F4:0.5 E4:0.5 D4:0.5 D4:2 R:2 ' +
                'A4:1 G4:1 F#4:1 E4:1 D4:4',
        bass: 'D3:1 D3:1 A3:1 A3:1 ' +
              'D3:1 D3:1 G3:1 G3:1 ' +
              'F3:1 F3:1 D3:1 D3:1 ' +
              'A3:2 D3:2 D3:8',
        harmony: 'F4:2 A4:2 D5:2 C5:2 ' +
                 'Bb4:2 A4:2 G4:2 F4:2 ' +
                 'A4:4 D5:4 D4:8',
      },
      
      defeat: {
        // Somber, descending theme (~20 beats, ~10 seconds)
        melody: 'C5:1 B4:1 Bb4:1 A4:1 ' +
                'Ab4:1 G4:1 F#4:1 F4:1 ' +
                'E4:2 Eb4:1 D4:1 C4:4',
        bass: 'C3:4 Ab3:4 F3:4 C3:8',
        harmony: 'E4:4 D4:4 C4:4 G3:8',
      },
    };
  }

  /**
   * Stop currently playing music
   */
  stop() {
    console.log('Stopping music:', this.currentTrack);
    this.isPlaying = false;
    
    // Clear the loop timeout
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    
    // Close and recreate AudioContext for clean slate
    if (this.context) {
      try {
        this.context.close();
        this.context = null;
        this.initialized = false;
      } catch (e) {
        console.error('Error closing AudioContext:', e);
      }
    }
    
    this.currentTrack = null;
  }
  
  /**
   * Set music volume - REAL-TIME!
   * @param {number} volume - Volume level (0-1)
   */
  setMusicVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    
    // Update music gain node for INSTANT volume change
    if (this.musicGain && this.context) {
      try {
        this.musicGain.gain.setValueAtTime(
          volume / 0.15, // Normalize (0.15 is base volume)
          this.context.currentTime
        );
      } catch (e) {
        console.error('Error updating music volume:', e);
      }
    }
  }
  
  /**
   * Set master volume - affects ALL audio
   * @param {number} volume - Volume level (0-1)
   */
  setMasterVolume(volume) {
    if (this.masterGain && this.context) {
      try {
        this.masterGain.gain.setValueAtTime(
          volume,
          this.context.currentTime
        );
      } catch (e) {
        console.error('Error updating master volume:', e);
      }
    }
  }
  
  /**
   * Set SFX volume - REAL-TIME!
   * @param {number} volume - Volume level (0-1)
   */
  setSFXVolume(volume) {
    if (this.sfxGain && this.context) {
      try {
        this.sfxGain.gain.setValueAtTime(
          volume,
          this.context.currentTime
        );
      } catch (e) {
        console.error('Error updating SFX volume:', e);
      }
    }
  }
  
  /**
   * Set tempo (beats per minute)
   * @param {number} bpm - Beats per minute
   */
  setTempo(bpm) {
    this.tempo = Math.max(60, Math.min(240, bpm));
  }
}