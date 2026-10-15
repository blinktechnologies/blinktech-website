'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlinkTechTextLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'BLOGS', href: '/news' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'TEAMS', href: '/teams' },
    { label: 'CONTACT', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #eeeff2',
          transition: 'all 0.2s ease'
        }}
      >
        <div 
          className="container"
          style={{
            height: '74px',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'stretch',
            position: 'relative',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb'
          }}
        >
          {/* Black Square Corner Markers across the 3 sections */}
          <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
          <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />

          {/* Left Box: Blink-Tech Ltd */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              paddingRight: '36px',
              borderRight: '1px solid #e5e7eb',
              position: 'relative'
            }}
          >
            {/* Top & bottom intersection markers on the right border */}
            <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />

            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <BlinkTechTextLogo theme="light" />
            </Link>
          </div>

          {/* Center Box: Navigation Links */}
          <nav 
            className="desktop-nav" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-evenly',
              padding: '0 24px',
              borderRight: '1px solid #e5e7eb',
              position: 'relative'
            }}
          >
            {/* Top & bottom intersection markers on the right border */}
            <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    position: 'relative',
                    fontFamily: "'Outfit', var(--font-heading), sans-serif",
                    fontSize: '11px',
                    fontWeight: active ? 700 : 500,
                    color: active ? '#0a0a0c' : '#4b5563',
                    letterSpacing: '0.8px',
                    padding: '8px 2px',
                    textTransform: 'uppercase'
                  }}
                >
                  {link.label}
                  {active && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#0a0a0c'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Box: Start a Project */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              paddingLeft: '32px'
            }}
          >
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Outfit', var(--font-heading), sans-serif",
                background: 'linear-gradient(180deg, #373942 0%, #1e1f24 50%, #131417 100%)',
                color: '#ffffff',
                padding: '9px 24px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                border: '1px solid #2d2e35',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              Start a Project
            </button>

            {/* Mobile toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                padding: '6px',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                marginLeft: '12px'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #eeeff2',
              padding: '16px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '13px',
                  fontWeight: isActive(link.href) ? 700 : 500,
                  color: isActive(link.href) ? '#0a0a0c' : '#4b5563',
                  padding: '6px 0',
                  borderBottom: '1px solid #f3f4f6'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
