'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const TeamPreview: React.FC = () => {
  const members: TeamMember[] = [
    {
      id: 'm-1',
      name: 'BYIRINGIRO Emmanuel',
      role: 'FOUNDER & CEO',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-2',
      name: 'BIENVENU ALLIANCE',
      role: 'TECH LEAD',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-3',
      name: 'JEAN CLAUDE',
      role: 'SENIOR ARCHITECT',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-4',
      name: 'SARAH NIYONZIMA',
      role: 'PRODUCT DESIGNER',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-5',
      name: 'ERIC MUGISHA',
      role: 'FULL STACK DEV',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-6',
      name: 'DAVID MUTANGANA',
      role: 'AI SPECIALIST',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=450&q=80'
    },
    {
      id: 'm-7',
      name: 'ALICE UMUTONI',
      role: 'DEVOPS LEAD',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=450&q=80'
    }
  ];

  return (
    <section id="teams" style={{ padding: '90px 0 100px', backgroundColor: '#ffffff', borderBottom: '1px solid #eeeff2' }}>
      <div className="container">
        {/* Section Pill Badge */}
        <ScrollReveal delay={50} yOffset={16}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Our Team</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={120} yOffset={20}>
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
            The Minds Behind the Work
          </h2>
        </ScrollReveal>

        {/* 8-Card Grid (4 per row on desktop) */}
        <ScrollReveal delay={200} duration={850} yOffset={32}>
          <div className="team-cards-grid">
          {members.map((member) => (
            <div key={member.id} className="team-card">
              {/* Corner tech ticks */}
              <div className="card-tick tick-tl" />
              <div className="card-tick tick-br" />

              <div className="photo-container">
                <img src={member.image} alt={member.name} className="member-photo" />
              </div>

              {/* White Overlay Box at bottom */}
              <div className="member-label-pill">
                <h4 className="member-name">{member.name}</h4>
                <span className="member-role">{member.role}</span>
              </div>
            </div>
          ))}

          {/* 8th Card: Join Our Team (Dark Card) */}
          <Link href="/teams" className="join-card">
            {/* Corner tech ticks */}
            <div className="card-tick tick-tl tick-light" />
            <div className="card-tick tick-br tick-light" />

            <div>
              <div className="hiring-badge">
                <span className="hiring-dot" />
                <span>WE ARE HIRING</span>
              </div>
              <h4 className="join-heading">Join Our Team</h4>
              <p className="join-text">
                We are always looking for passionate engineers, designers, and innovators to push the envelope of modern technology.
              </p>
            </div>

            <div className="join-button-row">
              <span className="join-btn-label">View Open Positions</span>
              <div className="join-arrow-box">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1140px;
          margin: 0 auto;
        }

        .team-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .photo-container {
          width: 100%;
          padding-top: 115%;
          position: relative;
          background: #f1f5f9;
          overflow: hidden;
        }

        .member-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .team-card:hover .member-photo {
          transform: scale(1.05);
        }

        .member-label-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 8px 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s ease;
        }

        .team-card:hover .member-label-pill {
          transform: translateY(-2px);
        }

        .member-name {
          font-size: 11.5px;
          font-weight: 800;
          color: #0a0a0c;
          letter-spacing: -0.2px;
          margin: 0 0 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .member-role {
          font-size: 9.5px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .join-card {
          background: #0f1013;
          border: 1px solid #22252c;
          border-radius: 18px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          text-decoration: none;
        }

        .join-card:hover {
          transform: translateY(-4px);
          border-color: #3b404d;
        }

        .card-tick {
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 5;
        }

        .tick-tl {
          top: 8px;
          left: 8px;
          border-top: 1.5px solid #cbd5e1;
          border-left: 1.5px solid #cbd5e1;
        }

        .tick-br {
          bottom: 8px;
          right: 8px;
          border-bottom: 1.5px solid #cbd5e1;
          border-right: 1.5px solid #cbd5e1;
        }

        .tick-light {
          border-color: #475569;
        }

        .hiring-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 999px;
          padding: 3px 10px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #38bdf8;
          margin-bottom: 14px;
        }

        .hiring-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
        }

        .join-heading {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .join-text {
          font-size: 11.5px;
          line-height: 1.55;
          color: #94a3b8;
          margin: 0;
        }

        .join-button-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .join-btn-label {
          font-size: 11.5px;
          font-weight: 700;
        }

        .join-arrow-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .join-card:hover .join-arrow-box {
          transform: translate(2px, -2px);
          background: #38bdf8;
          color: #000000;
        }

        @media (max-width: 1024px) {
          .team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .team-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
