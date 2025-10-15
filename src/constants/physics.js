/**
 * Physics constants for the game world
 */

// Planet properties
export const PLANET_RADIUS = 20;
export const PLANET_SUBDIVISIONS = 9;
export const PLANET_COLOR = 0x000000;
export const PLANET_EDGE_COLOR = 0x330000;

// Gravity
export const GRAVITY_STRENGTH = 0.02;

// Player properties
export const PLAYER_RADIUS = 1;
export const PLAYER_HEIGHT_OFFSET = 1; // Height above surface
export const PLAYER_MOVEMENT_SPEED = 0.05;
export const PLAYER_COLOR = 0x00ff00;

// Projectile properties
export const PROJECTILE_RADIUS = 0.5;
export const PROJECTILE_COLOR = 0xff0000;
export const PROJECTILE_VELOCITY_SCALE = 0.01; // Divide velocity by 100
export const PROJECTILE_MAX_DISTANCE = 200;

// Target properties
export const TARGET_RADIUS = 1;
export const TARGET_COLOR = 0xff0000;
export const TARGET_COUNT = 6;
export const TARGET_SURFACE_OFFSET = 1;

// Indicator properties
export const INDICATOR_RADIUS = 0.2;
export const INDICATOR_HEIGHT = 3;
export const INDICATOR_SIDES = 3;
export const INDICATOR_COLOR = 0xffff00;
export const INDICATOR_OFFSET = 2;

// Collision detection
export const COLLISION_DISTANCE_TARGET = 3;
export const COLLISION_DISTANCE_PLANET = 20.5;

// Terrain deformation
export const CRATER_RADIUS = 8;
export const CRATER_DEPTH_HIT = 2.5;
export const CRATER_DEPTH_MISS = 1.5;
export const CRATER_RIM_START = 0.6; // As fraction of crater radius
export const CRATER_RIM_HEIGHT = 0.6; // As fraction of crater depth

// Surface calculation
export const SURFACE_THRESHOLD = 0.2; // Angular threshold in radians