'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Star } from 'lucide-react';
import { StartProjectModal } from './StartProjectModal';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section 
      id="about" 
      style={{ 
        padding: '60px 0 80px', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #eeeff2',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Pill Badge */}
        <ScrollReveal delay={50} yOffset={16}>
          <div style={{ marginBottom: '16px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>About Us</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <ScrollReveal delay={120} yOffset={20}>
          <h2 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(34px, 4.8vw, 56px)', 
              fontWeight: 800, 
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '38px',
              lineHeight: 1.15
            }}
          >
            Next-Gen Tech Solutions,<br />
            Built in a Blink
          </h2>
        </ScrollReveal>

        {/* Two-Column Grid matching user's exact uploaded screenshot */}
        <div className="about-split-layout">
          {/* Left Card: Dark Globe Card */}
          <ScrollReveal delay={180} duration={800} yOffset={30}>
            <div className="globe-dark-card">
              {/* Top Info Inside Dark Card */}
              <div style={{ textAlign: 'center', paddingTop: '6px', zIndex: 10, position: 'relative' }}>
                {/* Available for worldwide project badge */}
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    fontSize: '10.5px',
                    color: '#94a3b8',
                    marginBottom: '10px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#94a3b8', display: 'inline-block' }} />
                  <span>Available for worldwide project</span>
                </div>

                {/* Based in Kigali, Rwanda */}
                <h3 
                  style={{ 
                    fontSize: 'clamp(19px, 2.3vw, 23px)', 
                    fontWeight: 600, 
                    color: '#ffffff',
                    marginBottom: '14px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Based in Kigali, Rwanda
                </h3>

                {/* Let's work together button */}
                <button 
                  onClick={() => setModalOpen(true)}
                  className="btn-work-together"
                >
                  Let&apos;s work together
                </button>
              </div>

              {/* Exact Dotted Globe Asset with Kigali Location Pin Marker & Radar Broadcast Waves */}
              <div className="globe-graphic-container">
                <img 
                  src="/images/globe.png" 
                  alt="Dotted globe centered on Africa with Kigali location pin"
                  className="dotted-globe-img"
                />
                
                {/* Glowing Location Pin at Kigali, Rwanda coordinates */}
                <div className="kigali-pin-wrapper">
                  <div className="radar-wave wave-1" />
                  <div className="radar-wave wave-2" />
                  <div className="radar-wave wave-3" />
                  {/* White Teardrop Pin Marker with inner dot */}
                  <div className="pin-marker">
                    <div className="pin-inner-dot" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Container: Light Background with Features & Stats */}
          <ScrollReveal delay={240} duration={800} yOffset={30}>
            <div className="about-right-container">
              {/* Top Subtitle Text */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', margin: '0 0 3px', lineHeight: 1.45 }}>
                  Trusted by 120+ clients across 4 industries -
                </p>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', margin: 0, lineHeight: 1.45 }}>
                  shipping AI from idea to production in 8–10 weeks
                </p>
              </div>

              {/* Two Side-by-Side White Feature Cards */}
              <div className="features-two-cards">
                {/* Card 1: Tailored Solutions */}
                <div className="feature-white-card">
                  <div className="feature-icon-circle">
                    <Layers size={15} color="#0f172a" />
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                    Tailored Solutions
                  </h4>
                  <p style={{ fontSize: '10.5px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    We adapt our approach to your product, team, and timeline - from MVP to enterprise-scale delivery.
                  </p>
                </div>

                {/* Card 2: Commitment to Quality */}
                <div className="feature-white-card">
                  <div className="feature-icon-circle">
                    <ShieldCheck size={15} color="#0f172a" />
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                    Commitment to Quality
                  </h4>
                  <p style={{ fontSize: '10.5px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    Rigorous testing, secure architecture, and transparent delivery - so every launch is stable and reliable.
                  </p>
                </div>
              </div>

              {/* Bottom Row: Sucessful launches & Massive 10+ */}
              <div className="stats-bottom-row">
                {/* Left: Sucessful launches + 5 Black Star Boxes */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '8px' }}>
                    Sucessful launches
                  </span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i}
                        className="star-black-box"
                      >
                        <Star size={11} fill="#ffffff" color="#ffffff" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Massive 10+ */}
                <div className="massive-counter-text">
                  10+
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .about-split-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }

        .globe-dark-card {
          background-color: #0b0c10;
          border-radius: 28px;
          border: 1px solid #1a1c23;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 28px 24px 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          height: 100%;
        }

        .globe-dark-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.4);
        }

        .btn-work-together {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #32353c 0%, #17191e 100%);
          color: #ffffff;
          padding: 8px 24px;
          border-radius: 999px;
          font-size: 11.5px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 6px 18px rgba(0, 0, 0, 0.45);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-work-together:hover {
          transform: translateY(-1px);
          background: linear-gradient(180deg, #3d414a 0%, #1e2027 100%);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.55);
        }

        .globe-graphic-container {
          width: 100%;
          position: relative;
          margin-top: 14px;
          display: flex;
          justifyContent: center;
        }

        .dotted-globe-img {
          width: 100%;
          height: auto;
          max-height: 340px;
          object-fit: contain;
          display: block;
        }

        /* Kigali Pin & Radio Broadcast Waves */
        .kigali-pin-wrapper {
          position: absolute;
          top: 67%;
          left: 56.5%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .pin-marker {
          width: 18px;
          height: 24px;
          background-color: #ffffff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          box-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pin-inner-dot {
          width: 7px;
          height: 7px;
          background-color: #0b0c10;
          border-radius: 50%;
        }

        .radar-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          transform: translate(-50%, -50%);
          animation: pingBroadcast 2.4s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
        }

        .wave-1 {
          width: 24px;
          height: 24px;
          animation-delay: 0s;
        }

        .wave-2 {
          width: 24px;
          height: 24px;
          animation-delay: 0.8s;
        }

        .wave-3 {
          width: 24px;
          height: 24px;
          animation-delay: 1.6s;
        }

        @keyframes pingBroadcast {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.8);
            opacity: 0;
          }
        }

        .about-right-container {
          background-color: #f4f5f8;
          border-radius: 28px;
          border: 1px solid #e5e7eb;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
        }

        .features-two-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 34px;
        }

        .feature-white-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 18px 16px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .feature-white-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .feature-icon-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          background: #fafbfc;
        }

        .stats-bottom-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 14px;
        }

        .star-black-box {
          width: 18px;
          height: 18px;
          background-color: #000000;
          border-radius: 2.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .star-black-box:hover {
          transform: scale(1.15);
        }

        .massive-counter-text {
          font-family: var(--font-heading);
          font-size: clamp(64px, 7vw, 84px);
          fontWeight: 900;
          color: #d1d5db;
          lineHeight: 0.75;
          letterSpacing: -3px;
          userSelect: none;
          margin: 0;
        }

        @media (max-width: 920px) {
          .about-split-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
