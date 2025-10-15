import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Settings Store
 * Manages user preferences with localStorage persistence
 */
export const useSettingsStore = create(
  persist(
    (set) => ({
      // Graphics settings
      pixelSize: 2,
      particleDensity: 1.0,
      postProcessing: true,
      showFPS: false,
      
      // Audio settings
      masterVolume: 0.7,
      sfxVolume: 1.0,
      musicVolume: 0.6,
      muted: false,
      
      // Control settings
      mouseSensitivity: 1.0,
      invertY: false,
      invertX: false,
      
      // Key bindings (can be customized)
      keyBindings: {
        moveUp: 'w',
        moveDown: 's',
        moveLeft: 'a',
        moveRight: 'd',
        fire: ' ',
        headingLeft: 'q',
        headingRight: 'e',
        angleUp: 'r',
        angleDown: 'f',
        velocityUp: 't',
        velocityDown: 'g',
        pause: 'Escape',
      },
      
      // Gameplay settings
      showTutorial: true,
      difficulty: 'NORMAL',
      autoAim: false,
      
      // Actions - Graphics
      updateGraphics: (settings) => set((state) => ({
        ...state,
        ...settings,
      })),
      
      setPixelSize: (size) => set({ pixelSize: size }),
      
      setParticleDensity: (density) => set({ particleDensity: density }),
      
      togglePostProcessing: () => set((state) => ({
        postProcessing: !state.postProcessing,
      })),
      
      toggleFPS: () => set((state) => ({
        showFPS: !state.showFPS,
      })),
      
      // Actions - Audio
      updateAudio: (settings) => set((state) => ({
        ...state,
        ...settings,
      })),
      
      setMasterVolume: (volume) => set({ masterVolume: Math.max(0, Math.min(1, volume)) }),
      
      setSFXVolume: (volume) => set({ sfxVolume: Math.max(0, Math.min(1, volume)) }),
      
      setMusicVolume: (volume) => set({ musicVolume: Math.max(0, Math.min(1, volume)) }),
      
      toggleMute: () => set((state) => ({ muted: !state.muted })),
      
      // Actions - Controls
      updateControls: (settings) => set((state) => ({
        ...state,
        ...settings,
      })),
      
      setMouseSensitivity: (sensitivity) => set({ mouseSensitivity: sensitivity }),
      
      toggleInvertY: () => set((state) => ({ invertY: !state.invertY })),
      
      toggleInvertX: () => set((state) => ({ invertX: !state.invertX })),
      
      updateKeyBinding: (action, key) => set((state) => ({
        keyBindings: {
          ...state.keyBindings,
          [action]: key,
        },
      })),
      
      resetKeyBindings: () => set({
        keyBindings: {
          moveUp: 'w',
          moveDown: 's',
          moveLeft: 'a',
          moveRight: 'd',
          fire: ' ',
          headingLeft: 'q',
          headingRight: 'e',
          angleUp: 'r',
          angleDown: 'f',
          velocityUp: 't',
          velocityDown: 'g',
          pause: 'Escape',
        },
      }),
      
      // Actions - Gameplay
      setDifficulty: (difficulty) => set({ difficulty }),
      
      toggleTutorial: () => set((state) => ({ showTutorial: !state.showTutorial })),
      
      toggleAutoAim: () => set((state) => ({ autoAim: !state.autoAim })),
      
      // Reset all settings to defaults
      resetToDefaults: () => set({
        pixelSize: 2,
        particleDensity: 1.0,
        postProcessing: true,
        showFPS: false,
        masterVolume: 0.7,
        sfxVolume: 1.0,
        musicVolume: 0.6,
        muted: false,
        mouseSensitivity: 1.0,
        invertY: false,
        invertX: false,
        showTutorial: true,
        difficulty: 'NORMAL',
        autoAim: false,
      }),
    }),
    {
      name: 'obliterate-settings', // localStorage key
      partialize: (state) => ({
        // Only persist these fields (exclude temporary state)
        pixelSize: state.pixelSize,
        particleDensity: state.particleDensity,
        postProcessing: state.postProcessing,
        showFPS: state.showFPS,
        masterVolume: state.masterVolume,
        sfxVolume: state.sfxVolume,
        musicVolume: state.musicVolume,
        muted: state.muted,
        mouseSensitivity: state.mouseSensitivity,
        invertY: state.invertY,
        invertX: state.invertX,
        keyBindings: state.keyBindings,
        showTutorial: state.showTutorial,
        difficulty: state.difficulty,
        autoAim: state.autoAim,
      }),
    }
  )
);