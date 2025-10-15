import { describe, it, expect } from 'vitest';
import {
  clamp,
  lerp,
  degToRad,
  radToDeg,
  normalizeAngle,
  distance3D,
  random,
  randomInt,
  easeInOutCubic,
  map,
  sphericalToCartesian,
  cartesianToSpherical,
  angleBetweenVectors,
} from '../../../src/utils/math';

describe('Math Utilities', () => {
  describe('clamp', () => {
    it('should clamp values within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });
  
  describe('lerp', () => {
    it('should interpolate between values', () => {
      expect(lerp(0, 10, 0)).toBe(0);
      expect(lerp(0, 10, 1)).toBe(10);
      expect(lerp(0, 10, 0.5)).toBe(5);
    });
    
    it('should clamp t to 0-1', () => {
      expect(lerp(0, 10, -1)).toBe(0);
      expect(lerp(0, 10, 2)).toBe(10);
    });
  });
  
  describe('angle conversion', () => {
    it('should convert degrees to radians', () => {
      expect(degToRad(0)).toBe(0);
      expect(degToRad(180)).toBeCloseTo(Math.PI);
      expect(degToRad(90)).toBeCloseTo(Math.PI / 2);
    });
    
    it('should convert radians to degrees', () => {
      expect(radToDeg(0)).toBe(0);
      expect(radToDeg(Math.PI)).toBeCloseTo(180);
      expect(radToDeg(Math.PI / 2)).toBeCloseTo(90);
    });
    
    it('should normalize angles', () => {
      expect(normalizeAngle(45)).toBe(45);
      expect(normalizeAngle(360)).toBe(0);
      expect(normalizeAngle(405)).toBe(45);
      expect(normalizeAngle(-45)).toBe(315);
    });
  });
  
  describe('distance3D', () => {
    it('should calculate 3D distance', () => {
      const p1 = { x: 0, y: 0, z: 0 };
      const p2 = { x: 3, y: 4, z: 0 };
      expect(distance3D(p1, p2)).toBe(5);
    });
  });
  
  describe('random functions', () => {
    it('should generate random numbers in range', () => {
      for (let i = 0; i < 10; i++) {
        const val = random(0, 10);
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThan(10);
      }
    });
    
    it('should generate random integers in range', () => {
      for (let i = 0; i < 10; i++) {
        const val = randomInt(0, 5);
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThanOrEqual(5);
        expect(Number.isInteger(val)).toBe(true);
      }
    });
  });
  
  describe('easeInOutCubic', () => {
    it('should ease values', () => {
      expect(easeInOutCubic(0)).toBe(0);
      expect(easeInOutCubic(1)).toBe(1);
      expect(easeInOutCubic(0.5)).toBeCloseTo(0.5);
    });
  });
  
  describe('map', () => {
    it('should map values between ranges', () => {
      expect(map(5, 0, 10, 0, 100)).toBe(50);
      expect(map(0, 0, 10, 0, 100)).toBe(0);
      expect(map(10, 0, 10, 0, 100)).toBe(100);
    });
  });
  
  describe('spherical coordinates', () => {
    it('should convert spherical to cartesian', () => {
      const result = sphericalToCartesian(10, 0, Math.PI / 2);
      expect(result.x).toBeCloseTo(10);
      expect(result.y).toBeCloseTo(0);
      expect(result.z).toBeCloseTo(0);
    });
    
    it('should convert cartesian to spherical', () => {
      const result = cartesianToSpherical(10, 0, 0);
      expect(result.radius).toBeCloseTo(10);
      expect(result.theta).toBeCloseTo(0);
      expect(result.phi).toBeCloseTo(Math.PI / 2);
    });
    
    it('should round-trip conversion', () => {
      const original = { radius: 20, theta: Math.PI / 4, phi: Math.PI / 3 };
      const cartesian = sphericalToCartesian(original.radius, original.theta, original.phi);
      const spherical = cartesianToSpherical(cartesian.x, cartesian.y, cartesian.z);
      
      expect(spherical.radius).toBeCloseTo(original.radius);
      expect(spherical.theta).toBeCloseTo(original.theta);
      expect(spherical.phi).toBeCloseTo(original.phi);
    });
  });
  
  describe('angleBetweenVectors', () => {
    it('should calculate angle between vectors', () => {
      const v1 = { x: 1, y: 0, z: 0 };
      const v2 = { x: 0, y: 1, z: 0 };
      const angle = angleBetweenVectors(v1, v2);
      expect(angle).toBeCloseTo(Math.PI / 2);
    });
    
    it('should return 0 for parallel vectors', () => {
      const v1 = { x: 1, y: 0, z: 0 };
      const v2 = { x: 2, y: 0, z: 0 };
      const angle = angleBetweenVectors(v1, v2);
      expect(angle).toBeCloseTo(0);
    });
  });
});