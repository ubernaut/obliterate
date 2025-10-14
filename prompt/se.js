// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ScorchedEarth3D = () => {
  const containerRef = useRef(null);
  const [velocity, setVelocity] = useState(50);
  const [angleX, setAngleX] = useState(45);
  const [angleY, setAngleY] = useState(0);
  const [score, setScore] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [isDraggingJoystick, setIsDraggingJoystick] = useState(false);
  const [angleJoystickPos, setAngleJoystickPos] = useState({ x: 0, y: 0 });
  const [isDraggingAngleJoystick, setIsDraggingAngleJoystick] = useState(false);

  // Use refs to store current slider values and joystick
  const velocityRef = useRef(velocity);
  const angleXRef = useRef(angleX);
  const angleYRef = useRef(angleY);
  const joystickPosRef = useRef({ x: 0, y: 0 });

  // Update refs when state changes
  useEffect(() => {
    velocityRef.current = velocity;
  }, [velocity]);

  useEffect(() => {
    angleXRef.current = angleX;
  }, [angleX]);

  useEffect(() => {
    angleYRef.current = angleY;
  }, [angleY]);

  useEffect(() => {
    joystickPosRef.current = joystickPos;
  }, [joystickPos]);

  // Update angleY based on angle joystick position
  // The joystick direction directly sets the angle
  useEffect(() => {
    const magnitude = Math.sqrt(angleJoystickPos.x * angleJoystickPos.x + angleJoystickPos.y * angleJoystickPos.y);
    if (magnitude > 0.1) {
      // Calculate angle: up = 0°, left = 90°, down = 180°, right = 270° (counterclockwise)
      let angle = Math.atan2(-angleJoystickPos.x, -angleJoystickPos.y) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      setAngleY(Math.round(angle));
    }
  }, [angleJoystickPos]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 30, 80);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Manual orbit controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let cameraDistance = 80;
    let cameraTheta = 0; // horizontal rotation
    let cameraPhi = Math.PI / 6; // vertical rotation

    const updateCameraPosition = () => {
      camera.position.x = cameraDistance * Math.sin(cameraPhi) * Math.cos(cameraTheta);
      camera.position.y = cameraDistance * Math.cos(cameraPhi);
      camera.position.z = cameraDistance * Math.sin(cameraPhi) * Math.sin(cameraTheta);
      camera.lookAt(0, 0, 0);
    };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      
      cameraTheta += deltaX * 0.01;
      cameraPhi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraPhi + deltaY * 0.01));
      
      updateCameraPosition();
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      cameraDistance = Math.max(30, Math.min(150, cameraDistance + e.deltaY * 0.1));
      updateCameraPosition();
    };

    // Touch controls for mobile
    let lastTouchDistance = 0;
    
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      } else if (e.touches.length === 2) {
        // Calculate initial distance for pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      
      if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        
        cameraTheta += deltaX * 0.01;
        cameraPhi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraPhi + deltaY * 0.01));
        
        updateCameraPosition();
        
        previousMousePosition = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      } else if (e.touches.length === 2) {
        // Pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (lastTouchDistance > 0) {
          const delta = lastTouchDistance - distance;
          cameraDistance = Math.max(30, Math.min(150, cameraDistance + delta * 0.2));
          updateCameraPosition();
        }
        
        lastTouchDistance = distance;
      }
    };

    const onTouchEnd = (e) => {
      if (e.touches.length === 0) {
        isDragging = false;
        lastTouchDistance = 0;
      }
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    updateCameraPosition();

    // Audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // 8-bit missile launch sound
    const playLaunchSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    };

    // 8-bit explosion sound
    const playExplosionSound = () => {
      // Create noise for explosion
      const bufferSize = audioContext.sampleRate * 0.3;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const noiseFilter = audioContext.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(800, audioContext.currentTime);
      noiseFilter.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.3);
      
      const noiseGain = audioContext.createGain();
      noiseGain.gain.setValueAtTime(0.4, audioContext.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(audioContext.destination);
      
      noise.start(audioContext.currentTime);
      noise.stop(audioContext.currentTime + 0.3);
    };

    // 8-bit success sound (for hitting targets)
    const playSuccessSound = () => {
      const times = [0, 0.1, 0.2];
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (major chord arpeggio)
      
      times.forEach((time, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(frequencies[index], audioContext.currentTime + time);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + time);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + time + 0.15);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start(audioContext.currentTime + time);
        oscillator.stop(audioContext.currentTime + time + 0.15);
      });
    };

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // Add black stars to the background
    const starGeometry = new THREE.SphereGeometry(0.3, 4, 4);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    
    for (let i = 0; i < 200; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      
      // Random position in a sphere around the scene
      const radius = 100 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      star.position.x = radius * Math.sin(phi) * Math.cos(theta);
      star.position.y = radius * Math.cos(phi);
      star.position.z = radius * Math.sin(phi) * Math.sin(theta);
      
      scene.add(star);
    }

    // Create flat shading material for the planet
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x404040,
      flatShading: true,
      roughness: 0.8,
      metalness: 0.2
    });

    // Planet with modifiable geometry
    const planetGeometry = new THREE.SphereGeometry(20, 64, 64);
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);
    
    // Store original vertex positions for deformation
    const originalPositions = planetGeometry.attributes.position.array.slice();

    // Player (green sphere indicator)
    const playerGeometry = new THREE.SphereGeometry(1, 8, 8);
    const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    
    // Position player on planet surface
    let playerTheta = Math.PI / 4;
    let playerPhi = Math.PI / 2;
    
    const updatePlayerPosition = () => {
      const playerPos = new THREE.Vector3(
        21 * Math.sin(playerPhi) * Math.cos(playerTheta),
        21 * Math.cos(playerPhi),
        21 * Math.sin(playerPhi) * Math.sin(playerTheta)
      );
      player.position.copy(playerPos);
      player.lookAt(playerPos.clone().multiplyScalar(2));
      if (typeof updateArrowDirection !== 'undefined') {
        updateArrowDirection();
      }
    };
    
    scene.add(player);

    // Direction indicator cylinder (green)
    const cylinderGeometry = new THREE.CylinderGeometry(0.2, 0.2, 7.5, 8);
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const directionCylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    scene.add(directionCylinder);

    // Function to update cylinder direction
    const updateArrowDirection = () => {
      const angX = angleXRef.current;
      const angY = angleYRef.current;
      
      const angXRad = (angX * Math.PI) / 180;
      const angYRad = (angY * Math.PI) / 180;
      
      const playerNormal = player.position.clone().normalize();
      const tangent = new THREE.Vector3(-playerNormal.y, playerNormal.x, 0).normalize();
      const bitangent = new THREE.Vector3().crossVectors(playerNormal, tangent).normalize();
      
      const direction = new THREE.Vector3();
      direction.add(playerNormal.clone().multiplyScalar(Math.cos(angXRad)));
      direction.add(tangent.clone().multiplyScalar(Math.sin(angXRad) * Math.cos(angYRad)));
      direction.add(bitangent.clone().multiplyScalar(Math.sin(angXRad) * Math.sin(angYRad)));
      direction.normalize();
      
      // Position cylinder at player position plus half its length in the direction
      const cylinderLength = 7.5;
      directionCylinder.position.copy(player.position.clone().add(direction.clone().multiplyScalar(cylinderLength / 2)));
      
      // Rotate cylinder to point in direction
      directionCylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    };

    updatePlayerPosition();
    updateArrowDirection();

    // Create targets around the planet (red)
    const targets = [];
    const targetMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    
    for (let i = 0; i < 12; i++) {
      // Distribute targets using spherical coordinates for better coverage
      const theta = Math.random() * Math.PI * 2; // Horizontal angle
      const phi = Math.acos(2 * Math.random() - 1); // Vertical angle (uniform distribution)
      
      const targetGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 8);
      const target = new THREE.Mesh(targetGeometry, targetMaterial);
      
      const targetPos = new THREE.Vector3(
        21 * Math.sin(phi) * Math.cos(theta),
        21 * Math.cos(phi),
        21 * Math.sin(phi) * Math.sin(theta)
      );
      
      target.position.copy(targetPos);
      target.lookAt(targetPos.clone().multiplyScalar(2));
      scene.add(target);
      targets.push(target);
    }

    // Projectile
    let projectile = null;
    let projectileVelocity = new THREE.Vector3();
    let isProjectileActive = false;
    const impactMarks = [];

    // Function to deform planet at impact point
    const deformPlanet = (impactPoint, craterDepth = 4) => {
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
            const falloff = 1 - (distance / rimStart);
            const deformAmount = craterDepth * falloff * falloff;
            vertex.sub(direction.multiplyScalar(deformAmount));
          } else {
            // Outer rim - push outward
            const rimFalloff = (distance - rimStart) / (craterRadius - rimStart);
            const rimHeight = craterDepth * 0.6 * (1 - rimFalloff * rimFalloff);
            vertex.add(direction.multiplyScalar(rimHeight));
          }
          
          positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
      }
      
      positions.needsUpdate = true;
      planetGeometry.computeVertexNormals();
    };

    // Function to create impact mark
    const createImpactMark = (position, isHit) => {
      // Play explosion sound
      playExplosionSound();
      
      // Play success sound if hit a target
      if (isHit) {
        playSuccessSound();
      }
      
      // Deform the planet at impact point
      deformPlanet(position, isHit ? 2.5 : 1.5);
      
      // Create explosion effect
      createExplosion(position, isHit);
    };

    // Function to create explosion particles
    const explosionParticles = [];
    const createExplosion = (position, isHit) => {
      const particleCount = 30;
      const particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.4, 4, 4);
        const particleMaterial = new THREE.MeshBasicMaterial({ 
          color: isHit ? 0xff0000 : 0xffffff 
        });
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        
        particle.position.copy(position);
        
        // Random velocity in all directions
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize().multiplyScalar(Math.random() * 3 + 1);
        
        scene.add(particle);
        particles.push({
          mesh: particle,
          velocity: velocity,
          life: 1.0
        });
      }
      
      explosionParticles.push(...particles);
    };

    // Launch function
    const launch = () => {
      if (isProjectileActive) return;

      // Play launch sound
      playLaunchSound();

      // Read current values from refs
      const vel = velocityRef.current;
      const angX = angleXRef.current;
      const angY = angleYRef.current;

      // Create projectile
      const projGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const projMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      projectile = new THREE.Mesh(projGeometry, projMaterial);
      projectile.position.copy(player.position);
      scene.add(projectile);

      // Calculate launch direction
      const angXRad = (angX * Math.PI) / 180;
      const angYRad = (angY * Math.PI) / 180;
      
      const playerNormal = player.position.clone().normalize();
      const tangent = new THREE.Vector3(-playerNormal.y, playerNormal.x, 0).normalize();
      const bitangent = new THREE.Vector3().crossVectors(playerNormal, tangent).normalize();
      
      const direction = new THREE.Vector3();
      direction.add(playerNormal.clone().multiplyScalar(Math.cos(angXRad)));
      direction.add(tangent.clone().multiplyScalar(Math.sin(angXRad) * Math.cos(angYRad)));
      direction.add(bitangent.clone().multiplyScalar(Math.sin(angXRad) * Math.sin(angYRad)));
      direction.normalize();

      projectileVelocity.copy(direction.multiplyScalar(vel / 10));
      isProjectileActive = true;
      setIsLaunching(true);
    };

    // Move player function based on joystick
    const movePlayer = () => {
      const joyPos = joystickPosRef.current;
      
      // Only move if joystick is being used
      if (joyPos.x === 0 && joyPos.y === 0) return;
      
      // Calculate movement direction from joystick position
      const magnitude = Math.sqrt(joyPos.x * joyPos.x + joyPos.y * joyPos.y);
      if (magnitude < 0.1) return; // Dead zone
      
      // Normalize and scale movement - reduced to 1/10 speed
      const moveDistance = 0.005 * magnitude;
      
      // Joystick x controls theta (horizontal), y controls phi (vertical)
      playerTheta -= moveDistance * joyPos.x;
      playerPhi += moveDistance * joyPos.y;
      
      // Keep phi in valid range [0, PI]
      playerPhi = Math.max(0.1, Math.min(Math.PI - 0.1, playerPhi));
      
      updatePlayerPosition();
    };

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Continuous player movement based on joystick
      movePlayer();

      // Update arrow direction based on current slider values
      if (!isProjectileActive) {
        updateArrowDirection();
      } else {
        // Hide cylinder when projectile is active
        directionCylinder.visible = false;
      }

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

      // Update projectile physics
      if (isProjectileActive && projectile) {
        // Apply gravity toward planet center
        const toPlanet = projectile.position.clone().normalize().multiplyScalar(-0.5);
        projectileVelocity.add(toPlanet);
        projectile.position.add(projectileVelocity);

        // Check collision with targets first
        let hitTarget = false;
        for (let i = targets.length - 1; i >= 0; i--) {
          if (projectile.position.distanceTo(targets[i].position) < 3) {
            createImpactMark(projectile.position, true); // Red mark for hit
            scene.remove(targets[i]);
            targets.splice(i, 1);
            scene.remove(projectile);
            projectile = null;
            isProjectileActive = false;
            directionCylinder.visible = true;
            setIsLaunching(false);
            setScore(prev => prev + 100);
            hitTarget = true;
            break;
          }
        }

        // Check collision with planet (only if didn't hit target)
        if (!hitTarget && projectile && projectile.position.length() < 20.5) {
          createImpactMark(projectile.position, false); // Black mark for miss
          scene.remove(projectile);
          projectile = null;
          isProjectileActive = false;
          directionCylinder.visible = true;
          setIsLaunching(false);
        }

        // Remove if too far
        if (projectile && projectile.position.length() > 200) {
          scene.remove(projectile);
          projectile = null;
          isProjectileActive = false;
          directionCylinder.visible = true;
          setIsLaunching(false);
        }
      }

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Expose launch function
    containerRef.current.launchProjectile = launch;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      
      // Clean up audio context
      if (audioContext.state !== 'closed') {
        audioContext.close();
      }
      
      // Clean up impact marks
      impactMarks.forEach(mark => {
        scene.remove(mark);
        mark.geometry.dispose();
        mark.material.dispose();
      });
      
      // Clean up explosion particles
      explosionParticles.forEach(particle => {
        scene.remove(particle.mesh);
        particle.mesh.geometry.dispose();
        particle.mesh.material.dispose();
      });
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleLaunch = () => {
    if (containerRef.current && containerRef.current.launchProjectile) {
      containerRef.current.launchProjectile();
    }
  };

  // Movement joystick handlers
  const joystickRadius = 50;
  const knobRadius = 20;
  
  const handleJoystickStart = (clientX, clientY, rect) => {
    setIsDraggingJoystick(true);
    handleJoystickMove(clientX, clientY, rect);
  };

  const handleJoystickMove = (clientX, clientY, rect) => {
    if (!isDraggingJoystick && clientX === undefined) return;
    
    const centerX = rect.left + joystickRadius;
    const centerY = rect.top + joystickRadius;
    
    let deltaX = clientX - centerX;
    let deltaY = clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = joystickRadius - knobRadius;
    
    if (distance > maxDistance) {
      deltaX = (deltaX / distance) * maxDistance;
      deltaY = (deltaY / distance) * maxDistance;
    }
    
    setJoystickPos({
      x: deltaX / maxDistance,
      y: deltaY / maxDistance
    });
  };

  const handleJoystickEnd = () => {
    setIsDraggingJoystick(false);
    setJoystickPos({ x: 0, y: 0 });
  };

  // Angle joystick handlers (for Y angle control)
  const handleAngleJoystickStart = (clientX, clientY, rect) => {
    setIsDraggingAngleJoystick(true);
    handleAngleJoystickMove(clientX, clientY, rect);
  };

  const handleAngleJoystickMove = (clientX, clientY, rect) => {
    if (!isDraggingAngleJoystick && clientX === undefined) return;
    
    const centerX = rect.left + joystickRadius;
    const centerY = rect.top + joystickRadius;
    
    let deltaX = clientX - centerX;
    let deltaY = clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = joystickRadius - knobRadius;
    
    if (distance > maxDistance) {
      deltaX = (deltaX / distance) * maxDistance;
      deltaY = (deltaY / distance) * maxDistance;
    }
    
    setAngleJoystickPos({
      x: deltaX / maxDistance,
      y: deltaY / maxDistance
    });
  };

  const handleAngleJoystickEnd = () => {
    setIsDraggingAngleJoystick(false);
    // Reset to center like the movement joystick
    setAngleJoystickPos({ x: 0, y: 0 });
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', background: '#000' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Joystick */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          width: `${joystickRadius * 2}px`,
          height: `${joystickRadius * 2}px`,
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.1)',
          touchAction: 'none',
          userSelect: 'none',
          backdropFilter: 'blur(5px)'
        }}
        onMouseDown={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          handleJoystickStart(e.clientX, e.clientY, rect);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          const rect = e.currentTarget.getBoundingClientRect();
          const touch = e.touches[0];
          handleJoystickStart(touch.clientX, touch.clientY, rect);
        }}
      >
        {/* Center crosshair */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '20px',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)'
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '2px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)'
        }} />
        
        {/* Directional indicators - rotate left/right */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '5px',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>▲</div>
        <div style={{
          position: 'absolute',
          left: '50%',
          bottom: '5px',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>▼</div>
        <div style={{
          position: 'absolute',
          left: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>◄</div>
        <div style={{
          position: 'absolute',
          right: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>►</div>
        
        {/* Knob */}
        <div
          style={{
            position: 'absolute',
            width: `${knobRadius * 2}px`,
            height: `${knobRadius * 2}px`,
            borderRadius: '50%',
            background: isDraggingJoystick 
              ? 'linear-gradient(135deg, rgba(100, 200, 255, 0.9), rgba(50, 150, 255, 0.9))'
              : 'linear-gradient(135deg, rgba(200, 200, 200, 0.9), rgba(150, 150, 150, 0.9))',
            border: '3px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5), inset 0 -2px 5px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)',
            left: `${joystickRadius - knobRadius + joystickPos.x * (joystickRadius - knobRadius)}px`,
            top: `${joystickRadius - knobRadius + joystickPos.y * (joystickRadius - knobRadius)}px`,
            transition: isDraggingJoystick ? 'none' : 'all 0.2s ease-out',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Global mouse/touch handlers for joystick */}
      {isDraggingJoystick && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999
            }}
            onMouseMove={(e) => {
              const joystickEl = document.querySelector('[style*="bottom: 30px"]');
              if (joystickEl) {
                const rect = joystickEl.getBoundingClientRect();
                handleJoystickMove(e.clientX, e.clientY, rect);
              }
            }}
            onMouseUp={handleJoystickEnd}
            onTouchMove={(e) => {
              e.preventDefault();
              const joystickEl = document.querySelector('[style*="bottom: 30px"]');
              if (joystickEl) {
                const rect = joystickEl.getBoundingClientRect();
                const touch = e.touches[0];
                handleJoystickMove(touch.clientX, touch.clientY, rect);
              }
            }}
            onTouchEnd={handleJoystickEnd}
          />
        </>
      )}
      
      {/* Overlay Controls */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        padding: '20px', 
        background: 'rgba(0, 0, 0, 0.75)', 
        color: '#fff',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        maxWidth: '280px'
      }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>Scorched Earth 3D</h1>
        <p style={{ margin: '0 0 15px 0', fontSize: '11px', color: '#aaa' }}>
          Drag • Scroll/Pinch to zoom
        </p>

        <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f0' }}>
            Score: {score}
          </span>
        </div>
      </div>
      
      {/* Velocity Slider - Above Angle Joystick */}
      <div style={{
        position: 'absolute',
        right: '20px',
        bottom: '160px',
        padding: '15px',
        background: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        minWidth: '120px'
      }}>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Velocity: {velocity}
        </label>
        <input
          type="range"
          min="10"
          max="100"
          value={velocity}
          onChange={(e) => setVelocity(Number(e.target.value))}
          disabled={isLaunching}
          style={{ width: '100%', opacity: isLaunching ? 0.5 : 1, cursor: isLaunching ? 'not-allowed' : 'pointer' }}
        />
      </div>
      
      {/* Angle X Slider - Above Movement Joystick */}
      <div style={{
        position: 'absolute',
        left: '20px',
        bottom: '140px',
        padding: '15px',
        background: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        minWidth: '120px'
      }}>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          Angle X: {angleX}°
        </label>
        <input
          type="range"
          min="-90"
          max="90"
          value={angleX}
          onChange={(e) => setAngleX(Number(e.target.value))}
          disabled={isLaunching}
          style={{ width: '100%', opacity: isLaunching ? 0.5 : 1, cursor: isLaunching ? 'not-allowed' : 'pointer' }}
        />
      </div>
      
      {/* Fire Button - Bottom Center */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <button
          onClick={handleLaunch}
          disabled={isLaunching}
          style={{
            padding: '10px 25px',
            fontSize: '16px',
            background: isLaunching ? '#555' : '#ff4444',
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '8px',
            cursor: isLaunching ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          {isLaunching ? 'LAUNCHING...' : 'FIRE!'}
        </button>
      </div>

      {/* Angle Joystick - Lower Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          width: `${joystickRadius * 2}px`,
          height: `${joystickRadius * 2}px`,
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.6)',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.1)',
          touchAction: 'none',
          userSelect: 'none',
          backdropFilter: 'blur(5px)'
        }}
        onMouseDown={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          handleAngleJoystickStart(e.clientX, e.clientY, rect);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          const rect = e.currentTarget.getBoundingClientRect();
          const touch = e.touches[0];
          handleAngleJoystickStart(touch.clientX, touch.clientY, rect);
        }}
      >
        {/* Center crosshair */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '20px',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)'
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '2px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)'
        }} />
        
        {/* Label */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '-25px',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontSize: '11px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
        }}>
          Angle Y: {angleY}°
        </div>
        
        {/* Directional indicators */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '5px',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>▲</div>
        <div style={{
          position: 'absolute',
          left: '50%',
          bottom: '5px',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>▼</div>
        <div style={{
          position: 'absolute',
          left: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>◄</div>
        <div style={{
          position: 'absolute',
          right: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '10px',
          fontWeight: 'bold'
        }}>►</div>
        
        {/* Knob */}
        <div
          style={{
            position: 'absolute',
            width: `${knobRadius * 2}px`,
            height: `${knobRadius * 2}px`,
            borderRadius: '50%',
            background: isDraggingAngleJoystick 
              ? 'linear-gradient(135deg, rgba(255, 200, 100, 0.9), rgba(255, 150, 50, 0.9))'
              : 'linear-gradient(135deg, rgba(200, 200, 200, 0.9), rgba(150, 150, 150, 0.9))',
            border: '3px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5), inset 0 -2px 5px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3)',
            left: `${joystickRadius - knobRadius + angleJoystickPos.x * (joystickRadius - knobRadius)}px`,
            top: `${joystickRadius - knobRadius + angleJoystickPos.y * (joystickRadius - knobRadius)}px`,
            transition: isDraggingAngleJoystick ? 'none' : 'background 0.2s ease-out',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Global mouse/touch handlers for angle joystick */}
      {isDraggingAngleJoystick && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998
            }}
            onMouseMove={(e) => {
              const joystickEl = document.querySelectorAll('[style*="bottom: 30px"]')[1];
              if (joystickEl) {
                const rect = joystickEl.getBoundingClientRect();
                handleAngleJoystickMove(e.clientX, e.clientY, rect);
              }
            }}
            onMouseUp={handleAngleJoystickEnd}
            onTouchMove={(e) => {
              e.preventDefault();
              const joystickEl = document.querySelectorAll('[style*="bottom: 30px"]')[1];
              if (joystickEl) {
                const rect = joystickEl.getBoundingClientRect();
                const touch = e.touches[0];
                handleAngleJoystickMove(touch.clientX, touch.clientY, rect);
              }
            }}
            onTouchEnd={handleAngleJoystickEnd}
          />
        </>
      )}
    </div>
  );
};

export default ScorchedEarth3D;
