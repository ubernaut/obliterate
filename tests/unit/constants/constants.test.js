import { describe, it, expect } from 'vitest';
import * as physics from '../../../src/constants/physics';
import * as gameplay from '../../../src/constants/gameplay';
import * as colors from '../../../src/constants/colors';
import * as keys from '../../../src/constants/keys';

describe('Physics Constants', () => {
  it('should export planet constants', () => {
    expect(physics.PLANET_RADIUS).toBe(20);
    expect(physics.PLANET_SUBDIVISIONS).toBe(9);
    expect(physics.GRAVITY_STRENGTH).toBe(0.02);
  });
  
  it('should export player constants', () => {
    expect(physics.PLAYER_RADIUS).toBe(1);
    expect(physics.PLAYER_MOVEMENT_SPEED).toBe(0.05);
  });
  
  it('should export collision constants', () => {
    expect(physics.COLLISION_DISTANCE_TARGET).toBe(3);
    expect(physics.COLLISION_DISTANCE_PLANET).toBe(20.5);
  });
});

describe('Gameplay Constants', () => {
  it('should export scoring constants', () => {
    expect(gameplay.SCORE_PER_KILL).toBe(100);
    expect(gameplay.SCORE_PER_SHOT).toBe(-30);
    expect(gameplay.SCORE_PER_SECOND).toBe(-1);
    expect(gameplay.SCORE_PER_FUEL_UNIT).toBe(-0.5);
  });
  
  it('should export fuel constants', () => {
    expect(gameplay.FUEL_MAX).toBe(100);
    expect(gameplay.FUEL_START).toBe(100);
    expect(gameplay.FUEL_PER_MOVE).toBe(0.1);
    expect(gameplay.FUEL_PER_SHOT).toBe(5);
  });
  
  it('should export default weapon values', () => {
    expect(gameplay.DEFAULT_VELOCITY).toBe(50);
    expect(gameplay.DEFAULT_ANGLE).toBe(45);
    expect(gameplay.DEFAULT_HEADING).toBe(0);
  });
  
  it('should export planet modifiers', () => {
    expect(gameplay.PLANET_MODIFIERS.MARS.gravityMultiplier).toBe(0.38);
    expect(gameplay.PLANET_MODIFIERS.MOON.name).toBe('Moon');
  });
  
  it('should export difficulty presets', () => {
    expect(gameplay.DIFFICULTY_PRESETS.EASY.targetCount).toBe(4);
    expect(gameplay.DIFFICULTY_PRESETS.HARD.enemiesShootBack).toBe(true);
  });
});

describe('Color Constants', () => {
  it('should export base colors', () => {
    expect(colors.COLORS.PLAYER).toBe(0x00ff00);
    expect(colors.COLORS.BACKGROUND).toBe(0xffffff);
  });
  
  it('should export planet themes', () => {
    expect(colors.PLANET_THEMES.MARS.name).toBe('Mars');
    expect(colors.PLANET_THEMES.ICE.planet).toBe(0xB0E0E6);
  });
  
  it('should get planet theme by ID', () => {
    const theme = colors.getPlanetTheme('mars');
    expect(theme.name).toBe('Mars');
  });
  
  it('should return default theme for invalid ID', () => {
    const theme = colors.getPlanetTheme('invalid');
    expect(theme.id).toBe('default');
  });
  
  it('should generate random planet theme', () => {
    const theme = colors.getRandomPlanetTheme();
    expect(theme).toHaveProperty('name');
    expect(theme).toHaveProperty('planet');
  });
  
  it('should create variant themes', () => {
    const base = colors.PLANET_THEMES.MARS;
    const variant = colors.createVariantTheme(base, 0.2);
    expect(variant.id).toBe('mars-variant');
    expect(variant.name).toBe('Mars Variant');
  });
});

describe('Key Bindings', () => {
  it('should export movement keys', () => {
    expect(keys.KEY_BINDINGS.MOVE_UP).toBe('w');
    expect(keys.KEY_BINDINGS.MOVE_DOWN).toBe('s');
  });
  
  it('should export action keys', () => {
    expect(keys.KEY_BINDINGS.FIRE).toBe(' ');
  });
  
  it('should export barrel control keys', () => {
    expect(keys.KEY_BINDINGS.HEADING_LEFT).toBe('q');
    expect(keys.KEY_BINDINGS.HEADING_RIGHT).toBe('e');
    expect(keys.KEY_BINDINGS.ANGLE_UP).toBe('r');
    expect(keys.KEY_BINDINGS.ANGLE_DOWN).toBe('f');
  });
  
  it('should export weapon property keys', () => {
    expect(keys.KEY_BINDINGS.VELOCITY_UP).toBe('t');
    expect(keys.KEY_BINDINGS.VELOCITY_DOWN).toBe('g');
  });
  
  it('should export adjustment amounts', () => {
    expect(keys.ADJUSTMENT_AMOUNTS.HEADING_NORMAL).toBe(5);
    expect(keys.ADJUSTMENT_AMOUNTS.HEADING_FINE).toBe(1);
    expect(keys.ADJUSTMENT_AMOUNTS.VELOCITY_COARSE).toBe(10);
  });
  
  it('should export key arrays', () => {
    expect(keys.MOVEMENT_KEYS).toHaveLength(4);
    expect(keys.BARREL_CONTROL_KEYS).toHaveLength(4);
    expect(keys.WEAPON_PROPERTY_KEYS).toHaveLength(2);
  });
});