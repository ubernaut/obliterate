/**
 * Color scheme constants
 * Modular system supporting multiple planet themes
 */

// Default color scheme
export const COLORS = {
  // Scene
  BACKGROUND: 0xffffff,
  
  // Planet
  PLANET: 0x000000,
  PLANET_EDGES: 0x330000,
  
  // Entities
  PLAYER: 0x00ff00,
  TARGET: 0xff0000,
  PROJECTILE: 0xff0000,
  INDICATOR: 0xffff00,
  
  // Particles
  EXPLOSION_HIT: 0xff0000,
  EXPLOSION_MISS: 0xffffff,
  
  // Stars
  STAR: 0x444444,
  
  // Lights
  AMBIENT: 0xffffff,
  DIRECTIONAL: 0xffffff,
};

/**
 * Planet-specific color schemes
 * Each planet type has its own unique visual identity
 */
export const PLANET_THEMES = {
  DEFAULT: {
    id: 'default',
    name: 'Default',
    planet: 0x000000,
    edges: 0x330000,
    background: 0xffffff,
    ambient: 0xffffff,
    directional: 0xffffff,
    star: 0x444444,
  },
  
  MARS: {
    id: 'mars',
    name: 'Mars',
    planet: 0x8B4513, // Rusty brown
    edges: 0x654321,
    background: 0xFFF8DC, // Cornsilk (dusty atmosphere)
    ambient: 0xFFD700,
    directional: 0xFFA500,
    star: 0x333333,
  },
  
  ICE: {
    id: 'ice',
    name: 'Ice World',
    planet: 0xB0E0E6, // Powder blue
    edges: 0x4682B4, // Steel blue
    background: 0xF0F8FF, // Alice blue
    ambient: 0xADD8E6,
    directional: 0xE0FFFF,
    star: 0x555555,
  },
  
  VOLCANIC: {
    id: 'volcanic',
    name: 'Volcanic',
    planet: 0x2F4F4F, // Dark slate gray
    edges: 0xFF4500, // Orange red (lava)
    background: 0x2F2F2F, // Dark gray
    ambient: 0xFF6347,
    directional: 0xFF8C00,
    star: 0x8B0000,
  },
  
  MOON: {
    id: 'moon',
    name: 'Moon',
    planet: 0x808080, // Gray
    edges: 0x505050,
    background: 0x000000, // Black space
    ambient: 0xC0C0C0,
    directional: 0xFFFFFF,
    star: 0xFFFFFF,
  },
  
  DESERT: {
    id: 'desert',
    name: 'Desert',
    planet: 0xD2B48C, // Tan
    edges: 0xA0826D,
    background: 0xFFE4B5, // Moccasin
    ambient: 0xF4A460,
    directional: 0xFFD700,
    star: 0x666666,
  },
  
  TOXIC: {
    id: 'toxic',
    name: 'Toxic',
    planet: 0x556B2F, // Dark olive green
    edges: 0x9ACD32, // Yellow green
    background: 0x2F4F2F, // Dark sea green
    ambient: 0x7FFF00,
    directional: 0xADFF2F,
    star: 0x228B22,
  },
  
  CRYSTAL: {
    id: 'crystal',
    name: 'Crystal',
    planet: 0x9370DB, // Medium purple
    edges: 0xBA55D3, // Medium orchid
    background: 0xE6E6FA, // Lavender
    ambient: 0xDDA0DD,
    directional: 0xFFB6C1,
    star: 0xFF69B4,
  },
};

/**
 * UI color schemes for different modes/states
 */
export const UI_COLORS = {
  PRIMARY: 0x00ff00,
  SECONDARY: 0xff0000,
  WARNING: 0xffff00,
  DANGER: 0xff0000,
  SUCCESS: 0x00ff00,
  INFO: 0x00ffff,
  
  // Menu colors
  MENU_BG: 'rgba(0, 0, 0, 0.8)',
  MENU_TEXT: '#ffffff',
  MENU_HOVER: 'rgba(255, 255, 255, 0.1)',
  
  // HUD colors
  HUD_BG: 'rgba(0, 0, 0, 0.5)',
  HUD_TEXT: '#ffffff',
  HUD_BORDER: 'rgba(255, 255, 255, 0.3)',
};

/**
 * Get color scheme for a specific planet type
 * @param {string} planetType - The planet type ID
 * @returns {object} Color scheme object
 */
export function getPlanetTheme(planetType = 'default') {
  const theme = PLANET_THEMES[planetType.toUpperCase()];
  return theme || PLANET_THEMES.DEFAULT;
}

/**
 * Generate a random planet theme (for procedural generation)
 * @returns {object} Random color scheme
 */
export function getRandomPlanetTheme() {
  const themes = Object.values(PLANET_THEMES);
  return themes[Math.floor(Math.random() * themes.length)];
}

/**
 * Create a custom planet theme with variations
 * Useful for procedural generation with slight variations
 * @param {object} baseTheme - Base theme to vary
 * @param {number} variation - Variation amount (0-1)
 * @returns {object} New theme with variations
 */
export function createVariantTheme(baseTheme, variation = 0.2) {
  const vary = (color, amount) => {
    const r = (color >> 16) & 0xFF;
    const g = (color >> 8) & 0xFF;
    const b = color & 0xFF;
    
    const vr = Math.max(0, Math.min(255, r + (Math.random() - 0.5) * amount * 255));
    const vg = Math.max(0, Math.min(255, g + (Math.random() - 0.5) * amount * 255));
    const vb = Math.max(0, Math.min(255, b + (Math.random() - 0.5) * amount * 255));
    
    return (Math.floor(vr) << 16) | (Math.floor(vg) << 8) | Math.floor(vb);
  };
  
  return {
    id: `${baseTheme.id}-variant`,
    name: `${baseTheme.name} Variant`,
    planet: vary(baseTheme.planet, variation),
    edges: vary(baseTheme.edges, variation),
    background: vary(baseTheme.background, variation),
    ambient: vary(baseTheme.ambient, variation),
    directional: vary(baseTheme.directional, variation),
    star: vary(baseTheme.star, variation),
  };
}