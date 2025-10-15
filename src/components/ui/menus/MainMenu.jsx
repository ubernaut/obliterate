import { useEffect } from 'react';
import { useGameStore } from '../../../state/stores/gameStore';
import { useAudio } from '../../../hooks/useAudio';
import Button from '../common/Button';
import './MainMenu.css';

/**
 * Main Menu Component
 * Entry point for the game
 */
export default function MainMenu() {
  const setGameStatus = useGameStore((state) => state.setGameStatus);
  const audio = useAudio();

  // Ensure menu music is playing when this component loads
  useEffect(() => {
    audio.stopMusic();
    audio.playMusic('menu');
  }, [audio]);

  const handlePlay = () => {
    setGameStatus('playing');
    // Music will be handled by App.jsx when status changes
  };

  const handleSettings = () => {
    setGameStatus('settings');
    // Music will be handled by SettingsMenu
  };

  const handleCredits = () => {
    setGameStatus('credits');
  };

  return (
    <div className="main-menu">
      <div className="menu-content">
        <h1 className="menu-title">OBLITERATE</h1>
        <p className="menu-subtitle">3D Scorched Earth</p>
        
        <div className="menu-buttons">
          <Button onClick={handlePlay} size="large" fullWidth>
            Play Game
          </Button>
          <Button onClick={handleSettings} variant="tertiary" size="large" fullWidth>
            Settings
          </Button>
          <Button onClick={handleCredits} variant="tertiary" size="medium" fullWidth>
            Credits
          </Button>
        </div>
        
        <div className="menu-version">
          v0.1.0 - Alpha
        </div>
      </div>
    </div>
  );
}