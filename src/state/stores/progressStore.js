import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Progress Store
 * Manages player progression, unlocks, achievements, and statistics
 */
export const useProgressStore = create(
  persist(
    (set, get) => ({
      // Unlocks
      unlockedLevels: [1],
      unlockedWeapons: ['standard'],
      unlockedPlanets: ['default'],
      unlockedModes: ['campaign'],
      
      // Statistics
      totalKills: 0,
      totalShots: 0,
      totalGamesPlayed: 0,
      totalFuelUsed: 0,
      totalPlayTime: 0, // In seconds
      
      // Best scores per level (keyed by level ID)
      bestScores: {},
      
      // Best stats
      bestAccuracy: 0,
      fastestCompletion: Infinity,
      highestCombo: 0,
      
      // Achievements (array of achievement IDs)
      achievements: [],
      
      // Player XP and level
      xp: 0,
      playerLevel: 1,
      
      // Currency (for unlocks/upgrades)
      credits: 0,
      
      // Actions - Unlocks
      unlockLevel: (levelId) => set((state) => {
        if (state.unlockedLevels.includes(levelId)) return state;
        return {
          unlockedLevels: [...state.unlockedLevels, levelId].sort((a, b) => a - b),
        };
      }),
      
      unlockWeapon: (weaponId) => set((state) => {
        if (state.unlockedWeapons.includes(weaponId)) return state;
        return {
          unlockedWeapons: [...state.unlockedWeapons, weaponId],
        };
      }),
      
      unlockPlanet: (planetId) => set((state) => {
        if (state.unlockedPlanets.includes(planetId)) return state;
        return {
          unlockedPlanets: [...state.unlockedPlanets, planetId],
        };
      }),
      
      unlockMode: (modeId) => set((state) => {
        if (state.unlockedModes.includes(modeId)) return state;
        return {
          unlockedModes: [...state.unlockedModes, modeId],
        };
      }),
      
      // Actions - Statistics
      updateBestScore: (levelId, score) => set((state) => {
        const currentBest = state.bestScores[levelId] || 0;
        if (score <= currentBest) return state;
        
        return {
          bestScores: {
            ...state.bestScores,
            [levelId]: score,
          },
        };
      }),
      
      updateBestAccuracy: (accuracy) => set((state) => ({
        bestAccuracy: Math.max(state.bestAccuracy, accuracy),
      })),
      
      updateFastestCompletion: (time) => set((state) => ({
        fastestCompletion: Math.min(state.fastestCompletion, time),
      })),
      
      updateHighestCombo: (combo) => set((state) => ({
        highestCombo: Math.max(state.highestCombo, combo),
      })),
      
      incrementGamesPlayed: () => set((state) => ({
        totalGamesPlayed: state.totalGamesPlayed + 1,
      })),
      
      addStatistics: (stats) => set((state) => ({
        totalKills: state.totalKills + (stats.kills || 0),
        totalShots: state.totalShots + (stats.shots || 0),
        totalFuelUsed: state.totalFuelUsed + (stats.fuelUsed || 0),
        totalPlayTime: state.totalPlayTime + (stats.playTime || 0),
      })),
      
      // Actions - Achievements
      unlockAchievement: (achievementId) => set((state) => {
        if (state.achievements.includes(achievementId)) return state;
        return {
          achievements: [...state.achievements, achievementId],
        };
      }),
      
      // Actions - XP and Leveling
      addXP: (amount) => set((state) => {
        const newXP = state.xp + amount;
        const xpPerLevel = 1000;
        const newLevel = Math.floor(newXP / xpPerLevel) + 1;
        
        return {
          xp: newXP,
          playerLevel: newLevel,
        };
      }),
      
      // Actions - Currency
      addCredits: (amount) => set((state) => ({
        credits: state.credits + amount,
      })),
      
      spendCredits: (amount) => set((state) => {
        if (state.credits < amount) return state;
        return {
          credits: state.credits - amount,
        };
      }),
      
      // Computed values
      isLevelUnlocked: (levelId) => {
        return get().unlockedLevels.includes(levelId);
      },
      
      isWeaponUnlocked: (weaponId) => {
        return get().unlockedWeapons.includes(weaponId);
      },
      
      isPlanetUnlocked: (planetId) => {
        return get().unlockedPlanets.includes(planetId);
      },
      
      isModeUnlocked: (modeId) => {
        return get().unlockedModes.includes(modeId);
      },
      
      hasAchievement: (achievementId) => {
        return get().achievements.includes(achievementId);
      },
      
      getOverallAccuracy: () => {
        const { totalKills, totalShots } = get();
        return totalShots > 0 ? (totalKills / totalShots) * 100 : 0;
      },
      
      getXPToNextLevel: () => {
        const { xp } = get();
        const xpPerLevel = 1000;
        const currentLevelXP = xp % xpPerLevel;
        return xpPerLevel - currentLevelXP;
      },
      
      getProgressPercentage: () => {
        const { xp } = get();
        const xpPerLevel = 1000;
        return (xp % xpPerLevel) / xpPerLevel * 100;
      },
      
      // Reset progress (for testing or new game+)
      resetProgress: () => set({
        unlockedLevels: [1],
        unlockedWeapons: ['standard'],
        unlockedPlanets: ['default'],
        unlockedModes: ['campaign'],
        totalKills: 0,
        totalShots: 0,
        totalGamesPlayed: 0,
        totalFuelUsed: 0,
        totalPlayTime: 0,
        bestScores: {},
        bestAccuracy: 0,
        fastestCompletion: Infinity,
        highestCombo: 0,
        achievements: [],
        xp: 0,
        playerLevel: 1,
        credits: 0,
      }),
    }),
    {
      name: 'obliterate-progress', // localStorage key
      version: 1, // For migration if needed
    }
  )
);