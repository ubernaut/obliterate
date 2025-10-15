/**
 * Gameplay balance constants
 * These are defaults that can be overridden per planet/level
 */

// Scoring
export const SCORE_PER_KILL = 100;
export const SCORE_PER_SHOT = -30;
export const SCORE_PER_SECOND = -1;
export const SCORE_PER_FUEL_UNIT = -0.5; // Penalty for fuel consumption

// Fuel system
export const FUEL_MAX = 100; // Maximum fuel capacity
export const FUEL_START = 100; // Starting fuel amount
export const FUEL_PER_MOVE = 0.1; // Fuel consumed per movement unit
export const FUEL_PER_SHOT = 5; // Fuel consumed per shot
export const FUEL_PICKUP_AMOUNT = 25; // Fuel gained from pickup
export const FUEL_CRITICAL_THRESHOLD = 20; // Low fuel warning threshold

// Default weapon values
export const DEFAULT_VELOCITY = 50;
export const DEFAULT_ANGLE = 45;
export const DEFAULT_HEADING = 0;

// Weapon ranges
export const VELOCITY_MIN = 10;
export const VELOCITY_MAX = 100;
export const ANGLE_MIN = 0;
export const ANGLE_MAX = 90;
export const HEADING_MIN = 0;
export const HEADING_MAX = 359;

// Keyboard controls
export const HEADING_ADJUSTMENT = 5; // Degrees per Q/E press

// Camera (can be adjusted per planet for different scales)
export const CAMERA_DISTANCE = 50;
export const CAMERA_FOV = 75;
export const CAMERA_NEAR = 0.1;
export const CAMERA_FAR = 1000;
export const CAMERA_FOLLOW_SPEED = 0.1; // Lerp factor

// Lighting
export const AMBIENT_LIGHT_INTENSITY = 1;
export const DIRECTIONAL_LIGHT_INTENSITY = 10;
export const LIGHT_ORBIT_RADIUS = 25;
export const LIGHT_ORBIT_SPEED = 0.1;
export const LIGHT_HEIGHT_VARIATION = 0.05;
export const LIGHT_HEIGHT_AMPLITUDE = 3;

// Particles
export const EXPLOSION_PARTICLE_COUNT = 30;
export const PARTICLE_RADIUS = 0.4;
export const PARTICLE_VELOCITY_MIN = 1;
export const PARTICLE_VELOCITY_MAX = 4;
export const PARTICLE_LIFE_DECAY = 0.02;
export const PARTICLE_VELOCITY_DECAY = 0.95;

// Stars (background)
export const STAR_COUNT = 200;
export const STAR_RADIUS = 0.3;
export const STAR_COLOR = 0x444444;
export const STAR_DISTANCE_MIN = 100;
export const STAR_DISTANCE_MAX = 150;

// Post-processing
export const PIXELATION_SIZE = 2;
export const EDGE_STRENGTH_NORMAL = 2;
export const EDGE_STRENGTH_DEPTH = 1;

/**
 * Planet-specific modifier presets
 * These can override default values for different planet types
 */
export const PLANET_MODIFIERS = {
  DEFAULT: {
    gravityMultiplier: 1.0,
    movementSpeedMultiplier: 1.0,
    name: 'Default Planet',
  },
  MARS: {
    gravityMultiplier: 0.38, // Mars has ~38% of Earth's gravity
    movementSpeedMultiplier: 1.5,
    name: 'Mars',
  },
  MOON: {
    gravityMultiplier: 0.17, // Moon has ~17% of Earth's gravity
    movementSpeedMultiplier: 2.0,
    name: 'Moon',
  },
  JUPITER: {
    gravityMultiplier: 2.5, // Jupiter has ~2.5x Earth's gravity
    movementSpeedMultiplier: 0.6,
    name: 'Jupiter Moon',
  },
  ICE: {
    gravityMultiplier: 0.8,
    movementSpeedMultiplier: 0.7, // Slippery!
    name: 'Ice World',
  },
  VOLCANIC: {
    gravityMultiplier: 1.2,
    movementSpeedMultiplier: 0.9,
    name: 'Volcanic Planet',
  },
};

/**
 * Difficulty presets that can be applied to levels
 */
export const DIFFICULTY_PRESETS = {
  EASY: {
    targetCount: 4,
    targetSpeed: 0,
    enemiesShootBack: false,
    timeLimit: null,
    name: 'Easy',
  },
  NORMAL: {
    targetCount: 6,
    targetSpeed: 0.01,
    enemiesShootBack: false,
    timeLimit: null,
    name: 'Normal',
  },
  HARD: {
    targetCount: 8,
    targetSpeed: 0.02,
    enemiesShootBack: true,
    timeLimit: 300, // 5 minutes
    name: 'Hard',
  },
  EXTREME: {
    targetCount: 12,
    targetSpeed: 0.03,
    enemiesShootBack: true,
    timeLimit: 180, // 3 minutes
    name: 'Extreme',
  },
};