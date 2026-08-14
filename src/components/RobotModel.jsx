import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const RobotModel = ({ align = 'left' }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const alignRef = useRef(align);

  useEffect(() => {
    alignRef.current = align;
  }, [align]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 480;
    let height = container.clientHeight || 480;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Prevents scroll hijacking
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1.0;
    controls.maxPolarAngle = Math.PI / 2; // Don't go underground

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const cyanGlow = new THREE.PointLight(0x06b6d4, 3.5, 10);
    cyanGlow.position.set(0, 2, 0);
    scene.add(cyanGlow);

    let mixer;
    const clock = new THREE.Clock();
    let initialY = 0;
    const loader = new GLTFLoader();
    let model;

    loader.load(
      '/models/robo_shiba.glb',
      (gltf) => {
        model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (maxDim > 0.0001 && isFinite(maxDim)) ? 3.0 / maxDim : 1.0;
        
        // Set scale first
        model.scale.set(scale, scale, scale);

        // Position model centered at origin
        model.position.x = -center.x * scale;
        initialY = -center.y * scale + 0.35; // Shift upwards significantly to prevent clipping
        model.position.y = initialY;
        model.position.z = -center.z * scale;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Set up Animation Mixer to play embedded GLTF animations
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        scene.add(model);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading robo_shiba.glb:', err);
        setError('Failed to load 3D Model');
        setLoading(false);
      }
    );

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      if (model) {
        const time = clock.getElapsedTime();
        // Gentle bobbing effect (hovering up and down)
        model.position.y = initialY + Math.sin(time * 1.6) * 0.12;
        
        // Smoothly rotate model to face inward depending on its side
        const targetRotY = alignRef.current === 'left' ? 0.8 : -0.8;
        model.rotation.y += (targetRotY - model.rotation.y) * 0.08;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      controls.dispose();
      renderer.dispose();
      if (mixer) mixer.stopAllAction();

      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="w-6 h-6 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[10px] text-indigo-400 font-bold mt-2 animate-pulse">Loading RoboShiba...</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-400 text-xs font-semibold z-20">
          {error}
        </div>
      )}
      <div ref={containerRef} className="w-full h-full absolute inset-0" />
    </div>
  );
};

export default RobotModel;
