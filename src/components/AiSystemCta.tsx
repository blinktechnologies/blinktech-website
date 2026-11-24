'use client';

import React, { useState } from 'react';
import { StartProjectModal } from './StartProjectModal';
import { ScrollReveal } from './ScrollReveal';
import { DotChevron } from './DotChevron';

const ChevronTrio: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
  const colors = direction === 'right' ? ['#6f8396', '#0d2840', '#9fb0bf'] : ['#9fb0bf', '#0d2840', '#6f8396'];
  return (
    <div className="chev-trio">
      {colors.map((c, i) => (
        <span key={i} className="trio-item" style={{ animationDelay: `${i * 180}ms` }}>
          <DotChevron direction={direction} color={c} size={6} />
        </span>
      ))}
    </div>
  );
};

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="cta-tag">
    <span className="cta-tag-sq" />
    {label}
  </span>
);

export const AiSystemCta: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="cta">
        <div className="cta-canvas">
          {/* White stepped frame around the bottom of the grid */}
          <span className="step" style={{ left: 17, top: 262, width: 234, height: 357 }} />
          <span className="step" style={{ left: 17, top: 382, width: 469, height: 237 }} />
          <span className="step" style={{ left: 17, top: 499, width: 703, height: 120 }} />
          <span className="step" style={{ right: 17, top: 262, width: 234, height: 357 }} />
          <span className="step" style={{ right: 17, top: 382, width: 469, height: 237 }} />
          <span className="step" style={{ left: 17, right: 17, top: 559, height: 60 }} />

          <div className="trio trio-left"><ChevronTrio direction="right" /></div>
          <div className="trio trio-right"><ChevronTrio direction="left" /></div>

          <ScrollReveal delay={80} duration={850} yOffset={24}>
            <button type="button" className="cta-headline" onClick={() => setModalOpen(true)}>
              LET’S START
              <br />
              YOUR AI SYSTEM
            </button>
          </ScrollReveal>

          <button type="button" className="cta-logo" onClick={() => setModalOpen(true)} aria-label="Start your AI system">
            <img src="/images/bt-logo.png" alt="" loading="lazy" decoding="async" />
          </button>

          <div className="tag-left"><Tag label="INTELLIGENT AUTOMATION" /></div>
          <div className="tag-right"><Tag label="GLOBAL SUPPORT" /></div>
        </div>
      </section>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .cta {
          background-color: #f3f4f6;
          background-image:
            linear-gradient(to right, #dcdde0 1px, transparent 1px),
            linear-gradient(to bottom, #dcdde0 1px, transparent 1px);
          background-size: 51.5px 51.5px;
          background-position: -20px 6px;
          overflow: hidden;
        }
        .cta-canvas {
          position: relative;
          max-width: 1441px;
          height: 619px;
          margin: 0 auto;
        }
        .step {
          position: absolute;
          background: #ffffff;
          z-index: 0;
        }
        .trio {
          position: absolute;
          top: 52px;
          z-index: 1;
        }
        .trio-left { left: 165px; }
        .trio-right { right: 166px; }
        .cta :global(.chev-trio) {
          display: flex;
          gap: 24px;
        }
        .cta :global(.trio-item) {
          display: inline-flex;
          animation: trioPulse 2.2s ease-in-out infinite;
        }
        @keyframes trioPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .cta-headline {
          position: relative;
          z-index: 2;
          display: block;
          margin: 0 auto;
          padding: 0;
          padding-top: 98px;
          font-family: var(--font-inter-tight), 'Inter Tight', 'Helvetica Neue', Arial, sans-serif;
          font-size: 118px;
          font-weight: 600;
          line-height: 116px;
          letter-spacing: -0.07em;
          word-spacing: 0.16em;
          text-align: center;
          background: linear-gradient(90deg, #5a5d62 0%, #3a3c40 40%, #111214 75%, #000000 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          cursor: pointer;
          white-space: nowrap;
        }
        .cta-logo {
          position: absolute;
          z-index: 2;
          left: 50%;
          top: 349px;
          width: 116px;
          height: 116px;
          margin-left: -57px;
          padding: 0;
          border-radius: 50%;
          filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.35));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-logo:hover { transform: scale(1.08) rotate(-4deg); }
        .cta-logo img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .tag-left, .tag-right {
          position: absolute;
          top: 551px;
          z-index: 2;
        }
        .tag-left { left: 128px; }
        .tag-right { right: 129px; }
        .cta :global(.cta-tag) {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 19px;
          padding: 0 4px 0 5px;
          background: #0a0a0c;
          color: #ffffff;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .cta :global(.cta-tag-sq) {
          width: 11px;
          height: 11px;
          background: #ffffff;
          display: inline-block;
        }
        @media (max-width: 1100px) {
          .cta-canvas { height: auto; padding-bottom: 60px; }
          .step, .trio { display: none; }
          .cta-headline { font-size: clamp(44px, 10vw, 110px); line-height: 1; padding-top: 72px; }
          .cta-logo { position: relative; display: block; left: auto; top: auto; margin: 28px auto 0; }
          .tag-left, .tag-right { position: static; display: flex; justify-content: center; margin-top: 18px; }
        }
      `}</style>
    </>
  );
};
