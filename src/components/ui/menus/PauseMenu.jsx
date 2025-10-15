import { useEffect } from 'react';
import { useGameStore } from '../../../state/stores/gameStore';
import { useAudio } from '../../../hooks/useAudio';
import Button from '../common/Button';
import Modal from '../common/Modal';
import './PauseMenu.css';

/**
 * Pause Menu Component
 * Shown when game is paused during play
 */
export default function PauseMenu() {
  const setGameStatus = useGameStore((state) => state.setGameStatus);
  const resetGame = useGameStore((state) => state.resetGame);
  const audio = useAudio();

  // Stop music when pause menu opens
  useEffect(() => {
    audio.stopMusic();
  }, [audio]);

  const handleResume = () => {
    setGameStatus('playing');
    // Music will restart via App.jsx when status changes to playing
  };

  const handleSettings = () => {
    setGameStatus('settings');
  };

  const handleMainMenu = () => {
    resetGame();
    setGameStatus('menu');
    // Menu music will be handled by MainMenu component
  };

  return (
    <Modal>
      <div className="pause-menu">
        <h2 className="pause-title">PAUSED</h2>
        
        <div className="pause-buttons">
          <Button onClick={handleResume} size="large" fullWidth>
            Resume Game
          </Button>
          <Button onClick={handleSettings} variant="tertiary" fullWidth>
            Settings
          </Button>
          <Button onClick={handleMainMenu} variant="secondary" fullWidth>
            Main Menu
          </Button>
        </div>
        
        <div className="pause-hint">
          Press ESC to resume
        </div>
      </div>
    </Modal>
  );
}