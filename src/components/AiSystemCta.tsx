'use client';

import React, { useState } from 'react';
import { StartProjectModal } from './StartProjectModal';
import { ScrollReveal } from './ScrollReveal';

export const AiSystemCta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
          <ScrollReveal delay={40} yOffset={14}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ChevronCluster direction="right" opacity={0.65} color="#3d5a73" />
                <ChevronCluster direction="right" opacity={1.0} color="#0d2840" />
                <ChevronCluster direction="right" opacity={0.35} color="#8ba4b8" />
              </div>

              {/* Right Chevron Cluster: 3 chevrons pointing LEFT with directional fade */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ChevronCluster direction="left" opacity={0.35} color="#8ba4b8" />
                <ChevronCluster direction="left" opacity={1.0} color="#0d2840" />
                <ChevronCluster direction="left" opacity={0.65} color="#3d5a73" />
              </div>
            </div>
          </ScrollReveal>

          {/* Main Giant Headline */}
          <ScrollReveal delay={120} duration={850} yOffset={28}>
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
          </ScrollReveal>

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
    </>
  );
};

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
