"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 900;

function seededValue(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function createNodePositions() {
  const data = new Float32Array(NODE_COUNT * 3);

  for (let i = 0; i < NODE_COUNT; i += 1) {
    const i3 = i * 3;

    const radius = 2.1 + seededValue(i + 1) * 2.2;
    const theta = seededValue(i + 101) * Math.PI * 2;
    const phi = Math.acos(2 * seededValue(i + 202) - 1);

    data[i3] = radius * Math.sin(phi) * Math.cos(theta);
    data[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
    data[i3 + 2] = radius * Math.cos(phi);
  }

  return data;
}

const NODE_POSITIONS = createNodePositions();

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.0035;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.15, 2]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={0.8}
        roughness={0.18}
        metalness={0.7}
        wireframe
      />
    </mesh>
  );
}

function Ring({
  radius,
  speed,
  color,
  rotationX,
}: {
  radius: number;
  speed: number;
  color: string;
  rotationX: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref} rotation={[rotationX, 0, 0]}>
      <torusGeometry args={[radius, 0.018, 16, 180]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.25}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
}

function NodeField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={NODE_POSITIONS.length / 3}
          array={NODE_POSITIONS}
          itemSize={3}
          args={[NODE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#93c5fd"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}

function PulseCloud() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
    ref.current.scale.set(s, s, s);
    ref.current.rotation.y -= 0.0015;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.9, 36, 36]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.045} />
    </mesh>
  );
}

function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.28) * 0.22;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.65} />
      <pointLight position={[3.5, 2.4, 4]} intensity={18} color="#67e8f9" />
      <pointLight position={[-3, -1.5, -2]} intensity={10} color="#34d399" />
      <pointLight position={[0, 4, -3]} intensity={8} color="#60a5fa" />

      <PulseCloud />
      <NodeField />
      <CoreOrb />
      <Ring radius={1.7} speed={0.004} color="#67e8f9" rotationX={0.5} />
      <Ring radius={2.2} speed={-0.0032} color="#60a5fa" rotationX={1.05} />
      <Ring radius={2.75} speed={0.0022} color="#34d399" rotationX={0.18} />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="shine-mask relative h-80 w-full overflow-hidden rounded-4xl border border-white/8 bg-transparent sm:h-96 lg:h-107.5">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(5,8,22,0.18)_68%,rgba(5,8,22,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <Canvas
        camera={{ position: [0, 0, 6], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
