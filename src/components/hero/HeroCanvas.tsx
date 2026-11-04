"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function seededValue(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function makeCloud(count: number, inner: number, outer: number, squash = 1) {
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

const STAR_POSITIONS = makeCloud(1900, 4.4, 9.2, 0.74);
const NODE_POSITIONS = makeCloud(1100, 1.8, 3.6, 0.84);

function BackgroundStars() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
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
        color="#e2e8f0"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.85}
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
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.16;
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
        size={0.034}
        sizeAttenuation
        transparent
        opacity={0.96}
        depthWrite={false}
      />
    </points>
  );
}

function CorePulse() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.15, 40, 40]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
    </mesh>
  );
}

function InnerCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.009;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.15;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.92, 2]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={1.05}
        roughness={0.14}
        metalness={0.76}
        wireframe
      />
    </mesh>
  );
}

function CoreShell() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y -= 0.004;
    ref.current.rotation.z += 0.002;
    ref.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.015,
    );
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.42, 1]} />
      <meshStandardMaterial
        color="#93c5fd"
        emissive="#60a5fa"
        emissiveIntensity={0.42}
        roughness={0.22}
        metalness={0.84}
        wireframe
        transparent
        opacity={0.72}
      />
    </mesh>
  );
}

function AtmosphereShell() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[2.12, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.04} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.72, 32, 32]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.025} />
      </mesh>
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.016} />
      </mesh>
    </>
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
        emissiveIntensity={1.28}
        roughness={0.16}
        metalness={0.92}
      />
    </mesh>
  );
}

function ScanRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.18) * 0.62;
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.9;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.9, 0.02, 16, 180]} />
      <meshBasicMaterial color="#a7f3d0" transparent opacity={0.78} />
    </mesh>
  );
}

function SatelliteSwarm() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.45;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.22) * 0.18;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.75;
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.28;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={innerRef}>
        <mesh position={[2.55, 0.22, 0]}>
          <sphereGeometry args={[0.07, 18, 18]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
        <mesh position={[-1.8, 1.05, 0.8]}>
          <sphereGeometry args={[0.06, 18, 18]} />
          <meshBasicMaterial color="#93c5fd" />
        </mesh>
        <mesh position={[0.65, -2.25, -0.55]}>
          <sphereGeometry args={[0.065, 18, 18]} />
          <meshBasicMaterial color="#a7f3d0" />
        </mesh>
        <mesh position={[-2.15, -0.55, -0.95]}>
          <sphereGeometry args={[0.05, 18, 18]} />
          <meshBasicMaterial color="#dbeafe" />
        </mesh>
      </group>
    </group>
  );
}

function ReactorGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.24;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.13) * 0.07;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <pointLight position={[3.8, 2.8, 4.2]} intensity={18} color="#67e8f9" />
      <pointLight
        position={[-3.5, -1.8, -2.4]}
        intensity={10}
        color="#34d399"
      />
      <pointLight position={[0, 4.6, -3.2]} intensity={9} color="#60a5fa" />

      <BackgroundStars />
      <OrbitNodes />
      <AtmosphereShell />
      <CorePulse />
      <InnerCore />
      <CoreShell />
      <ScanRing />
      <SatelliteSwarm />

      <OrbitRing
        radius={2.1}
        tube={0.022}
        speed={0.0038}
        color="#dbeafe"
        rotation={[0.42, 0, 0.16]}
      />
      <OrbitRing
        radius={2.62}
        tube={0.02}
        speed={-0.0029}
        color="#93c5fd"
        rotation={[1.02, 0.14, 0.18]}
      />
      <OrbitRing
        radius={3.06}
        tube={0.018}
        speed={0.002}
        color="#a7f3d0"
        rotation={[0.22, 0.1, 0]}
      />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="panel-glow-edge relative h-96 w-full overflow-hidden rounded-4xl border border-slate-200 bg-transparent sm:h-112 lg:h-136">
      <div className="hero-vignette" />
      <div className="hero-scanlines" />
      <div className="hero-beam" />
      <div className="hud-corners" />
      <div className="rotating-halo" />

      <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-cyan-300 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-cyan-800">
        retrieval core
      </div>

      <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-blue-300 bg-blue-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-blue-800 signal-flicker">
        vision rail
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-600">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        sensor systems
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-600">
        architecture-led
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-12 z-20 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-12 z-20 h-px bg-linear-to-r from-transparent via-emerald-300/30 to-transparent" />

      <Canvas
        camera={{ position: [0, 0, 5.9], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ReactorGroup />
      </Canvas>
    </div>
  );
}
