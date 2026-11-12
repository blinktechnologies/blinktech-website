'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlinkTechTextLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { TopTicker } from './TopTicker';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'BLOGS', href: '/news' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'TEAMS', href: '/teams' },
    { label: 'CONTACT', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'none',
          borderBottom: '1px solid #eeeff2',
          boxShadow: scrolled ? '0 8px 30px rgba(0, 0, 0, 0.04)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease'
        }}
      >
        <TopTicker />
        <div 
          className="container"
          style={{
            height: '76px',
            display: 'flex',
            alignItems: 'stretch',
            position: 'relative'
          }}
        >
          {/* Framed Section: Logo Box + Links Box with border lines and 6 black squares */}
          <div
            className="navbar-framed-area"
            style={{
              display: 'flex',
              alignItems: 'stretch',
              flex: 1,
              position: 'relative',
              borderTop: '1px solid #e5e7eb',
              borderBottom: '1px solid #e5e7eb',
              borderLeft: '1px solid #e5e7eb',
              borderRight: '1px solid #e5e7eb'
            }}
          >
            {/* Top-Left Square Marker */}
            <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
            {/* Bottom-Left Square Marker */}
            <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />

            {/* Left Box: Blink-Tech Ltd Logo */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 28px',
                borderRight: '1px solid #e5e7eb',
                position: 'relative'
              }}
            >
              {/* Divider Top-Center Square Marker */}
              <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
              {/* Divider Bottom-Center Square Marker */}
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
                justifyContent: 'center',
                gap: '36px',
                flex: 1,
                padding: '0 32px',
                position: 'relative'
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="nav-link-item font-space-grotesk"
                    style={{
                      position: 'relative',
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: active ? '#09090b' : '#475569',
                      padding: '8px 2px',
                      textTransform: 'uppercase',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>{link.label}</span>
                    {active && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '16px',
                          height: '2px',
                          backgroundColor: '#09090b',
                          borderRadius: '9999px'
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* End of Links Box: Top-Right & Bottom-Right Square Markers */}
            <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '5px', height: '5px', backgroundColor: '#000000', zIndex: 10 }} />
          </div>

          {/* Right Box: Start a Project Button */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              paddingLeft: '32px'
            }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="start-project-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "var(--font-ui), 'Inter', sans-serif",
                background: 'linear-gradient(180deg, #4b525d 0%, #30353e 50%, #1c1f24 100%)',
                color: '#ffffff',
                padding: '11px 24px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 8px 18px -2px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.28)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
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
                padding: '7px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
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
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: '13px',
                  fontWeight: isActive(link.href) ? 700 : 600,
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
        .nav-link-item,
        .nav-link-item * {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif !important;
        }
        .nav-link-item {
          transition: color 0.25s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #09090b;
          border-radius: 9999px;
          transform: translateX(-50%);
          transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-item:hover {
          color: #09090b !important;
          transform: translateY(-1px);
        }
        .nav-link-item:hover::after {
          width: 16px;
        }
        .start-project-btn:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 14px 28px -2px rgba(0, 0, 0, 0.52), inset 0 1px 1px rgba(255, 255, 255, 0.45) !important;
          filter: brightness(1.08);
        }
        .start-project-btn:active {
          transform: translateY(0) scale(0.985);
        }
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
