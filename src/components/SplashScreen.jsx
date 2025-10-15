import { useState } from 'react';
import { audioManager } from '../audio/AudioManager';
import './SplashScreen.css';

/**
 * Splash Screen - Initializes audio on user interaction
 * Required by browser autoplay policies
 */
export default function SplashScreen({ onStart }) {
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    
    // Initialize audio system
    await audioManager.init();
    
    // Small delay to ensure everything is ready
    setTimeout(() => {
      onStart();
    }, 100);
  };

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="game-title">OBLITERATE</h1>
        <p className="game-subtitle">3D Scorched Earth</p>
        
        <button
          className="start-button"
          onClick={handleStart}
          disabled={loading}
        >
          {loading ? 'INITIALIZING...' : 'CLICK TO START'}
        </button>
        
        <div className="splash-info">
          <p>🎮 Controls: WASD, Q/E, R/F, T/G, Space</p>
          <p>🔊 Audio: Enabled</p>
          <p>⛽ Fuel: Strategic resource management</p>
        </div>
      </div>
    </div>
  );
}