"use client";

import { motion } from "motion/react";

const nodes = [
  { label: "Retrieve", x: 18, y: 24, delay: 0 },
  { label: "Reason", x: 72, y: 18, delay: 0.4 },
  { label: "Sense", x: 82, y: 68, delay: 0.8 },
  { label: "Deploy", x: 30, y: 80, delay: 1.2 },
];

export default function SystemMap() {
  return (
    <div className="system-map" aria-label="Animated map of Akhilesh's engineering practice">
      <div className="map-grid" />
      <motion.div
        className="map-orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="map-orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />
      <svg className="map-lines" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M18 24 L72 18 L82 68 L30 80 Z" />
        <path d="M18 24 L82 68" />
        <path d="M72 18 L30 80" />
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="map-node"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.2, delay: node.delay, repeat: Infinity }}
        >
          <span />
          <small>{node.label}</small>
        </motion.div>
      ))}
      <motion.div
        className="map-core"
        animate={{ scale: [1, 1.025, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="core-index">AK—01</span>
        <strong>Useful<br />intelligence</strong>
        <span className="core-caption">Systems that connect models<br />to the physical world.</span>
      </motion.div>
      <div className="map-coordinate top">28.6139° N</div>
      <div className="map-coordinate bottom">77.2090° E</div>
    </div>
  );
}
