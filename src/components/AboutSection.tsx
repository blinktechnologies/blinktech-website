'use client';

import React, { useState } from 'react';
import { Box, Shield, Star } from 'lucide-react';
import { StartProjectModal } from './StartProjectModal';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section 
      id="about" 
      style={{ 
        padding: '50px 0 70px', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #eeeff2' 
      }}
    >
      <div className="container">
        {/* Section Pill Badge */}
        <div style={{ marginBottom: '14px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '999px',
              backgroundColor: '#f1f2f5',
              fontSize: '11px',
              fontWeight: 600,
              color: '#334155',
              border: '1px solid #e2e8f0'
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0f172a' }} />
            <span>About Us</span>
          </div>
        </div>

        {/* Section Headline */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4.6vw, 54px)', 
            fontWeight: 800, 
            color: '#0f172a',
            letterSpacing: '-0.03em',
            marginBottom: '36px',
            lineHeight: 1.15
          }}
        >
          Next-Gen Tech Solutions,<br />
          Built in a Blink
        </h2>

        {/* Two-Column Grid matching the screenshot */}
        <div className="about-split-layout">
          {/* Left Card: Dark Globe Card using exact reference asset */}
          <div className="globe-dark-card">
            {/* Top Info Inside Dark Card */}
            <div style={{ textAlign: 'center', paddingTop: '10px', zIndex: 10, position: 'relative' }}>
              {/* Available for worldwide project badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '10px',
                  color: '#94a3b8',
                  marginBottom: '10px'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <span>Available for worldwide project</span>
              </div>

              {/* Based in Kigali, Rwanda */}
              <h3 
                style={{ 
                  fontSize: 'clamp(18px, 2.2vw, 22px)', 
                  fontWeight: 700, 
                  color: '#ffffff',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}
              >
                Based in Kigali, Rwanda
              </h3>

              {/* Let's work together button */}
              <button 
                onClick={() => setModalOpen(true)}
                className="btn-work-together"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(180deg, #32353c 0%, #17191e 100%)',
                  color: '#ffffff',
                  padding: '7px 20px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  border: '1px solid #454854',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
                  cursor: 'pointer'
                }}
              >
                Let&apos;s work together
              </button>
            </div>

            {/* Exact Dotted Globe Asset with fully visible Rwanda beacon pin */}
            <div className="globe-graphic-container">
              <img 
                src="/images/globe.png" 
                alt="Globe with location beacon at Kigali, Rwanda"
                className="dotted-globe-img"
              />
              {/* Animated Radar Pulse over Kigali Beacon Pin */}
              <div className="beacon-radar-ring" />
            </div>
          </div>

          {/* Right Container: Light Background with Features & Stats */}
          <div className="about-right-container">
            {/* Top Subtitle Text */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a', margin: '0 0 2px', lineHeight: 1.4 }}>
                Trusted by 120+ clients across 4 industries -
              </p>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a', margin: 0, lineHeight: 1.4 }}>
                shipping AI from idea to production in 8-10 weeks
              </p>
            </div>

            {/* Two Side-by-Side White Feature Cards */}
            <div className="features-two-cards">
              {/* Card 1: Tailored Solutions */}
              <div className="feature-white-card">
                <div className="feature-icon-circle">
                  <Box size={14} color="#0f172a" />
                </div>
                <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Tailored Solutions
                </h4>
                <p style={{ fontSize: '9.5px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  We adapt our approach to your product, team, and timeline - from MVP to enterprise-scale delivery.
                </p>
              </div>

              {/* Card 2: Commitment to Quality */}
              <div className="feature-white-card">
                <div className="feature-icon-circle">
                  <Shield size={14} color="#0f172a" />
                </div>
                <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Commitment to Quality
                </h4>
                <p style={{ fontSize: '9.5px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  Rigorous testing, secure architecture, and transparent delivery - so every launch is stable and reliable.
                </p>
              </div>
            </div>

            {/* Bottom Row: Successful Launches & Massive 10+ */}
            <div className="stats-bottom-row">
              {/* Left: Successful launches + 5 Black Star Boxes */}
              <div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '6px' }}>
                  Successful launches
                </span>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#000000',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Star size={10} fill="#ffffff" color="#ffffff" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Massive 10+ */}
              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(56px, 6vw, 76px)',
                  fontWeight: 900,
                  color: '#e2e8f0',
                  lineHeight: 0.8,
                  letterSpacing: '-2px',
                  userSelect: 'none'
                }}
              >
                10+
              </div>
            </div>
          </div>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .about-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        .globe-dark-card {
          background-color: #0b0c10;
          border-radius: 20px;
          border: 1px solid #1f2128;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 24px 20px 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .globe-dark-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
        }

        .globe-graphic-container {
          width: 100%;
          position: relative;
          margin-top: 10px;
          display: flex;
          justifyContent: center;
        }

        .dotted-globe-img {
          width: 100%;
          height: auto;
          max-height: 320px;
          object-fit: contain;
          display: block;
        }

        .about-right-container {
          background-color: #f6f7f9;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .features-two-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 30px;
        }

        .feature-white-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .feature-white-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .feature-icon-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .stats-bottom-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 10px;
        }

        .beacon-radar-ring {
          position: absolute;
          top: 42%;
          left: 51%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid #10b981;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: radarPulse 2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        @keyframes radarPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.5);
            opacity: 0;
          }
        }

        @media (max-width: 860px) {
          .about-split-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
