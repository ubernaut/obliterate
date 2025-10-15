import { useEffect } from 'react';
import { audioManager } from '../audio/AudioManager';
import { useSettingsStore } from '../state/stores/settingsStore';

/**
 * Custom hook for audio management
 * Automatically syncs audio manager with settings store
 */
export function useAudio() {
  const masterVolume = useSettingsStore((state) => state.masterVolume);
  const musicVolume = useSettingsStore((state) => state.musicVolume);
  const sfxVolume = useSettingsStore((state) => state.sfxVolume);
  const muted = useSettingsStore((state) => state.muted);
  
  // Sync volume changes to audio manager
  useEffect(() => {
    audioManager.updateVolume(masterVolume);
  }, [masterVolume]);
  
  // Sync music volume
  useEffect(() => {
    audioManager.setMusicVolume(musicVolume);
  }, [musicVolume]);
  
  // Sync SFX volume
  useEffect(() => {
    audioManager.updateSFXVolume(sfxVolume);
  }, [sfxVolume]);
  
  // Sync mute state
  useEffect(() => {
    audioManager.mute(muted);
  }, [muted]);
  
  // Initialize audio on mount with current settings
  useEffect(() => {
    audioManager.init({
      masterVolume,
      musicVolume,
      sfxVolume,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return audioManager;
}