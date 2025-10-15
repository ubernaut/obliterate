/**
 * Math utility functions
 */

/**
 * Clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Linear interpolation between two values
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export function lerp(a, b, t) {
  return a + (b - a) * clamp(t, 0, 1);
}

/**
 * Convert degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 */
export function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees
 * @param {number} radians - Angle in radians
 * @returns {number} Angle in degrees
 */
export function radToDeg(radians) {
  return radians * (180 / Math.PI);
}

/**
 * Normalize angle to 0-360 range
 * @param {number} angle - Angle in degrees
 * @returns {number} Normalized angle
 */
export function normalizeAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

/**
 * Calculate distance between two points in 3D space
 * @param {object} p1 - First point {x, y, z}
 * @param {object} p2 - Second point {x, y, z}
 * @returns {number} Distance
 */
export function distance3D(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dz = p2.z - p1.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
export function random(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

/**
 * Random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export function randomInt(min, max) {
  return Math.floor(random(min, max + 1));
}

/**
 * Easing function - ease in/out cubic
 * @param {number} t - Time value (0-1)
 * @returns {number} Eased value
 */
export function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Map a value from one range to another
 * @param {number} value - Input value
 * @param {number} inMin - Input range minimum
 * @param {number} inMax - Input range maximum
 * @param {number} outMin - Output range minimum
 * @param {number} outMax - Output range maximum
 * @returns {number} Mapped value
 */
export function map(value, inMin, inMax, outMin, outMax) {
  return outMin + (value - inMin) * (outMax - outMin) / (inMax - inMin);
}

/**
 * Convert spherical coordinates to Cartesian
 * @param {number} radius - Distance from origin
 * @param {number} theta - Horizontal angle (radians)
 * @param {number} phi - Vertical angle (radians)
 * @returns {object} Cartesian coordinates {x, y, z}
 */
export function sphericalToCartesian(radius, theta, phi) {
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

/**
 * Convert Cartesian coordinates to spherical
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {number} z - Z coordinate
 * @returns {object} Spherical coordinates {radius, theta, phi}
 */
export function cartesianToSpherical(x, y, z) {
  const radius = Math.sqrt(x * x + y * y + z * z);
  const theta = Math.atan2(z, x);
  const phi = Math.acos(y / radius);
  return { radius, theta, phi };
}

/**
 * Calculate angle between two vectors (in radians)
 * @param {object} v1 - First vector {x, y, z}
 * @param {object} v2 - Second vector {x, y, z}
 * @returns {number} Angle in radians
 */
export function angleBetweenVectors(v1, v2) {
  const dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
  const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);
  return Math.acos(clamp(dot / (mag1 * mag2), -1, 1));
}