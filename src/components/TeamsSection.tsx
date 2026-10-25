'use client';

import React from 'react';
import { PixelCornerCluster } from './PixelBlocks';
import { ScrollReveal } from './ScrollReveal';

const LinkedinIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const TwitterIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GlobeIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const TeamsSection: React.FC<{ isFullPage?: boolean }> = () => {
  // Exactly 7 Founders matching user's Image 1: Row 1 has 4, Row 2 has 3
  const foundersRow1 = [
    { id: 'f-1', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
    { id: 'f-2', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
    { id: 'f-3', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
    { id: 'f-4', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
  ];

  const foundersRow2 = [
    { id: 'f-5', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
    { id: 'f-6', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
    { id: 'f-7', name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/person2_emmanuel.png' },
  ];

  // Exactly 10 Developers matching user's Image 1 (2 rows of 5)
  const developers = Array.from({ length: 10 }).map((_, idx) => ({
    id: `dev-${idx + 1}`,
    name: 'BIENVENU ALLIANCE',
    role: 'CEO & FOUNDER',
    image: '/images/team/dev_bienvenu.png'
  }));

  return (
    <section 
      className="teams-page-section"
      style={{ 
        padding: '70px 20px 110px', 
        backgroundColor: '#f5f5f7', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Technical Grid Pattern */}
      <div 
        className="technical-grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center top',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Decorative corner pixel cluster */}
      <div style={{ position: 'absolute', top: '24px', left: '16px', zIndex: 1, pointerEvents: 'none' }}>
        <PixelCornerCluster type="corner-top-left" size={18} color="#000000" />
      </div>
      <div style={{ position: 'absolute', top: '24px', right: '16px', zIndex: 1, pointerEvents: 'none' }}>
        <PixelCornerCluster type="corner-top-right" size={18} color="#000000" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1060px', margin: '0 auto' }}>
        
        {/* Page Title */}
        <ScrollReveal delay={60} yOffset={16}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span className="pill-badge">
                <span className="dot" />
                Leadership & Team
              </span>
            </div>
            <h1 
              style={{ 
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(36px, 5vw, 56px)', 
                fontWeight: 800, 
                color: '#0a0a0c',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '14px'
              }}
            >
              The Minds of BlinkTech
            </h1>
            <p style={{ fontSize: '15.5px', color: '#575a65', lineHeight: 1.6 }}>
              Meet the brains behind every solution, driven by tech to build, solve & give real impacts to the world.
            </p>
          </div>
        </ScrollReveal>

        {/* SECTION 1: FOUNDERS OF BLINKTECH (Exactly matching user reference Image 1) */}
        <div style={{ marginBottom: '64px' }}>
          <ScrollReveal delay={100} yOffset={14}>
            <div style={{ textAlign: 'center', marginBottom: '38px' }}>
              <h2 
                style={{ 
                  fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                  fontSize: '15px', 
                  fontWeight: 800, 
                  letterSpacing: '1.6px', 
                  textTransform: 'uppercase', 
                  color: '#0a0a0c',
                  margin: 0
                }}
              >
                FOUNDERS OF BLINKTECH
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} duration={800} yOffset={20}>
            {/* Row 1: 4 Cards */}
            <div className="founders-row row-1">
              {foundersRow1.map((founder) => (
                <div key={founder.id} className="founder-card">
                  <div className="founder-portrait-container">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="founder-portrait-img"
                      loading="eager"
                    />
                  </div>
                  <div className="founder-badge">
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Cards (Col 4 remains empty as in user reference) */}
            <div className="founders-row row-2">
              {foundersRow2.map((founder) => (
                <div key={founder.id} className="founder-card">
                  <div className="founder-portrait-container">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="founder-portrait-img"
                      loading="eager"
                    />
                  </div>
                  <div className="founder-badge">
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                  </div>
                </div>
              ))}
              <div className="founder-card-placeholder" />
            </div>
          </ScrollReveal>
        </div>

        {/* HUD Chevrons Row: < < < < < < < < < < (10 Chevrons as in reference Image 1) */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '18px', 
            color: '#94a3b8', 
            margin: '50px 0 60px' 
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <svg 
              key={i} 
              className={`chevron-pulse delay-${i}`}
              width="7" 
              height="11" 
              viewBox="0 0 7 11" 
              fill="none"
            >
              <path 
                d="M5.5 1.5L1.5 5.5L5.5 9.5" 
                stroke="#94a3b8" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          ))}
        </div>

        {/* SECTION 2: THE DEVELOPERS BEHIND EVERY SOLUTION (Matching user reference Image 1) */}
        <div>
          <ScrollReveal delay={100} yOffset={14}>
            <div style={{ textAlign: 'center', marginBottom: '46px' }}>
              <h2 
                style={{ 
                  fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                  fontSize: '15px', 
                  fontWeight: 800, 
                  letterSpacing: '1.6px', 
                  textTransform: 'uppercase', 
                  color: '#0a0a0c',
                  margin: 0
                }}
              >
                THE DEVELOPERS BEHIND EVERY SOLUTION
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180} duration={800} yOffset={20}>
            <div className="developers-grid">
              {developers.map((dev) => (
                <div key={dev.id} className="dev-card">
                  <div className="dev-avatar-ring">
                    <img src={dev.image} alt={dev.name} className="dev-avatar" loading="lazy" />
                  </div>
                  <h3 className="dev-name">{dev.name}</h3>
                  <p className="dev-role">{dev.role}</p>
                  <div className="dev-socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="dev-social-btn" title="LinkedIn">
                      <LinkedinIcon size={11} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="dev-social-btn" title="X (Twitter)">
                      <TwitterIcon size={11} />
                    </a>
                    <a href="#" className="dev-social-btn" title="Portfolio / Website">
                      <GlobeIcon size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style jsx>{`
        /* Founders Grid Rows matching user screenshot */
        .founders-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px 18px;
          max-width: 1040px;
          margin: 0 auto;
        }
        .founders-row.row-1 {
          margin-bottom: 28px;
        }

        .founder-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
          user-select: none;
        }
        .founder-card:hover {
          transform: translateY(-4px);
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.08));
        }

        .founder-portrait-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
        }

        .founder-portrait-img {
          width: 100%;
          max-width: 236px;
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .founder-card:hover .founder-portrait-img {
          transform: scale(1.025);
        }

        /* Clean White Pill Badge */
        .founder-badge {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border-radius: 12px;
          padding: 10px 14px 11px;
          width: 90%;
          max-width: 220px;
          margin-top: -24px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .founder-card:hover .founder-badge {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }

        .founder-name {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0f1115;
          letter-spacing: -0.015em;
          margin: 0 0 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .founder-role {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          color: #64748b;
          letter-spacing: 0.01em;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Developers Grid (2 rows of 5) */
        .developers-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 34px 18px;
          text-align: center;
          max-width: 1040px;
          margin: 0 auto;
        }

        .dev-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dev-card:hover {
          transform: translateY(-4px);
        }

        .dev-avatar-ring {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          overflow: hidden;
          padding: 2px;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          margin-bottom: 11px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .dev-card:hover .dev-avatar-ring {
          transform: scale(1.06);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
        }

        .dev-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        .dev-name {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #0a0a0c;
          text-transform: uppercase;
          margin: 0 0 2px;
        }

        .dev-role {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin: 0 0 10px;
        }

        .dev-socials {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dev-social-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #475569;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, transform 0.2s;
        }
        .dev-social-btn:hover {
          background: #0f172a;
          transform: translateY(-1.5px);
        }

        /* Subtle animated radar pulse on chevrons */
        @keyframes chevronWave {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.95; transform: scale(1.1); filter: drop-shadow(0 0 3px rgba(148, 163, 184, 0.5)); }
        }
        .chevron-pulse {
          animation: chevronWave 2.8s infinite ease-in-out;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .delay-4 { animation-delay: 0.48s; }
        .delay-5 { animation-delay: 0.60s; }
        .delay-6 { animation-delay: 0.72s; }
        .delay-7 { animation-delay: 0.84s; }
        .delay-8 { animation-delay: 0.96s; }
        .delay-9 { animation-delay: 1.08s; }

        @media (max-width: 1024px) {
          .founders-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 16px;
          }
          .developers-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .founders-row {
            grid-template-columns: 1fr;
          }
          .developers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
