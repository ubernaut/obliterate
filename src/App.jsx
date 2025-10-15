import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { useGameStore } from "./state/stores/gameStore";
import { useSettingsStore } from "./state/stores/settingsStore";
import { useAudio } from "./hooks/useAudio";
import SplashScreen from "./components/SplashScreen";
import MainMenu from "./components/ui/menus/MainMenu";
import SettingsMenu from "./components/ui/menus/SettingsMenu";
import PauseMenu from "./components/ui/menus/PauseMenu";
import DefeatScreen from "./components/ui/menus/DefeatScreen";
import "./App.css";

function App() {
  const mountRef = useRef(null);
  
  // Game store - weapon configuration
  const velocity = useGameStore((state) => state.weaponConfig.velocity);
  const angle = useGameStore((state) => state.weaponConfig.angle);
  const heading = useGameStore((state) => state.weaponConfig.heading);
  const setVelocity = useGameStore((state) => state.setVelocity);
  const setAngle = useGameStore((state) => state.setAngle);
  const setHeading = useGameStore((state) => state.setHeading);
  
  // Game store - game state
  const kills = useGameStore((state) => state.kills);
  const shots = useGameStore((state) => state.shots);
  const fuel = useGameStore((state) => state.fuel);
  const fuelUsed = useGameStore((state) => state.fuelUsed);
  const incrementKills = useGameStore((state) => state.incrementKills);
  const incrementShots = useGameStore((state) => state.incrementShots);
  const consumeFuel = useGameStore((state) => state.consumeFuel);
  const canMove = useGameStore((state) => state.canMove);
  const canShoot = useGameStore((state) => state.canShoot);
  const isFuelCritical = useGameStore((state) => state.isFuelCritical);
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);
  const victoryAchieved = useGameStore((state) => state.victoryAchieved);
  const defeatSuffered = useGameStore((state) => state.defeatSuffered);
  const gameStatus = useGameStore((state) => state.gameStatus);
  const getElapsedTime = useGameStore((state) => state.getElapsedTime);
  const getCurrentScore = useGameStore((state) => state.getCurrentScore);
  const getAccuracy = useGameStore((state) => state.getAccuracy);
  
  // Settings store
  const pixelSize = useSettingsStore((state) => state.pixelSize);
  
  // Initialize audio (handles volume sync automatically)
  const audio = useAudio();
  
  // Local UI state (not in stores)
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [joystickActive, setJoystickActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [defeatReason, setDefeatReason] = useState(null);
  const keysRef = useRef({ w: false, a: false, s: false, d: false });
  const targetsRef = useRef([]);
  const joystickRef = useRef(null);
  
  // Computed values
  const victory = gameStatus === 'victory';
  const defeat = gameStatus === 'defeat';

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    // Go to main menu instead of starting game directly
    useGameStore.getState().setGameStatus('menu');
    // Play menu music
    audio.playMusic('menu');
  };

  // Start game when transitioning from menu to playing
  useEffect(() => {
    if (gameStatus === 'playing' && !victory) {
      startGame();
      audio.stopMusic();
      audio.playMusic('game');
    }
  }, [gameStatus, victory, startGame, audio]);

  // Clean up music on unmount
  useEffect(() => {
    return () => {
      audio.stopMusic();
    };
  }, [audio]);

  // Low fuel warning sound (plays every 3 seconds when critical)
  useEffect(() => {
    if (!isFuelCritical()) return;
    
    const warningInterval = setInterval(() => {
      if (isFuelCritical() && gameStatus === 'playing') {
        audio.playSFX('low-fuel', { volume: 0.2 });
      }
    }, 3000);
    
    return () => clearInterval(warningInterval);
  }, [isFuelCritical, gameStatus, audio]);

  useEffect(() => {
    // Only initialize Three.js scene when not on menu screens
    if (gameStatus === 'menu' || gameStatus === 'settings' || gameStatus === 'splash') {
      return;
    }
    
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 50);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Post-processing for pixelation
    const composer = new EffectComposer(renderer);
    //    const options = {RenderPixelatedPassParameters:{ normalEdgeStrength: 2, depthEdgeStrength: 1 }};
    const options = { normalEdgeStrength: 2, depthEdgeStrength: 1 };
    const renderPixelatedPass = new RenderPixelatedPass(
      2,
      scene,
      camera,
      options,
    );
    composer.addPass(renderPixelatedPass);
    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    // Controls
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.noPan = true;
    controls.noZoom = true;

    // Planet with modifiable geometry
    //    const planetGeometry = new THREE.SphereGeometry(20, 32, 32);
    const planetGeometry = new THREE.IcosahedronGeometry(20, 9);
    const planetMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      flatShading: true,
      roughness: 0,
      metalness: 1
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Store original vertex positions for deformation
    const originalPositions = planetGeometry.attributes.position.array.slice();

    // Stars
    const starGeometry = new THREE.SphereGeometry(0.3, 4, 4);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
    for (let i = 0; i < 200; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const radius = 100 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      star.position.x = radius * Math.sin(phi) * Math.cos(theta);
      star.position.y = radius * Math.cos(phi);
      star.position.z = radius * Math.sin(phi) * Math.sin(theta);
      scene.add(star);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Dim ambient light
    scene.add(ambientLight);
    const pointLight = new THREE.DirectionalLight(0xffffff, 10, 0); // Point light with intensity 100
    pointLight.position.set(0, 0, 25);
    scene.add(pointLight);

    // Player
    const playerGeometry = new THREE.IcosahedronGeometry(1);
    const playerMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.position.set(0, 0, 21);
    scene.add(player);

    // Launch direction indicator (3-sided cylinder) - attached to player
    const indicatorGeometry = new THREE.CylinderGeometry(0.2, 0.2, 3, 3);
    const indicatorMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
    player.add(indicator); // Make indicator a child of player
    
    // Function to update indicator position and orientation
    const updateIndicator = (ang, head) => {
      const angleRad = (ang * Math.PI) / 180;
      const headingRad = (head * Math.PI) / 180;
      
      // Calculate direction in world space using screen-relative coordinates
      const playerNormal = player.position.clone().normalize();
      
      // Get camera's up and right vectors (screen-relative)
      const cameraUp = camera.up.clone().normalize();
      const cameraRight = new THREE.Vector3().crossVectors(
        camera.position.clone().normalize().negate(),
        cameraUp
      ).normalize();
      
      // Project camera vectors onto tangent plane at player position
      const screenUp = cameraUp.clone().sub(
        playerNormal.clone().multiplyScalar(cameraUp.dot(playerNormal))
      ).normalize();
      const screenRight = cameraRight.clone().sub(
        playerNormal.clone().multiplyScalar(cameraRight.dot(playerNormal))
      ).normalize();
      
      const worldDirection = new THREE.Vector3();
      worldDirection.add(playerNormal.clone().multiplyScalar(Math.sin(angleRad)));
      // heading 0 = screen up, 90 = screen right
      worldDirection.add(
        screenUp
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.cos(headingRad))
      );
      worldDirection.add(
        screenRight
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.sin(headingRad))
      );
      worldDirection.normalize();
      
      // Convert world direction to player's local space
      const localDirection = player.worldToLocal(
        player.position.clone().add(worldDirection)
      ).normalize();
      
      // Position indicator in local space (offset from player center)
      indicator.position.copy(localDirection.clone().multiplyScalar(2));
      
      // Orient indicator to point in the local direction
      indicator.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), localDirection);
    };
    
    // Expose updateIndicator for slider changes
    mountRef.current.updateIndicator = updateIndicator;
    
    // Initial indicator update
    updateIndicator(45, 0);

    // Function to create targets
    const createTargets = () => {
      const targets = [];
      const targetMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

      for (let i = 0; i < 6; i++) {
        // Distribute targets using spherical coordinates for better coverage
        const theta = Math.random() * Math.PI * 2; // Horizontal angle
        const phi = Math.acos(2 * Math.random() - 1); // Vertical angle (uniform distribution)

        const targetGeometry = new THREE.IcosahedronGeometry(1);
        const target = new THREE.Mesh(targetGeometry, targetMaterial);

        const targetPos = new THREE.Vector3(
          21 * Math.sin(phi) * Math.cos(theta),
          21 * Math.cos(phi),
          21 * Math.sin(phi) * Math.sin(theta),
        );

        target.position.copy(targetPos);
        target.lookAt(targetPos.clone().multiplyScalar(2)); // Orient away from planet
        scene.add(target);
        targets.push(target);
      }
      return targets;
    };

    // Create initial targets
    const targets = createTargets();
    targetsRef.current = targets;

    // Function to reset planet geometry
    const resetPlanet = () => {
      const positions = planetGeometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        positions.setXYZ(
          i,
          originalPositions[i * 3],
          originalPositions[i * 3 + 1],
          originalPositions[i * 3 + 2]
        );
      }
      positions.needsUpdate = true;
      planetGeometry.computeVertexNormals();
    };

    // Expose createTargets and resetPlanet for reset
    mountRef.current.createTargets = createTargets;
    mountRef.current.resetPlanet = resetPlanet;

    // Projectile
    let projectile = null;
    let projectileVelocity = new THREE.Vector3();
    let projectileLaunchTime = 0;

    // Explosion particles
    const explosionParticles = [];

    // Function to get surface radius at a given direction using weighted average
    const getSurfaceRadius = (direction) => {
      const dir = direction.clone().normalize();
      const positions = planetGeometry.attributes.position;
      const vertex = new THREE.Vector3();
      
      let totalRadius = 0;
      let totalWeight = 0;
      const threshold = 0.2; // Tighter angular threshold (in radians)
      
      // Find vertices close to the direction and use weighted average
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        const vertexDir = vertex.clone().normalize();
        const angle = Math.acos(Math.max(-1, Math.min(1, dir.dot(vertexDir))));
        
        if (angle < threshold) {
          // Weight by inverse of angle - closer vertices have more influence
          const weight = 1.0 / (angle + 0.01); // +0.01 to avoid division by zero
          totalRadius += vertex.length() * weight;
          totalWeight += weight;
        }
      }
      
      if (totalWeight > 0) {
        return totalRadius / totalWeight;
      }
      
      // Fallback to default radius
      return 20;
    };

    // Function to deform planet at impact point
    const deformPlanet = (impactPoint, craterDepth = 2) => {
      // Convert impact point from world space to planet's local space
      const localImpact = planet.worldToLocal(impactPoint.clone());

      const positions = planetGeometry.attributes.position;
      const vertex = new THREE.Vector3();

      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);

        // Calculate distance from impact point (in local space)
        const distance = vertex.distanceTo(localImpact);

        // Deform vertices within crater radius
        const craterRadius = 8;
        const rimStart = craterRadius * 0.6; // Where the rim starts

        if (distance < craterRadius) {
          const direction = vertex.clone().normalize();

          if (distance < rimStart) {
            // Inner crater - push inward
            const falloff = 1 - distance / rimStart;
            const deformAmount = craterDepth * falloff * falloff;
            vertex.sub(direction.multiplyScalar(deformAmount));
          } else {
            // Outer rim - push outward
            const rimFalloff =
              (distance - rimStart) / (craterRadius - rimStart);
            const rimHeight = craterDepth * 0.6 * (1 - rimFalloff * rimFalloff);
            vertex.add(direction.multiplyScalar(rimHeight));
          }

          positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
      }

      positions.needsUpdate = true;
      planetGeometry.computeVertexNormals();
      
      // Update player position to match new terrain
      const playerDir = player.position.clone().normalize();
      const newRadius = getSurfaceRadius(playerDir) + 1; // +1 for player size
      player.position.copy(playerDir.multiplyScalar(newRadius));
      
      // Update target positions to match new terrain
      const currentTargets = targetsRef.current;
      for (let i = 0; i < currentTargets.length; i++) {
        const targetDir = currentTargets[i].position.clone().normalize();
        const targetRadius = getSurfaceRadius(targetDir) + 1; // +1 for target size
        currentTargets[i].position.copy(targetDir.multiplyScalar(targetRadius));
      }
    };

    // Function to create explosion particles
    const createExplosion = (position, isHit) => {
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.4, 4, 4);
        const particleMaterial = new THREE.MeshBasicMaterial({
          color: isHit ? 0xff0000 : 0xffffff,
        });
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);

        particle.position.copy(position);

        // Random velocity in all directions
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        )
          .normalize()
          .multiplyScalar(Math.random() * 3 + 1);

        scene.add(particle);
        explosionParticles.push({
          mesh: particle,
          velocity: velocity,
          life: 1.0,
        });
      }
    };

    // Function to create impact mark
    const createImpactMark = (position, isHit) => {
      // Deform the planet at impact point
      deformPlanet(position, isHit ? 2.5 : 1.5);

      // Create explosion effect
      createExplosion(position, isHit);
    };

    const launchProjectile = (vel, ang, head) => {
      if (projectile) {
        scene.remove(projectile);
      }

      // Play launch sound
      audio.playSFX('launch', { volume: 0.3 });

      const projGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      const projMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      projectile = new THREE.Mesh(projGeometry, projMaterial);
      projectile.position.copy(player.position);
      scene.add(projectile);
      
      // Track launch time to prevent immediate suicide
      projectileLaunchTime = Date.now();

      const angleRad = (ang * Math.PI) / 180;
      const headingRad = (head * Math.PI) / 180; // 0° = screen up, 90° = screen right
      const scaledVel = vel / 100; // Reduced to 1/10th speed

      const playerNormal = player.position.clone().normalize();

      // Get camera's up and right vectors (screen-relative)
      const cameraUp = camera.up.clone().normalize();
      const cameraRight = new THREE.Vector3().crossVectors(
        camera.position.clone().normalize().negate(),
        cameraUp
      ).normalize();
      
      // Project camera vectors onto tangent plane at player position
      const screenUp = cameraUp.clone().sub(
        playerNormal.clone().multiplyScalar(cameraUp.dot(playerNormal))
      ).normalize();
      const screenRight = cameraRight.clone().sub(
        playerNormal.clone().multiplyScalar(cameraRight.dot(playerNormal))
      ).normalize();

      const direction = new THREE.Vector3();
      direction.add(playerNormal.clone().multiplyScalar(Math.sin(angleRad)));
      // heading 0 = screen up, 90 = screen right
      direction.add(
        screenUp
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.cos(headingRad))
      );
      direction.add(
        screenRight
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.sin(headingRad))
      );
      direction.normalize();

      projectileVelocity.copy(direction.multiplyScalar(scaledVel));
    };

    mountRef.current.launchProjectile = launchProjectile;

    // Keyboard controls with key state tracking
    const keys = keysRef.current;

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key in keys) {
        keys[key] = true;
      }
      
      // Determine adjustment amount based on modifier keys
      const getAdjustment = (normal, fine, coarse) => {
        if (event.shiftKey) return fine;
        if (event.ctrlKey || event.metaKey) return coarse;
        return normal;
      };
      
      // Get current values from store (avoids closure stale state)
      const getCurrentWeaponConfig = () => useGameStore.getState().weaponConfig;
      
      // Handle spacebar for shooting
      if (event.key === ' ') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        if (useGameStore.getState().canShoot()) {
          launchProjectile(currentConfig.velocity, currentConfig.angle, currentConfig.heading);
          useGameStore.getState().incrementShots();
          useGameStore.getState().consumeFuel(5);
        }
      }
      
      // Handle Q and E for heading adjustment
      if (key === 'q') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 15);
        const newHeading = ((currentConfig.heading - adjustment + 360) % 360);
        useGameStore.getState().setHeading(newHeading);
        mountRef.current?.updateIndicator?.(currentConfig.angle, newHeading);
      }
      if (key === 'e') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 15);
        const newHeading = ((currentConfig.heading + adjustment) % 360);
        useGameStore.getState().setHeading(newHeading);
        mountRef.current?.updateIndicator?.(currentConfig.angle, newHeading);
      }
      
      // NEW: R and F for angle adjustment
      if (key === 'r') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 15);
        const newAngle = Math.max(0, Math.min(90, currentConfig.angle + adjustment));
        useGameStore.getState().setAngle(newAngle);
        mountRef.current?.updateIndicator?.(newAngle, currentConfig.heading);
      }
      if (key === 'f') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 15);
        const newAngle = Math.max(0, Math.min(90, currentConfig.angle - adjustment));
        useGameStore.getState().setAngle(newAngle);
        mountRef.current?.updateIndicator?.(newAngle, currentConfig.heading);
      }
      
      // NEW: T and G for velocity adjustment
      if (key === 't') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 10);
        const newVelocity = Math.max(10, Math.min(100, currentConfig.velocity + adjustment));
        useGameStore.getState().setVelocity(newVelocity);
      }
      if (key === 'g') {
        event.preventDefault();
        const currentConfig = getCurrentWeaponConfig();
        const adjustment = getAdjustment(5, 1, 10);
        const newVelocity = Math.max(10, Math.min(100, currentConfig.velocity - adjustment));
        useGameStore.getState().setVelocity(newVelocity);
      }
      
      // NEW: H for help
      if (key === 'h') {
        event.preventDefault();
        audio.playSFX('ui-click', { volume: 0.2 });
        setShowHelp(prev => !prev);
      }
      
      // ESC for pause
      if (key === 'escape') {
        event.preventDefault();
        const currentStatus = useGameStore.getState().gameStatus;
        if (currentStatus === 'playing') {
          useGameStore.getState().setGameStatus('paused');
        } else if (currentStatus === 'paused') {
          useGameStore.getState().setGameStatus('playing');
        }
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();
      if (key in keys) {
        keys[key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    // Store current values in mountRef for keyboard access
    mountRef.current.velocity = velocity;
    mountRef.current.angle = angle;
    mountRef.current.heading = heading;

    // Update player position based on key states
    const updatePlayerPosition = () => {
      const speed = 0.05; // Movement speed
      const currentPos = player.position.clone();
      const playerNormal = currentPos.clone().normalize();
      
      // Get camera's up and right vectors (screen-relative)
      const cameraUp = camera.up.clone().normalize();
      const cameraRight = new THREE.Vector3().crossVectors(
        camera.position.clone().normalize().negate(),
        cameraUp
      ).normalize();
      
      // Project camera vectors onto tangent plane at player position
      const screenUp = cameraUp.clone().sub(
        playerNormal.clone().multiplyScalar(cameraUp.dot(playerNormal))
      ).normalize();
      const screenRight = cameraRight.clone().sub(
        playerNormal.clone().multiplyScalar(cameraRight.dot(playerNormal))
      ).normalize();
      
      // Calculate movement direction in screen-relative coordinates
      const movement = new THREE.Vector3();
      if (keys.w) movement.add(screenUp.clone().multiplyScalar(speed)); // Move screen up
      if (keys.s) movement.add(screenUp.clone().multiplyScalar(-speed)); // Move screen down
      if (keys.a) movement.add(screenRight.clone().multiplyScalar(-speed)); // Move screen left
      if (keys.d) movement.add(screenRight.clone().multiplyScalar(speed)); // Move screen right
      
      // Apply movement
      if (movement.length() > 0) {
        // Check if player has fuel to move
        if (!canMove()) {
          return; // No fuel, can't move
        }
        
        // Consume fuel based on movement distance
        const movementDistance = movement.length();
        const fuelCost = movementDistance * 2; // Adjust multiplier for balance
        consumeFuel(fuelCost);
        
        currentPos.add(movement);
        
        // Project back onto sphere surface
        const direction = currentPos.clone().normalize();
        const surfaceRadius = getSurfaceRadius(direction) + 1; // +1 for player size
        player.position.copy(direction.multiplyScalar(surfaceRadius));
        
        // Smoothly move camera above player when moving
        const cameraDistance = 50;
        const targetCameraPos = player.position.clone().normalize().multiplyScalar(cameraDistance);
        camera.position.lerp(targetCameraPos, 0.1); // Smooth interpolation
        camera.lookAt(0, 0, 0); // Look at planet center
      }
      
      // Orient player properly on sphere surface using screen-relative coordinates
      // Y-axis points away from planet (up)
      const up = player.position.clone().normalize();
      
      // Use screen-up as forward direction (project onto tangent plane)
      const cameraUpForOrientation = camera.up.clone().normalize();
      let forward = cameraUpForOrientation.clone().sub(
        up.clone().multiplyScalar(cameraUpForOrientation.dot(up))
      ).normalize();
      
      // Handle case when camera up is parallel to player normal
      if (forward.length() < 0.01) {
        // Use camera right as fallback
        const cameraRightForOrientation = new THREE.Vector3().crossVectors(
          camera.position.clone().normalize().negate(),
          cameraUpForOrientation
        ).normalize();
        forward = cameraRightForOrientation.clone().sub(
          up.clone().multiplyScalar(cameraRightForOrientation.dot(up))
        ).normalize();
      }
      
      // X-axis is right (cross product of up and forward)
      const right = new THREE.Vector3().crossVectors(up, forward).normalize();
      
      // Recompute forward to ensure orthogonality
      forward = new THREE.Vector3().crossVectors(right, up).normalize();
      
      // Create rotation matrix
      const matrix = new THREE.Matrix4();
      matrix.makeBasis(right, up, forward);
      
      // Apply rotation to player
      player.quaternion.setFromRotationMatrix(matrix);
    };

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Orbit point light around planet
      const time = Date.now() * 0.001; // Time in seconds
      const orbitRadius = 25;
      pointLight.position.x = Math.cos(time / 10) * orbitRadius;
      pointLight.position.z = Math.sin(time / 10) * orbitRadius;
      pointLight.position.y = Math.sin((time / 10) * 0.05) * 3; // Vary height as well

      // Check for out of fuel defeat (use getState to avoid closure stale values)
      const currentFuel = useGameStore.getState().fuel;
      const currentStatus = useGameStore.getState().gameStatus;
      if (currentFuel <= 0 && currentStatus === 'playing') {
        setDefeatReason('outOfFuel');
        useGameStore.getState().defeatSuffered();
        audio.stopMusic();
        audio.playMusic('defeat');
      }

      // Update player position based on key states
      updatePlayerPosition();

      // Update explosion particles
      for (let i = explosionParticles.length - 1; i >= 0; i--) {
        const particle = explosionParticles[i];

        // Move particle
        particle.mesh.position.add(particle.velocity);
        particle.velocity.multiplyScalar(0.95); // Slow down over time

        // Fade out
        particle.life -= 0.02;
        particle.mesh.material.opacity = particle.life;
        particle.mesh.material.transparent = true;

        // Scale down
        const scale = particle.life;
        particle.mesh.scale.set(scale, scale, scale);

        // Remove if dead
        if (particle.life <= 0) {
          scene.remove(particle.mesh);
          particle.mesh.geometry.dispose();
          particle.mesh.material.dispose();
          explosionParticles.splice(i, 1);
        }
      }

      if (projectile) {
        const toPlanet = projectile.position
          .clone()
          .normalize()
          .multiplyScalar(-0.02);
        projectileVelocity.add(toPlanet);
        projectile.position.add(projectileVelocity);

        // Check collision with player (suicide!) - only after projectile has traveled
        // Minimum 1 second flight time to prevent instant suicide on vertical shots
        const timeInFlight = Date.now() - projectileLaunchTime;
        if (timeInFlight > 1000 && projectile.position.distanceTo(player.position) < 1.5) {
          audio.playSFX('explosion-large', { volume: 0.4 });
          createImpactMark(projectile.position, true);
          scene.remove(projectile);
          projectile = null;
          setDefeatReason('suicide');
          defeatSuffered(); // Game over!
          audio.stopMusic();
          audio.playMusic('defeat');
          return; // Stop checking other collisions
        }

        // Check collision with targets
        let hitTarget = false;
        const currentTargets = targetsRef.current;
        for (let i = currentTargets.length - 1; i >= 0; i--) {
          if (projectile.position.distanceTo(currentTargets[i].position) < 3) {
            // Hit a target!
            const impactPosition = projectile.position.clone();
            
            audio.playSFX('hit', { volume: 0.3 });
            audio.playSFX('explosion-large', { volume: 0.4 });
            createImpactMark(impactPosition, true); // Red explosion for hit
            scene.remove(currentTargets[i]);
            currentTargets.splice(i, 1);
            scene.remove(projectile);
            projectile = null;
            hitTarget = true;
            incrementKills(); // Use store action
            
            // Check if explosion blast radius kills player
            const blastRadius = 5; // Explosion danger zone
            if (impactPosition.distanceTo(player.position) < blastRadius) {
              setDefeatReason('suicide');
              defeatSuffered(); // Killed by own explosion!
              audio.stopMusic();
              audio.playMusic('defeat');
              break; // Don't check for victory if player died
            }
            
            // Check for victory (only if player survived)
            if (currentTargets.length === 0 && gameStatus === 'playing') {
              victoryAchieved(); // Use store action
              audio.playSFX('victory', { volume: 0.5 });
              audio.stopMusic(); // Stop game music
              audio.playMusic('victory'); // Play victory theme
            }
            break;
          }
        }

        // Check collision with planet (only if didn't hit target)
        if (!hitTarget && projectile && projectile.position.length() < 20.5) {
          const impactPosition = projectile.position.clone();
          
          audio.playSFX('explosion-small', { volume: 0.3 });
          createImpactMark(impactPosition, false); // White explosion for miss
          scene.remove(projectile);
          projectile = null;
          
          // Check if explosion is close enough to kill player (blast radius)
          const blastRadius = 5; // Explosion danger zone
          if (impactPosition.distanceTo(player.position) < blastRadius) {
            setDefeatReason('suicide');
            defeatSuffered(); // Killed by own explosion!
            audio.stopMusic();
            audio.playMusic('defeat');
          }
        }

        // Remove if too far
        if (projectile && projectile.position.length() > 200) {
          scene.remove(projectile);
          projectile = null;
        }
      }

      controls.update();
      composer.render();
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      composer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      // Clean up explosion particles
      explosionParticles.forEach((particle) => {
        scene.remove(particle.mesh);
        particle.mesh.geometry.dispose();
        particle.mesh.material.dispose();
      });

      currentMount.removeChild(renderer.domElement);
    };
  }, [gameStatus]);

  const handleLaunch = () => {
    // Check if player has enough fuel to shoot
    if (!canShoot()) {
      return; // Not enough fuel
    }
    
    if (mountRef.current && mountRef.current.launchProjectile) {
      mountRef.current.launchProjectile(velocity, angle, heading);
      incrementShots(); // Use store action
      consumeFuel(5); // Consume fuel for shot
    }
  };

  // Update mountRef values when state changes
  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.velocity = velocity;
      mountRef.current.angle = angle;
      mountRef.current.heading = heading;
    }
  }, [velocity, angle, heading]);

  // Update indicator when angle or heading changes
  useEffect(() => {
    if (mountRef.current && mountRef.current.updateIndicator) {
      mountRef.current.updateIndicator(angle, heading);
    }
  }, [angle, heading]);

  // Add touch event listeners with passive: false to fix console warning
  useEffect(() => {
    const joystick = joystickRef.current;
    if (!joystick) return;

    const handleTouchStart = (e) => {
      e.preventDefault();
      setJoystickActive(true);
      const touch = e.touches[0];
      const rect = joystick.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = touch.clientX - rect.left - centerX;
      const y = touch.clientY - rect.top - centerY;
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 40;
      const clampedX = distance > maxDistance ? (x / distance) * maxDistance : x;
      const clampedY = distance > maxDistance ? (y / distance) * maxDistance : y;
      setJoystickPos({ x: clampedX, y: clampedY });
      
      keysRef.current.w = clampedY < -15;
      keysRef.current.s = clampedY > 15;
      keysRef.current.a = clampedX < -15;
      keysRef.current.d = clampedX > 15;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = joystick.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = touch.clientX - rect.left - centerX;
      const y = touch.clientY - rect.top - centerY;
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 40;
      const clampedX = distance > maxDistance ? (x / distance) * maxDistance : x;
      const clampedY = distance > maxDistance ? (y / distance) * maxDistance : y;
      setJoystickPos({ x: clampedX, y: clampedY });
      
      keysRef.current.w = clampedY < -15;
      keysRef.current.s = clampedY > 15;
      keysRef.current.a = clampedX < -15;
      keysRef.current.d = clampedX > 15;
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      setJoystickActive(false);
      setJoystickPos({ x: 0, y: 0 });
      keysRef.current.w = false;
      keysRef.current.s = false;
      keysRef.current.a = false;
      keysRef.current.d = false;
    };

    joystick.addEventListener('touchstart', handleTouchStart, { passive: false });
    joystick.addEventListener('touchmove', handleTouchMove, { passive: false });
    joystick.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      joystick.removeEventListener('touchstart', handleTouchStart);
      joystick.removeEventListener('touchmove', handleTouchMove);
      joystick.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handlePlayAgain = () => {
    if (mountRef.current && mountRef.current.createTargets && mountRef.current.resetPlanet) {
      // Reset planet surface to original state
      mountRef.current.resetPlanet();
      
      // Remove old targets
      targetsRef.current.forEach(target => {
        const scene = mountRef.current.children[0]; // Access scene from renderer
        if (scene) scene.remove(target);
      });
      
      // Create new targets
      const newTargets = mountRef.current.createTargets();
      targetsRef.current = newTargets;
      
      // Reset game state using store
      resetGame();
      startGame(); // Restart timer
      
      // Return to playing state
      useGameStore.getState().setGameStatus('playing');
      
      // Restart music
      audio.playMusic('game');
    }
  };

  // Render appropriate screen based on game status
  if (showSplash) {
    return <SplashScreen onStart={handleSplashComplete} />;
  }

  if (gameStatus === 'menu') {
    return <MainMenu />;
  }

  if (gameStatus === 'settings') {
    return <SettingsMenu />;
  }

  if (gameStatus === 'defeat') {
    return <DefeatScreen reason={defeatReason} />;
  }

  return (
    <div>
      {/* Show pause menu if paused */}
      {gameStatus === 'paused' && <PauseMenu />}
      
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      
      {/* Fuel gauge - top left */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "rgba(0,0,0,0.5)",
          color: isFuelCritical() ? "#ff3333" : "white",
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          minWidth: "120px",
        }}
      >
        <div style={{ marginBottom: "5px" }}>
          Fuel: {Math.floor(fuel)}%
        </div>
        <div
          style={{
            width: "100px",
            height: "12px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <div
            style={{
              width: `${fuel}%`,
              height: "100%",
              background: isFuelCritical()
                ? "linear-gradient(90deg, #ff0000, #ff6666)"
                : fuel < 50
                ? "linear-gradient(90deg, #ffaa00, #ffdd00)"
                : "linear-gradient(90deg, #00ff00, #44ff44)",
              transition: "width 0.3s, background 0.5s",
              boxShadow: isFuelCritical() ? "0 0 10px #ff0000" : "none",
            }}
          />
        </div>
        {isFuelCritical() && (
          <div style={{
            color: "#ff3333",
            fontSize: "12px",
            marginTop: "3px"
          }}>
            ⚠️ LOW FUEL!
          </div>
        )}
      </div>
      
      {/* Score display - top right */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "5px" }}>
          Score: {Math.floor(getCurrentScore())}
        </div>
        <div style={{ fontSize: "14px", opacity: 0.8 }}>
          Kills: {kills} | Acc: {getAccuracy().toFixed(1)}%
        </div>
      </div>
      
      {/* Launch controls - bottom right, 60% width */}
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
          left: "0px",
          maxWidth: "60%",
          marginLeft: "auto",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px",
        }}
      >
        <div>
          <label>Velocity: {velocity}</label>
          <input
            type="range"
            min="10"
            max="100"
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>Angle: {angle}</label>
          <input
            type="range"
            min="0"
            max="90"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>Heading: {heading}</label>
          <input
            type="range"
            min="0"
            max="359"
            value={heading}
            onChange={(e) => setHeading(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
        <button onClick={handleLaunch} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          Launch
        </button>
      </div>
      
      {/* Victory Dialog */}
      {victory && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.9)",
            color: "white",
            padding: "40px",
            borderRadius: "10px",
            border: "3px solid white",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h1 style={{ fontSize: "48px", margin: "0 0 20px 0" }}>VICTORY!</h1>
          <p style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
            Kills: {kills} × 100 = {kills * 100}
          </p>
          <p style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
            Shots: {shots} × -30 = {shots * -30}
          </p>
          <p style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
            Fuel Used: {Math.floor(fuelUsed)} × -0.5 = {Math.floor(fuelUsed * -0.5)}
          </p>
          <p style={{ fontSize: "20px", margin: "0 0 20px 0" }}>
            Time: {getElapsedTime()}s × -1 = -{getElapsedTime()}
          </p>
          <p style={{ fontSize: "28px", margin: "0 0 10px 0", fontWeight: "bold", borderTop: "2px solid white", paddingTop: "10px" }}>
            Final Score: {getCurrentScore()}
          </p>
          <p style={{ fontSize: "18px", margin: "0 0 30px 0", color: "#44ff44" }}>
            Accuracy: {getAccuracy().toFixed(1)}%
          </p>
          <button
            onClick={handlePlayAgain}
            style={{
              fontSize: "24px",
              padding: "15px 30px",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      {/* Virtual Joystick - bottom left */}
      <div
        ref={joystickRef}
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "120px",
          height: "120px",
        }}
        onMouseDown={(e) => {
          setJoystickActive(true);
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const x = e.clientX - rect.left - centerX;
          const y = e.clientY - rect.top - centerY;
          const distance = Math.sqrt(x * x + y * y);
          const maxDistance = 40;
          const clampedX = distance > maxDistance ? (x / distance) * maxDistance : x;
          const clampedY = distance > maxDistance ? (y / distance) * maxDistance : y;
          setJoystickPos({ x: clampedX, y: clampedY });
          
          // Update keys based on joystick position
          keysRef.current.w = clampedY < -15;
          keysRef.current.s = clampedY > 15;
          keysRef.current.a = clampedX < -15;
          keysRef.current.d = clampedX > 15;
        }}
        onMouseMove={(e) => {
          if (!joystickActive) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const x = e.clientX - rect.left - centerX;
          const y = e.clientY - rect.top - centerY;
          const distance = Math.sqrt(x * x + y * y);
          const maxDistance = 40;
          const clampedX = distance > maxDistance ? (x / distance) * maxDistance : x;
          const clampedY = distance > maxDistance ? (y / distance) * maxDistance : y;
          setJoystickPos({ x: clampedX, y: clampedY });
          
          // Update keys based on joystick position
          keysRef.current.w = clampedY < -15;
          keysRef.current.s = clampedY > 15;
          keysRef.current.a = clampedX < -15;
          keysRef.current.d = clampedX > 15;
        }}
        onMouseUp={() => {
          setJoystickActive(false);
          setJoystickPos({ x: 0, y: 0 });
          keysRef.current.w = false;
          keysRef.current.s = false;
          keysRef.current.a = false;
          keysRef.current.d = false;
        }}
        onMouseLeave={() => {
          if (joystickActive) {
            setJoystickActive(false);
            setJoystickPos({ x: 0, y: 0 });
            keysRef.current.w = false;
            keysRef.current.s = false;
            keysRef.current.a = false;
            keysRef.current.d = false;
          }
        }}
      >
        {/* Joystick base */}
        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.3)",
            border: "3px solid rgba(255,255,255,0.5)",
          }}
        />
        {/* Joystick knob */}
        <div
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.7)",
            border: "2px solid white",
            left: `${60 + joystickPos.x - 25}px`,
            top: `${60 + joystickPos.y - 25}px`,
            transition: joystickActive ? "none" : "all 0.2s ease-out",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        />
      </div>
      
      {/* Help Overlay */}
      {showHelp && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.95)",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
            border: "2px solid white",
            zIndex: 999,
            maxWidth: "400px",
          }}
        >
          <h2 style={{ margin: "0 0 20px 0", textAlign: "center" }}>CONTROLS</h2>
          <div style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <p><strong>Movement:</strong> WASD</p>
            <p><strong>Fire:</strong> Space</p>
            <p><strong>Heading:</strong> Q / E</p>
            <p><strong>Angle:</strong> R / F</p>
            <p><strong>Velocity:</strong> T / G</p>
            <p style={{ fontSize: "14px", opacity: 0.7, marginTop: "15px" }}>
              💡 Hold <strong>Shift</strong> for fine control<br />
              💡 Hold <strong>Ctrl</strong> for coarse control
            </p>
            <p style={{ fontSize: "14px", opacity: 0.7, marginTop: "10px" }}>
              Press <strong>H</strong> to toggle this help
            </p>
          </div>
          <button
            onClick={() => setShowHelp(false)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
