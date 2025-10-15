import { create } from 'zustand';

/**
 * Game State Store
 * Manages core game state including player, weapons, targets, and game status
 */
export const useGameStore = create((set, get) => ({
  // Game status
  gameStatus: 'splash', // 'splash', 'menu', 'playing', 'paused', 'settings', 'victory', 'defeat'
  previousGameStatus: null, // Track previous state for navigation
  currentMode: null,
  currentLevel: null,
  
  // Score tracking
  score: 0,
  kills: 0,
  shots: 0,
  startTime: null,
  fuelUsed: 0, // Track fuel consumption
  
  // Player state
  playerPosition: { x: 0, y: 0, z: 21 },
  fuel: 100, // Current fuel level
  maxFuel: 100,
  
  // Weapon configuration
  currentWeapon: 'standard',
  weaponConfig: {
    velocity: 50,
    angle: 45,
    heading: 0,
  },
  
  // Entities (refs to Three.js objects managed elsewhere)
  targets: [],
  projectiles: [],
  particles: [],
  
  // Actions - Game Status
  setGameStatus: (status) => set((state) => ({
    previousGameStatus: state.gameStatus,
    gameStatus: status
  })),
  
  goToPreviousStatus: () => set((state) => ({
    gameStatus: state.previousGameStatus || 'menu',
    previousGameStatus: null,
  })),
  
  setCurrentMode: (mode) => set({ currentMode: mode }),
  
  setCurrentLevel: (level) => set({ currentLevel: level }),
  
  // Actions - Scoring
  incrementKills: () => set((state) => ({
    kills: state.kills + 1,
    score: state.score + 100, // Could use SCORE_PER_KILL constant
  })),
  
  incrementShots: () => set((state) => ({
    shots: state.shots + 1,
  })),
  
  updateScore: (score) => set({ score }),
  
  addFuelUsed: (amount) => set((state) => ({
    fuelUsed: state.fuelUsed + amount,
  })),
  
  // Actions - Fuel Management
  consumeFuel: (amount) => set((state) => {
    const newFuel = Math.max(0, state.fuel - amount);
    return {
      fuel: newFuel,
      fuelUsed: state.fuelUsed + amount,
    };
  }),
  
  addFuel: (amount) => set((state) => ({
    fuel: Math.min(state.maxFuel, state.fuel + amount),
  })),
  
  setFuel: (amount) => set({ fuel: Math.max(0, Math.min(get().maxFuel, amount)) }),
  
  // Actions - Player
  setPlayerPosition: (position) => set({ playerPosition: position }),
  
  // Actions - Weapon
  setWeapon: (weaponId) => set({ currentWeapon: weaponId }),
  
  updateWeaponConfig: (config) => set((state) => ({
    weaponConfig: { ...state.weaponConfig, ...config },
  })),
  
  setVelocity: (velocity) => set((state) => ({
    weaponConfig: { ...state.weaponConfig, velocity },
  })),
  
  setAngle: (angle) => set((state) => ({
    weaponConfig: { ...state.weaponConfig, angle },
  })),
  
  setHeading: (heading) => set((state) => ({
    weaponConfig: { ...state.weaponConfig, heading },
  })),
  
  // Actions - Entities
  setTargets: (targets) => set({ targets }),
  
  addTarget: (target) => set((state) => ({
    targets: [...state.targets, target],
  })),
  
  removeTarget: (targetId) => set((state) => ({
    targets: state.targets.filter(t => t.id !== targetId),
  })),
  
  // Actions - Game Control
  startGame: () => set({
    gameStatus: 'playing',
    startTime: Date.now(),
    score: 0,
    kills: 0,
    shots: 0,
    fuelUsed: 0,
    fuel: 100,
  }),
  
  resetGame: () => set({
    score: 0,
    kills: 0,
    shots: 0,
    fuelUsed: 0,
    fuel: 100,
    startTime: null,
    targets: [],
    projectiles: [],
    particles: [],
    weaponConfig: {
      velocity: 50,
      angle: 45,
      heading: 0,
    },
  }),
  
  victoryAchieved: () => set({
    gameStatus: 'victory',
  }),
  
  defeatSuffered: () => set({
    gameStatus: 'defeat',
  }),
  
  // Computed values (using get() to access current state)
  getElapsedTime: () => {
    const { startTime } = get();
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000);
  },
  
  getCurrentScore: () => {
    const { kills, shots, fuelUsed } = get();
    const elapsedTime = get().getElapsedTime();
    return kills * 100 - shots * 30 - Math.floor(fuelUsed * 0.5) - elapsedTime;
  },
  
  getAccuracy: () => {
    const { kills, shots } = get();
    return shots > 0 ? (kills / shots) * 100 : 0;
  },
  
  getFuelPercentage: () => {
    const { fuel, maxFuel } = get();
    return (fuel / maxFuel) * 100;
  },
  
  isFuelCritical: () => {
    return get().getFuelPercentage() < 20;
  },
  
  canMove: () => {
    return get().fuel > 0;
  },
  
  canShoot: () => {
    return get().fuel >= 5; // Requires 5 fuel to shoot
  },
}));