import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const SpaceBackground = () => {
    const mountRef = useRef(null);
    let animationFrameId;

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        // Resize listener for responsiveness with debounce
        const handleResize = debounce(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }, 200);
        window.addEventListener('resize', handleResize);

        // Add stars with varied size and distribution
        const starsGeometry = new THREE.BufferGeometry();
        const vertices = [];
        const sizes = [];
        const maxStars = 4000;
        for (let i = 0; i < maxStars; i++) {
            const x = (Math.random() - 0.5) * 2500;
            const y = (Math.random() - 0.5) * 2500;
            const z = (Math.random() - 0.5) * 2500;
            vertices.push(x, y, z);
            sizes.push(0.1 + Math.random() * 0.2);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, sizeAttenuation: true });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Position the camera
        camera.position.z = 5;

        // Animation loop with check for visibility
        const animate = () => {
            if (document.visibilityState === 'visible') {
                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(animate);
            }
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <BackgroundContainer ref={mountRef} />;
};

export default SpaceBackground;
