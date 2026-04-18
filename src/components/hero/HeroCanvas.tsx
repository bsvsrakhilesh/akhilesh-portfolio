"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function seededValue(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function makePoints(count: number, inner: number, outer: number, squash = 1) {
  const data = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3;
    const radius = inner + seededValue(i + 17) * (outer - inner);
    const theta = seededValue(i + 91) * Math.PI * 2;
    const phi = Math.acos(2 * seededValue(i + 203) - 1);

    data[i3] = radius * Math.sin(phi) * Math.cos(theta);
    data[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * squash;
    data[i3 + 2] = radius * Math.cos(phi);
  }

  return data;
}

const STAR_POSITIONS = makePoints(1600, 4.4, 8.6, 0.72);
const NODE_POSITIONS = makePoints(900, 1.8, 3.25, 0.82);

function BackgroundStars() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={STAR_POSITIONS.length / 3}
          array={STAR_POSITIONS}
          itemSize={3}
          args={[STAR_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#dbeafe"
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitNodes() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.07;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.18;
  });

  return (
    <points ref={ref}>
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
        color="#7dd3fc"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}

function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.25) * 0.045;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.18, 40, 40]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.1} />
    </mesh>
  );
}

function InnerCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.008;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.18;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.94, 2]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={1}
        roughness={0.16}
        metalness={0.74}
        wireframe
      />
    </mesh>
  );
}

function OuterShell() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y -= 0.004;
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.46, 1]} />
      <meshStandardMaterial
        color="#93c5fd"
        emissive="#60a5fa"
        emissiveIntensity={0.42}
        roughness={0.24}
        metalness={0.82}
        wireframe
        transparent
        opacity={0.72}
      />
    </mesh>
  );
}

function OrbitRing({
  radius,
  tube,
  speed,
  color,
  rotation,
}: {
  radius: number;
  tube: number;
  speed: number;
  color: string;
  rotation: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 18, 220]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.25}
        roughness={0.18}
        metalness={0.92}
      />
    </mesh>
  );
}

function SweepRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.55;
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.8;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.9, 0.02, 16, 180]} />
      <meshBasicMaterial color="#a7f3d0" transparent opacity={0.8} />
    </mesh>
  );
}

function AtmosphericHalo() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.035} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.85, 32, 32]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.025} />
      </mesh>
    </>
  );
}

function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.28;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.14) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.68} />
      <pointLight position={[3.4, 2.6, 4.2]} intensity={16} color="#67e8f9" />
      <pointLight
        position={[-3.6, -1.8, -2.4]}
        intensity={10}
        color="#34d399"
      />
      <pointLight position={[0, 4.4, -3]} intensity={9} color="#60a5fa" />

      <BackgroundStars />
      <OrbitNodes />
      <AtmosphericHalo />
      <CoreGlow />
      <InnerCore />
      <OuterShell />
      <SweepRing />

      <OrbitRing
        radius={2.15}
        tube={0.022}
        speed={0.0035}
        color="#dbeafe"
        rotation={[0.4, 0, 0.15]}
      />
      <OrbitRing
        radius={2.62}
        tube={0.02}
        speed={-0.0028}
        color="#93c5fd"
        rotation={[1.05, 0.15, 0.2]}
      />
      <OrbitRing
        radius={3.02}
        tube={0.018}
        speed={0.0019}
        color="#a7f3d0"
        rotation={[0.2, 0.1, 0]}
      />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="shine-mask relative h-96 w-full overflow-hidden rounded-4xl border border-white/10 bg-transparent sm:h-112 lg:h-136">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(5,8,22,0.12)_62%,rgba(5,8,22,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_18%,transparent_84%,rgba(255,255,255,0.04))]" />

      <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-cyan-200">
        neural core
      </div>

      <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-emerald-200">
        signal stable
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        live orbital field
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-12 z-20 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-12 z-20 h-px bg-linear-to-r from-transparent via-emerald-300/30 to-transparent" />

      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
