import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import './Scene3D.css';

function Model({ url }) {
    const { scene } = useGLTF(url);
    const ref = useRef();

    useFrame((state, delta) => {
        const { mouse } = state;
        if (ref.current) {
            // Continuous rotation (revolving)
            ref.current.rotation.y += delta * 0.02;

            // Subtle mouse tilt on X-axis
            ref.current.rotation.x = -mouse.y * 0.05;
        }
    });

    return <primitive
        ref={ref}
        object={scene}
        scale={0.8}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.15, 0]}
    />;
}

// Preload the model
useGLTF.preload('/models/f1.glb');

export default function Scene3D() {
    return (
        <div className="scene-3d-container">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />

                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <directionalLight position={[-5, 0, 5]} intensity={0.8} />
                <directionalLight position={[0, 5, -5]} intensity={1} color="#00f0ff" />

                <Suspense fallback={null}>
                    <Model url="/models/f1.glb" />
                </Suspense>
            </Canvas>
        </div>
    );
}
