'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isProjectsPage) {
    return (
      <footer 
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          borderTop: 'none',
          fontFamily: "'Urbanist', sans-serif",
          padding: '16px 0'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '22px', fontWeight: 500, fontSize: '13px' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">Linkedin</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-social-link">Dribble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="footer-social-link">Behance</a>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center', fontSize: '12.5px', color: '#9ca3af' }}>
            © 2026 BlinkTech. All Rights Reserved
          </div>

          {/* Back to Home Button */}
          <button 
            onClick={scrollToTop}
            className="back-to-home-btn"
          >
            <span>Back to Home</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </footer>
    );
  }

  return (
    <footer 
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #141416',
        fontFamily: "'Urbanist', sans-serif"
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Top Nav Row: About us ■ Services ■ Project ■ Team */}
        <nav 
          aria-label="Footer Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '36px 20px 30px',
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '0.3px',
            color: '#ffffff',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <Link href="/#about" className="footer-top-link">About us</Link>
          <span style={{ width: '7px', height: '7px', backgroundColor: '#ffffff', display: 'inline-block' }} />
          <Link href="/services" className="footer-top-link">Services</Link>
          <span style={{ width: '7px', height: '7px', backgroundColor: '#ffffff', display: 'inline-block' }} />
          <Link href="/projects" className="footer-top-link">Project</Link>
          <span style={{ width: '7px', height: '7px', backgroundColor: '#ffffff', display: 'inline-block' }} />
          <Link href="/teams" className="footer-top-link">Team</Link>
        </nav>

        {/* Big Central Branding Section with Pixel Clusters & HUD Chevrons */}
        <div 
          style={{
            position: 'relative',
            padding: '80px 0 90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px'
          }}
        >
          {/* Left Stepped Pixel Squares Cluster */}
          <div 
            className="footer-pixel-left"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            <FooterPixelBlockSide position="left" />
          </div>

          {/* Chevrons HUD Elements */}
          <div 
            className="footer-hud-chevrons-top"
            style={{
              position: 'absolute',
              top: '28px',
              right: '25%',
              display: 'flex',
              gap: '24px',
              opacity: 0.35,
              pointerEvents: 'none'
            }}
          >
            {[...Array(9)].map((_, i) => (
              <img 
                key={i} 
                src="/images/Arrow 19.png" 
                alt="<" 
                style={{ width: '10px', height: '10px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
            ))}
          </div>

          {/* Central Logo & Brand Typography */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '22px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              zIndex: 3
            }}
          >
            <div 
              style={{
                width: '100px',
                height: '100px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/images/bt-logo.png" 
                alt="Blink-Tech Emblem" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 35px rgba(255, 255, 255, 0.2))'
                }}
              />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'flex-start', userSelect: 'none' }}>
              <span 
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(38px, 6vw, 76px)',
                  color: '#ffffff',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  lineHeight: 1
                }}
              >
                BLINK-TECH
              </span>
              <span 
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: 'clamp(18px, 2.5vw, 28px)',
                  fontWeight: 400,
                  color: '#e5e7eb',
                  marginLeft: '10px',
                  transform: 'translateY(-10px)'
                }}
              >
                Ltd
              </span>
            </div>
          </div>

          {/* Bottom Left Chevrons HUD */}
          <div 
            className="footer-hud-chevrons-bottom"
            style={{
              position: 'absolute',
              bottom: '26px',
              left: '20%',
              display: 'flex',
              gap: '24px',
              opacity: 0.35,
              pointerEvents: 'none'
            }}
          >
            {[...Array(9)].map((_, i) => (
              <img 
                key={i} 
                src="/images/Arrow 19.png" 
                alt=">" 
                style={{ width: '10px', height: '10px', objectFit: 'contain', filter: 'brightness(0) invert(1)', transform: 'scaleX(-1)' }} 
              />
            ))}
          </div>

          {/* Right Stepped Pixel Squares Cluster */}
          <div 
            className="footer-pixel-right"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            <FooterPixelBlockSide position="right" />
          </div>
        </div>
      </div>

      {/* Bottom Legal / Social Strip */}
      <div 
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: '#000000',
          padding: '20px 0',
          fontSize: '12px',
          color: '#8e8e93'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '22px', fontWeight: 500, fontSize: '13px' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">Linkedin</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-social-link">Dribble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="footer-social-link">Behance</a>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center', fontSize: '12.5px', color: '#9ca3af' }}>
            © 2026 BlinkTech. All Rights Reserved
          </div>

          {/* Back to Home Button */}
          <button 
            onClick={scrollToTop}
            className="back-to-home-btn"
          >
            <span>Back to Home</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-top-link {
          color: #ffffff;
          transition: opacity 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.4px;
        }
        .footer-top-link:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        .footer-social-link {
          color: #ffffff;
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .footer-social-link:hover {
          color: #93c5fd;
          opacity: 1;
        }
        .back-to-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .back-to-home-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }
        @media (max-width: 820px) {
          .footer-pixel-left, .footer-pixel-right {
            display: none;
          }
          .footer-hud-chevrons-top, .footer-hud-chevrons-bottom {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

const FooterPixelBlockSide: React.FC<{ position: 'left' | 'right' }> = ({ position }) => {
  const sq = 34; // size of each square in pixels
  if (position === 'left') {
    return (
      <div style={{ position: 'relative', width: `${sq * 3}px`, height: `${sq * 3}px` }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
        <div style={{ position: 'absolute', top: 0, left: sq, width: sq, height: sq, backgroundColor: '#ffffff' }} />
        <div style={{ position: 'absolute', top: sq, left: sq, width: sq, height: sq, backgroundColor: '#ffffff' }} />
        <div style={{ position: 'absolute', top: sq * 2, left: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', width: `${sq * 4}px`, height: `${sq * 3}px` }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
      <div style={{ position: 'absolute', top: sq, right: sq, width: sq, height: sq, backgroundColor: '#ffffff' }} />
      <div style={{ position: 'absolute', top: sq * 2, right: 0, width: sq, height: sq, backgroundColor: '#ffffff' }} />
      <div style={{ position: 'absolute', top: sq * 2, right: sq * 2, width: sq * 2, height: sq, backgroundColor: '#ffffff' }} />
    </div>
  );
};
