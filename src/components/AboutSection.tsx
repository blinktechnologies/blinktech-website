'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck } from 'lucide-react';
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
        {/* Section Pill Badge: • About Us */}
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                letterSpacing: '0.01em'
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)', 
              fontWeight: 800, 
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '36px',
              lineHeight: 1.14
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
              <div style={{ textAlign: 'center', paddingTop: '2px', zIndex: 10, position: 'relative' }}>
                {/* Available for worldwide project badge */}
                <div 
                  className="worldwide-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '5px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '11.5px',
                    fontWeight: 500,
                    color: '#e2e8f0',
                    marginBottom: '12px',
                    letterSpacing: '0.01em'
                  }}
                >
                  <span className="badge-glowing-dot" />
                  <span>Available for worldwide project</span>
                </div>

                {/* Based in Kigali, Rwanda */}
                <h3 
                  style={{ 
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 'clamp(20px, 2.4vw, 24px)', 
                    fontWeight: 700, 
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
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: '0.01em'
                  }}
                >
                  Let&apos;s work together
                </button>
              </div>

              {/* Dotted Globe Asset with Kigali Location Pin in Code */}
              <div className="globe-graphic-container">
                <img 
                  src="/images/globe.png" 
                  alt="Dotted globe centered on Africa"
                  className="dotted-globe-img"
                />
                
                {/* Animated Interactive Location Pin in Code */}
                <div className="kigali-location-node" title="Kigali, Rwanda (HQ)">
                  {/* Pin Tip Ground Sparkle */}
                  <div className="pin-tip-sparkle" />

                  {/* Pulsing broadcast radar rings radiating from the pin */}
                  <div className="radar-wave wave-1" />
                  <div className="radar-wave wave-2" />

                  {/* Pin Body & Flanking Soundwave Arcs */}
                  <div className="pin-assembly">
                    {/* Lateral Soundwave Arcs */}
                    <div className="soundwave-arcs">
                      <svg className="arc-left" width="14" height="22" viewBox="0 0 14 22" fill="none">
                        <path d="M11 3C7 7 7 15 11 19" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M5 6C3 9 3 13 5 16" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                      <svg className="arc-right" width="14" height="22" viewBox="0 0 14 22" fill="none">
                        <path d="M3 3C7 7 7 15 3 19" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M9 6C11 9 11 13 9 16" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* White Teardrop Pin Marker */}
                    <svg className="pin-svg" width="22" height="28" viewBox="0 0 22 28" fill="none">
                      <defs>
                        <filter id="pin-subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#ffffff" floodOpacity="0.5" />
                        </filter>
                      </defs>
                      <path 
                        d="M 11 1 C 5.5 1 1 5.5 1 11 C 1 17 11 27 11 27 C 11 27 21 17 21 11 C 21 5.5 16.5 1 11 1 Z" 
                        fill="#ffffff"
                        filter="url(#pin-subtle-glow)"
                      />
                      <circle cx="11" cy="10.5" r="4" fill="#0f1014" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Container: Light Background with exact border-radius 36px and squircle cards */}
          <ScrollReveal delay={240} duration={800} yOffset={30}>
            <div className="about-right-container">
              {/* Top Subtitle Text */}
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 4px', lineHeight: 1.5 }}>
                  Trusted by 120+ clients across 4 industries -
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: 0, lineHeight: 1.5 }}>
                  shipping AI from idea to production in 8–10 weeks
                </p>
              </div>

              {/* Two Compact Squircle Cards (Border-Radius 36px, Not Vertically Stretched) */}
              <div className="features-two-cards">
                {/* Card 1: Tailored Solutions */}
                <div className="feature-white-card">
                  <div className="feature-icon-circle">
                    <Layers size={17} color="#0f172a" />
                  </div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15.5px', fontWeight: 700, color: '#000000', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                    Tailored Solutions
                  </h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11.8px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    We adapt our approach to your product, team, and timeline - from MVP to enterprise-scale delivery.
                  </p>
                </div>

                {/* Card 2: Commitment to Quality */}
                <div className="feature-white-card">
                  <div className="feature-icon-circle">
                    <ShieldCheck size={17} color="#0f172a" />
                  </div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15.5px', fontWeight: 700, color: '#000000', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                    Commitment to Quality
                  </h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11.8px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    Rigorous testing, secure architecture, and transparent delivery - so every launch is stable and reliable.
                  </p>
                </div>
              </div>

              {/* Bottom Row: Sucessful launches & Massive 10+ */}
              <div className="stats-bottom-row">
                {/* Left: Sucessful launches + 5 Black Star Boxes matching Screenshot */}
                <div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12.5px', fontWeight: 600, color: '#0f172a', display: 'block', marginBottom: '8px', letterSpacing: '0.01em' }}>
                    Sucessful launches
                  </span>
                  <div className="stars-cluster" style={{ display: 'flex', gap: '3px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i}
                        className="star-black-box"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Massive 10+ */}
                <div className="massive-counter-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
          grid-template-columns: 1.16fr 0.98fr;
          gap: 24px;
          align-items: stretch;
        }

        .globe-dark-card {
          background-color: #0f1014;
          border-radius: 32px;
          border: 1px solid #1f2129;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.32);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 30px 24px 18px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          height: 100%;
        }

        .globe-dark-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.45);
        }

        .badge-glowing-dot {
          width: 6.5px;
          height: 6.5px;
          border-radius: 50%;
          background-color: #e2e8f0;
          display: inline-block;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
          animation: dotBlink 2.5s ease-in-out infinite;
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 0.65; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 12px rgba(255, 255, 255, 1); }
        }

        .btn-work-together {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #32353e 0%, #17181c 100%);
          color: #ffffff;
          padding: 8.5px 26px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 8px 22px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-work-together:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, #404450 0%, #202228 100%);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 12px 28px rgba(0, 0, 0, 0.6);
        }

        .globe-graphic-container {
          width: 100%;
          position: relative;
          margin-top: 6px;
          display: flex;
          justifyContent: center;
        }

        .dotted-globe-img {
          width: 100%;
          height: auto;
          max-height: 310px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.45));
        }

        /* Fully Code-Animated Location Pin Node */
        .kigali-location-node {
          position: absolute;
          top: 89.0%;
          left: 65.75%;
          transform: translate(-50%, -100%);
          width: 50px;
          height: 32px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
        }

        /* Tiny crisp white pinpoint spark where pin tip meets the globe */
        .pin-tip-sparkle {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.95);
          animation: tipGlow 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes tipGlow {
          0%, 100% { opacity: 0.65; transform: translateX(-50%) scale(0.85); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.35); box-shadow: 0 0 10px 3px rgba(255, 255, 255, 1); }
        }

        /* Pin Assembly with gentle floating bob */
        .pin-assembly {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pinBob 2.6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          transition: transform 0.25s ease;
        }

        .kigali-location-node:hover .pin-assembly {
          transform: scale(1.15) translateY(-2px);
        }

        @keyframes pinBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        /* Lateral Soundwave Arcs flanking the pin */
        .soundwave-arcs {
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 22px;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          pointer-events: none;
        }

        .arc-left {
          animation: soundPulseLeft 1.8s ease-in-out infinite;
        }

        .arc-right {
          animation: soundPulseRight 1.8s ease-in-out infinite;
        }

        @keyframes soundPulseLeft {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-2.5px); }
        }

        @keyframes soundPulseRight {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(2.5px); }
        }

        /* Radar Waves expanding in 2 concentric circular pulses */
        .radar-wave {
          position: absolute;
          top: 14px;
          left: 50%;
          border-radius: 50%;
          border: 1.2px solid rgba(255, 255, 255, 0.55);
          transform: translate(-50%, -50%);
          animation: pingBroadcast 2.4s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
          pointer-events: none;
        }

        .wave-1 {
          width: 22px;
          height: 22px;
          animation-delay: 0s;
        }

        .wave-2 {
          width: 22px;
          height: 22px;
          animation-delay: 1.2s;
        }

        @keyframes pingBroadcast {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.8);
            opacity: 0;
          }
        }

        /* Right Container: Rounded 36px with Distinct Drop Shadow */
        .about-right-container {
          background-color: #f5f6f8;
          border-radius: 36px;
          padding: 36px 30px 28px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06), 0 4px 14px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .about-right-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 58px rgba(0, 0, 0, 0.08), 0 6px 18px rgba(0, 0, 0, 0.03);
        }

        /* 2 Compact Cards Grid: width 208px, height ~184px, NOT vertically stretched */
        .features-two-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 26px;
        }

        /* 2 Squircle Feature Cards: Border-Radius 36px + Exact Proportions + Rich Soft Shadow */
        .feature-white-card {
          background-color: #ffffff;
          border-radius: 36px;
          padding: 22px 18px 20px;
          box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.09), 0 4px 14px -2px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          justifyContent: flex-start;
          min-height: 184px;
          max-height: 205px;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.32s ease;
        }

        .feature-white-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 44px -6px rgba(0, 0, 0, 0.12), 0 6px 18px -2px rgba(0, 0, 0, 0.05);
        }

        /* Circular Icon Badge: 36px circle */
        .feature-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f0f2f5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .feature-white-card:hover .feature-icon-circle {
          transform: scale(1.08);
          background-color: #e2e8f0;
        }

        .stats-bottom-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 6px;
        }

        /* 5 Black Star Boxes: 22px x 22px matching Screenshot Exactly */
        .star-black-box {
          width: 22px;
          height: 22px;
          background-color: #000000;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
          cursor: default;
        }

        .stars-cluster:hover .star-black-box {
          animation: starPop 0.4s ease alternate;
        }

        .star-black-box:hover {
          transform: scale(1.18);
          background-color: #1e293b;
        }

        @keyframes starPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        /* Massive 10+ metric matching Screenshot */
        .massive-counter-text {
          font-size: clamp(80px, 8vw, 104px);
          font-weight: 800;
          color: #e2e4ea;
          line-height: 0.72;
          letter-spacing: -3px;
          user-select: none;
          margin: 0;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .about-right-container:hover .massive-counter-text {
          color: #cbd5e1;
          transform: scale(1.02);
        }

        @media (max-width: 960px) {
          .about-split-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
