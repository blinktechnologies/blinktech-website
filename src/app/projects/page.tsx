'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
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
          <div className="projects-badge-wrap" style={{ marginBottom: '18px' }}>
            <div
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
                boxShadow: '4px 4px 14px 4px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Projects</span>
            </div>
          </div>

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
              <h1
                className="projects-hero-title"
                style={{
                  fontFamily: "var(--font-urbanist), 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(44px, 5.6vw, 72px)',
                  color: '#0a0a0c',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                From Idea to<br />
                Production
              </h1>

              {/* Carousel Buttons */}
              <div className="projects-carousel" style={{ display: 'flex', gap: '14px', marginTop: '32px', marginBottom: '12px' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="carousel-circle-btn"
                >
                  <ChevronLeft size={20} strokeWidth={2.4} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="carousel-circle-btn"
                >
                  <ChevronRight size={20} strokeWidth={2.4} />
                </button>
              </div>
            </div>

            {/* Right Side HUD Chevrons */}
            <div
              className="projects-hud-chevrons"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                paddingTop: '6px'
              }}
            >
              {/* Row 1: chevrons */}
              <div className="projects-chevron-row projects-chevron-row-1">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r1-${i}`} className={i >= 5 ? 'projects-chevron-desktop-only' : ''} />
                ))}
              </div>

              {/* Row 2: chevrons */}
              <div className="projects-chevron-row projects-chevron-row-2">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r2-${i}`} className={i >= 5 ? 'projects-chevron-desktop-only' : ''} />
                ))}
              </div>

              {/* Row 3: chevrons - hidden on tablet and mobile */}
              <div className="projects-chevron-row projects-chevron-row-3 projects-row3-desktop-only">
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r3-${i}`} />
                ))}
              </div>
            </div>
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
                <div
                  style={{
                    width: '82px',
                    height: '82px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    filter: 'drop-shadow(0 12px 26px rgba(0, 0, 0, 0.8))',
                    cursor: 'pointer',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onClick={() => setModalOpen(true)}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, transparent 70%)',
                      filter: 'blur(8px)'
                    }}
                  />
                  <img
                    src="/images/bt-logo.png"
                    alt="BT Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                  />
                </div>
              </div>

              {/* Compartment 2: Title and Description */}
              <div
                className="project-copy-cell"
                style={{
                  padding: '36px 32px 36px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
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
              </div>

              {/* Compartment 3: Tags row */}
              <div className="project-tags-cell" style={{ padding: '20px 32px 20px 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
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
                      letterSpacing: '0.3px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Compartment 4: Spacer */}
              <div className="project-info-spacer" style={{ flex: 1, minHeight: '40px' }} />
            </div>

            {/* Right Column: MacBook Pro Mockup */}
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
              <div
                style={{
                  width: '100%',
                  maxWidth: '820px',
                  position: 'relative',
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean White Gap before Footer */}
      <div style={{ height: '38px', backgroundColor: '#ffffff' }} />

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        /* ─── ChevronDot: must use :global() because component is outside scope ── */
        :global(.projects-chevron-dot) {
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

        /* Row-3 and items 6-10: visible on all sizes, hidden classes inactive until needed */
        :global(.projects-row3-desktop-only) {
          display: none;
        }
        :global(.projects-chevron-desktop-only) {
          display: none;
        }

        @media (min-width: 1240px) {
          :global(.projects-row3-desktop-only) {
            display: flex !important;
          }
          :global(.projects-chevron-desktop-only) {
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

        /* ─── Laptop: 1081px – 1239px ──────────────────────────────── */
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
        }

        /* ─── Tablet Landscape: 861px – 1080px ─────────────────────── */
        @media (max-width: 1080px) and (min-width: 861px) {
          :global(.projects-chevron-dot) {
            width: 36px !important;
            height: 36px !important;
          }
          .projects-chevron-row {
            gap: 14px !important;
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
          .project-showcase-split {
            grid-template-columns: minmax(240px, 320px) 1fr !important;
          }
        }

        /* ─── Tablet Portrait: 641px – 860px ───────────────────────── */
        @media (max-width: 860px) and (min-width: 641px) {
          .projects-hero {
            padding: 36px 0 28px !important;
          }
          .projects-badge-wrap {
            display: flex;
            justify-content: flex-start;
          }
          .projects-heading-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            text-align: left !important;
            gap: 20px !important;
          }
          .projects-heading-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            min-width: 0;
          }
          .projects-hero-title {
            font-size: 38px !important;
            text-align: left !important;
          }
          .projects-carousel {
            margin-top: 24px !important;
            justify-content: flex-start !important;
          }
          .projects-hud-chevrons {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            margin-left: auto !important;
            padding-top: 6px !important;
            flex-shrink: 0 !important;
          }
          :global(.projects-chevron-dot) {
            width: 36px !important;
            height: 36px !important;
          }
          .projects-chevron-row {
            gap: 12px !important;
          }
          .projects-chevron-row-1 {
            margin-left: 24px !important;
          }
          .projects-chevron-row-2 {
            margin-left: 0 !important;
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

        /* ─── Mobile: ≤640px ──────────────────────────────────────── */
        @media (max-width: 640px) {
          .projects-wrap {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .projects-hero {
            padding: 24px 0 20px !important;
          }
          .projects-badge-wrap {
            display: flex;
            justify-content: flex-start;
          }
          .projects-heading-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            text-align: left !important;
            gap: 12px !important;
          }
          .projects-heading-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            min-width: 0;
            flex-shrink: 1;
          }
          .projects-hero-title {
            font-size: clamp(23px, 5.8vw, 28px) !important;
            line-height: 1.15 !important;
            text-align: left !important;
          }
          .projects-carousel {
            margin-top: 18px !important;
            margin-bottom: 4px !important;
            gap: 10px !important;
            justify-content: flex-start !important;
          }
          .carousel-circle-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .projects-hud-chevrons {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            margin-left: auto !important;
            padding-top: 4px !important;
            flex-shrink: 0 !important;
          }
          :global(.projects-chevron-dot) {
            width: 32px !important;
            height: 32px !important;
          }
          .projects-chevron-row {
            gap: 8px !important;
          }
          .projects-chevron-row-1 {
            margin-left: 18px !important;
          }
          .projects-chevron-row-2 {
            margin-left: 0 !important;
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

        /* ─── Small phones: ≤400px ────────────────────────────────── */
        @media (max-width: 400px) {
          .projects-hero-title {
            font-size: 22px !important;
          }
          .project-copy-title {
            font-size: 22px !important;
          }
          .carousel-circle-btn {
            width: 34px !important;
            height: 34px !important;
          }
          .projects-hud-chevrons {
            gap: 10px !important;
            padding-top: 3px !important;
          }
          :global(.projects-chevron-dot) {
            width: 27px !important;
            height: 27px !important;
          }
          .projects-chevron-row {
            gap: 6px !important;
          }
          .projects-chevron-row-1 {
            margin-left: 14px !important;
          }
          .projects-chevron-row-2 {
            margin-left: 0 !important;
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
      display: 'inline-block',
      flexShrink: 0
    }}
  />
);
