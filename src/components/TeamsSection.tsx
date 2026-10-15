'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';
import { PixelCornerCluster } from './PixelBlocks';

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface Developer {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    web?: string;
  };
}

export const TeamsSection: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = true }) => {
  const founders: Founder[] = [
    {
      id: 'f-1',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-2',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-3',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-4',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-5',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-6',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f-7',
      name: 'BYIRINGIRO Emmanuel',
      role: 'BlinkTech Co-Founder',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const developers: Developer[] = [
    { id: 'd-1', name: 'BIENVENU ALLIANCE', role: 'CEO & FOUNDER', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-2', name: 'BIENVENU ALLIANCE', role: 'HEAD OF ENGINEERING', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-3', name: 'BIENVENU ALLIANCE', role: 'LEAD AI ARCHITECT', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-4', name: 'BIENVENU ALLIANCE', role: 'SENIOR CLOUD SPECIALIST', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-5', name: 'BIENVENU ALLIANCE', role: 'CHIEF DESIGN OFFICER', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-6', name: 'BIENVENU ALLIANCE', role: 'FULL-STACK ENGINEER', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-7', name: 'BIENVENU ALLIANCE', role: 'FRONTEND SPECIALIST', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-8', name: 'BIENVENU ALLIANCE', role: 'DEVOPS & SECURITY', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-9', name: 'BIENVENU ALLIANCE', role: 'MOBILE APP ENGINEER', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80', socials: {} },
    { id: 'd-10', name: 'BIENVENU ALLIANCE', role: 'PRODUCT STRATEGIST', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', socials: {} }
  ];

  return (
    <section className="tech-grid-bg" style={{ padding: '80px 0 100px', position: 'relative' }}>
      {/* Pixel decoration in corner */}
      <div style={{ position: 'absolute', top: '24px', left: '16px' }}>
        <PixelCornerCluster type="corner-top-left" size={18} color="#000000" />
      </div>

      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="pill-badge">
              <span className="dot" />
              Contact us
            </span>
          </div>
          <h1 
            style={{ 
              fontSize: 'clamp(36px, 5.5vw, 64px)', 
              fontWeight: 800, 
              color: '#0a0a0c',
              letterSpacing: '-0.03em',
              marginBottom: '16px'
            }}
          >
            The Minds of BlinkTech
          </h1>
          <p style={{ fontSize: '15.5px', color: '#575a65', lineHeight: 1.6 }}>
            Meet the brains behind every solution, driven by tech to build, solve & give real impacts to the world.
          </p>
        </div>

        {/* Section 1: Founders of BlinkTech */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#111827' }}>
              FOUNDERS OF BLINKTECH
            </h2>
          </div>

          <div className="founders-grid">
            {founders.map((founder) => (
              <div key={founder.id} className="founder-card">
                <div className="founder-img-wrapper">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="founder-img"
                  />
                  {/* Bottom glass/white info pill */}
                  <div className="founder-badge">
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider arrows row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', color: '#94a3b8', margin: '60px 0' }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} style={{ fontSize: '16px', fontWeight: 700, userSelect: 'none' }}>&lt;</span>
          ))}
        </div>

        {/* Section 2: Developers Behind Every Solution */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#111827' }}>
              THE DEVELOPERS BEHIND EVERY SOLUTION
            </h2>
          </div>

          <div className="developers-grid">
            {developers.map((dev) => (
              <div key={dev.id} className="dev-card">
                <div className="dev-avatar-ring">
                  <img src={dev.image} alt={dev.name} className="dev-avatar" />
                </div>
                <h3 className="dev-name">{dev.name}</h3>
                <p className="dev-role">{dev.role}</p>
                <div className="dev-socials">
                  <a href="#" className="dev-social-link" title="LinkedIn">
                    <Linkedin size={13} />
                  </a>
                  <a href="#" className="dev-social-link" title="X (Twitter)">
                    <Twitter size={13} />
                  </a>
                  <a href="#" className="dev-social-link" title="Portfolio / Website">
                    <Globe size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .founder-card {
          position: relative;
          transition: transform 0.3s ease;
        }

        .founder-card:hover {
          transform: translateY(-4px);
        }

        .founder-img-wrapper {
          position: relative;
          width: 100%;
          padding-top: 120%;
          border-radius: 16px;
          overflow: hidden;
          background-color: #f1f2f5;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .founder-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .founder-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 14px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .founder-name {
          font-size: 13.5px;
          font-weight: 800;
          color: #0a0a0c;
          letter-spacing: -0.2px;
          margin-bottom: 2px;
        }

        .founder-role {
          font-size: 11px;
          font-weight: 500;
          color: #6b7280;
        }

        .developers-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px 20px;
          text-align: center;
        }

        .dev-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dev-avatar-ring {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          padding: 4px;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          margin-bottom: 14px;
          transition: transform 0.3s ease;
        }

        .dev-card:hover .dev-avatar-ring {
          transform: scale(1.05);
          border-color: #94a3b8;
        }

        .dev-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .dev-name {
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #0a0a0c;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .dev-role {
          font-size: 10.5px;
          font-weight: 600;
          color: #6b7280;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .dev-socials {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dev-social-link {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f1f2f5;
          color: #374151;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .dev-social-link:hover {
          background: #0a0a0c;
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .founders-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .developers-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 680px) {
          .founders-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .developers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
