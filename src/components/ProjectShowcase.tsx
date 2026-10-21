'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 'inziralink',
      title: 'Inziralink',
      description: 'A design of a platform that helps people transport goods easily just connecting companies to transport systems to ensure the safety and efficiency of transportation of Goods.',
      image: '/images/project_inziralink_exact.png'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Autonomous neural agent architecture and natural language control system enabling automated customer resolution, pipeline execution, and predictive enterprise intelligence.',
      image: '/images/project_ai_automation.png'
    },
    {
      id: 'fintech-settlement',
      title: 'FinTech Settlement Core',
      description: 'High-throughput regional payment orchestration and automated ISO 20022 reconciliation engine designed for seamless cross-border multi-currency African trade.',
      image: '/images/project_fintech_settlement.png'
    },
    {
      id: 'telematics-fleet',
      title: 'Logistics Fleet Telematics',
      description: 'Connected telemetry and automated transit telemetry suite providing real-time GPS fleet visibility, corridor ETA monitoring, fuel analytics, and driver safety reporting.',
      image: '/images/project_fleet_telematics.png'
    }
  ];

  const current = projects[activeSlide];

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '76px 20px 92px', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #eeeff2',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1060px', margin: '0 auto' }}>
        {/* Section Pill Badge: • Projects */}
        <ScrollReveal delay={40} yOffset={14}>
          <div style={{ textAlign: 'center', marginBottom: '14px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Projects</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Heading & Subtitle */}
        <ScrollReveal delay={90} yOffset={20}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <h2 
              style={{ 
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(36px, 4.8vw, 56px)', 
                fontWeight: 800, 
                color: '#0a0b0d',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: '0 0 12px'
              }}
            >
              From Idea to Production
            </h2>
            <p 
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                lineHeight: 1.55,
                color: '#64748b',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              From concept to execution, we build solutions that matter.<br />
              Explore the breakthrough projects shaping the future of our industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Showcase Card matching exact design */}
        <ScrollReveal delay={160} duration={800} yOffset={24}>
          <div className="showcase-card">
            {/* Dark Media Preview Box with built-in stepped pixel corners */}
            <div className="media-preview-box">
              <img 
                key={current.id}
                src={current.image} 
                alt={current.title} 
                className="showcase-laptop-img"
              />
            </div>

            {/* Pagination Slider Dots */}
            <div className="showcase-dots-row">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`dot-pill ${activeSlide === idx ? 'dot-active' : ''}`}
                  aria-label={`Go to ${proj.title}`}
                />
              ))}
            </div>

            {/* Bottom Details Row */}
            <div className="showcase-details-row">
              <h3 className="project-heading-title">{current.title}</h3>

              <div className="project-description-box">
                <span className="desc-heading-label">DESCRIPTION</span>
                <p className="desc-body-text">{current.description}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .showcase-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 26px;
          padding: 16px 16px 28px;
          box-shadow: 0 10px 34px rgba(0, 0, 0, 0.05);
          max-width: 980px;
          margin: 0 auto;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .showcase-card:hover {
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
        }

        /* Dark Media Preview Box */
        .media-preview-box {
          position: relative;
          background: #111316;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .showcase-laptop-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          animation: fadeInSlide 0.4s ease-out;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0.82;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .showcase-card:hover .showcase-laptop-img {
          transform: scale(1.012);
        }

        /* Slider Dots */
        .showcase-dots-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 22px 0 20px 10px;
        }

        .dot-pill {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #d1d5db;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .dot-pill:hover {
          background-color: #94a3b8;
          transform: scale(1.2);
        }

        .dot-active {
          background-color: #0f172a;
          transform: scale(1.25);
        }

        /* Bottom Details */
        .showcase-details-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0 12px;
          gap: 32px;
        }

        .project-heading-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #0a0b0d;
          letter-spacing: -0.02em;
          margin: 0;
          flex-shrink: 0;
        }

        .project-description-box {
          max-width: 500px;
        }

        .desc-heading-label {
          display: block;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .desc-body-text {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          line-height: 1.58;
          color: #52525b;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .showcase-details-row {
            flex-direction: column;
            gap: 16px;
          }

          .project-description-box {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
