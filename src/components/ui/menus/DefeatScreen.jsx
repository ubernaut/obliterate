import { useGameStore } from '../../../state/stores/gameStore';
import { useAudio } from '../../../hooks/useAudio';
import Button from '../common/Button';
import Modal from '../common/Modal';
import './DefeatScreen.css';

/**
 * Defeat Screen Component
 * Shown when player loses (suicide or out of fuel)
 */
export default function DefeatScreen({ reason }) {
  const setGameStatus = useGameStore((state) => state.setGameStatus);
  const resetGame = useGameStore((state) => state.resetGame);
  const startGame = useGameStore((state) => state.startGame);
  const kills = useGameStore((state) => state.kills);
  const shots = useGameStore((state) => state.shots);
  const fuelUsed = useGameStore((state) => state.fuelUsed);
  const getElapsedTime = useGameStore((state) => state.getElapsedTime);
  const getCurrentScore = useGameStore((state) => state.getCurrentScore);
  const getAccuracy = useGameStore((state) => state.getAccuracy);
  const audio = useAudio();

  const handleTryAgain = () => {
    resetGame();
    startGame();
    setGameStatus('playing');
    audio.stopMusic();
    audio.playMusic('game');
  };

  const handleMainMenu = () => {
    resetGame();
    setGameStatus('menu');
    audio.stopMusic();
    audio.playMusic('menu');
  };

  const getReasonText = () => {
    if (reason === 'suicide') return 'Hit by Own Projectile!';
    if (reason === 'outOfFuel') return 'Out of Fuel!';
    return 'Game Over!';
  };

  return (
    <Modal>
      <div className="defeat-screen">
        <h1 className="defeat-title">DEFEAT</h1>
        <p className="defeat-reason">{getReasonText()}</p>
        
        <div className="defeat-stats">
          <p>Kills: {kills}</p>
          <p>Shots: {shots}</p>
          <p>Fuel Used: {Math.floor(fuelUsed)}</p>
          <p>Time: {getElapsedTime()}s</p>
          <p className="defeat-score">Score: {Math.floor(getCurrentScore())}</p>
          <p className="defeat-accuracy">Accuracy: {getAccuracy().toFixed(1)}%</p>
        </div>
        
        <div className="defeat-buttons">
          <Button onClick={handleTryAgain} size="large" fullWidth>
            Try Again
          </Button>
          <Button onClick={handleMainMenu} variant="secondary" fullWidth>
            Main Menu
          </Button>
        </div>
      </div>
    </Modal>
  );
}