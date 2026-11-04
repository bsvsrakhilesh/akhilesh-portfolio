"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import SystemMap from "../components/hero/SystemMap";

const disciplines = [
  {
    number: "01",
    title: "Machine intelligence",
    text: "Retrieval, semantic search and RAG systems engineered for real-world information—not demos.",
  },
  {
    number: "02",
    title: "Perception at the edge",
    text: "Computer vision and sensor workflows that bring models into streets, devices and physical environments.",
  },
  {
    number: "03",
    title: "Systems engineering",
    text: "The backend architecture, queues, data layers and observability required to make intelligence dependable.",
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
            <span>New Delhi, India</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI / ML &amp; systems engineer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                I build systems
                <span>that make intelligence</span>
                <em>useful.</em>
              </motion.h1>

              <motion.div
                className="hero-intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34 }}
              >
                <p>
                  From retrieval infrastructure to edge perception, I connect
                  models, data and devices into systems built for actual use.
                </p>
                <div className="hero-actions">
                  <Link href="/projects" className="button button-dark">
                    Explore selected work <ArrowUpRight size={17} />
                  </Link>
                  <a href="/resume/akhilesh_resume.pdf" className="text-link">
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
            <span>Retrieval / Vision / IoT / Embedded</span>
          </div>
        </section>

        <section className="manifesto-section">
          <motion.div {...reveal} className="manifesto-index">
            <span>What I do</span>
            <span>01 — 03</span>
          </motion.div>
          <motion.div {...reveal} className="manifesto-copy">
            <p>
              I work where <em>machine learning</em> meets the constraints of
              software, hardware and people.
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
            <span className="signal-dot" /> Current signal
          </motion.div>
          <motion.div {...reveal} className="signal-copy">
            <h2>Building retrieval systems at IIT Delhi.</h2>
            <p>
              Designing document ingestion, hybrid search and retrieval-backed
              AI workflows with production reliability in mind.
            </p>
            <Link href="/about" className="text-link">
              More about my path <ArrowUpRight size={16} />
            </Link>
          </motion.div>
          <div className="signal-code" aria-hidden="true">
            <span>LLM</span><span>RAG</span><span>PGVECTOR</span>
            <span>FASTAPI</span><span>CELERY</span><span>REDIS</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
