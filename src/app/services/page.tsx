'use client';

import React, { useState } from 'react';
import { StartProjectModal } from '@/components/StartProjectModal';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState('aiml');
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 'software',
      title: 'Software Development',
      description: 'End-to-end bespoke web architectures, microservices, and enterprise platforms built with high code quality and resilience.'
    },
    {
      id: 'uiux',
      title: 'Human Centered UI/UX',
      description: 'Human-centered design systems, responsive interfaces, and interactive user journeys engineered to optimize user engagement and conversion.'
    },
    {
      id: 'aiml',
      title: 'AI/ML solutions',
      description: 'We deliver intelligent solutions as well as insights powered by data to drive automation and smarter decisions. Helping your business to make informed decisions.'
    },
    {
      id: 'mobile',
      title: 'Mobile development',
      description: 'Native and cross-platform iOS and Android mobile solutions with offline capabilities, fluid animations, and real-time syncing.'
    },
    {
      id: '3d',
      title: '3D modelling',
      description: 'Interactive WebGL experiences, 3D product visualizations, and spatial interfaces that bring digital ideas to life.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 'step-discover',
      name: 'Discover',
      icon: '/images/Search Icon.png',
      description: 'We start with a deep audit of your workflows, tools, and bottlenecks. You walk away with a clear map of what to automate first even if you don\'t hire us.'
    },
    {
      id: 'step-architect',
      name: 'Architect',
      icon: '/images/Search Icon.png',
      description: 'We blueprint the technical system, data schemas, API contracts, and high-fidelity user journeys before writing a single line of production code.'
    },
    {
      id: 'step-build',
      name: 'Build & Automate',
      icon: '/images/Search Icon.png',
      description: 'Our engineering squads execute in rapid two-week agile sprints with automated testing, continuous integration, and transparent weekly demos.'
    },
    {
      id: 'step-scale',
      name: 'Deploy & Scale',
      icon: '/images/Search Icon.png',
      description: 'Zero-downtime containerized cloud deployment, proactive monitoring, automated backups, and 24/7 technical infrastructure support.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Urbanist', sans-serif" }}>
      {/* SECTION 1: Automation infrastructure built for reliability and scale */}
      <section 
        className="tech-grid-bg" 
        style={{ 
          padding: '60px 0 90px', 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          {/* Pill Badge: • Services (Elevated tactile pill matching screenshot) */}
          <div style={{ marginBottom: '22px' }}>
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
                fontFamily: "'Urbanist', sans-serif",
                color: '#0f172a',
                border: '3px solid #eceef1ff',
                boxShadow: '4px 4px 14px 4px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Services</span>
            </div>
          </div>

          {/* Heading Row with HUD chevrons */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              justifyContent: 'space-between', 
              gap: '24px',
              marginBottom: '38px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h1 
                className="font-urbanist"
                style={{ 
                  fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif",
                  fontSize: '42px', 
                  color: '#0a0a0c',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                Automation infrastructure <br />
                built for reliability and scale
              </h1>
            </div>

            {/* Right Side HUD Chevrons matching Image using Arrow 19.png */}
            <div 
              className="services-hud-chevrons" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px', 
                marginLeft: 'auto'
              }}
            >
              {/* Row 1: 11 chevrons, shifted 2 positions right to form echelon alignment */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  alignItems: 'center',
                  marginTop: '-40px',
                  marginLeft: '112px'
                }}
              >
                {[...Array(10)].map((_, i) => (
                  <img 
                    key={`r1-${i}`} 
                    src="/images/Arrow 19.png" 
                    alt="<" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      objectFit: 'contain',
                      imageRendering: 'pixelated'
                    }} 
                  />
                ))}
              </div>

              {/* Row 2: 11 chevrons, aligned directly with Row 1 columns */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  alignItems: 'center' 
                }}
              >
                {[...Array(10)].map((_, i) => (
                  <img 
                    key={`r2-${i}`} 
                    src="/images/Arrow 19.png" 
                    alt="<" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      objectFit: 'contain',
                      imageRendering: 'pixelated'
                    }} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Technical Box Container with Crosshair Corners */}
          <div 
            className="services-crosshair-box"
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)'
            }}
          >
            {/* Corner Crosshairs */}
            <span style={{ position: 'absolute', top: '-10px', left: '-6px', fontFamily: 'monospace', fontSize: '16px', color: '#94a3b8', zIndex: 10 }}>+</span>
            <span style={{ position: 'absolute', top: '-10px', right: '-6px', fontFamily: 'monospace', fontSize: '16px', color: '#94a3b8', zIndex: 10 }}>+</span>
            <span style={{ position: 'absolute', bottom: '-10px', left: '-6px', fontFamily: 'monospace', fontSize: '16px', color: '#94a3b8', zIndex: 10 }}>+</span>
            <span style={{ position: 'absolute', bottom: '-10px', right: '-6px', fontFamily: 'monospace', fontSize: '16px', color: '#94a3b8', zIndex: 10 }}>+</span>

            <div className="services-split-grid">
              {/* Left Column: Vertical Services List */}
              <div 
                style={{ 
                  borderRight: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {services.map((item) => {
                  const isActive = activeServiceId === item.id;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => setActiveServiceId(item.id)}
                      className={`service-tab-item ${isActive ? 'active' : ''}`}
                      style={{
                        padding: '28px 32px',
                        borderBottom: '1px solid #eef0f3',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                        backgroundColor: isActive ? '#fafbfc' : '#ffffff'
                      }}
                    >
                      <h3 
                        style={{ 
                          fontSize: '17px', 
                          fontWeight: isActive ? 800 : 600, 
                          color: isActive ? '#0a0a0c' : '#4b5563',
                          marginBottom: isActive ? '10px' : 0,
                          letterSpacing: '-0.01em',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{item.title}</span>
                      </h3>

                      {isActive && (
                        <p 
                          style={{ 
                            fontSize: '13px', 
                            lineHeight: 1.6, 
                            color: '#64748b', 
                            margin: 0,
                            maxWidth: '380px',
                            animation: 'fadeIn 0.3s ease'
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Vectors Circuit Trace Illustration */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px 32px',
                  backgroundColor: '#ffffff',
                  minHeight: '440px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    position: 'relative'
                  }}
                >
                  <img 
                    src="/images/Vectors.png" 
                    alt="Circuit Infrastructure Vectors" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'contrast(1.05)'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: How We Bring Ideas to Life (Our Process) */}
      <section 
        style={{ 
          padding: '80px 0 100px', 
          backgroundColor: '#ffffff', 
          position: 'relative' 
        }}
      >
        <div className="container">
          {/* Centered Pill Badge: • Our process */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Our process</span>
            </div>
          </div>

          {/* Heading */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(32px, 4.5vw, 50px)', 
                fontWeight: 900, 
                color: '#0a0a0c',
                letterSpacing: '-0.025em',
                marginBottom: '14px'
              }}
            >
              How We Bring Ideas to Life
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              A thoughtful, collaborative process designed to turn complex ideas into meaningful digital solutions.
            </p>
          </div>

          {/* Semi-circular Curved Dashed Arc matching Image 3 */}
          <div className="process-arc-container">
            {/* The SVG Curved Dashed Arc Line */}
            <svg 
              className="process-arc-svg" 
              viewBox="0 0 800 240" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 50 220 Q 400 -60 750 220" 
                stroke="#cbd5e1" 
                strokeWidth="1.5" 
                strokeDasharray="6 6" 
              />
            </svg>

            {/* Step Icon & Content in the Center */}
            <div className="process-center-card">
              {/* Search Icon from public folder */}
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={processSteps[activeProcessStep].icon} 
                  alt="Process Step Icon" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Step Title: Discover */}
              <h3 
                style={{ 
                  fontSize: '21px', 
                  fontWeight: 800, 
                  color: '#0a0a0c', 
                  marginBottom: '12px' 
                }}
              >
                {processSteps[activeProcessStep].name}
              </h3>

              {/* Step Description */}
              <p 
                style={{ 
                  fontSize: '13.5px', 
                  color: '#555966', 
                  lineHeight: 1.65, 
                  maxWidth: '480px', 
                  margin: '0 auto' 
                }}
              >
                {processSteps[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LET'S START YOUR AI SYSTEM matching reference image */}
      <section 
        style={{
          borderTop: '1px solid #eeeff2',
          borderBottom: '1px solid #eeeff2',
          padding: '72px 0 52px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)',
          backgroundSize: '37px 37px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="container" style={{ position: 'relative', maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
          {/* Top Indicator Chevrons */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              padding: '0 4px'
            }}
          >
            {/* Left Chevron Cluster: 3 chevrons pointing RIGHT with directional fade */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <ChevronCluster direction="right" opacity={1} color="#3d5a73" />
              <ChevronCluster direction="right" opacity={1.0} color="#0d2840" />
              <ChevronCluster direction="right" opacity={1} color="#8ba4b8" />
            </div>

            {/* Right Chevron Cluster: 3 chevrons pointing LEFT with directional fade */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <ChevronCluster direction="left" opacity={1} color="#8ba4b8" />
              <ChevronCluster direction="left" opacity={1.0} color="#0d2840" />
              <ChevronCluster direction="left" opacity={1} color="#3d5a73" />
            </div>
          </div>

          {/* Main Giant Headline: LET'S START YOUR AI SYSTEM */}
          <div 
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={() => setModalOpen(true)}
          >
            <h2 
              style={{
                fontFamily: "var(--font-urbanist), 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: 'clamp(46px, 7.5vw, 92px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                textTransform: 'uppercase',
                margin: 0,
                backgroundImage: 'linear-gradient(90deg, #585c65 0%, #383b42 36%, #121316 75%, #000000 100%)',
                WebkitBackgroundImage: 'linear-gradient(90deg, #585c65 0%, #383b42 36%, #121316 75%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              LET’S START <br />
              YOUR AI SYSTEM
            </h2>

            {/* Center BT Logo Badge */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '28px',
                marginBottom: '48px'
              }}
            >
              <div 
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 14px 22px rgba(0, 0, 0, 0.42))',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img 
                  src="/images/bt-logo.png" 
                  alt="BT Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Left & Right Technical Markers (Black Solid Badges) */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 4px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            {/* Left Badge: INTELLIGENT AUTOMATION */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                backgroundColor: '#0a0a0c',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '1px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.18)'
              }}
            >
              <span 
                style={{ 
                  display: 'inline-block', 
                  width: '7px', 
                  height: '7px', 
                  backgroundColor: '#ffffff',
                  flexShrink: 0 
                }} 
              />
              <span 
                style={{ 
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', monospace",
                  fontSize: '9.5px', 
                  fontWeight: 700, 
                  letterSpacing: '0.8px',
                  lineHeight: 1
                }}
              >
                INTELLIGENT AUTOMATION
              </span>
            </div>

            {/* Right Badge: GLOBAL SUPPORT */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                backgroundColor: '#0a0a0c',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '1px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.18)'
              }}
            >
              <span 
                style={{ 
                  display: 'inline-block', 
                  width: '7px', 
                  height: '7px', 
                  backgroundColor: '#ffffff',
                  flexShrink: 0 
                }} 
              />
              <span 
                style={{ 
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', monospace",
                  fontSize: '9.5px', 
                  fontWeight: 700, 
                  letterSpacing: '0.8px',
                  lineHeight: 1
                }}
              >
                GLOBAL SUPPORT
              </span>
            </div>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .services-split-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
        }

        .service-tab-item:hover {
          background-color: #fafbfc !important;
        }

        .process-arc-container {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          padding-top: 10px;
          text-align: center;
        }

        .process-arc-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .process-center-card {
          margin-top: -120px;
          position: relative;
          z-index: 2;
        }

        .center-bt-logo-bounce:hover {
          transform: scale(1.1) rotate(4deg);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .services-split-grid {
            grid-template-columns: 1fr;
          }
          .services-hud-chevrons {
            display: none;
          }
          .process-center-card {
            margin-top: -40px;
          }
        }
      `}</style>
    </div>
  );
}

const ChevronCluster: React.FC<{ 
  direction: 'left' | 'right'; 
  opacity?: number; 
  color?: string; 
  size?: number 
}> = ({ 
  direction, 
  opacity = 1, 
  color = '#0d2840', 
  size = 22
}) => {
  const isRight = direction === 'right';
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${Math.round(size * 1.25)}px`,
        backgroundColor: color,
        opacity: opacity,
        maskImage: 'url("/images/arrow-tight.png")',
        WebkitMaskImage: 'url("/images/arrow-tight.png")',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        transform: isRight ? 'scaleX(-1)' : 'none',
        display: 'inline-block',
        flexShrink: 0
      }}
    />
  );
};
