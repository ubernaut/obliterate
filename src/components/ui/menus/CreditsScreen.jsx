import { useGameStore } from '../../../state/stores/gameStore';
import Button from '../common/Button';
import Modal from '../common/Modal';
import './CreditsScreen.css';

/**
 * Credits Screen Component
 * Shows game credits and development team
 */
export default function CreditsScreen() {
  const setGameStatus = useGameStore((state) => state.setGameStatus);

  const handleBack = () => {
    setGameStatus('menu');
  };

  return (
    <Modal>
      <div className="credits-screen">
        <h1 className="credits-title">CREDITS</h1>
        
        <div className="credits-content">
          <section className="credits-section">
            <h2>Developed by</h2>
            <p className="credits-company">TSOTCHKE CORPORATION</p>
            <p className="credits-team">The Obliterate Team</p>
          </section>

          <section className="credits-section">
            <h3>Platform</h3>
            <p>Open Game Protocol Integration</p>
          </section>

          <section className="credits-section credits-copyright">
            <p>© 2025 Tsotchke Corporation</p>
            <p>All Rights Reserved</p>
            <p className="credits-email">dev@tsotchke.net</p>
          </section>
        </div>

        <Button onClick={handleBack} variant="primary" size="large" fullWidth>
          Back to Main Menu
        </Button>
      </div>
    </Modal>
  );
}