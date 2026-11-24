'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { DotChevron } from './DotChevron';

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="hero">
      <div className="hero-canvas">
        {/* Top-left stepped pixel block */}
        <svg className="px-block px-tl" width="260" height="222" viewBox="0 0 260 222" aria-hidden="true">
          <rect x="0" y="0" width="74" height="74" fill="#0a0a0b" />
          <rect x="112" y="0" width="148" height="74" fill="#0a0a0b" />
          <rect x="73" y="74" width="74" height="74" fill="#0a0a0b" />
          <rect x="0" y="148" width="74" height="74" fill="#0a0a0b" />
        </svg>

        {/* Bottom-right stepped pixel block */}
        <svg className="px-block px-br" width="377" height="321" viewBox="0 0 377 321" aria-hidden="true">
          <rect x="270" y="0" width="107" height="107" fill="#0a0a0b" />
          <rect x="163" y="107" width="107" height="107" fill="#0a0a0b" />
          <rect x="0" y="214" width="215" height="107" fill="#0a0a0b" />
          <rect x="270" y="214" width="107" height="107" fill="#0a0a0b" />
        </svg>

        {/* Horizontal dashed band lines */}
        <div className="band-line band-top" />
        <div className="band-line band-bottom" />

        {/* Chevron rows */}
        <div className="chev-row chev-row-top">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="chev-flow-left" style={{ animationDelay: `${(9 - i) * 150}ms` }}>
              <DotChevron direction="left" color={i === 6 ? '#111111' : '#c9ccd1'} />
            </span>
          ))}
        </div>
        <div className="chev-row chev-row-bottom">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} className="chev-flow-right" style={{ animationDelay: `${i * 150}ms` }}>
              <DotChevron direction="right" color={i === 3 ? '#111111' : '#c9ccd1'} />
            </span>
          ))}
        </div>

        {/* Headline band: WE CRAFT [BT] IMPACT */}
        <div className="band-grid">
          <div className="band-left">
            <h1 className="hero-word word-left">
              <span className="w-we">WE</span>
              <span className="w-craft">CRAFT</span>
            </h1>
          </div>

          <div className="band-center">
            {/* Dashed guides from the top of the hero down to the card */}
            <span className="v-guide v-guide-a" />
            <span className="v-guide v-guide-b" />

            <div className="ai-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
                <path d="M10 2l1.8 5.6L17.5 9.5l-5.7 1.9L10 17l-1.8-5.6L2.5 9.5l5.7-1.9z" />
                <path d="M18.5 13l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" />
                <path d="M5 16l.6 1.6 1.6.6-1.6.6L5 20.4l-.6-1.6-1.6-.6 1.6-.6z" />
              </svg>
              <span>AI-Driven Agency</span>
            </div>

            <div className="bt-card">
              <span className="card-mark" style={{ top: 46, left: -4 }} />
              <span className="card-mark" style={{ top: 46, right: -4 }} />
              <span className="card-mark" style={{ bottom: 45, left: -4 }} />
              <span className="card-mark" style={{ bottom: 45, right: -4 }} />
              <div className="bt-halo" />
              <div className="bt-emblem">
                <BTLogo size={224} />
              </div>
            </div>
          </div>

          <div className="band-right">
            <span className="hero-word word-right">IMPACT</span>
          </div>
        </div>

        {/* Subtitle + CTAs */}
        <div className="hero-bottom">
          <p className="hero-sub">
            Turning ideas into meaningful change.
            <br />
            Creating for today. Shaping tomorrow.
          </p>
          <div className="hero-ctas">
            <a href="#about" className="btn-explore">Explore our vision</a>
            <button onClick={() => setModalOpen(true)} className="btn-touch">
              <span className="touch-tile">
                <DotChevron direction="right" color="#6b7078" size={3.2} />
              </span>
              <span className="touch-label">Get in touch</span>
            </button>
          </div>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .hero {
          position: relative;
          background-color: #f3f4f6;
          background-image:
            linear-gradient(to right, rgba(17, 24, 39, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 24, 39, 0.035) 1px, transparent 1px);
          background-size: 50.5px 50.5px;
          background-position: 17px 0;
          overflow: hidden;
        }
        .hero-canvas {
          position: relative;
          max-width: 1441px;
          height: 814px;
          margin: 0 auto;
          border-left: 1px solid #dadada;
          border-right: 1px solid #dadada;
        }
        .hero::before,
        .hero::after {
          content: '';
        }
        .px-block {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }
        .px-tl { top: 0; left: 0; }
        .px-br { bottom: 15px; right: 0; }

        .band-line {
          position: absolute;
          left: 0;
          right: 0;
          border-top: 1px dashed #c4c7cc;
          z-index: 1;
        }
        .band-top { top: 222px; }
        .band-bottom { top: 423px; }

        .chev-row {
          position: absolute;
          display: flex;
          gap: 41px;
          z-index: 2;
          pointer-events: none;
        }
        .chev-row-top { top: 188px; left: 939px; }
        .chev-row-bottom { top: 438px; left: 32px; }
        .chev-flow-left,
        .chev-flow-right {
          display: inline-flex;
          width: 10px;
          justify-content: center;
        }
        .chev-flow-left { animation: flowLeft 2.6s ease-in-out infinite; }
        .chev-flow-right { animation: flowRight 2.6s ease-in-out infinite; }
        @keyframes flowLeft {
          0%, 100% { opacity: 0.55; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-3px); }
        }
        @keyframes flowRight {
          0%, 100% { opacity: 0.55; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(3px); }
        }

        .band-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 472px;
          display: grid;
          grid-template-columns: minmax(0, 593fr) 304px minmax(0, 542fr);
          z-index: 3;
        }
        .band-left,
        .band-right {
          display: flex;
          align-items: center;
          padding-top: 222px;
          height: 423px;
        }
        .band-left {
          justify-content: flex-end;
          padding-right: 27px;
        }
        .band-right {
          justify-content: flex-start;
          padding-left: 67px;
        }
        .hero-word {
          font-family: var(--font-inter-tight), 'Inter Tight', 'Helvetica Neue', Arial, sans-serif;
          font-size: 120px;
          font-weight: 600;
          letter-spacing: -0.085em;
          line-height: 1;
          margin: 0;
          white-space: nowrap;
          display: flex;
          gap: 0.38em;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .word-left {
          background-image: linear-gradient(90deg, #4c4f53 0%, #3a3c3f 45%, #050505 100%);
        }
        .word-right {
          background-image: linear-gradient(90deg, #6b6e72 0%, #3f4144 45%, #1c1d1f 100%);
        }

        .band-center {
          position: relative;
          height: 472px;
        }
        .v-guide {
          position: absolute;
          top: 0;
          height: 172px;
          border-left: 1px dashed #c4c7cc;
        }
        .v-guide-a { left: 102px; }
        .v-guide-b { left: 200px; }

        .ai-badge {
          position: absolute;
          top: 88px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 35px;
          padding: 0 17px 0 14px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 0 #d9dbdf, 0 6px 14px rgba(0, 0, 0, 0.05);
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #111111;
          white-space: nowrap;
          z-index: 4;
          transition: transform 0.25s ease;
        }
        .ai-badge:hover { transform: translateX(-50%) translateY(-2px); }

        .bt-card {
          position: absolute;
          top: 172px;
          left: 0;
          width: 304px;
          height: 300px;
          border-radius: 20px;
          background: #f8f8fa;
          border: 1px solid #e2e4e8;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-mark {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #000000;
          z-index: 2;
        }
        .bt-halo {
          position: absolute;
          width: 298px;
          height: 298px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px dashed #c9ccd1;
          animation: haloSpin 60s linear infinite;
        }
        .bt-emblem {
          position: relative;
          z-index: 1;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bt-card:hover .bt-emblem { transform: scale(1.04) rotate(-2deg); }
        @keyframes haloSpin {
          to { transform: rotate(360deg); }
        }

        .hero-bottom {
          position: absolute;
          top: 535px;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 3;
        }
        .hero-sub {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
          color: #111111;
          margin: 0 0 35px;
        }
        .hero-ctas {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
        }
        .btn-explore {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 188px;
          height: 62px;
          border-radius: 12px;
          background: #ffffff;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18.5px;
          font-weight: 600;
          color: #111111;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-explore:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
        }
        .btn-touch {
          display: inline-flex;
          align-items: center;
          width: 201px;
          height: 62px;
          padding: 0 8px;
          border-radius: 12px;
          background: linear-gradient(180deg, #303236 0%, #121315 100%);
          border: 1px solid #0b0b0c;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 4px 0 #1a1b1d,
            0 10px 18px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-touch:hover {
          transform: translateY(-2px);
          filter: brightness(1.12);
        }
        .touch-tile {
          width: 44px;
          height: 50px;
          border-radius: 8px;
          background: linear-gradient(180deg, #f5f5f6 0%, #c9cbce 100%);
          box-shadow: inset 0 -2px 0 #9ccf6b, 0 1px 2px rgba(0, 0, 0, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .btn-touch:hover .touch-tile { transform: translateX(2px); }
        .touch-label {
          flex: 1;
          text-align: center;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18.5px;
          font-weight: 500;
          color: #ffffff;
        }

        /* ---------- Responsive: stack the band below desktop widths ---------- */
        @media (max-width: 1200px) {
          .hero-canvas {
            height: auto;
            padding: 150px 16px 200px;
          }
          .band-line, .chev-row, .v-guide { display: none; }
          .px-tl { transform: scale(0.6); transform-origin: top left; }
          .px-br { transform: scale(0.5); transform-origin: bottom right; }
          .band-grid {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
            gap: 20px;
          }
          .band-left, .band-right {
            padding: 0;
            height: auto;
            justify-content: center;
          }
          .band-center { order: -1; height: auto; display: flex; flex-direction: column; align-items: center; gap: 24px; }
          .ai-badge { position: relative; top: 0; left: 0; transform: none; }
          .ai-badge:hover { transform: translateY(-2px); }
          .bt-card { position: relative; top: 0; width: 220px; height: 220px; }
          .bt-halo { width: 214px; height: 214px; }
          .bt-emblem :global(div > div) { width: 150px !important; height: 150px !important; }
          .hero-word { font-size: clamp(54px, 11vw, 110px); }
          .hero-bottom { position: relative; top: 0; margin-top: 40px; }
        }
        @media (max-width: 520px) {
          .hero-ctas { flex-direction: column; }
          .px-tl { transform: scale(0.4); }
          .px-br { transform: scale(0.35); }
        }
      `}</style>
    </section>
  );
};
