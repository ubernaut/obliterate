/**
 * Keyboard mapping constants
 */

export const KEY_BINDINGS = {
  // Movement
  MOVE_UP: 'w',
  MOVE_DOWN: 's',
  MOVE_LEFT: 'a',
  MOVE_RIGHT: 'd',
  
  // Actions
  FIRE: ' ', // Spacebar
  
  // Barrel/Turret Heading (horizontal rotation)
  HEADING_LEFT: 'q',
  HEADING_RIGHT: 'e',
  
  // Barrel Angle (vertical/elevation)
  ANGLE_UP: 'r',      // Increase angle (aim higher)
  ANGLE_DOWN: 'f',    // Decrease angle (aim lower)
  
  // Weapon Properties
  VELOCITY_UP: 't',    // Increase projectile velocity
  VELOCITY_DOWN: 'g',  // Decrease projectile velocity
  
  // Quick adjustments (hold shift for fine control)
  FINE_ADJUST: 'Shift',
  COARSE_ADJUST: 'Control',
  
  // Menu/UI
  PAUSE: 'Escape',
  
  // Camera
  CAMERA_ZOOM_IN: '=',
  CAMERA_ZOOM_OUT: '-',
  RESET_CAMERA: 'c',
  
  // Weapon selection
  WEAPON_1: '1',
  WEAPON_2: '2',
  WEAPON_3: '3',
  WEAPON_4: '4',
  NEXT_WEAPON: ']',
  PREV_WEAPON: '[',
  
  // Debug
  TOGGLE_DEBUG: 'F3',
  TOGGLE_HUD: 'h',
};

export const MOVEMENT_KEYS = [
  KEY_BINDINGS.MOVE_UP,
  KEY_BINDINGS.MOVE_DOWN,
  KEY_BINDINGS.MOVE_LEFT,
  KEY_BINDINGS.MOVE_RIGHT,
];

export const ACTION_KEYS = [
  KEY_BINDINGS.FIRE,
];

export const BARREL_CONTROL_KEYS = [
  KEY_BINDINGS.HEADING_LEFT,
  KEY_BINDINGS.HEADING_RIGHT,
  KEY_BINDINGS.ANGLE_UP,
  KEY_BINDINGS.ANGLE_DOWN,
];

export const WEAPON_PROPERTY_KEYS = [
  KEY_BINDINGS.VELOCITY_UP,
  KEY_BINDINGS.VELOCITY_DOWN,
];

export const WEAPON_SELECTION_KEYS = [
  KEY_BINDINGS.WEAPON_1,
  KEY_BINDINGS.WEAPON_2,
  KEY_BINDINGS.WEAPON_3,
  KEY_BINDINGS.WEAPON_4,
  KEY_BINDINGS.NEXT_WEAPON,
  KEY_BINDINGS.PREV_WEAPON,
];

/**
 * Adjustment amounts for different modifier keys
 */
export const ADJUSTMENT_AMOUNTS = {
  // Heading adjustments (degrees)
  HEADING_NORMAL: 5,
  HEADING_FINE: 1,      // With Shift
  HEADING_COARSE: 15,   // With Control
  
  // Angle adjustments (degrees)
  ANGLE_NORMAL: 5,
  ANGLE_FINE: 1,        // With Shift
  ANGLE_COARSE: 15,     // With Control
  
  // Velocity adjustments
  VELOCITY_NORMAL: 5,
  VELOCITY_FINE: 1,     // With Shift
  VELOCITY_COARSE: 10,  // With Control
};

/**
 * Alternative key binding presets
 * Allows players to choose different control schemes
 */
export const KEY_PRESETS = {
  DEFAULT: {
    name: 'Default (WASD)',
    bindings: KEY_BINDINGS,
  },
  
  ARROWS: {
    name: 'Arrow Keys',
    bindings: {
      ...KEY_BINDINGS,
      MOVE_UP: 'ArrowUp',
      MOVE_DOWN: 'ArrowDown',
      MOVE_LEFT: 'ArrowLeft',
      MOVE_RIGHT: 'ArrowRight',
    },
  },
  
  ESDF: {
    name: 'ESDF',
    bindings: {
      ...KEY_BINDINGS,
      MOVE_UP: 'e',
      MOVE_DOWN: 'd',
      MOVE_LEFT: 's',
      MOVE_RIGHT: 'f',
      HEADING_LEFT: 'w',
      HEADING_RIGHT: 'r',
    },
  },
};