'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { ScrollReveal } from './ScrollReveal';

const otherAgencyPoints = [
  'Uses generic automation tools',
  'Focuses only on basic AI setup',
  'Limited workflow customization',
  'Lack of long-term optimization',
  'Delivers disconnected systems',
  'Focuses on short-term solutions'
];

const blinkTechPoints = [
  'Works as a strategic AI partner',
  'Builds intelligent automation systems',
  'Transparent, collaborative workflow',
  'Dedicated AI specialists on every project',
  'Creates scalable AI workflows',
  'Focuses on measurable business impact'
];

const Check: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <span className={dark ? 'chk chk-dark' : 'chk'} aria-hidden="true">
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke={dark ? '#ffffff' : '#55555a'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.2l2.3 2.3 4.7-4.9" />
    </svg>
  </span>
);

export const ComparisonSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="cmp">
      <ScrollReveal delay={60} yOffset={18}>
        <h2 className="cmp-heading">Why Should You Choose Us</h2>
      </ScrollReveal>

      <ScrollReveal delay={140} duration={850} yOffset={26}>
        <div className="cmp-cards">
          <div className="cmp-card">
            <div className="cmp-head">
              <h3>Other Agencies</h3>
            </div>
            <ul className="cmp-list muted">
              {otherAgencyPoints.map((pt) => (
                <li key={pt}>
                  <Check />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-card cmp-card-bt">
            <div className="cmp-head cmp-head-bt">
              <BTLogo size={66} />
              <h3>BlinkTech</h3>
            </div>
            <ul className="cmp-list">
              {blinkTechPoints.map((pt) => (
                <li key={pt}>
                  <Check dark />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={220} yOffset={14}>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setModalOpen(true)} className="btn-get-started">
            Get started
          </button>
        </div>
      </ScrollReveal>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .cmp {
          background: #f3f4f6;
          padding: 124px 0 64px;
        }
        .cmp-heading {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 66px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #0b0b16;
          text-align: center;
          margin: 0;
        }
        .cmp-cards {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 28px;
          margin-top: 49px;
          padding: 0 16px;
        }
        .cmp-card {
          width: 416px;
          border-radius: 14px;
          background: #f2f2f3;
          border: 1px solid #ebebed;
          box-shadow: 0 4px 0 #e2e2e4, 0 10px 20px rgba(0, 0, 0, 0.03);
          padding: 16px 16px 34px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cmp-card:hover { transform: translateY(-3px); }
        .cmp-head {
          height: 103px;
          border-radius: 6px;
          background-color: #ffffff;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          background-size: 34px 34px;
          background-position: right top;
          -webkit-mask-image: none;
          display: flex;
          align-items: center;
          padding: 0 24px;
          gap: 12px;
          position: relative;
          overflow: hidden;
        }
        .cmp-head::before {
          /* fade the grid out towards the left */
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #ffffff 0%, #ffffff 45%, rgba(255, 255, 255, 0) 100%);
        }
        .cmp-head > :global(*) { position: relative; }
        .cmp-head-bt { height: 128px; }
        .cmp-head h3 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 33px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #111111;
          margin: 0;
        }
        .cmp-list {
          list-style: none;
          margin: 41px 0 0;
          padding: 0 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cmp-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 17px;
          line-height: 22px;
          color: #111111;
        }
        .cmp-list.muted li { color: #6b6b72; }
        .cmp-list :global(.chk) {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e6e6e9;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cmp-list :global(.chk-dark) { background: #111111; }
        .btn-get-started {
          margin-top: 33px;
          width: 250px;
          height: 50px;
          border-radius: 8px;
          background: linear-gradient(180deg, #5b5c5f 0%, #3a3b3e 55%, #2b2c2f 100%);
          border: 1px solid #2b2c2f;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            0 4px 0 #232426,
            0 22px 34px rgba(0, 0, 0, 0.22);
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #ffffff;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-get-started:hover { transform: translateY(-2px); filter: brightness(1.12); }
        @media (max-width: 900px) {
          .cmp { padding-top: 80px; }
          .cmp-heading { font-size: clamp(36px, 8vw, 60px); padding: 0 16px; }
          .cmp-cards { flex-direction: column; align-items: center; }
          .cmp-card { width: 100%; max-width: 440px; }
        }
      `}</style>
    </section>
  );
};
