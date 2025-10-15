import { useState, useEffect } from 'react';
import OpenGameSDK, { SDKEvents } from '@opusgamelabs/game-sdk';

/**
 * Open Game Protocol SDK Hook
 * Connects Obliterate to OGP platform for token rewards
 */
export function useOpenGameSDK(gameId = 'obliterate-3d') {
  const [sdk, setSdk] = useState(null);
  const [sdkReady, setSdkReady] = useState(false);

  // Initialize SDK
  useEffect(() => {
    try {
      const instance = new OpenGameSDK({
        ui: { usePointsWidget: true }
      });
      setSdk(instance);
    } catch (error) {
      console.error('OGP SDK initialization failed:', error);
      // Game continues without SDK
    }
  }, []);

  // Init SDK with game ID
  useEffect(() => {
    if (sdk) {
      try {
        sdk.init({ gameId });
      } catch (error) {
        console.error('SDK init error:', error);
      }
    }
  }, [sdk, gameId]);

  // Listen for SDK ready
  useEffect(() => {
    if (sdk) {
      sdk.on(SDKEvents.OnReady, () => {
        console.log('🚀 OGP SDK Ready - Token rewards enabled!');
        setSdkReady(true);
      });
    }
  }, [sdk]);

  return { sdk, sdkReady };
}