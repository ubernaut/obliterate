/**
 * Scoring calculation utilities
 */

import {
  SCORE_PER_KILL,
  SCORE_PER_SHOT,
  SCORE_PER_SECOND,
  SCORE_PER_FUEL_UNIT,
  FUEL_MAX,
} from '../constants/gameplay';

/**
 * Calculate final score based on kills, shots, time, and fuel
 * @param {number} kills - Number of targets destroyed
 * @param {number} shots - Number of shots fired
 * @param {number} timeSeconds - Time elapsed in seconds
 * @param {number} fuelUsed - Amount of fuel consumed
 * @param {object} modifiers - Optional score modifiers
 * @returns {object} Score breakdown
 */
export function calculateScore(kills, shots, timeSeconds, fuelUsed = 0, modifiers = {}) {
  const killMultiplier = modifiers.killMultiplier || 1;
  const shotPenaltyMultiplier = modifiers.shotPenaltyMultiplier || 1;
  const timePenaltyMultiplier = modifiers.timePenaltyMultiplier || 1;
  const fuelPenaltyMultiplier = modifiers.fuelPenaltyMultiplier || 1;
  
  const killScore = kills * SCORE_PER_KILL * killMultiplier;
  const shotPenalty = shots * SCORE_PER_SHOT * shotPenaltyMultiplier;
  const timePenalty = Math.floor(timeSeconds) * SCORE_PER_SECOND * timePenaltyMultiplier;
  const fuelPenalty = Math.floor(fuelUsed) * SCORE_PER_FUEL_UNIT * fuelPenaltyMultiplier;
  
  const total = killScore + shotPenalty + timePenalty + fuelPenalty;
  
  return {
    kills: killScore,
    shots: shotPenalty,
    time: timePenalty,
    fuel: fuelPenalty,
    total: Math.max(0, total), // Don't allow negative scores
    accuracy: shots > 0 ? (kills / shots) * 100 : 0,
    efficiency: fuelUsed > 0 ? (kills / fuelUsed) * 100 : 0, // Kills per fuel unit
  };
}

/**
 * Calculate fuel efficiency score
 * @param {number} fuelUsed - Total fuel consumed
 * @param {number} kills - Number of kills
 * @returns {number} Efficiency rating (0-100)
 */
export function calculateFuelEfficiency(fuelUsed, kills) {
  if (fuelUsed === 0) return 100;
  
  // Ideal ratio: 1 kill per 10 fuel units
  const idealRatio = 10;
  const actualRatio = fuelUsed / Math.max(1, kills);
  const efficiency = Math.max(0, 100 - (actualRatio / idealRatio) * 100);
  
  return Math.min(100, efficiency);
}

/**
 * Calculate accuracy percentage
 * @param {number} kills - Number of successful hits
 * @param {number} shots - Total shots fired
 * @returns {number} Accuracy percentage (0-100)
 */
export function calculateAccuracy(kills, shots) {
  if (shots === 0) return 0;
  return Math.min(100, (kills / shots) * 100);
}

/**
 * Calculate rank/grade based on score and accuracy
 * @param {number} score - Final score
 * @param {number} accuracy - Accuracy percentage
 * @returns {string} Rank (S, A, B, C, D, F)
 */
export function calculateRank(score, accuracy) {
  // S rank: >90% accuracy and high score
  if (accuracy >= 90 && score >= 500) return 'S';
  
  // A rank: >75% accuracy or very high score
  if (accuracy >= 75 || score >= 400) return 'A';
  
  // B rank: >60% accuracy or good score
  if (accuracy >= 60 || score >= 300) return 'B';
  
  // C rank: >40% accuracy or decent score
  if (accuracy >= 40 || score >= 200) return 'C';
  
  // D rank: >20% accuracy or minimal score
  if (accuracy >= 20 || score >= 100) return 'D';
  
  // F rank: everything else
  return 'F';
}

/**
 * Get rank color for UI display
 * @param {string} rank - Rank letter
 * @returns {string} Hex color
 */
export function getRankColor(rank) {
  const colors = {
    'S': '#FFD700', // Gold
    'A': '#00FF00', // Green
    'B': '#00BFFF', // Blue
    'C': '#FFA500', // Orange
    'D': '#FF6347', // Red
    'F': '#8B0000', // Dark red
  };
  return colors[rank] || '#FFFFFF';
}

/**
 * Calculate bonus score for achievements
 * @param {object} stats - Game statistics
 * @returns {object} Bonus breakdown
 */
export function calculateBonuses(stats) {
  const bonuses = {
    perfectAccuracy: 0,
    speedBonus: 0,
    efficiencyBonus: 0,
    comboBonus: 0,
    total: 0,
  };
  
  // Perfect accuracy bonus
  if (stats.accuracy === 100) {
    bonuses.perfectAccuracy = 500;
  }
  
  // Speed bonus (under 60 seconds)
  if (stats.timeSeconds < 60) {
    bonuses.speedBonus = Math.floor((60 - stats.timeSeconds) * 10);
  }
  
  // Efficiency bonus (high kills per shot ratio)
  if (stats.accuracy >= 80) {
    bonuses.efficiencyBonus = 250;
  }
  
  // Combo bonus (all kills without missing)
  if (stats.maxCombo >= stats.kills && stats.kills > 3) {
    bonuses.comboBonus = stats.kills * 50;
  }
  
  bonuses.total = Object.values(bonuses).reduce((sum, val) => sum + val, 0) - bonuses.total;
  
  return bonuses;
}

/**
 * Format score for display with commas
 * @param {number} score - Score value
 * @returns {string} Formatted score
 */
export function formatScore(score) {
  return Math.floor(score).toLocaleString();
}

/**
 * Get score multiplier based on difficulty
 * @param {string} difficulty - Difficulty level
 * @returns {number} Score multiplier
 */
export function getDifficultyMultiplier(difficulty) {
  const multipliers = {
    'EASY': 0.5,
    'NORMAL': 1.0,
    'HARD': 1.5,
    'EXTREME': 2.0,
  };
  return multipliers[difficulty] || 1.0;
}