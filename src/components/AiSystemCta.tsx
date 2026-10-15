'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AiSystemCta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section 
        className="tech-grid-bg"
        style={{
          borderTop: '1px solid #eeeff2',
          borderBottom: '1px solid #eeeff2',
          padding: '90px 0 70px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#fafbfc'
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          {/* Top Indicator Chevrons */}
          <ScrollReveal delay={40} yOffset={14}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '32px',
                padding: '0 10px'
              }}
            >
              {/* Left Chevron Cluster */}
              <div style={{ display: 'flex', gap: '8px', color: '#94a3b8' }}>
                <ChevronCluster direction="right" />
                <ChevronCluster direction="right" />
                <ChevronCluster direction="right" />
                <ChevronCluster direction="right" />
              </div>

              {/* Right Chevron Cluster */}
              <div style={{ display: 'flex', gap: '8px', color: '#94a3b8' }}>
                <ChevronCluster direction="left" />
                <ChevronCluster direction="left" />
                <ChevronCluster direction="left" />
                <ChevronCluster direction="left" />
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
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(42px, 7.5vw, 96px)',
                  fontWeight: 900,
                  color: '#0a0a0c',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  margin: 0
                }}
              >
                LET’S START <br />
                YOUR AI SYSTEM
              </h2>

              {/* Center BT Logo Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '36px',
                  marginBottom: '40px',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12) rotate(4deg)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
              >
                <BTLogo size={96} />
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Left & Right Technical Markers */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              fontSize: '11px',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '1.5px',
              color: '#1f242d',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#0a0a0c' }} />
              <span>INTELLIGENT AUTOMATION</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#0a0a0c' }} />
              <span>GLOBAL SUPPORT</span>
            </div>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

const ChevronCluster: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
  const isRight = direction === 'right';
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: isRight ? 'none' : 'scaleX(-1)' }}>
      <path d="M7 6L13 12L7 18" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6L19 12L13 18" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
