"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const nodes = [
  {
    label: "Retrieve",
    x: 18,
    y: 24,
    title: "Build a searchable knowledge base",
    detail: "Ingestion, deduplication, and hybrid search for PDF, DOCX, and web content.",
    href: "/projects/project-scientist-iit-delhi-cas-tripc",
  },
  {
    label: "Reason",
    x: 72,
    y: 18,
    title: "Ground answers in retrieved context",
    detail: "Question answering uses indexed passages and a retrieval-backed prompt.",
    href: "/projects/project-scientist-iit-delhi-cas-tripc",
  },
  {
    label: "Sense",
    x: 82,
    y: 68,
    title: "Connect sensors to analysis",
    detail: "Environmental and motion sensors feed logging, monitoring, and calibration.",
    href: "/projects/research-intern-iit-delhi-electronics-data-analysis-ml",
  },
  {
    label: "Deploy",
    x: 30,
    y: 80,
    title: "Run vision at the edge",
    detail: "A Raspberry Pi prototype turns vehicle detection into adaptive signal timing.",
    href: "/projects/density-based-intelligent-traffic-control-system",
  },
] as const;

export default function SystemMap() {
  const [selected, setSelected] = useState<(typeof nodes)[number]>(nodes[0]);
  const reduceMotion = useReducedMotion();

  return (
    <div className="system-map-wrap">
      <div className="system-map" role="group" aria-label="Explore engineering workflows">
        <div className="map-grid" aria-hidden="true" />
        <motion.div
          className="map-orbit orbit-one"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="map-orbit orbit-two"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        <svg className="map-lines" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M18 24 L72 18 L82 68 L30 80 Z" />
          <path d="M18 24 L82 68" />
          <path d="M72 18 L30 80" />
        </svg>
        {nodes.map((node) => (
          <button
            key={node.label}
            type="button"
            className={`map-node ${selected.label === node.label ? "is-active" : ""}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            aria-pressed={selected.label === node.label}
            onClick={() => setSelected(node)}
          >
            <span aria-hidden="true" />
            <small>{node.label}</small>
          </button>
        ))}
        <div className="map-core" aria-hidden="true">
          <span className="core-index">AK—01</span>
          <strong>Useful<br />intelligence</strong>
          <span className="core-caption">Systems that connect models<br />to the physical world.</span>
        </div>
        <div className="map-coordinate top" aria-hidden="true">28.6139° N</div>
        <div className="map-coordinate bottom" aria-hidden="true">77.2090° E</div>
      </div>
      <div className="map-detail" aria-live="polite">
        <div>
          <p>{selected.label} / selected workflow</p>
          <strong>{selected.title}</strong>
          <span>{selected.detail}</span>
        </div>
        <Link href={selected.href}>Explore project <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
