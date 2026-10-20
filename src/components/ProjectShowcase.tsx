'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Website',
      description: 'We developed an AI-powered website with integrated chatbot features focused on automation and seamless user support.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['Next.js', 'OpenAI', 'Autonomous Agents']
    },
    {
      id: 'inziralink',
      title: 'InziraLink Logistics Platform',
      description: 'End-to-end freight dispatching and digital cargo transit management for East Africa, connecting transporters and enterprise clients.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['Enterprise Cloud', 'Telematics', 'Logistics']
    },
    {
      id: 'fintech-gateway',
      title: 'FinTech Settlement Core',
      description: 'High-throughput payment orchestration and automated reconciliation engine designed for regional African commercial operations.',
      image: '/images/Macbook Pro mockup.png',
      tags: ['FinTech', 'ISO 20022', 'PostgreSQL']
    }
  ];

  const current = projects[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '70px 0 90px', 
        backgroundColor: '#fafbfc', 
        borderBottom: '1px solid #eeeff2', 
        position: 'relative',
        fontFamily: "'Urbanist', sans-serif"
      }}
    >
      <div className="container">
        {/* Section Pill Badge: • Projects */}
        <ScrollReveal delay={40} yOffset={14}>
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
        </ScrollReveal>

        {/* Section Heading & HUD Chevrons */}
        <ScrollReveal delay={100} yOffset={20}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              justifyContent: 'space-between', 
              gap: '24px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h2 
                style={{ 
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: 'clamp(38px, 5.2vw, 68px)', 
                  fontWeight: 900, 
                  color: '#0a0a0c',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  margin: 0
                }}
              >
                From Idea <br />
                to Production
              </h2>
            </div>

            {/* Right Side HUD Chevrons using Arrow 19.png */}
            <div className="hud-chevron-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '16px', marginLeft: 'auto' }}>
              <div style={{ display: 'flex', gap: '28px', alignItems: 'center', marginLeft: '96px' }}>
                {[...Array(11)].map((_, i) => (
                  <img key={`p1-${i}`} src="/images/Arrow 19.png" alt="<" style={{ width: '20px', height: '20px', objectFit: 'contain', imageRendering: 'pixelated' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                {[...Array(11)].map((_, i) => (
                  <img key={`p2-${i}`} src="/images/Arrow 19.png" alt="<" style={{ width: '20px', height: '20px', objectFit: 'contain', imageRendering: 'pixelated' }} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Arrow Controls */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
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

        {/* Master Showcase Split Box matching Image 2 */}
        <ScrollReveal delay={200} duration={850} yOffset={28}>
          <div 
            className="project-showcase-split"
            style={{
              backgroundColor: '#000000',
              borderRadius: '24px',
              border: '1px solid #1c1d22',
              overflow: 'hidden',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.45)',
              display: 'grid',
              gridTemplateColumns: '400px 1fr',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Left Column: Black Card with Glowing BT Emblem, Title, Description */}
            <div 
              style={{
                padding: '56px 42px',
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
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '38px',
                  position: 'relative'
                }}
              >
                <img 
                  src="/images/bt-logo.png" 
                  alt="BT Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>

              {/* Project Title */}
              <h3 
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: 'clamp(30px, 3.5vw, 42px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '16px'
                }}
              >
                {current.title}
              </h3>

              {/* Project Description */}
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  marginBottom: '32px'
                }}
              >
                {current.description}
              </p>

              <div>
                <Link
                  href="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(180deg, #373942 0%, #1e1f24 50%, #131417 100%)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    border: '1px solid #2d2e35',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  <span>Explore All Projects</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: MacBook Pro Mockup Image */}
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
                  maxWidth: '780px',
                  position: 'relative',
                  transform: 'scale(1.02) translateY(10px)',
                  transition: 'transform 0.4s ease'
                }}
              >
                <img 
                  src={current.image} 
                  alt={current.title} 
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
        </ScrollReveal>
      </div>

      <style jsx>{`
        .carousel-circle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .carousel-circle-btn:hover {
          background-color: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.15);
        }

        @media (max-width: 960px) {
          .project-showcase-split {
            grid-template-columns: 1fr;
          }
          .hud-chevron-grid {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
