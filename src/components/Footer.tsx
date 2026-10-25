'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="site-footer"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        borderTop: 'none',
        width: '100%'
      }}
    >
      {/* 1. Top Navigation Row: About us ■ Services ■ Project ■ Team */}
      <div 
        style={{
          width: '100%',
          borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
          backgroundColor: '#000000'
        }}
      >
        <nav 
          aria-label="Footer Navigation"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '15.5px',
            fontWeight: 500,
            letterSpacing: '0.2px',
            color: '#ffffff'
          }}
        >
          <Link href="/#about" className="footer-nav-link">About us</Link>
          <span className="footer-bullet" />
          <Link href="/services" className="footer-nav-link">Services</Link>
          <span className="footer-bullet" />
          <Link href="/projects" className="footer-nav-link">Project</Link>
          <span className="footer-bullet" />
          <Link href="/teams" className="footer-nav-link">Team</Link>
        </nav>
      </div>

      {/* 2. Main Central Area: Left Pixel Cluster + Chevrons + BT BLINK-TECH Ltd + Right Pixel Cluster */}
      <div 
        className="footer-middle-section"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '270px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 24px',
          backgroundColor: '#000000'
        }}
      >
        {/* Left Pixel Cluster touching top border line */}
        <div 
          className="pixel-cluster-left"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <LeftPixelCluster />
        </div>

        {/* Bottom Left Chevrons (pointing right > > > > > > > > > >) */}
        <div 
          className="chevrons-bottom-left"
          style={{
            position: 'absolute',
            bottom: '28px',
            left: 'clamp(20px, 16vw, 240px)',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <svg 
              key={idx} 
              className={`hud-chevron chevron-right-anim delay-${idx}`}
              width="7" 
              height="11" 
              viewBox="0 0 7 11" 
              fill="none"
            >
              <path 
                d="M1.5 1.5L5.5 5.5L1.5 9.5" 
                stroke="#ffffff" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          ))}
        </div>

        {/* Center Logo & Branding: Metallic BT Orb + BLINK-TECH + Ltd */}
        <div 
          className="footer-center-branding"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            zIndex: 3,
            userSelect: 'none'
          }}
        >
          {/* Circular Metallic Emblem */}
          <div 
            className="footer-emblem-wrap"
            style={{
              position: 'relative',
              width: '96px',
              height: '96px',
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 45px rgba(255, 255, 255, 0.28), 0 0 90px rgba(255, 255, 255, 0.12)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease'
            }}
          >
            <img 
              src="/images/bt-logo.png" 
              alt="Blink-Tech Emblem" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'invert(1) drop-shadow(0 4px 14px rgba(0, 0, 0, 0.45))'
              }}
            />
          </div>

          {/* Typography: BLINK-TECH with superscript Ltd */}
          <div 
            className="footer-brand-lockup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              position: 'relative',
              lineHeight: 1
            }}
          >
            <h2 
              className="footer-brand-title"
              style={{
                fontFamily: "'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'baseline'
              }}
            >
              <span style={{ color: '#ffffff' }}>BLINK-</span>
              <span 
                style={{ 
                  color: '#9ca3af',
                  backgroundImage: 'linear-gradient(180deg, #d1d5db 0%, #9ca3af 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                TECH
              </span>
            </h2>

            {/* Ltd label positioned upper right */}
            <span 
              className="footer-brand-ltd"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: 'clamp(17px, 2.3vw, 27px)',
                fontWeight: 500,
                color: '#d1d5db',
                position: 'absolute',
                top: '-24px',
                right: '4px',
                letterSpacing: '0.4px',
                userSelect: 'none'
              }}
            >
              Ltd
            </span>
          </div>
        </div>

        {/* Top Right Chevrons (pointing left < < < < < < < < < <) */}
        <div 
          className="chevrons-top-right"
          style={{
            position: 'absolute',
            top: '32px',
            right: 'clamp(20px, 16vw, 240px)',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <svg 
              key={idx} 
              className={`hud-chevron chevron-left-anim delay-${idx}`}
              width="7" 
              height="11" 
              viewBox="0 0 7 11" 
              fill="none"
            >
              <path 
                d="M5.5 1.5L1.5 5.5L5.5 9.5" 
                stroke="#ffffff" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          ))}
        </div>

        {/* Right Pixel Cluster touching bottom border line */}
        <div 
          className="pixel-cluster-right"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <RightPixelCluster />
        </div>
      </div>

      {/* 3. Bottom Legal & Social Strip */}
      <div 
        style={{
          width: '100%',
          borderTop: '1px solid rgba(255, 255, 255, 0.22)',
          backgroundColor: '#000000',
          padding: '22px 0'
        }}
      >
        <div 
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px'
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '22px', fontWeight: 500 }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-sub-link">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-sub-link">Linkedin</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-sub-link">Dribble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="footer-sub-link">Behance</a>
          </div>

          {/* Exact Copyright notice as in image */}
          <div style={{ color: '#9ca3af', textAlign: 'center', letterSpacing: '0.2px' }}>
            © 2026 Agenio. All Rights Reserved
          </div>

          {/* Back to Home Button with upward chevron */}
          <button 
            onClick={scrollToTop}
            className="footer-back-to-home"
            aria-label="Back to top of home page"
          >
            <span>Back to Home</span>
            <ChevronUp size={15} className="back-arrow-icon" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-nav-link {
          color: #ffffff;
          transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-nav-link:hover {
          opacity: 0.82;
          transform: translateY(-1px);
        }

        .footer-bullet {
          width: 7px;
          height: 7px;
          background-color: #ffffff;
          display: inline-block;
          flex-shrink: 0;
        }

        .footer-sub-link {
          color: #ffffff;
          transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-sub-link:hover {
          color: #60a5fa;
          transform: translateY(-1px);
        }

        .footer-back-to-home {
          background: none;
          border: none;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
          transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-back-to-home:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }
        .footer-back-to-home:hover .back-arrow-icon {
          transform: translateY(-2px);
        }
        .back-arrow-icon {
          transition: transform 0.25s ease;
        }

        .footer-emblem-wrap:hover {
          transform: scale(1.05) rotate(4deg);
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.4), 0 0 100px rgba(255, 255, 255, 0.18);
        }

        /* Subtle animated radar pulse on chevrons */
        .hud-chevron {
          opacity: 0.75;
          transition: opacity 0.3s ease;
        }
        @keyframes chevronWave {
          0%, 100% { opacity: 0.35; transform: scale(0.95); }
          50% { opacity: 0.95; transform: scale(1.1); filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.7)); }
        }
        .chevron-right-anim {
          animation: chevronWave 2.8s infinite ease-in-out;
        }
        .chevron-left-anim {
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

        @media (max-width: 960px) {
          .chevrons-top-right,
          .chevrons-bottom-left {
            display: none !important;
          }
          .pixel-cluster-left,
          .pixel-cluster-right {
            opacity: 0.4;
          }
        }

        @media (max-width: 640px) {
          .pixel-cluster-left,
          .pixel-cluster-right {
            display: none !important;
          }
          .footer-center-branding {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer-brand-ltd {
            position: static !important;
            margin-left: 6px;
          }
        }
      `}</style>
    </footer>
  );
};

/**
 * Left Pixel Cluster:
 * Touching the top border line at top: 0, left: 0
 * Row 0: White at col 0, gap at col 1, White bar of 2 units at col 2 & 3
 * Row 1: White at col 1
 * Row 2: White at col 0
 */
const LeftPixelCluster: React.FC = () => {
  const sq = 46; // unit square size in px
  return (
    <div 
      style={{
        position: 'relative',
        width: `${sq * 4}px`,
        height: `${sq * 3}px`
      }}
    >
      {/* Row 0 (top line) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
      <div style={{ position: 'absolute', top: 0, left: sq * 2, width: sq * 2, height: sq, backgroundColor: '#ffffff' }} />

      {/* Row 1 */}
      <div style={{ position: 'absolute', top: sq, left: sq, width: sq, height: sq, backgroundColor: '#ffffff' }} />

      {/* Row 2 */}
      <div style={{ position: 'absolute', top: sq * 2, left: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
    </div>
  );
};

/**
 * Right Pixel Cluster:
 * Touching the bottom border line at bottom: 0, right: 0
 * (Exact 180° rotation of the Left Pixel Cluster)
 * Row 0 (top of right cluster): White at col 3
 * Row 1 (mid of right cluster): White at col 2
 * Row 2 (bottom line): White bar of 2 units at col 0 & 1, White at col 3
 */
const RightPixelCluster: React.FC = () => {
  const sq = 46; // unit square size in px
  return (
    <div 
      style={{
        position: 'relative',
        width: `${sq * 4}px`,
        height: `${sq * 3}px`
      }}
    >
      {/* Row 0 */}
      <div style={{ position: 'absolute', bottom: sq * 2, right: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />

      {/* Row 1 */}
      <div style={{ position: 'absolute', bottom: sq, right: sq, width: sq, height: sq, backgroundColor: '#ffffff' }} />

      {/* Row 2 (bottom line) */}
      <div style={{ position: 'absolute', bottom: 0, right: sq * 2, width: sq * 2, height: sq, backgroundColor: '#ffffff' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
    </div>
  );
};
