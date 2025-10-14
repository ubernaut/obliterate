import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import "./App.css";

function App() {
  const mountRef = useRef(null);
  const [velocity, setVelocity] = useState(50);
  const [angle, setAngle] = useState(45);
  const [heading, setHeading] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const currentMount = mountRef.current;

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
      4,
      scene,
      camera,
      options,
    );
    composer.addPass(renderPixelatedPass);
    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Planet with modifiable geometry
    //    const planetGeometry = new THREE.SphereGeometry(20, 32, 32);
    const planetGeometry = new THREE.IcosahedronGeometry(20, 6);
    const planetMaterial = new THREE.MeshPhongMaterial({
      color: 0x222222,
      flatShading: true,
      //roughness: 0.8,
      //metalness: 0.2
    });
    const edgesGeometry = new THREE.EdgesGeometry(planetGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x330000 }); // Red color for edges
    const sphereEdges = new THREE.LineSegments(edgesGeometry, lineMaterial);
    scene.add(sphereEdges);

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

    // Create targets around the planet (red cylinders)
    const targets = [];
    const targetMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

    for (let i = 0; i < 12; i++) {
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

    // Projectile
    let projectile = null;
    let projectileVelocity = new THREE.Vector3();

    // Explosion particles
    const explosionParticles = [];

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

      const projGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      const projMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      projectile = new THREE.Mesh(projGeometry, projMaterial);
      projectile.position.copy(player.position);
      scene.add(projectile);

      const angleRad = (ang * Math.PI) / 180;
      const headingRad = (head * Math.PI) / 180; // 0° = North, 90° = East
      const scaledVel = vel / 100; // Reduced to 1/10th speed

      const playerNormal = player.position.clone().normalize();

      // Use a reference vector that won't be parallel to the normal
      let refVector = new THREE.Vector3(0, 1, 0);
      if (Math.abs(playerNormal.dot(refVector)) > 0.9) {
        refVector = new THREE.Vector3(1, 0, 0);
      }

      const tangent = new THREE.Vector3()
        .crossVectors(refVector, playerNormal)
        .normalize();
      const bitangent = new THREE.Vector3()
        .crossVectors(playerNormal, tangent)
        .normalize();

      const direction = new THREE.Vector3();
      direction.add(playerNormal.clone().multiplyScalar(Math.sin(angleRad))); // sin for normal: 0° = 0, 90° = 1
      direction.add(
        tangent
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.sin(headingRad)),
      ); // sin for East component
      direction.add(
        bitangent
          .clone()
          .multiplyScalar(Math.cos(angleRad) * Math.cos(headingRad)),
      ); // cos for North component
      direction.normalize();

      projectileVelocity.copy(direction.multiplyScalar(scaledVel));
    };

    mountRef.current.launchProjectile = launchProjectile;

    // Keyboard controls with key state tracking
    const keys = { w: false, a: false, s: false, d: false };

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key in keys) {
        keys[key] = true;
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

    // Update player position based on key states
    const updatePlayerPosition = () => {
      const speed = 0.005; // Reduced to 1/10th speed
      const radius = 21;
      const currentPos = player.position.clone().normalize();

      // Calculate current spherical coordinates
      let theta = Math.atan2(currentPos.x, currentPos.z);
      let phi = Math.acos(currentPos.y); // currentPos is already normalized, so y is in [-1, 1]

      if (keys.w) phi -= speed; // Move north
      if (keys.s) phi += speed; // Move south
      if (keys.a) theta -= speed; // Move west
      if (keys.d) theta += speed; // Move east

      // Clamp phi to valid range
      phi = Math.max(0.01, Math.min(Math.PI - 0.01, phi));

      // Convert back to Cartesian coordinates
      player.position.x = radius * Math.sin(phi) * Math.sin(theta);
      player.position.y = radius * Math.cos(phi);
      player.position.z = radius * Math.sin(phi) * Math.cos(theta);
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

        // Check collision with targets first
        let hitTarget = false;
        for (let i = targets.length - 1; i >= 0; i--) {
          if (projectile.position.distanceTo(targets[i].position) < 3) {
            // Hit a target!
            createImpactMark(projectile.position, true); // Red explosion for hit
            scene.remove(targets[i]);
            targets.splice(i, 1);
            scene.remove(projectile);
            projectile = null;
            hitTarget = true;
            setScore(prevScore => prevScore + 1); // Increment score
            break;
          }
        }

        // Check collision with planet (only if didn't hit target)
        if (!hitTarget && projectile && projectile.position.length() < 20.5) {
          createImpactMark(projectile.position, false); // White explosion for miss
          scene.remove(projectile);
          projectile = null;
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
  }, []);

  const handleLaunch = () => {
    if (mountRef.current && mountRef.current.launchProjectile) {
      mountRef.current.launchProjectile(velocity, angle, heading);
    }
  };

  return (
    <div>
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Score: {score}
      </div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
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
          />
        </div>
        <button onClick={handleLaunch}>Launch</button>
      </div>
    </div>
  );
}

export default App;
