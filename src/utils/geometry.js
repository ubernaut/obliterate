import * as THREE from 'three';

/**
 * Geometry utility functions for Three.js operations
 */

/**
 * Create a vector from spherical coordinates
 * @param {number} radius - Distance from origin
 * @param {number} theta - Horizontal angle (radians)
 * @param {number} phi - Vertical angle (radians)
 * @returns {THREE.Vector3} Vector in 3D space
 */
export function sphericalToVector3(radius, theta, phi) {
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/**
 * Get spherical coordinates from a Vector3
 * @param {THREE.Vector3} vector - Input vector
 * @returns {object} Spherical coordinates {radius, theta, phi}
 */
export function vector3ToSpherical(vector) {
  const radius = vector.length();
  const theta = Math.atan2(vector.z, vector.x);
  const phi = Math.acos(vector.y / radius);
  return { radius, theta, phi };
}

/**
 * Project a vector onto a plane defined by a normal
 * @param {THREE.Vector3} vector - Vector to project
 * @param {THREE.Vector3} normal - Plane normal
 * @returns {THREE.Vector3} Projected vector
 */
export function projectOntoPlane(vector, normal) {
  const normalizedNormal = normal.clone().normalize();
  const dot = vector.dot(normalizedNormal);
  return vector.clone().sub(normalizedNormal.multiplyScalar(dot));
}

/**
 * Get a perpendicular vector to the given vector
 * Useful for creating tangent space
 * @param {THREE.Vector3} vector - Input vector
 * @returns {THREE.Vector3} Perpendicular vector
 */
export function getPerpendicularVector(vector) {
  const normalized = vector.clone().normalize();
  
  // Use a reference vector that won't be parallel
  let refVector = new THREE.Vector3(0, 1, 0);
  if (Math.abs(normalized.dot(refVector)) > 0.9) {
    refVector = new THREE.Vector3(1, 0, 0);
  }
  
  return new THREE.Vector3()
    .crossVectors(refVector, normalized)
    .normalize();
}

/**
 * Create a local coordinate system (tangent, bitangent, normal) at a point on a sphere
 * @param {THREE.Vector3} position - Point on sphere surface
 * @returns {object} Coordinate system {tangent, bitangent, normal}
 */
export function createTangentSpace(position) {
  const normal = position.clone().normalize();
  const tangent = getPerpendicularVector(normal);
  const bitangent = new THREE.Vector3().crossVectors(normal, tangent).normalize();
  
  return { tangent, bitangent, normal };
}

/**
 * Get screen-relative directions based on camera orientation
 * @param {THREE.Camera} camera - The camera
 * @param {THREE.Vector3} playerNormal - Normal at player position
 * @returns {object} Screen-relative directions {up, right}
 */
export function getScreenRelativeDirections(camera, playerNormal) {
  // Get camera's up and right vectors
  const cameraUp = camera.up.clone().normalize();
  const cameraRight = new THREE.Vector3()
    .crossVectors(camera.position.clone().normalize().negate(), cameraUp)
    .normalize();
  
  // Project onto tangent plane at player position
  const screenUp = projectOntoPlane(cameraUp, playerNormal);
  const screenRight = projectOntoPlane(cameraRight, playerNormal);
  
  return {
    up: screenUp.normalize(),
    right: screenRight.normalize(),
  };
}

/**
 * Calculate launch direction based on angle, heading, and camera orientation
 * @param {THREE.Vector3} playerPosition - Player's position
 * @param {number} angle - Launch angle in degrees (0-90)
 * @param {number} heading - Heading in degrees (0-359)
 * @param {THREE.Camera} camera - The camera for screen-relative controls
 * @returns {THREE.Vector3} Normalized launch direction
 */
export function calculateLaunchDirection(playerPosition, angle, heading, camera) {
  const angleRad = (angle * Math.PI) / 180;
  const headingRad = (heading * Math.PI) / 180;
  
  const playerNormal = playerPosition.clone().normalize();
  const { up: screenUp, right: screenRight } = getScreenRelativeDirections(camera, playerNormal);
  
  const direction = new THREE.Vector3();
  
  // Normal component (vertical from surface)
  direction.add(playerNormal.clone().multiplyScalar(Math.sin(angleRad)));
  
  // Screen up component
  direction.add(
    screenUp.clone().multiplyScalar(Math.cos(angleRad) * Math.cos(headingRad))
  );
  
  // Screen right component  
  direction.add(
    screenRight.clone().multiplyScalar(Math.cos(angleRad) * Math.sin(headingRad))
  );
  
  return direction.normalize();
}

/**
 * Find the closest vertex on a geometry to a given direction
 * @param {THREE.BufferGeometry} geometry - The geometry to search
 * @param {THREE.Vector3} direction - Direction vector (will be normalized)
 * @returns {object} {index, vertex, distance}
 */
export function findClosestVertex(geometry, direction) {
  const dir = direction.clone().normalize();
  const positions = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  
  let closestIndex = 0;
  let closestDistance = Infinity;
  let closestVertex = new THREE.Vector3();
  
  for (let i = 0; i < positions.count; i++) {
    vertex.fromBufferAttribute(positions, i);
    const vertexDir = vertex.clone().normalize();
    const angle = Math.acos(Math.max(-1, Math.min(1, dir.dot(vertexDir))));
    
    if (angle < closestDistance) {
      closestDistance = angle;
      closestIndex = i;
      closestVertex.copy(vertex);
    }
  }
  
  return {
    index: closestIndex,
    vertex: closestVertex,
    distance: closestDistance,
  };
}

/**
 * Get weighted average radius of surface in a direction
 * Useful for terrain-following on deformed spheres
 * @param {THREE.BufferGeometry} geometry - Planet geometry
 * @param {THREE.Vector3} direction - Direction to check
 * @param {number} threshold - Angular threshold for vertices to include
 * @returns {number} Average surface radius in that direction
 */
export function getSurfaceRadius(geometry, direction, threshold = 0.2) {
  const dir = direction.clone().normalize();
  const positions = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  
  let totalRadius = 0;
  let totalWeight = 0;
  
  for (let i = 0; i < positions.count; i++) {
    vertex.fromBufferAttribute(positions, i);
    const vertexDir = vertex.clone().normalize();
    const angle = Math.acos(Math.max(-1, Math.min(1, dir.dot(vertexDir))));
    
    if (angle < threshold) {
      // Weight by inverse of angle - closer vertices have more influence
      const weight = 1.0 / (angle + 0.01);
      totalRadius += vertex.length() * weight;
      totalWeight += weight;
    }
  }
  
  if (totalWeight > 0) {
    return totalRadius / totalWeight;
  }
  
  // Fallback - use geometry's bounding sphere
  geometry.computeBoundingSphere();
  return geometry.boundingSphere?.radius || 20;
}

/**
 * Generate random point on sphere surface
 * Uses uniform distribution for even coverage
 * @param {number} radius - Sphere radius
 * @returns {THREE.Vector3} Random point on sphere
 */
export function randomPointOnSphere(radius) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return sphericalToVector3(radius, theta, phi);
}

/**
 * Generate random points distributed evenly on sphere
 * Uses Fibonacci sphere algorithm for uniform distribution
 * @param {number} count - Number of points
 * @param {number} radius - Sphere radius
 * @returns {THREE.Vector3[]} Array of evenly distributed points
 */
export function fibonacciSphere(count, radius) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
  
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  
  return points;
}

/**
 * Check if a point is within a sphere
 * @param {THREE.Vector3} point - Point to check
 * @param {THREE.Vector3} center - Sphere center
 * @param {number} radius - Sphere radius
 * @returns {boolean} True if point is inside sphere
 */
export function isPointInSphere(point, center, radius) {
  return point.distanceTo(center) < radius;
}

/**
 * Create a rotation matrix that aligns a vector with another
 * @param {THREE.Vector3} from - Source direction
 * @param {THREE.Vector3} to - Target direction
 * @returns {THREE.Matrix4} Rotation matrix
 */
export function createAlignmentMatrix(from, to) {
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(from.clone().normalize(), to.clone().normalize());
  
  const matrix = new THREE.Matrix4();
  matrix.makeRotationFromQuaternion(quaternion);
  return matrix;
}