import { useEffect } from 'react';
import { useSettingsStore } from '../../../state/stores/settingsStore';
import { useGameStore } from '../../../state/stores/gameStore';
import { useAudio } from '../../../hooks/useAudio';
import Button from '../common/Button';
import Slider from '../common/Slider';
import './SettingsMenu.css';

/**
 * Settings Menu Component
 * Allows players to adjust game settings
 */
export default function SettingsMenu() {
  const settings = useSettingsStore();
  const goToPreviousStatus = useGameStore((state) => state.goToPreviousStatus);
  const previousGameStatus = useGameStore((state) => state.previousGameStatus);
  const audio = useAudio();

  // Play settings music when settings opens
  useEffect(() => {
    audio.stopMusic();
    audio.playMusic('settings');
  }, [audio]);

  const handleBack = () => {
    // Go back to wherever we came from (menu or paused)
    goToPreviousStatus();
    
    // If we came from pause, restart game music
    if (previousGameStatus === 'paused') {
      audio.stopMusic();
      audio.playMusic('game');
    }
  };

  return (
    <div className="settings-menu">
      <div className="settings-content">
        <h2 className="settings-title">SETTINGS</h2>
        
        <div className="settings-section">
          <h3>Audio</h3>
          <Slider
            label="Master Volume"
            value={Math.round(settings.masterVolume * 100)}
            onChange={(v) => settings.setMasterVolume(v / 100)}
            min={0}
            max={100}
            unit="%"
          />
          <Slider
            label="Music Volume"
            value={Math.round(settings.musicVolume * 100)}
            onChange={(v) => settings.setMusicVolume(v / 100)}
            min={0}
            max={100}
            unit="%"
          />
          <Slider
            label="SFX Volume"
            value={Math.round(settings.sfxVolume * 100)}
            onChange={(v) => settings.setSFXVolume(v / 100)}
            min={0}
            max={100}
            unit="%"
          />
        </div>

        <div className="settings-section">
          <h3>Graphics</h3>
          <Slider
            label="Pixel Size"
            value={settings.pixelSize}
            onChange={(v) => settings.setPixelSize(v)}
            min={1}
            max={8}
            step={1}
          />
          <Slider
            label="Particle Density"
            value={Math.round(settings.particleDensity * 100)}
            onChange={(v) => settings.setParticleDensity(v / 100)}
            min={25}
            max={100}
            unit="%"
          />
        </div>

        <div className="settings-section">
          <h3>Controls</h3>
          <Slider
            label="Mouse Sensitivity"
            value={Math.round(settings.mouseSensitivity * 100)}
            onChange={(v) => settings.setMouseSensitivity(v / 100)}
            min={25}
            max={200}
            unit="%"
          />
          <div className="toggle-row">
            <span>Invert Y-Axis</span>
            <button
              className={`toggle-button ${settings.invertY ? 'active' : ''}`}
              onClick={settings.toggleInvertY}
            >
              {settings.invertY ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        <div className="settings-actions">
          <Button onClick={settings.resetToDefaults} variant="secondary">
            Reset to Defaults
          </Button>
          <Button onClick={handleBack} variant="primary" size="large">
            Back to Menu
          </Button>
        </div>
      </div>
    </div>
  );
}