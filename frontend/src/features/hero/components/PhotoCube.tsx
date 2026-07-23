'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';


const images = [
    '/images/medApp.png',
    'https://picsum.photos/seed/face2/400/400',
    'https://picsum.photos/seed/face3/400/400',
    'https://picsum.photos/seed/face4/400/400',
    'https://picsum.photos/seed/face5/400/400',
    'https://picsum.photos/seed/face6/400/400',
];

function Cube() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Load all textures
    const textures = useLoader(THREE.TextureLoader, images);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.4;
        meshRef.current.rotation.y = time * 0.3;
        meshRef.current.rotation.z = time * 0.1;
    });

    return (
        <mesh ref={meshRef} scale={2.5}>
            <boxGeometry args={[1, 1, 1]} />
            {textures.map((texture, index) => (
                <meshStandardMaterial
                    key={index}
                    attach={`material-${index}`}
                    map={texture}
                    roughness={0.1}
                    metalness={0.2}
                />
            ))}
        </mesh>
    );
}

export default function PhotoCube() {
    const [isMounted, setIsMounted] = useState(false);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full aspect-square" />;

    return (
        <div className="w-full max-w-[280px] md:max-w-[340px] aspect-square mx-auto relative z-10">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Float
                    speed={1.5}
                    rotationIntensity={0.5}
                    floatIntensity={1.5}
                    floatingRange={[-0.5, 0.5]}
                >
                    <Cube />
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
