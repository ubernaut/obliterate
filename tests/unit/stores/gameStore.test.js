import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from '../../../src/state/stores/gameStore';

describe('gameStore', () => {
  beforeEach(() => {
    // Reset store to initial state
    useGameStore.setState({
      score: 0,
      kills: 0,
      shots: 0,
      fuelUsed: 0,
      fuel: 100,
      startTime: null,
      gameStatus: 'playing',
    });
  });

  describe('Score Management', () => {
    it('should increment kills and update score', () => {
      const { incrementKills, kills, score } = useGameStore.getState();
      
      incrementKills();
      
      expect(useGameStore.getState().kills).toBe(1);
      expect(useGameStore.getState().score).toBe(100);
    });

    it('should increment shots', () => {
      const { incrementShots } = useGameStore.getState();
      
      incrementShots();
      incrementShots();
      
      expect(useGameStore.getState().shots).toBe(2);
    });

    it('should calculate accuracy correctly', () => {
      const { incrementKills, incrementShots, getAccuracy } = useGameStore.getState();
      
      incrementShots();
      incrementShots();
      incrementKills();
      
      expect(getAccuracy()).toBe(50); // 1 kill / 2 shots = 50%
    });
  });

  describe('Fuel Management', () => {
    it('should consume fuel', () => {
      const { consumeFuel } = useGameStore.getState();
      
      consumeFuel(10);
      
      expect(useGameStore.getState().fuel).toBe(90);
      expect(useGameStore.getState().fuelUsed).toBe(10);
    });

    it('should not allow fuel to go below 0', () => {
      const { consumeFuel } = useGameStore.getState();
      
      consumeFuel(150);
      
      expect(useGameStore.getState().fuel).toBe(0);
    });

    it('should add fuel correctly', () => {
      const { consumeFuel, addFuel } = useGameStore.getState();
      
      consumeFuel(50);
      addFuel(25);
      
      expect(useGameStore.getState().fuel).toBe(75);
    });

    it('should not exceed max fuel', () => {
      const { addFuel } = useGameStore.getState();
      
      addFuel(50);
      
      expect(useGameStore.getState().fuel).toBe(100); // Capped at max
    });

    it('should detect critical fuel level', () => {
      const { consumeFuel, isFuelCritical } = useGameStore.getState();
      
      expect(isFuelCritical()).toBe(false);
      
      consumeFuel(85);
      
      expect(isFuelCritical()).toBe(true);
    });

    it('should check if player can move', () => {
      const { consumeFuel, canMove } = useGameStore.getState();
      
      expect(canMove()).toBe(true);
      
      consumeFuel(100);
      
      expect(canMove()).toBe(false);
    });

    it('should check if player can shoot', () => {
      const { consumeFuel, canShoot } = useGameStore.getState();
      
      expect(canShoot()).toBe(true);
      
      consumeFuel(96); // Leave only 4 fuel
      
      expect(canShoot()).toBe(false);
    });
  });

  describe('Weapon Configuration', () => {
    it('should update velocity', () => {
      const { setVelocity } = useGameStore.getState();
      
      setVelocity(75);
      
      expect(useGameStore.getState().weaponConfig.velocity).toBe(75);
    });

    it('should update angle', () => {
      const { setAngle } = useGameStore.getState();
      
      setAngle(60);
      
      expect(useGameStore.getState().weaponConfig.angle).toBe(60);
    });

    it('should update heading', () => {
      const { setHeading } = useGameStore.getState();
      
      setHeading(180);
      
      expect(useGameStore.getState().weaponConfig.heading).toBe(180);
    });

    it('should update multiple config values at once', () => {
      const { updateWeaponConfig } = useGameStore.getState();
      
      updateWeaponConfig({ velocity: 80, angle: 70 });
      
      const config = useGameStore.getState().weaponConfig;
      expect(config.velocity).toBe(80);
      expect(config.angle).toBe(70);
      expect(config.heading).toBe(0); // Unchanged
    });
  });

  describe('Game Control', () => {
    it('should start game with proper initialization', () => {
      const { startGame } = useGameStore.getState();
      
      startGame();
      
      const state = useGameStore.getState();
      expect(state.gameStatus).toBe('playing');
      expect(state.startTime).toBeTruthy();
      expect(state.score).toBe(0);
      expect(state.fuel).toBe(100);
    });

    it('should reset game state', () => {
      const { incrementKills, incrementShots, consumeFuel, resetGame } = useGameStore.getState();
      
      // Modify state
      incrementKills();
      incrementShots();
      consumeFuel(50);
      
      resetGame();
      
      const state = useGameStore.getState();
      expect(state.kills).toBe(0);
      expect(state.shots).toBe(0);
      expect(state.score).toBe(0);
      expect(state.fuel).toBe(100);
      expect(state.fuelUsed).toBe(0);
    });

    it('should set victory status', () => {
      const { victoryAchieved } = useGameStore.getState();
      
      victoryAchieved();
      
      expect(useGameStore.getState().gameStatus).toBe('victory');
    });
  });

  describe('Computed Values', () => {
    it('should calculate elapsed time', () => {
      const { startGame, getElapsedTime } = useGameStore.getState();
      
      startGame();
      
      // Wait a bit (or mock Date.now)
      const elapsed = getElapsedTime();
      expect(elapsed).toBeGreaterThanOrEqual(0);
    });

    it('should calculate current score', () => {
      const { incrementKills, incrementShots, consumeFuel, getCurrentScore } = useGameStore.getState();
      
      incrementKills(); // +100
      incrementShots(); // -30
      consumeFuel(20); // -10
      
      const score = getCurrentScore();
      expect(score).toBeGreaterThan(50); // Roughly 100-30-10 = 60, minus time
    });

    it('should get fuel percentage', () => {
      const { consumeFuel, getFuelPercentage } = useGameStore.getState();
      
      consumeFuel(50);
      
      expect(getFuelPercentage()).toBe(50);
    });
  });
});