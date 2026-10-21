'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section 
      className="tech-grid-bg"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 86px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: '16px',
        paddingBottom: '36px',
        borderBottom: '1px solid #eeeff2',
        overflow: 'hidden',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Top-Left Exact Stepped Pixel Blocks matching user close-up image */}
      <div 
        className="corner-pixel-block-top"
        style={{
          position: 'absolute',
          top: 0,
          left: 'max(16px, calc((100vw - 1240px) / 2 + 16px))',
          width: '192px',
          height: '144px',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2
        }}
      >
        <svg width="192" height="144" viewBox="0 0 192 144" fill="none">
          {/* Row 0 (y=0..48): col 0 square, col 2 & 3 horizontal rectangle */}
          <rect x="0" y="0" width="48" height="48" fill="#000000" />
          <rect x="96" y="0" width="96" height="48" fill="#000000" />
          {/* Row 1 (y=48..96): col 1 square */}
          <rect x="48" y="48" width="48" height="48" fill="#000000" />
          {/* Row 2 (y=96..144): col 0 square */}
          <rect x="0" y="96" width="48" height="48" fill="#000000" />
        </svg>
      </div>

      {/* Bottom-Right Exact Stepped Pixel Blocks matching user screenshot (180 deg rotation) */}
      <div 
        className="corner-pixel-block-bottom"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 'max(16px, calc((100vw - 1240px) / 2 + 16px))',
          width: '192px',
          height: '144px',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2
        }}
      >
        <svg width="192" height="144" viewBox="0 0 192 144" fill="none">
          {/* Row 0 (y=0..48): col 3 square */}
          <rect x="144" y="0" width="48" height="48" fill="#000000" />
          {/* Row 1 (y=48..96): col 2 square */}
          <rect x="96" y="48" width="48" height="48" fill="#000000" />
          {/* Row 2 (y=96..144): col 0 & 1 rectangle, col 3 square */}
          <rect x="0" y="96" width="96" height="48" fill="#000000" />
          <rect x="144" y="96" width="48" height="48" fill="#000000" />
        </svg>
      </div>

      {/* Vertical Dashed Center Guideline from top down through center */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          bottom: '260px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          borderLeft: '1px dashed #cbd5e1',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        {/* Top Tag: AI-Driven Agency with animated entrance and twinkle */}
        <div className="hero-ai-tag-wrapper">
          <div 
            className="ai-badge"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              padding: '6px 16px', 
              borderRadius: '999px', 
              backgroundColor: '#ffffff', 
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
              fontSize: '11.5px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              color: '#0f172a'
            }}
          >
            <span className="ai-sparkle" style={{ fontSize: '12px', display: 'inline-block' }}>✦</span>
            <span>AI-Driven Agency</span>
          </div>
        </div>

        {/* Horizontal Technical Dashed Band behind WE CRAFT [BT] IMPACT */}
        <div className="hero-band-wrapper">
          <div className="container hero-band-content">
            {/* Left: WE CRAFT */}
            <div 
              className="hero-we-craft"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(10px, 1.8vw, 20px)',
                flex: 1,
                justifyContent: 'flex-end',
                paddingRight: 'clamp(8px, 2vw, 24px)'
              }}
            >
              <span 
                className="word-we"
                style={{
                  fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif",
                  fontSize: 'clamp(42px, 7.5vw, 98px)',
                  fontWeight: 700,
                  color: '#64748b',
                  letterSpacing: '0.04em',
                  lineHeight: 1
                }}
              >
                WE
              </span>
              <span 
                className="word-craft"
                style={{
                  fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif",
                  fontSize: 'clamp(42px, 7.5vw, 98px)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.04em',
                  lineHeight: 1
                }}
              >
                CRAFT
              </span>
            </div>

            {/* Center Box with 4 Black Corner Marks, Dashed Circular Halo, and BT Logo */}
            <div className="center-bt-card">
              {/* 4 Black Corner Marks positioned exactly at dashed line intersection points */}
              <div style={{ position: 'absolute', top: '35px', left: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
              <div style={{ position: 'absolute', top: '35px', right: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
              <div style={{ position: 'absolute', bottom: '35px', left: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
              <div style={{ position: 'absolute', bottom: '35px', right: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />

              {/* Animated Dashed Circular Halo enclosing the BT emblem */}
              <div className="bt-dashed-halo" />

              {/* Exact BT Metallic Circular Emblem with float response */}
              <div className="bt-emblem-float">
                <BTLogo size={136} />
              </div>
            </div>

            {/* Right: IMPACT + Row of Chevrons inside the band */}
            <div 
              className="hero-impact-container"
              style={{ 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center',
                flex: 1,
                justifyContent: 'flex-start',
                paddingLeft: 'clamp(8px, 2vw, 24px)'
              }}
            >
              <span 
                className="word-impact"
                style={{
                  fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif",
                  fontSize: 'clamp(42px, 7.5vw, 98px)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.04em',
                  lineHeight: 1
                }}
              >
                IMPACT
              </span>

              {/* Chevrons inside the band pointing LEFT with animated wave (< < < < < < < < <) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-32px',
                  right: 'clamp(12px, 3vw, 48px)',
                  display: 'flex',
                  gap: '24px',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="chevron-stream-left" style={{ animationDelay: `${(8 - i) * 180}ms` }}>
                    <PixelChevronLeft color={i === 6 ? '#000000' : '#cbd5e1'} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Chevrons Row on the left with animated wave (pointing RIGHT: > > > > > > > > > > >) */}
        <div 
          className="container hero-bottom-chevrons"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '26px',
            userSelect: 'none',
            pointerEvents: 'none',
            paddingLeft: 'clamp(20px, 6vw, 72px)',
            marginTop: '16px',
            marginBottom: '26px'
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="chevron-stream-right" style={{ animationDelay: `${i * 160}ms` }}>
              <PixelChevronRight color={i === 3 ? '#000000' : '#cbd5e1'} />
            </div>
          ))}
        </div>

        {/* Subtitle text */}
        <div 
          className="hero-subtitle-box"
          style={{
            textAlign: 'center',
            marginBottom: '28px',
            fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
            fontSize: '13px',
            lineHeight: 1.55,
            color: '#334155',
            fontWeight: 500,
            letterSpacing: '-0.01em'
          }}
        >
          <p style={{ margin: 0 }}>Turning ideas into meaningful change.</p>
          <p style={{ margin: 0 }}>Creating for today. Shaping tomorrow.</p>
        </div>

        {/* CTA Buttons */}
        <div 
          className="hero-cta-buttons"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap'
          }}
        >
          {/* Explore our vision */}
          <a
            href="#about"
            className="btn-explore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              padding: '10px 24px',
              borderRadius: '8px',
              fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
              fontSize: '12.5px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Explore our vision
          </a>

          {/* Get in touch with dotted matrix icon, glossy pill, and neon rim glow */}
          <button
            onClick={() => setModalOpen(true)}
            className="btn-touch"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(180deg, #2c2e35 0%, #151619 100%)',
              color: '#ffffff',
              padding: '6px 20px 6px 7px',
              borderRadius: '10px',
              fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif",
              fontSize: '12.5px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              border: '1px solid #33353e',
              boxShadow: '0 10px 24px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Light Inset Badge with Dotted Constellation Arrow */}
            <div 
              className="touch-badge"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(163, 230, 53, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.25s ease'
              }}
            >
              {/* Dotted Arrow matching scratch_buttons.png */}
              <svg className="touch-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.25s ease' }}>
                <circle cx="2.5" cy="3.5" r="1.1" fill="#475569" />
                <circle cx="5.5" cy="3.5" r="1.1" fill="#475569" />
                <circle cx="5.5" cy="6.5" r="1.1" fill="#475569" />
                <circle cx="8.5" cy="6.5" r="1.1" fill="#475569" />
                <circle cx="11.5" cy="7" r="1.1" fill="#475569" />
                <circle cx="8.5" cy="7.5" r="1.1" fill="#475569" />
                <circle cx="5.5" cy="7.5" r="1.1" fill="#475569" />
                <circle cx="5.5" cy="10.5" r="1.1" fill="#475569" />
                <circle cx="2.5" cy="10.5" r="1.1" fill="#475569" />
              </svg>
            </div>
            <span>Get in touch</span>
          </button>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        /* Hero Load Choreography */
        .hero-ai-tag-wrapper {
          text-align: center;
          padding-top: 64px;
          padding-bottom: 60px;
          position: relative;
          z-index: 5;
          animation: dropTag 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .hero-we-craft {
          animation: slideFromLeft 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .hero-impact-container {
          animation: slideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .center-bt-card {
          position: relative;
          width: clamp(170px, 18vw, 215px);
          height: clamp(170px, 18vw, 215px);
          background-color: #ffffff;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
          border: 1px dashed #cbd5e1;
          flex-shrink: 0;
          z-index: 5;
          animation: popCenter 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease;
        }

        .center-bt-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.12);
          border-color: #94a3b8;
        }

        /* Rotating Orbit Halo */
        .bt-dashed-halo {
          position: absolute;
          width: clamp(130px, 14vw, 172px);
          height: clamp(130px, 14vw, 172px);
          border-radius: 50%;
          border: 1px dashed #cbd5e1;
          pointer-events: none;
          animation: rotateOrbit 36s linear infinite;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .center-bt-card:hover .bt-dashed-halo {
          border-color: #475569;
          box-shadow: 0 0 18px rgba(15, 23, 42, 0.08);
          animation-duration: 20s;
        }

        .bt-emblem-float {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .center-bt-card:hover .bt-emblem-float {
          transform: scale(1.05);
        }

        .hero-subtitle-box {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }

        .hero-cta-buttons {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }

        .hero-band-wrapper {
          border-top: 1px dashed #cbd5e1;
          border-bottom: 1px dashed #cbd5e1;
          height: 144px;
          background: #ffffff;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-band-content {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
        }

        /* Streaming Animated Chevrons moving into page */
        .chevron-stream-left {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: streamLeft 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes streamLeft {
          0% {
            opacity: 0.15;
            transform: translateX(12px) scale(0.92);
          }
          40%, 60% {
            opacity: 1;
            transform: translateX(0px) scale(1.08);
          }
          100% {
            opacity: 0.15;
            transform: translateX(-12px) scale(0.92);
          }
        }

        .chevron-stream-right {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: streamRight 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes streamRight {
          0% {
            opacity: 0.15;
            transform: translateX(-12px) scale(0.92);
          }
          40%, 60% {
            opacity: 1;
            transform: translateX(0px) scale(1.08);
          }
          100% {
            opacity: 0.15;
            transform: translateX(12px) scale(0.92);
          }
        }

        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes dropTag {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-32px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(32px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes popCenter {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Twinkle on AI Sparkle */
        .ai-sparkle {
          animation: twinkleSparkle 2.6s ease-in-out infinite;
        }

        @keyframes twinkleSparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.28) rotate(30deg);
            opacity: 1;
            color: #0284c7;
          }
        }

        /* Interactive Buttons */
        .btn-explore:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important;
          border-color: #cbd5e1 !important;
        }

        .btn-explore:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-touch:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 12px rgba(163, 230, 53, 0.35) !important;
          border-color: #4b5162 !important;
        }

        .btn-touch:hover .touch-arrow {
          transform: translateX(3px);
        }

        .btn-touch:hover .touch-badge {
          transform: scale(1.06);
        }

        .btn-touch:active {
          transform: translateY(0) scale(0.98);
        }

        :global(.ai-badge) {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
        }

        :global(.ai-badge:hover) {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08) !important;
          border-color: #cbd5e1 !important;
        }
      `}</style>
    </section>
  );
};

const PixelChevronRight: React.FC<{ color?: string }> = ({ color = '#cbd5e1' }) => (
  <svg width="7" height="9" viewBox="0 0 7 9" fill="none">
    <circle cx="1" cy="1" r="0.8" fill={color} />
    <circle cx="2.5" cy="2.5" r="0.8" fill={color} />
    <circle cx="4" cy="4.5" r="0.8" fill={color} />
    <circle cx="2.5" cy="6.5" r="0.8" fill={color} />
    <circle cx="1" cy="8" r="0.8" fill={color} />
  </svg>
);

const PixelChevronLeft: React.FC<{ color?: string }> = ({ color = '#cbd5e1' }) => (
  <svg width="7" height="9" viewBox="0 0 7 9" fill="none">
    <circle cx="6" cy="1" r="0.8" fill={color} />
    <circle cx="4.5" cy="2.5" r="0.8" fill={color} />
    <circle cx="3" cy="4.5" r="0.8" fill={color} />
    <circle cx="4.5" cy="6.5" r="0.8" fill={color} />
    <circle cx="6" cy="8" r="0.8" fill={color} />
  </svg>
);
