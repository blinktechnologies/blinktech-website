'use client';

import React from 'react';
import Link from 'next/link';
import { BTLogo } from './BTLogo';
import { PixelCornerCluster } from './PixelBlocks';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#050507',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1a1a1f'
      }}
    >
      {/* Top Banner Area with Big Branding & Pixels */}
      <div 
        className="container"
        style={{
          paddingTop: '70px',
          paddingBottom: '60px',
          position: 'relative'
        }}
      >
        {/* Pixel Block Accents on Left & Right */}
        <div style={{ position: 'absolute', top: '24px', left: '16px', opacity: 0.9 }}>
          <PixelCornerCluster type="corner-top-left" size={16} color="#ffffff" />
        </div>
        <div style={{ position: 'absolute', bottom: '24px', right: '16px', opacity: 0.9 }}>
          <PixelCornerCluster type="corner-bottom-right" size={16} color="#ffffff" />
        </div>

        {/* Big Central Branding */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            textAlign: 'center',
            margin: '20px 0 32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BTLogo size={68} />
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span 
                style={{ 
                  fontFamily: 'Arial, sans-serif', 
                  fontWeight: 900, 
                  fontSize: 'clamp(32px, 5vw, 56px)', 
                  color: '#ffffff',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
              >
                BLINK-TECH
              </span>
              <span 
                style={{ 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: '#9ca3af', 
                  marginLeft: '6px',
                  marginTop: '10px' 
                }}
              >
                Ltd
              </span>
            </div>
          </div>

          <p style={{ maxWidth: '540px', color: '#9ca3af', fontSize: '13.5px', lineHeight: 1.6 }}>
            Architecting next-generation digital products, robust enterprise cloud systems, and AI automation built in a blink.
          </p>

          {/* Quick Nav Links */}
          <div 
            style={{
              display: 'flex',
              gap: '28px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px',
              color: '#d1d5db',
              textTransform: 'uppercase',
              marginTop: '8px'
            }}
          >
            <Link href="/" className="footer-nav-link">Home</Link>
            <Link href="/#about" className="footer-nav-link">About Us</Link>
            <Link href="/#services" className="footer-nav-link">Services</Link>
            <Link href="/#projects" className="footer-nav-link">Projects</Link>
            <Link href="/#teams" className="footer-nav-link">Teams</Link>
            <Link href="/contact" className="footer-nav-link">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Social Strip */}
      <div 
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: '#000000',
          padding: '18px 0',
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
          <div style={{ display: 'flex', gap: '20px', fontWeight: 500 }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">Linkedin</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-social-link">Dribbble</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="footer-social-link">Behance</a>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center' }}>
            © 2026 BlinkTech. All Rights Reserved
          </div>

          {/* Back to Home Button */}
          <button 
            onClick={scrollToTop}
            className="back-to-home-btn"
          >
            <span>Back to Home</span>
            <ChevronUp size={15} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-nav-link {
          transition: color 0.2s ease;
        }
        .footer-nav-link:hover {
          color: #ffffff;
        }
        .footer-social-link {
          color: #9ca3af;
          transition: color 0.2s ease;
        }
        .footer-social-link:hover {
          color: #ffffff;
        }
        .back-to-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          fontSize: 12px;
          fontWeight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .back-to-home-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};
