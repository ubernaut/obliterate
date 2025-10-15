import localforage from 'localforage';

/**
 * Storage utility using IndexedDB via localforage
 * Provides async storage with better capacity than localStorage
 */

// Configure localforage
localforage.config({
  name: 'Obliterate',
  storeName: 'gameData',
  description: 'Game progress and settings storage',
});

export const storage = {
  /**
   * Get item from storage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {Promise<*>} Stored value or default
   */
  async get(key, defaultValue = null) {
    try {
      const value = await localforage.getItem(key);
      return value !== null ? value : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key}:`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in storage
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {Promise<boolean>} Success status
   */
  async set(key, value) {
    try {
      await localforage.setItem(key, value);
      return true;
    } catch (error) {
      console.error(`Error setting ${key}:`, error);
      return false;
    }
  },

  /**
   * Remove item from storage
   * @param {string} key - Storage key
   * @returns {Promise<boolean>} Success status
   */
  async remove(key) {
    try {
      await localforage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
      return false;
    }
  },

  /**
   * Clear all storage
   * @returns {Promise<boolean>} Success status
   */
  async clear() {
    try {
      await localforage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },

  /**
   * Get all keys in storage
   * @returns {Promise<string[]>} Array of keys
   */
  async keys() {
    try {
      return await localforage.keys();
    } catch (error) {
      console.error('Error getting keys:', error);
      return [];
    }
  },

  /**
   * Get multiple items at once
   * @param {string[]} keys - Array of keys to retrieve
   * @returns {Promise<object>} Object with key-value pairs
   */
  async getMultiple(keys) {
    try {
      const results = {};
      await Promise.all(
        keys.map(async (key) => {
          results[key] = await localforage.getItem(key);
        })
      );
      return results;
    } catch (error) {
      console.error('Error getting multiple items:', error);
      return {};
    }
  },

  /**
   * Set multiple items at once
   * @param {object} items - Object with key-value pairs to store
   * @returns {Promise<boolean>} Success status
   */
  async setMultiple(items) {
    try {
      await Promise.all(
        Object.entries(items).map(([key, value]) =>
          localforage.setItem(key, value)
        )
      );
      return true;
    } catch (error) {
      console.error('Error setting multiple items:', error);
      return false;
    }
  },
};

/**
 * Specific storage keys used by the game
 * Helps prevent typos and provides documentation
 */
export const STORAGE_KEYS = {
  SETTINGS: 'obliterate-settings',
  PROGRESS: 'obliterate-progress',
  HIGH_SCORES: 'obliterate-highscores',
  ACHIEVEMENTS: 'obliterate-achievements',
  STATISTICS: 'obliterate-statistics',
};