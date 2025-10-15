import * as THREE from 'three';

/**
 * Sphere Navigation Utilities
 * 
 * Handles surface navigation on spheres WITHOUT using spherical coordinates
 * to avoid pole singularities (gimbal lock at theta when phi = 0 or π)
 * 
 * Instead, we use:
 * 1. Cartesian coordinates (x, y, z)
 * 2. Tangent space at each point
 * 3. Rotation matrices
 */

const POLE_THRESHOLD = 0.01; // Threshold for detecting near-pole positions

/**
 * Check if a position is near a pole
 * @param {THREE.Vector3} position - Position to check (should be normalized)
 * @returns {boolean} True if near north or south pole
 */
export function isNearPole(position) {
  const normalized = position.clone().normalize();
  return Math.abs(Math.abs(normalized.y) - 1) < POLE_THRESHOLD;
}

/**
 * Move a point on sphere surface in screen-relative direction
 * Avoids spherical coordinate conversion to prevent pole singularities
 * 
 * @param {THREE.Vector3} currentPosition - Current position on sphere
 * @param {THREE.Vector3} screenUp - Screen-relative up direction
 * @param {THREE.Vector3} screenRight - Screen-relative right direction
 * @param {number} upAmount - Amount to move in screen-up direction
 * @param {number} rightAmount - Amount to move in screen-right direction
 * @returns {THREE.Vector3} New position on sphere
 */
export function moveSurfacePoint(
  currentPosition,
  screenUp,
  screenRight,
  upAmount,
  rightAmount
) {
  // Create movement vector in tangent space
  const movement = new THREE.Vector3();
  movement.add(screenUp.clone().multiplyScalar(upAmount));
  movement.add(screenRight.clone().multiplyScalar(rightAmount));
  
  // Apply movement
  const newPosition = currentPosition.clone().add(movement);
  
  // Project back onto sphere (maintains radius)
  const radius = currentPosition.length();
  return newPosition.normalize().multiplyScalar(radius);
}

/**
 * Create stable tangent space at any point on sphere
 * Handles poles gracefully by using camera-relative vectors
 * 
 * @param {THREE.Vector3} position - Point on sphere
 * @param {THREE.Camera} camera - Camera for reference (optional)
 * @returns {object} {tangent, bitangent, normal}
 */
export function createStableTangentSpace(position, camera = null) {
  const normal = position.clone().normalize();
  
  if (camera) {
    // Use camera-relative tangent space for screen-aligned controls
    const cameraUp = camera.up.clone().normalize();
    const cameraForward = camera.position.clone().normalize().negate();
    
    // Get camera right
    const cameraRight = new THREE.Vector3()
      .crossVectors(cameraForward, cameraUp)
      .normalize();
    
    // Project camera vectors onto tangent plane
    const tangent = cameraUp.clone()
      .sub(normal.clone().multiplyScalar(cameraUp.dot(normal)))
      .normalize();
    
    const bitangent = cameraRight.clone()
      .sub(normal.clone().multiplyScalar(cameraRight.dot(normal)))
      .normalize();
    
    // Handle degenerate cases (camera aligned with normal)
    if (tangent.length() < 0.01) {
      const fallback = cameraRight.clone()
        .sub(normal.clone().multiplyScalar(cameraRight.dot(normal)))
        .normalize();
      return {
        tangent: fallback,
        bitangent: new THREE.Vector3().crossVectors(normal, fallback).normalize(),
        normal,
      };
    }
    
    return { tangent, bitangent, normal };
  }
  
  // Fallback: world-space tangent frame
  // Uses north pole as reference unless we're at a pole
  let referenceVector = new THREE.Vector3(0, 1, 0);
  
  // If near poles, use equator as reference
  if (isNearPole(normal)) {
    referenceVector = new THREE.Vector3(1, 0, 0);
  }
  
  const tangent = new THREE.Vector3()
    .crossVectors(referenceVector, normal)
    .normalize();
  
  const bitangent = new THREE.Vector3()
    .crossVectors(normal, tangent)
    .normalize();
  
  return { tangent, bitangent, normal };
}

/**
 * Rotate a point around a sphere surface by an angle
 * Uses axis-angle rotation to avoid spherical coordinate issues
 * 
 * @param {THREE.Vector3} position - Current position
 * @param {THREE.Vector3} axis - Rotation axis (will be normalized)
 * @param {number} angleRadians - Angle to rotate in radians
 * @returns {THREE.Vector3} Rotated position
 */
export function rotateSurfacePoint(position, axis, angleRadians) {
  const quaternion = new THREE.Quaternion();
  quaternion.setFromAxisAngle(axis.clone().normalize(), angleRadians);
  
  const rotated = position.clone().applyQuaternion(quaternion);
  
  // Maintain radius
  const radius = position.length();
  return rotated.normalize().multiplyScalar(radius);
}

/**
 * Create rotation matrix for orienting an object on sphere surface
 * Ensures Y-axis points away from center (up) and handles poles
 * 
 * @param {THREE.Vector3} position - Position on sphere
 * @param {THREE.Camera} camera - Camera for forward direction (optional)
 * @returns {THREE.Matrix4} Rotation matrix
 */
export function createSurfaceOrientation(position, camera = null) {
  // Y-axis points away from planet (up)
  const up = position.clone().normalize();
  
  let forward;
  
  if (camera) {
    // Use camera-up projected onto tangent plane as forward
    const cameraUp = camera.up.clone().normalize();
    forward = cameraUp.clone()
      .sub(up.clone().multiplyScalar(cameraUp.dot(up)))
      .normalize();
    
    // Handle degenerate case (camera up parallel to surface normal)
    if (forward.length() < 0.01) {
      const cameraRight = new THREE.Vector3().crossVectors(
        camera.position.clone().normalize().negate(),
        cameraUp
      ).normalize();
      
      forward = cameraRight.clone()
        .sub(up.clone().multiplyScalar(cameraRight.dot(up)))
        .normalize();
    }
  } else {
    // Default: point toward north pole unless we're at a pole
    const north = new THREE.Vector3(0, 1, 0);
    forward = north.clone()
      .sub(up.clone().multiplyScalar(north.dot(up)))
      .normalize();
    
    // Handle poles - use equator direction
    if (forward.length() < 0.01) {
      forward = new THREE.Vector3(0, 0, 1);
    }
  }
  
  // X-axis is right (cross product of up and forward)
  const right = new THREE.Vector3().crossVectors(up, forward).normalize();
  
  // Recompute forward to ensure orthogonality
  forward = new THREE.Vector3().crossVectors(right, up).normalize();
  
  // Create rotation matrix with basis vectors
  const matrix = new THREE.Matrix4();
  matrix.makeBasis(right, up, forward);
  
  return matrix;
}

/**
 * Calculate great circle distance between two points on sphere
 * @param {THREE.Vector3} point1 - First point
 * @param {THREE.Vector3} point2 - Second point
 * @param {number} radius - Sphere radius
 * @returns {number} Arc length distance
 */
export function greatCircleDistance(point1, point2, radius) {
  const p1 = point1.clone().normalize();
  const p2 = point2.clone().normalize();
  
  const angle = Math.acos(
    Math.max(-1, Math.min(1, p1.dot(p2)))
  );
  
  return angle * radius;
}

/**
 * Find intermediate point along great circle path
 * @param {THREE.Vector3} start - Start point
 * @param {THREE.Vector3} end - End point
 * @param {number} fraction - Fraction along path (0-1)
 * @returns {THREE.Vector3} Intermediate point
 */
export function greatCircleInterpolation(start, end, fraction) {
  const startNorm = start.clone().normalize();
  const endNorm = end.clone().normalize();
  
  // Use slerp (spherical linear interpolation)
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(startNorm, endNorm);
  
  const result = startNorm.clone().applyQuaternion(
    quaternion.clone().slerp(new THREE.Quaternion(), 1 - fraction)
  );
  
  return result.multiplyScalar(start.length());
}