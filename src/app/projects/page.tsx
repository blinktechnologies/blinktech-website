'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { StartProjectModal } from '@/components/StartProjectModal';

interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
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
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Real-time WebSocket'],
      stats: [
        { label: 'Automation Rate', value: '94%' },
        { label: 'Response Latency', value: '< 280ms' }
      ]
    },
    {
      id: 'inziralink',
      badge: 'Logistics & Cloud',
      title: 'InziraLink Logistics Platform',
      description: 'End-to-end freight dispatching and digital cargo transit management for East Africa, connecting transporters and enterprise clients.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'IoT Telematics'],
      stats: [
        { label: 'Active Fleets', value: '450+' },
        { label: 'Transit Efficiency', value: '+38%' }
      ]
    },
    {
      id: 'fintech-suite',
      badge: 'Fintech & Security',
      title: 'Enterprise Billing & Payment Hub',
      description: 'Multi-currency settlement infrastructure with automated reconciliation and bank-grade ISO compliance for scaling businesses.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['TypeScript', 'Kubernetes', 'Go', 'Stripe & MoMo'],
      stats: [
        { label: 'Monthly Volume', value: '$4.2M' },
        { label: 'Uptime SLA', value: '99.99%' }
      ]
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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Urbanist', sans-serif" }}>
      {/* Hero & Project Showcase Section matching Image 2 */}
      <section 
        className="tech-grid-bg" 
        style={{ 
          padding: '60px 0 100px', 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          {/* Top Pill Badge */}
          <div style={{ marginBottom: '14px' }}>
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
              marginBottom: '38px',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h1 
                style={{ 
                  fontSize: 'clamp(42px, 5.8vw, 72px)', 
                  fontWeight: 900, 
                  color: '#0a0a0c',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  margin: 0
                }}
              >
                From Idea <br />
                to Production
              </h1>
            </div>

            {/* Right Side HUD Chevrons using Arrow 19.png */}
            <div className="hud-chevron-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '16px', marginLeft: 'auto' }}>
              <div style={{ display: 'flex', gap: '28px', alignItems: 'center', marginLeft: '96px' }}>
                {[...Array(11)].map((_, i) => (
                  <img key={`pr1-${i}`} src="/images/Arrow 19.png" alt="<" style={{ width: '20px', height: '20px', objectFit: 'contain', imageRendering: 'pixelated' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                {[...Array(11)].map((_, i) => (
                  <img key={`pr2-${i}`} src="/images/Arrow 19.png" alt="<" style={{ width: '20px', height: '20px', objectFit: 'contain', imageRendering: 'pixelated' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Arrows on the left */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '32px' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="carousel-circle-btn"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="carousel-circle-btn"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Master Split Showcase Card matching Image 2 */}
          <div 
            className="project-showcase-split"
            style={{
              backgroundColor: '#000000',
              borderRadius: '24px',
              border: '1px solid #1c1d22',
              overflow: 'hidden',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.45)',
              display: 'grid',
              gridTemplateColumns: '420px 1fr',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Left Column: Black Card with Glowing BT Emblem, Title, Description */}
            <div 
              style={{
                padding: '60px 48px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                zIndex: 2,
                backgroundColor: '#000000'
              }}
            >
              {/* Glowing Circular BT Logo Emblem */}
              <div 
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '42px',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                    filter: 'blur(10px)'
                  }}
                />
                <img 
                  src="/images/bt-logo.png" 
                  alt="BT Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} 
                />
              </div>

              {/* Project Title */}
              <h2 
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: 'clamp(32px, 3.8vw, 46px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '18px'
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

            {/* Right Column: MacBook Pro Mockup Image matching Image 2 */}
            <div 
              className="laptop-mockup-wrapper"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 20px 0',
                overflow: 'hidden',
                backgroundColor: '#050608'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  maxWidth: '820px',
                  position: 'relative',
                  transform: 'scale(1.02) translateY(12px)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title} 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Project Carousel Pagination Dots */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '36px' }}>
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: currentIndex === idx ? '32px' : '9px',
                  height: '9px',
                  borderRadius: '999px',
                  backgroundColor: currentIndex === idx ? '#0a0a0c' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .carousel-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }

        .carousel-circle-btn:hover {
          background-color: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.15);
        }

        .start-project-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 980px) {
          .project-showcase-split {
            grid-template-columns: 1fr;
          }
          .hud-chevron-grid {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
