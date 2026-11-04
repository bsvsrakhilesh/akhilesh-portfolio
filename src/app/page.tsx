"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import SystemMap from "../components/hero/SystemMap";
import { sitePath } from "../lib/sitePath";

const disciplines = [
  {
    number: "01",
    title: "AI / ML engineering",
    text: "Hybrid retrieval, grounded RAG and model workflows built around traceable evidence.",
  },
  {
    number: "02",
    title: "Data science & evaluation",
    text: "Python analysis, sensor calibration and audio ML that make noisy data interpretable.",
  },
  {
    number: "03",
    title: "Applied intelligence",
    text: "Computer vision, APIs and embedded prototypes that connect analysis to real use.",
  },
];

const proofPoints = [
  {
    label: "Retrieval & RAG",
    detail: "Hybrid search with pgvector, citation checks and source provenance.",
    href: "/projects/project-scientist-iit-delhi-cas-tripc",
  },
  {
    label: "Data science",
    detail: "Python calibration for 17 logger nodes using three reference datasets.",
    href: "/projects/research-intern-iit-delhi-electronics-data-analysis-ml",
  },
  {
    label: "Computer vision",
    detail: "YOLOv10 vehicle counting for an adaptive traffic signal prototype.",
    href: "/projects/density-based-intelligent-traffic-control-system",
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  return (
    <div className="site-root">
      <Navbar />

      <main id="main-content">
        <section className="hero-section">
          <div className="hero-kicker">
            <span>Portfolio / 2026</span>
            <span>Faridabad, India</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI / ML engineer · data scientist
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                From complex data
                <span>to useful</span>
                <em>intelligence.</em>
              </motion.h1>

              <motion.div
                className="hero-intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34 }}
              >
                <p>
                  I build and evaluate machine learning workflows across
                  documents, sensor data, audio and images, then connect them
                  to dependable software and hardware.
                </p>
                <div className="hero-actions">
                  <Link href="/projects" className="button button-dark">
                    Explore selected work <ArrowUpRight size={17} />
                  </Link>
                  <a href={sitePath("/resume/akhilesh_resume.pdf")} className="text-link">
                    Résumé <ArrowDownRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <SystemMap />
            </motion.div>
          </div>

          <div className="hero-footnote">
            <span>Scroll to inspect</span>
            <div />
            <span>Retrieval / Data science / Vision / Edge</span>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="proof-heading">
            <p>Selected evidence</p>
            <h2 id="proof-title">Work you can inspect.</h2>
          </div>
          <div className="proof-grid">
            {proofPoints.map((point, index) => (
              <Link className="proof-card" href={point.href} key={point.label}>
                <span className="proof-index">0{index + 1} / {point.label}</span>
                <strong>{point.detail}</strong>
                <span className="proof-action">View the case study <ArrowUpRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="manifesto-section">
          <motion.div {...reveal} className="manifesto-index">
            <span>What I do</span>
            <span>01 — 03</span>
          </motion.div>
          <motion.div {...reveal} className="manifesto-copy">
            <p>
              I connect <em>data and models</em> to the systems people actually use.
            </p>
          </motion.div>
          <div className="discipline-list">
            {disciplines.map((item, index) => (
              <motion.article
                key={item.number}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
              >
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <ArrowUpRight size={22} />
              </motion.article>
            ))}
          </div>
        </section>

        <FeaturedProjects />

        <section className="signal-section">
          <motion.div {...reveal} className="signal-label">
            <span className="signal-dot" /> Recent research
          </motion.div>
          <motion.div {...reveal} className="signal-copy">
            <h2>Making AI work inspectable at IIT Delhi.</h2>
            <p>
              My project scientist work combined document ingestion, hybrid
              search, citation-grounded answers and audio ML evaluation. The
              common thread was making data and model outputs traceable.
            </p>
            <Link href="/about" className="text-link">
              More about my path <ArrowUpRight size={16} />
            </Link>
          </motion.div>
          <div className="signal-code" aria-hidden="true">
            <span>RAG</span><span>PGVECTOR</span><span>AUDIO ML</span>
            <span>PYTHON</span><span>FASTAPI</span><span>POSTGRESQL</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
