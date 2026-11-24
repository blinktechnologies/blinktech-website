'use client';

import React, { useState } from 'react';
import { StartProjectModal } from './StartProjectModal';
import { ScrollReveal } from './ScrollReveal';
import { SectionPill } from './SectionPill';

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
    <path d="M3 12l9 4.5 9-4.5" />
    <path d="M3 16.5L12 21l9-4.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-frame">
        <div className="about-head">
          <ScrollReveal delay={40} yOffset={14}>
            <SectionPill label="About Us" />
          </ScrollReveal>
          <ScrollReveal delay={100} yOffset={18}>
            <h2 className="about-title">
              Next-Gen Tech Solutions,
              <br />
              Built in a Blink
            </h2>
          </ScrollReveal>
        </div>

        <div className="about-grid">
          <ScrollReveal delay={160} duration={800} yOffset={26}>
            <div className="globe-card">
              <div className="globe-card-top">
                <span className="worldwide-pill">
                  <span className="ww-dot"><span /></span>
                  Available for worldwide project
                </span>
                <h3 className="globe-title">Based in Kigali, Rwanda</h3>
                <button onClick={() => setModalOpen(true)} className="btn-work">
                  Let&apos;s work together
                </button>
              </div>
              <img src="/images/about-globe.png" alt="Dotted globe with a pin on Kigali, Rwanda" className="globe-img" loading="lazy" decoding="async" />
              <span className="pin-pulse" aria-hidden="true" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220} duration={800} yOffset={26}>
            <div className="trust-panel">
              <p className="trust-text">
                Trusted by 120+ clients across 4 industries -
                <br />
                shipping AI from idea to production in 8–10 weeks
              </p>

              <div className="feature-cards">
                <div className="feature-card">
                  <span className="feature-icon"><LayersIcon /></span>
                  <h4>Tailored Solutions</h4>
                  <p>We adapt our approach to your product, team, and timeline - from MVP to enterprise-scale delivery.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon"><ShieldIcon /></span>
                  <h4>Commitment to Quality</h4>
                  <p>Rigorous testing, secure architecture, and transparent delivery - so every launch is stable and reliable.</p>
                </div>
              </div>

              <div className="launch-row">
                <div>
                  <span className="launch-label">Sucessful launches</span>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="star-box">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
                <span className="big-count">10+</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .about {
          position: relative;
          /* grey page with hairlines at the white/grey split and the 15px divider strip */
          background:
            linear-gradient(to bottom, transparent 334px, #dadcdf 334px, #dadcdf 335px, transparent 335px),
            linear-gradient(to top, transparent 15px, #dadcdf 15px, #dadcdf 16px, transparent 16px),
            #f3f4f6;
          border-bottom: 1px solid #dadcdf;
        }
        .about-frame {
          position: relative;
          max-width: 1441px;
          margin: 0 auto;
          padding-bottom: 105px;
          background: linear-gradient(to bottom, #ffffff 0, #ffffff 334px, transparent 334px);
          box-shadow: inset 0 -1px 0 transparent;
        }
        .about-frame::after {
          content: '';
          position: absolute;
          inset: 0 17px 0 17px;
          border-left: 1px solid #ececee;
          border-right: 1px solid #ececee;
          pointer-events: none;
          height: 334px;
        }
        .about-head {
          padding: 32px 70px 0;
          position: relative;
          z-index: 1;
        }
        .about-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 73px;
          font-weight: 500;
          line-height: 72px;
          letter-spacing: -0.035em;
          color: #222222;
          margin: 34px 0 0;
        }
        .about-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 742px 1fr;
          gap: 24px;
          align-items: start;
          margin-top: 49px;
          padding-left: 75px;
          padding-right: 21px;
        }

        /* ---------- Dark globe card ---------- */
        .globe-card {
          position: relative;
          height: 660px;
          border-radius: 34px;
          overflow: hidden;
          background:
            radial-gradient(120% 70% at 50% 0%, #2f2f31 0%, #1d1d20 55%, #19181d 100%);
          border-top: 3px solid #737373;
          box-shadow:
            inset 0 -8px 0 #2e2e2e,
            0 12px 18px rgba(0, 0, 0, 0.18);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .globe-card:hover { transform: translateY(-3px); }
        .globe-card-top {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 14px;
        }
        .worldwide-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 36px;
          padding: 0 16px 0 13px;
          border-radius: 18px;
          background: #1b1b1d;
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 16px;
          color: #e6e6e6;
        }
        .ww-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #8a8a8d;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .ww-dot span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          animation: wwBlink 2.2s ease-in-out infinite;
        }
        @keyframes wwBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .globe-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 34px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 15px 0 0;
          line-height: 40px;
        }
        .btn-work {
          margin-top: 27px;
          width: 185px;
          height: 52px;
          border-radius: 10px;
          background: linear-gradient(180deg, #3a3a3d 0%, #18181a 60%, #0f0f10 100%);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 5px 0 #0b0b0c,
            0 10px 18px rgba(0, 0, 0, 0.45);
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-work:hover { transform: translateY(-2px); filter: brightness(1.2); }
        .globe-img {
          position: absolute;
          left: 0;
          bottom: 8px;
          width: 100%;
          height: auto;
          display: block;
          z-index: 1;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 70px);
          mask-image: linear-gradient(to bottom, transparent 0, #000 70px);
        }
        .pin-pulse {
          position: absolute;
          z-index: 2;
          left: 64.6%;
          bottom: 66px;
          width: 64px;
          height: 64px;
          margin-left: -32px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          animation: pinPulse 2.4s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
          pointer-events: none;
        }
        @keyframes pinPulse {
          0% { transform: scale(0.4); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        /* ---------- Right trust panel ---------- */
        .trust-panel {
          margin-top: 26px;
          height: 594px;
          margin-right: -21px;
          border-radius: 30px 0 0 30px;
          background: #f2f2f3;
          box-shadow:
            -1px 0 0 #e6e6e8,
            0 -1px 0 #e9e9eb,
            inset 0 -8px 0 #e3e3e5;
          padding: 50px 30px 0 40px;
          position: relative;
          overflow: hidden;
        }
        .trust-text {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          color: #111111;
          margin: 0;
        }
        .feature-cards {
          display: grid;
          grid-template-columns: 255px 255px;
          gap: 21px;
          margin-top: 53px;
        }
        .feature-card {
          height: 225px;
          border-radius: 30px;
          background: #ffffff;
          border: 1px solid #ececee;
          box-shadow: 0 4px 0 #e2e2e4, 0 8px 14px rgba(0, 0, 0, 0.04);
          padding: 19px 20px 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover { transform: translateY(-4px); }
        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-card h4 {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #111111;
          margin: 23px 0 12px;
        }
        .feature-card p {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 14px;
          line-height: 22px;
          color: #6b6b6b;
          margin: 0;
        }
        .launch-row {
          position: absolute;
          left: 40px;
          right: 12px;
          bottom: 37px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .launch-label {
          display: block;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #111111;
          margin-bottom: 13px;
        }
        .stars {
          display: flex;
          gap: 0.5px;
        }
        .star-box {
          width: 26px;
          height: 26px;
          background: #000000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .star-box:hover { transform: scale(1.15); }
        .big-count {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 146px;
          font-weight: 300;
          line-height: 0.75;
          letter-spacing: -0.06em;
          color: #e2e2e4;
          user-select: none;
          margin-bottom: 0;
        }

        @media (max-width: 1360px) {
          .about-grid {
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
            padding-left: 40px;
          }
          .about-head { padding-left: 40px; }
          .feature-cards { grid-template-columns: 1fr 1fr; }
          .globe-card { height: auto; min-height: 560px; }
        }
        @media (max-width: 1000px) {
          .about-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .about-head { padding: 32px 20px 0; }
          .about-title { font-size: clamp(40px, 8vw, 64px); line-height: 1.05; }
          .trust-panel {
            margin-right: 0;
            border-radius: 30px;
            height: auto;
            padding: 36px 24px 200px;
          }
          .launch-row { left: 24px; }
        }
        @media (max-width: 560px) {
          .feature-cards { grid-template-columns: 1fr; }
          .feature-card { height: auto; padding-bottom: 22px; }
          .globe-card { min-height: 460px; }
          .globe-title { font-size: 26px; }
          .big-count { font-size: 100px; }
        }
      `}</style>
    </section>
  );
};
