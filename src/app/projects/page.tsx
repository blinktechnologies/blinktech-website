'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { StartProjectModal } from '@/components/StartProjectModal';

interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: ProjectItem[] = [
    {
      id: 'ai-chatbot',
      badge: 'AI & Automation',
      title: 'AI Chatbot Website',
      description: 'We developed an AI-powered website with integrated chatbot features focused on automation and seamless user support.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Real-time WebSocket']
    },
    {
      id: 'inziralink',
      badge: 'Logistics & Cloud',
      title: 'InziraLink Logistics Platform',
      description: 'End-to-end freight dispatching and digital cargo transit management for East Africa, connecting transporters and enterprise clients.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'IoT Telematics']
    },
    {
      id: 'fintech-suite',
      badge: 'Fintech & Security',
      title: 'Enterprise Billing & Payment Hub',
      description: 'Multi-currency settlement infrastructure with automated reconciliation and bank-grade ISO compliance for scaling businesses.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['TypeScript', 'Kubernetes', 'Go', 'Stripe & MoMo']
    }
  ];

  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif" }}>
      {/* SECTION 1: Top Hero Header on White Grid Background */}
      <section
        className="projects-hero"
        style={{
          padding: '60px 0 50px',
          position: 'relative',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)',
          backgroundSize: '37px 37px',
          backgroundPosition: 'center center',
          overflow: 'visible'
        }}
      >
        <div className="container projects-wrap" style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Pill Badge: • Projects */}
          <motion.div
            className="projects-badge-wrap"
            style={{ marginBottom: '18px' }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 18px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif",
                color: '#0f172a',
                border: '3px solid #eceef1ff',
                boxShadow: '4px 4px 14px 4px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                cursor: 'default'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Projects</span>
            </motion.div>
          </motion.div>

          {/* Heading Row with HUD chevrons */}
          <div
            className="projects-heading-row"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
              position: 'relative'
            }}
          >
            <div className="projects-heading-copy">
              <motion.h1
                className="projects-hero-title"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-urbanist), 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(40px, 5.2vw, 68px)',
                  color: '#0a0a0c',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                From Idea to<br />
                Production
              </motion.h1>

              {/* Carousel Buttons */}
              <motion.div
                className="projects-carousel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
                style={{ display: 'flex', gap: '14px', marginTop: '32px', marginBottom: '12px' }}
              >
                <motion.button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="carousel-circle-btn"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.92, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronLeft size={20} strokeWidth={2.4} />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="carousel-circle-btn"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.92, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronRight size={20} strokeWidth={2.4} />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side HUD Chevrons */}
            <motion.div
              className="projects-hud-chevrons"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flexDirection: 'column',
                marginLeft: 'auto',
                paddingTop: '6px'
              }}
            >
              {/* Row 1: chevrons */}
              <div className="projects-chevron-row projects-chevron-row-1">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot
                    key={`p-r1-${i}`}
                    className={
                      i >= 5
                        ? 'projects-chevron-desktop-only'
                        : i === 4
                        ? 'projects-chevron-mobile-hide'
                        : ''
                    }
                  />
                ))}
              </div>

              {/* Row 2: chevrons */}
              <div className="projects-chevron-row projects-chevron-row-2">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot
                    key={`p-r2-${i}`}
                    className={
                      i >= 5
                        ? 'projects-chevron-desktop-only'
                        : i === 4
                        ? 'projects-chevron-mobile-hide'
                        : ''
                    }
                  />
                ))}
              </div>

              {/* Row 3: chevrons - visible ONLY on desktop */}
              <div className="projects-chevron-row projects-chevron-row-3 projects-row3-desktop-only">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r3-${i}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Full-Width Solid Black Project Showcase Band */}
      <section
        className="projects-showcase"
        style={{
          backgroundColor: '#000000',
          width: '100%',
          position: 'relative',
          padding: '0',
          overflow: 'visible',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <div
          className="container projects-wrap"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative'
          }}
        >
          <div
            className="project-showcase-split"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 420px) 1fr',
              alignItems: 'stretch',
              position: 'relative'
            }}
          >
            {/* Left Column */}
            <div
              className="project-info-col"
              style={{
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Compartment 1: Centered BT Logo */}
              <div
                className="project-logo-cell"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '36px 20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  width: '100%'
                }}
              >
                <motion.div
                  style={{
                    width: '82px',
                    height: '82px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    filter: 'drop-shadow(0 12px 26px rgba(0, 0, 0, 0.8))',
                    cursor: 'pointer'
                  }}
                  onClick={() => setModalOpen(true)}
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.14, 0.28, 0.14] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 70%)',
                      filter: 'blur(8px)'
                    }}
                  />
                  <img
                    src="/images/bt-logo.png"
                    alt="BT Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                  />
                </motion.div>
              </div>

              {/* Compartment 2: Title and Description with Animated Slide */}
              <div
                className="project-copy-cell"
                style={{
                  padding: '36px 32px 36px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '210px'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2
                      className="project-copy-title"
                      style={{
                        fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif",
                        fontSize: 'clamp(32px, 3.4vw, 44px)',
                        fontWeight: 900,
                        color: '#ffffff',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.15,
                        margin: '0 0 16px 0'
                      }}
                    >
                      {currentProject.title}
                    </h2>

                    <p
                      className="project-copy-desc"
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.65,
                        color: '#94a3b8',
                        margin: 0,
                        maxWidth: '380px',
                        fontWeight: 400
                      }}
                    >
                      {currentProject.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Compartment 3: Tags row with Staggered Pop-In */}
              <div className="project-tags-cell" style={{ padding: '20px 32px 20px 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                  >
                    {currentProject.tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 8, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.3, ease: 'easeOut' }}
                        whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.14)', color: '#ffffff' }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#94a3b8',
                          letterSpacing: '0.3px',
                          cursor: 'default'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Compartment 4: Spacer */}
              <div className="project-info-spacer" style={{ flex: 1, minHeight: '40px' }} />
            </div>

            {/* Right Column: MacBook Pro Mockup with Floating Animation & Smooth Directional Transition */}
            <div
              className="laptop-mockup-wrapper"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingLeft: '32px',
                marginTop: '-72px',
                zIndex: 10
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  maxWidth: '820px',
                  position: 'relative'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, x: direction * 45, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -direction * 45, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: '100%',
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.95))'
                    }}
                  >
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean White Gap before Footer */}
      <div style={{ height: '38px', backgroundColor: '#ffffff' }} />

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx global>{`
        .projects-hud-chevrons {
          display: flex;
        }

        /* ─── ChevronDot: base styles ────────────────────────────────── */
        :global(.projects-chevron-dot) {
          display: inline-block;
          width: 40px;
          height: 40px;
        }

        /* ─── Chevron rows base layout ──────────────────────────────── */
        .projects-chevron-row {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .projects-chevron-row-1 {
          margin-left: 140px;
        }

        .projects-chevron-row-2 {
          margin-left: 70px;
        }

        .projects-hud-chevrons {
          gap: 16px;
        }

        /* Row-3 and extra items: hidden by default (mobile/tablet), enabled on larger screens */
        .projects-chevron-row-3,
        :global(.projects-row3-desktop-only) {
          display: none !important;
        }

        :global(.projects-chevron-desktop-only) {
          display: none !important;
        }

        :global(.projects-chevron-mobile-hide) {
          display: none !important;
        }

        /* ─── Large Desktop: ≥1240px (10 chevrons per row, 3 rows) ─── */
        @media (min-width: 1240px) {
          .projects-chevron-row-3,
          :global(.projects-row3-desktop-only) {
            display: flex !important;
          }
          :global(.projects-chevron-desktop-only) {
            display: inline-block !important;
          }
          :global(.projects-chevron-mobile-hide) {
            display: inline-block !important;
          }
        }

        /* ─── Carousel buttons ──────────────────────────────────────── */
        .carousel-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #334155;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .carousel-circle-btn:hover {
          background-color: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);
        }

        .carousel-circle-btn:active {
          transform: translateY(0);
        }

        .project-showcase-split > * {
          min-width: 0;
        }

        /* ─── Laptop: 1081px – 1239px (10 chevrons per row, 3 rows) ── */
        @media (max-width: 1239px) and (min-width: 1081px) {
          :global(.projects-chevron-dot) {
            width: 26px !important;
            height: 26px !important;
          }
          .projects-chevron-row {
            gap: 12px !important;
          }
          .projects-chevron-row-1 {
            margin-left: 72px !important;
          }
          .projects-chevron-row-2 {
            margin-left: 36px !important;
          }
          .projects-hud-chevrons {
            gap: 12px !important;
            padding-top: 4px !important;
          }
          .projects-chevron-row-3,
          :global(.projects-row3-desktop-only) {
            display: flex !important;
          }
          :global(.projects-chevron-desktop-only) {
            display: inline-block !important;
          }
          :global(.projects-chevron-mobile-hide) {
            display: inline-block !important;
          }
        }

        /* ─── Tablet Landscape: 861px – 1080px (5 chevrons per row, 2 rows) ── */
        @media (max-width: 1080px) and (min-width: 861px) {
          :global(.projects-chevron-dot) {
            width: 34px !important;
            height: 34px !important;
          }
          .projects-chevron-row {
            gap: 12px !important;
          }
          .projects-chevron-row-1 {
            margin-left: 28px !important;
          }
          .projects-chevron-row-2 {
            margin-left: 0 !important;
          }
          .projects-hud-chevrons {
            gap: 14px !important;
          }
          .projects-chevron-row-3,
          :global(.projects-row3-desktop-only) {
            display: none !important;
          }
          :global(.projects-chevron-desktop-only) {
            display: none !important;
          }
          :global(.projects-chevron-mobile-hide) {
            display: inline-block !important;
          }
          .project-showcase-split {
            grid-template-columns: minmax(240px, 320px) 1fr !important;
          }
        }

        /* ─── Tablet Portrait: 641px – 860px (single column, clean hero) ─── */
        @media (max-width: 860px) and (min-width: 641px) {
          .projects-hero {
            padding: 36px 0 28px !important;
          }
          .projects-badge-wrap {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: 18px !important;
          }
          .projects-heading-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0 !important;
            width: 100% !important;
          }
          .projects-heading-copy {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            width: 100% !important;
            min-width: 0;
          }
          .projects-hero-title {
            font-size: clamp(38px, 6vw, 52px) !important;
            line-height: 1.15 !important;
            text-align: center !important;
            margin: 0 auto !important;
            letter-spacing: -0.035em !important;
            text-wrap: balance;
          }
          .projects-carousel {
            margin-top: 22px !important;
            justify-content: center !important;
          }
          .projects-hud-chevrons {
            display: none !important;
          }
          .project-showcase-split {
            grid-template-columns: 1fr !important;
          }
          .project-info-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
          }
          .project-logo-cell {
            padding: 28px 16px !important;
          }
          .project-copy-cell {
            padding: 28px 20px 28px 20px !important;
            align-items: center;
            text-align: center;
          }
          .project-copy-title {
            font-size: 32px !important;
            text-align: center !important;
          }
          .project-copy-desc {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .project-tags-cell {
            padding: 16px 20px !important;
            justify-content: center !important;
          }
          .project-info-spacer {
            display: none !important;
          }
          .laptop-mockup-wrapper {
            margin-top: 0 !important;
            padding: 20px 0 32px !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }

        /* ─── Mobile: ≤640px ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .projects-wrap {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .projects-hero {
            padding: 24px 0 20px !important;
          }
          .projects-badge-wrap {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: 16px !important;
          }
          .projects-heading-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0 !important;
            width: 100% !important;
          }
          .projects-heading-copy {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            width: 100% !important;
            min-width: 0;
            flex-shrink: 1;
          }
          .projects-hero-title {
            font-size: clamp(32px, 8.5vw, 44px) !important;
            line-height: 1.15 !important;
            text-align: center !important;
            margin: 0 auto !important;
            letter-spacing: -0.035em !important;
            text-wrap: balance;
            font-weight: 700 !important;
          }
          .projects-carousel {
            margin-top: 20px !important;
            margin-bottom: 6px !important;
            gap: 12px !important;
            justify-content: center !important;
          }
          .carousel-circle-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .projects-hud-chevrons {
            display: none !important;
          }
          .project-showcase-split {
            grid-template-columns: 1fr !important;
          }
          .project-info-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
          }
          .project-logo-cell {
            padding: 28px 16px !important;
          }
          .project-copy-cell {
            padding: 22px 16px 22px 16px !important;
            align-items: center;
            text-align: center;
          }
          .project-copy-title {
            font-size: 26px !important;
            margin-bottom: 12px !important;
            text-align: center !important;
          }
          .project-copy-desc {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .project-tags-cell {
            padding: 14px 16px !important;
            justify-content: center !important;
          }
          .laptop-mockup-wrapper {
            padding: 12px 0 24px !important;
          }
        }

        /* ─── Small phones: ≤400px (compact) ──── */
        @media (max-width: 400px) {
          .projects-hero-title {
            font-size: clamp(26px, 7.5vw, 32px) !important;
            line-height: 1.18 !important;
            text-align: center !important;
            margin: 0 auto !important;
            letter-spacing: -0.03em !important;
          }
          .project-copy-title {
            font-size: 20px !important;
          }
          .carousel-circle-btn {
            width: 32px !important;
            height: 32px !important;
          }
          .projects-hud-chevrons {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

const ChevronDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`projects-chevron-dot${className ? ' ' + className : ''}`}
    style={{
      backgroundColor: '#1e293b',
      maskImage: 'url("/images/arrow-tight.png")',
      WebkitMaskImage: 'url("/images/Arrow 19.png")',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      flexShrink: 0
    }}
  />
);
