'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlinkTechTextLogo } from './BTLogo';
import { StartProjectModal } from './StartProjectModal';
import { TopTicker } from './TopTicker';
import { Menu, X } from 'lucide-react';

const Marker: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span className="nav-marker" style={style} aria-hidden="true" />
);

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle elevation once the page scrolls under the sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Mobile menu: Escape to close, lock background scroll, close if resized to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const mq = window.matchMedia('(min-width: 861px)');
    const onMq = () => {
      if (mq.matches) setMobileMenuOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [mobileMenuOpen]);

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
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <TopTicker />

        <div className="nav-shell">
          <div className="nav-frame">
            {/* Logo cell */}
            <div className="nav-cell nav-logo-cell">
              <Marker style={{ top: -3, left: -3 }} />
              <Marker style={{ bottom: -3, left: -3 }} />
              <Link href="/" aria-label="Blink-Tech home" style={{ display: 'flex', alignItems: 'center' }}>
                <BlinkTechTextLogo theme="light" />
              </Link>
            </div>

            {/* Links cell */}
            <nav className="nav-cell nav-links-cell">
              <Marker style={{ top: -3, left: -3 }} />
              <Marker style={{ bottom: -3, left: -3 }} />
              <Marker style={{ top: -3, right: -3 }} />
              <Marker style={{ bottom: -3, right: -3 }} />
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link-item ${isActive(link.href) ? 'is-active' : ''}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA cell */}
            <div className="nav-cell nav-cta-cell">
              <Marker style={{ top: -3, right: -3 }} />
              <Marker style={{ bottom: -3, right: -3 }} />
              <button onClick={() => setModalOpen(true)} className="start-project-btn">
                Start a Project
              </button>
              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="mobile-menu-inner" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={isActive(link.href) ? 'is-active' : ''}
                aria-current={isActive(link.href) ? 'page' : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
                style={{ transitionDelay: mobileMenuOpen ? `${60 + i * 35}ms` : '0ms' }}
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <button
              type="button"
              className="mobile-cta"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
            >
              Start a Project
            </button>
          </nav>
        </div>
        {mobileMenuOpen && (
          <button
            type="button"
            className="mobile-scrim"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </header>

      <StartProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #f3f4f6;
          transition: box-shadow 0.3s ease;
        }
        .site-header.is-scrolled {
          box-shadow: 0 10px 30px -18px rgba(15, 23, 42, 0.35);
        }
        .nav-shell {
          position: relative;
          z-index: 3;
          background: #f3f4f6;
          padding: 15px 17px 0;
          border-bottom: 1px solid #dadada;
        }
        .nav-frame {
          display: flex;
          align-items: stretch;
          height: 73px;
          border-top: 1px solid #e5e7eb;
        }
        .nav-cell {
          position: relative;
          display: flex;
          align-items: center;
        }
        .nav-cell :global(.nav-marker) {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #000000;
          z-index: 2;
        }
        .nav-logo-cell {
          width: 299px;
          flex-shrink: 0;
          background: #ffffff;
          justify-content: center;
          border-left: 1px solid #dadada;
        }
        .nav-links-cell {
          flex: 1;
          background: #ffffff;
          justify-content: center;
          gap: 38px;
          border-left: 1px solid #dadada;
          border-right: 1px solid #dadada;
        }
        .nav-cta-cell {
          width: 224px;
          flex-shrink: 0;
          justify-content: center;
          border-right: 1px solid #dadada;
        }
        .nav-links-cell :global(.nav-link-item) {
          position: relative;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #111111;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-links-cell :global(.nav-link-item)::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1.5px;
          background: #111111;
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-links-cell :global(.nav-link-item:hover)::after,
        .nav-links-cell :global(.nav-link-item:focus-visible)::after {
          transform: scaleX(1);
        }
        .nav-links-cell :global(.nav-link-item.is-active) {
          font-weight: 600;
        }
        .nav-links-cell :global(.nav-link-item.is-active)::after {
          transform: scaleX(1);
          opacity: 0.25;
        }
        .nav-links-cell :global(.nav-link-item.is-active:hover)::after {
          opacity: 1;
        }
        .start-project-btn {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          width: 150px;
          height: 46px;
          border-radius: 10px;
          background: linear-gradient(180deg, #5f6165 0%, #3b3d41 55%, #2a2b2e 100%);
          border: 1px solid #2a2b2e;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            0 3px 0 #1f2023,
            0 18px 30px rgba(0, 0, 0, 0.28);
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .start-project-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
        }
        .start-project-btn:active {
          transform: translateY(1px);
        }
        .mobile-toggle {
          display: none;
          padding: 7px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          align-items: center;
          justify-content: center;
          margin-left: 12px;
        }
        .mobile-menu {
          display: grid;
          grid-template-rows: 0fr;
          background: #ffffff;
          position: relative;
          z-index: 2;
          transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mobile-menu.open {
          grid-template-rows: 1fr;
          border-bottom: 1px solid #dadada;
        }
        .mobile-menu-inner {
          overflow: hidden;
          min-height: 0;
          display: flex;
          flex-direction: column;
          padding: 0 24px;
        }
        .mobile-menu.open .mobile-menu-inner { padding: 8px 24px 20px; }
        .mobile-menu :global(a) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 15px;
          color: #4b5563;
          min-height: 48px;
          border-bottom: 1px solid #f1f2f4;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease;
        }
        .mobile-menu.open :global(a) { opacity: 1; transform: none; }
        .mobile-menu :global(a span) { color: #b5b7bc; transition: transform 0.2s ease; }
        .mobile-menu :global(a:active span) { transform: translateX(4px); }
        .mobile-menu :global(a.is-active) {
          color: #0a0a0c;
          font-weight: 600;
        }
        .mobile-menu :global(a.is-active span) { color: #0a0a0c; }
        .mobile-cta {
          margin-top: 18px;
          height: 50px;
          border-radius: 10px;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(180deg, #5f6165 0%, #3b3d41 55%, #2a2b2e 100%);
          border: 1px solid #2a2b2e;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 3px 0 #1f2023;
        }
        .mobile-scrim {
          position: fixed;
          inset: 0;
          z-index: 1;
          background: rgba(10, 10, 14, 0.28);
          backdrop-filter: blur(2px);
          animation: scrimIn 0.25s ease;
          cursor: default;
        }
        @keyframes scrimIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 1100px) {
          .nav-logo-cell { width: 220px; }
          .nav-links-cell { gap: 24px; }
          .nav-cta-cell { width: 190px; }
        }
        @media (max-width: 860px) {
          .nav-links-cell { display: none; }
          .nav-logo-cell { flex: 1; width: auto; justify-content: flex-start; padding-left: 20px; }
          .nav-cta-cell { width: auto; padding: 0 16px; border-left: 1px solid #dadada; background: #ffffff; }
          .start-project-btn { width: auto; padding: 0 16px; height: 40px; font-size: 14px; }
          .mobile-toggle { display: flex; width: 44px; height: 44px; }
        }
        @media (max-width: 480px) {
          .nav-shell { padding: 10px 10px 0; }
          .start-project-btn { display: none; }
        }
      `}</style>
    </>
  );
};
