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
        <div className="container" style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          {/* Pill Badge: • Projects (tactile 3D pill matching Services page) */}
          <div style={{ marginBottom: '18px' }}>
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
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
              position: 'relative'
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-urbanist), 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(44px, 5.6vw, 72px)',
                  color: '#0a0a0c',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  margin: 0
                }}
              >
                From Idea <br />
                to Production
              </h1>

              {/* Carousel Buttons (< and >) placed on the left directly under title with clean breathing room */}
              <div style={{ display: 'flex', gap: '14px', marginTop: '32px', marginBottom: '12px' }}>
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

            {/* Right Side HUD Chevrons: 3 Staggered Rows of 10 Chevrons pointing LEFT (<) */}
            <div
              className="projects-hud-chevrons"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginLeft: 'auto',
                paddingTop: '10px'
              }}
            >
              {/* Row 1: 10 chevrons, shifted furthest right */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginLeft: '140px' }}>
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r1-${i}`} />
                ))}
              </div>

              {/* Row 2: 10 chevrons, middle offset */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginLeft: '70px' }}>
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r2-${i}`} />
                ))}
              </div>

              {/* Row 3: 10 chevrons, aligned on the left */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                {[...Array(10)].map((_, i) => (
                  <ChevronDot key={`p-r3-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Full-Width Solid Black Project Showcase Band matching screenshot */}
      <section
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
          className="container"
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
            {/* Left Column: Structured Card with horizontal divider lines & right vertical border */}
            <div
              style={{
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Compartment 1: Centered 3D BT Logo Emblem */}
              <div
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

              {/* Compartment 2: Title and Description with crisp bottom border */}
              <div
                style={{
                  padding: '36px 32px 36px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {/* Project Title */}
                <h2
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

                {/* Project Description */}
                <p
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

              {/* Compartment 3: Empty lower section aligned with laptop floor */}
              <div style={{ flex: 1, minHeight: '60px' }} />
            </div>

            {/* Right Column: MacBook Pro Mockup Image protruding upwards into the white grid */}
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

      {/* Clean White Separation Gap before Footer matching screenshot */}
      <div style={{ height: '38px', backgroundColor: '#ffffff' }} />

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
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

        @media (max-width: 980px) {
          .project-showcase-split {
            grid-template-columns: 1fr;
          }
          .laptop-mockup-wrapper {
            margin-top: 0 !important;
          }
          .projects-hud-chevrons {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

const ChevronDot: React.FC = () => (
  <div
    style={{
      width: '40px',
      height: '40px',
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
