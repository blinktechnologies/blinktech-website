'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

interface MemberData {
  id: string;
  name: string;
  role: string;
  image: string;
  yOffset: number; // Staggering offset in px
}

export const TeamPreview: React.FC = () => {
  const membersRow1: MemberData[] = [
    {
      id: 'm-1',
      name: 'Bienvenue Alliance',
      role: 'CEO & FOUNDER',
      image: '/images/team/person1_bienvenue.png',
      yOffset: 0
    },
    {
      id: 'm-2',
      name: 'BYIRINGIRO Samuel',
      role: 'CO-FOUNDER',
      image: '/images/team/Samuel.png',
      yOffset: 24
    },
    {
      id: 'm-3',
      name: 'KANEZA Amandine',
      role: 'CO-FOUNDER',
      image: '/images/team/Amandine.png',
      yOffset: 0
    },
    {
      id: 'm-4',
      name: 'BYIRINGIRO Emmanuel',
      role: 'CO-FOUNDER',
      image: '/images/team/person2_emmanuel.png',
      yOffset: 24
    }
  ];

  const membersRow2: MemberData[] = [
    {
      id: 'm-5',
      name: 'Darius NIYONKURU',
      role: 'CHIEF FINANCIAL OFFICER',
      image: '/images/team/Darius.png',
      yOffset: 0
    },
    {
      id: 'm-6',
      name: 'Umurerwa Bonnette',
      role: 'CHIEF MEDIA AND MARKETING OFFICER',
      image: '/images/team/person5_bonnette.png',
      yOffset: 40
    },
    {
      id: 'm-7',
      name: 'ABAYO Moise',
      role: 'CISO (Chief Information Security Officer)',
      image: '/images/team/Moise.png',
      yOffset: 0
    }
  ];

  return (
    <section 
      id="teams" 
      className="team-preview-section"
      style={{ 
        padding: '84px 20px 96px', 
        backgroundColor: '#f3f4f6', 
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
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
            linear-gradient(to right, rgba(0, 0, 0, 0.038) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.038) 1px, transparent 1px)
          `,
          backgroundSize: '25.5px 25.5px',
          backgroundPosition: 'center top',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1060px', 
          margin: '0 auto' 
        }}
      >
        {/* Decorative White Pixel Blocks behind cards */}
        <div className="bg-pixel-decor tl-pixel" />
        <div className="bg-pixel-decor tr-pixel" />
        <div className="bg-pixel-decor ml-pixel" />
        <div className="bg-pixel-decor mr-pixel" />
        <div className="bg-pixel-decor b-pixel" />

        {/* Section Heading matching screenshot */}
        <ScrollReveal delay={80} yOffset={20}>
          <h2 
            className="team-main-heading"
            style={{ 
              fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(36px, 4.6vw, 48px)', 
              fontWeight: 800, 
              color: '#0a0a0c',
              letterSpacing: '-0.025em',
              lineHeight: 1.14,
              textAlign: 'center',
              marginBottom: '54px'
            }}
          >
            The Minds<br />Behind the Work
          </h2>
        </ScrollReveal>

        {/* 8-Card Grid (4 per row on desktop) */}
        <ScrollReveal delay={160} duration={800} yOffset={24}>
          <div className="team-cards-grid">
            {/* ROW 1 */}
            {membersRow1.map((member) => (
              <div 
                key={member.id} 
                className="member-card"
                style={{ transform: `translateY(${member.yOffset}px)` }}
              >
                <div className="member-portrait-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-portrait-img"
                    loading="eager"
                  />
                </div>
                <div className="member-badge">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}

            {/* ROW 2: Members 5, 6, 7 */}
            {membersRow2.map((member) => (
              <div 
                key={member.id} 
                className="member-card"
                style={{ transform: `translateY(${member.yOffset}px)` }}
              >
                <div className="member-portrait-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-portrait-img"
                    loading="eager"
                  />
                </div>
                <div className="member-badge">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}

            {/* ROW 2, Item 8: Our Background (Pure HTML/CSS Dark Card) */}
            <div 
              className="background-card-wrapper"
              style={{ transform: 'translateY(0px)', height: '100%' }}
            >
              <div className="background-card">
                {/* Technical Grid on Bottom & Right */}
                <div className="card-inner-grid" />

                <div className="card-content-top">
                  {/* Top Square Indicator */}
                  <div className="card-top-indicator" />

                  {/* Heading */}
                  <h3 className="card-title">Our Background</h3>

                  {/* Description with constrained width to match exact 5 lines */}
                  <p className="card-description">
                    We are a team of builders based in Rwanda, creating technology that solves real-world problems. With 3+ years of experience, we turn bold ideas into practical solutions that create impact.
                  </p>
                </div>

                {/* Full-width Explore the Team Button with authentic squircle icon and smooth navigation */}
                <Link 
                  href="/teams" 
                  className="explore-button"
                  id="explore-the-team-btn"
                  aria-label="Explore the team"
                >
                  <div className="explore-icon-squircle">
                    <img 
                      src="/images/team/btn_logo_icon.png" 
                      alt="" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                  <span className="explore-button-text">Explore the team</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px 16px;
          max-width: 1020px;
          margin: 0 auto;
          align-items: start;
        }

        /* Member Card */
        .member-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
          user-select: none;
        }

        .member-card:hover {
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.09));
        }

        .member-portrait-container {
          width: 100%;
          height: 224px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          overflow: hidden;
        }

        .member-portrait-img {
          width: 100%;
          max-width: 238px;
          height: 100%;
          display: block;
          object-fit: contain;
          object-position: bottom center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .member-card:hover .member-portrait-img {
          transform: scale(1.025);
        }

        /* Floating Pill Badge */
        .member-badge {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border-radius: 12px;
          padding: 10px 14px 11px;
          width: 92%;
          max-width: 220px;
          margin-top: -24px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08), 0 2px 5px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .member-card:hover .member-badge {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.11);
        }

        .member-name {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0f1115;
          letter-spacing: -0.015em;
          margin: 0 0 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .member-role {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          color: #71717a;
          letter-spacing: 0.01em;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Dark Card 8: Our Background */
        .background-card-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .background-card-wrapper:hover {
          transform: translateY(14px) !important;
        }

        /* Dark Card 8: Our Background */
        .background-card-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .background-card-wrapper:hover {
          transform: translateY(14px) !important;
        }

        .background-card {
          background: linear-gradient(180deg, #383e45 0%, #2b3036 40%, #1e2226 100%);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
          padding: 26px 20px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 310px;
          height: 100%;
          box-sizing: border-box;
        }

        /* Technical Grid on Bottom & Right */
        .card-inner-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.11) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.11) 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: right bottom;
          mask-image: linear-gradient(135deg, transparent 20%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,1) 75%);
          -webkit-mask-image: linear-gradient(135deg, transparent 20%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,1) 75%);
          pointer-events: none;
        }

        .card-content-top {
          position: relative;
          z-index: 2;
        }

        .card-top-indicator {
          width: 9px;
          height: 9px;
          background-color: #ffffff;
          border-radius: 1.5px;
          margin-bottom: 14px;
        }

        .card-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0 0 12px;
        }

        .card-description {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 11.5px;
          line-height: 1.55;
          color: #cbd5e1;
          margin: 0;
          font-weight: 400;
          max-width: 205px;
          opacity: 0.95;
        }

        /* Full-Width Explore Button inside Card 8 */
        .explore-button {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(180deg, #32373e 0%, #1c2024 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 14px;
          padding: 8px 18px 8px 8px;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.14);
          margin-top: auto;
          width: 100%;
          box-sizing: border-box;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .explore-button:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .explore-icon-squircle {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(180deg, #f8fafc 0%, #d1d5db 50%, #9ca3af 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 2px 6px rgba(0, 0, 0, 0.45), 0 2px 4px rgba(163, 230, 53, 0.55);
          flex-shrink: 0;
          overflow: hidden;
        }

        .explore-logo-mark {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .explore-button-text {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #f8fafc;
          letter-spacing: -0.01em;
          white-space: nowrap;
          margin-left: 2px;
        }

        /* Stepped Decorative Pixel Blocks in Background */
        .bg-pixel-decor {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }

        .tl-pixel {
          top: 140px;
          left: 10px;
          width: 56px;
          height: 46px;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%);
          opacity: 0.95;
        }

        .tr-pixel {
          top: 140px;
          right: 235px;
          width: 58px;
          height: 46px;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 60% 50%, 0 50%);
          opacity: 0.95;
        }

        .ml-pixel {
          top: 400px;
          left: 205px;
          width: 54px;
          height: 48px;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 0, 100% 50%, 45% 50%, 45% 100%, 0 100%);
          opacity: 0.95;
        }

        .mr-pixel {
          top: 400px;
          right: 230px;
          width: 56px;
          height: 48px;
          background: #ffffff;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 50%, 0 50%);
          opacity: 0.95;
        }

        .b-pixel {
          bottom: 14px;
          left: 345px;
          width: 20px;
          height: 20px;
          background: #ffffff;
          opacity: 0.95;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 520px;
            gap: 28px 16px;
          }

          .member-card,
          .background-card-wrapper {
            transform: none !important;
          }

          .bg-pixel-decor {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .team-cards-grid {
            grid-template-columns: 1fr;
            max-width: 270px;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};
