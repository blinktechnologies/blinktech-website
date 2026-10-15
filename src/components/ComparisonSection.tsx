'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { Check, X } from 'lucide-react';
import { StartProjectModal } from './StartProjectModal';

export const ComparisonSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const otherAgencyPoints = [
    'Slow turnaround times and long bureaucratic delays',
    'Generic cookie-cutter templates with high technical debt',
    'Unclear hourly billing with hidden unexpected extras',
    'Disjointed communication and handoffs without docs',
    'Outdated legacy stacks that crumble under load'
  ];

  const blinkTechPoints = [
    'Rapid agile sprint velocity delivering working MVPs in weeks',
    'Custom tailored modern architectures built in Next.js & React',
    'Transparent milestone pricing with fixed scope guarantees',
    'Direct 24/7 slack/call channel with your dedicated tech leads',
    'Continuous CI/CD automated test coverage & enterprise SLA'
  ];

  return (
    <section style={{ padding: '90px 0 100px', backgroundColor: '#fafbfc', borderBottom: '1px solid #eeeff2' }}>
      <div className="container">
        {/* Section Pill Badge */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
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
            <span>COMPARISON</span>
          </div>
        </div>

        {/* Heading */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4.5vw, 48px)', 
            fontWeight: 800, 
            color: '#0a0a0c',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          Why Should You Choose Us
        </h2>

        {/* Side-by-side comparison cards */}
        <div className="comparison-cards-wrapper">
          {/* Card 1: Other Agencies */}
          <div className="compare-card compare-agency">
            <h3 className="agency-heading">Other Agencies</h3>
            <ul className="points-list">
              {otherAgencyPoints.map((pt, i) => (
                <li key={i} className="point-item negative">
                  <span className="icon-cross">
                    <X size={13} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: BlinkTech */}
          <div className="compare-card compare-blinktech">
            <div className="blinktech-heading-row">
              <BTLogo size={42} />
              <h3 className="blinktech-heading">Blink-Tech</h3>
            </div>
            <ul className="points-list">
              {blinkTechPoints.map((pt, i) => (
                <li key={i} className="point-item positive">
                  <span className="icon-check">
                    <Check size={13} />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button: Review */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button 
            onClick={() => setModalOpen(true)}
            className="btn-metallic-review"
          >
            Review
          </button>
        </div>
      </div>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .comparison-cards-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 900px;
          margin: 0 auto;
        }

        .compare-card {
          border-radius: 20px;
          padding: 36px 32px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .compare-agency {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .compare-agency:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
        }

        .agency-heading {
          font-size: 19px;
          font-weight: 800;
          color: #64748b;
          margin-bottom: 24px;
        }

        .compare-blinktech {
          background: #ffffff;
          border: 2px solid #0a0a0c;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .compare-blinktech:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.12);
        }

        .blinktech-heading-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .blinktech-heading {
          font-size: 21px;
          font-weight: 900;
          color: #0a0a0c;
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
          line-height: 1.5;
        }

        .point-item.negative {
          color: #64748b;
        }

        .point-item.positive {
          color: #0f172a;
          font-weight: 600;
        }

        .icon-cross {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .icon-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ecfdf5;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .btn-metallic-review {
          background: linear-gradient(180deg, #2b2e36 0%, #111317 100%);
          color: #ffffff;
          padding: 10px 36px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
          border: 1px solid #373b45;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-metallic-review:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
          background: linear-gradient(180deg, #373b45 0%, #191c22 100%);
        }

        @media (max-width: 768px) {
          .comparison-cards-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
