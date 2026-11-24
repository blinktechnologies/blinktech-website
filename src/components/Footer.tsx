'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DotChevron } from './DotChevron';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/_blink_tech/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/company/blink-technologiz/' },
  { label: 'Dribble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' }
];

const BottomBar: React.FC<{ onTop: () => void; compact?: boolean }> = ({ onTop, compact }) => (
  <div className={`foot-bar ${compact ? 'compact' : ''}`}>
    <div className="foot-socials">
      {SOCIALS.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
          {s.label}
        </a>
      ))}
    </div>
    <span className="foot-copy">© 2026 BlinkTech. All Rights Reserved</span>
    <button type="button" onClick={onTop} className="foot-top" aria-label="Back to top">
      Back to Home
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 7.5L6 4l3.5 3.5" />
      </svg>
    </button>
  </div>
);

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-foot">
      {isHome && (
        <>
          <nav className="foot-nav" aria-label="Footer navigation">
            <Link href="/#about">About us</Link>
            <span className="foot-sq" />
            <Link href="/services">Services</Link>
            <span className="foot-sq" />
            <Link href="/projects">Project</Link>
            <span className="foot-sq" />
            <Link href="/teams">Team</Link>
          </nav>

          <div className="foot-mid">
            <span className="rule rule-top" />
            <span className="rule rule-bottom" />

            <svg className="foot-px foot-px-tl" width="278" height="241" viewBox="0 0 278 241" aria-hidden="true">
              <rect x="0" y="0" width="80" height="81" fill="#fff" />
              <rect x="118" y="0" width="160" height="81" fill="#fff" />
              <rect x="80" y="81" width="79" height="80" fill="#fff" />
              <rect x="0" y="161" width="80" height="80" fill="#fff" />
            </svg>
            <svg className="foot-px foot-px-br" width="277" height="240" viewBox="0 0 277 240" aria-hidden="true">
              <rect x="198" y="0" width="79" height="80" fill="#fff" />
              <rect x="119" y="80" width="79" height="80" fill="#fff" />
              <rect x="0" y="160" width="160" height="80" fill="#fff" />
              <rect x="198" y="160" width="79" height="80" fill="#fff" />
            </svg>

            <div className="foot-chevs foot-chevs-top">
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} className="fchev" style={{ animationDelay: `${(10 - i) * 120}ms` }}>
                  <DotChevron direction="left" color="#e5e7eb" size={2.4} />
                </span>
              ))}
            </div>
            <div className="foot-chevs foot-chevs-bottom">
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} className="fchev" style={{ animationDelay: `${i * 120}ms` }}>
                  <DotChevron direction="right" color="#e5e7eb" size={2.4} />
                </span>
              ))}
            </div>

            <Link href="/" className="foot-brand" aria-label="Blink-Tech home">
              <img src="/images/bt-logo.png" alt="" className="foot-emblem" loading="lazy" decoding="async" />
              <span className="foot-word">BLINK-TECH</span>
              <span className="foot-ltd">Ltd</span>
            </Link>
          </div>
        </>
      )}

      <BottomBar onTop={scrollToTop} compact={!isHome} />

      <style jsx>{`
        .site-foot {
          background: #000000;
          color: #ffffff;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          overflow: hidden;
        }
        .foot-nav {
          max-width: 1441px;
          margin: 0 auto;
          height: 163px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          padding: 0 128px 0 76px;
        }
        .foot-nav :global(a) {
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          justify-self: center;
          transition: opacity 0.2s ease;
        }
        .foot-nav :global(a:first-child) { justify-self: start; }
        .foot-nav :global(a:last-child) { justify-self: end; }
        .foot-nav :global(a:hover) { opacity: 0.7; }
        .foot-sq {
          width: 12px;
          height: 12px;
          background: #ffffff;
        }
        .foot-mid {
          position: relative;
          max-width: 1441px;
          height: 487px;
          margin: 0 auto;
        }
        .rule {
          position: absolute;
          left: 18px;
          right: 15px;
          border-top: 1px solid #9a9a9a;
        }
        .rule::before,
        .rule::after {
          content: '';
          position: absolute;
          top: -4px;
          width: 6px;
          height: 6px;
          background: #ffffff;
        }
        .rule::before { left: -3px; }
        .rule::after { right: -3px; }
        .rule-top { top: 0; }
        .rule-bottom { bottom: 0; }
        .foot-px { position: absolute; }
        .foot-px-tl { left: 18px; top: 1px; }
        .foot-px-br { right: 15px; bottom: 1px; }
        .foot-chevs {
          position: absolute;
          display: flex;
          gap: 41px;
        }
        .foot-chevs-top { top: 137px; left: 898px; }
        .foot-chevs-bottom { top: 387px; left: 40px; }
        .fchev {
          display: inline-flex;
          width: 10px;
          justify-content: center;
          animation: fchevPulse 2.4s ease-in-out infinite;
        }
        @keyframes fchevPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .site-foot :global(.foot-brand) {
          position: absolute;
          left: 318px;
          top: 142px;
          display: flex;
          align-items: center;
          gap: 25px;
        }
        .foot-emblem {
          width: 200px;
          height: 200px;
          object-fit: contain;
          filter: invert(1) grayscale(1) drop-shadow(0 0 22px rgba(255, 255, 255, 0.25));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .site-foot :global(.foot-brand:hover) .foot-emblem { transform: rotate(-6deg) scale(1.03); }
        .foot-word {
          font-size: 97px;
          font-weight: 500;
          letter-spacing: -0.005em;
          line-height: 1;
          background: linear-gradient(90deg, #ffffff 0%, #e4e4e4 35%, #9a9a9a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          margin-top: 8px;
        }
        .foot-ltd {
          align-self: flex-start;
          margin: 14px 0 0 -18px;
          font-size: 44px;
          font-weight: 600;
          background: linear-gradient(90deg, #f2f2f2 0%, #9a9a9a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .site-foot :global(.foot-bar) {
          max-width: 1441px;
          margin: 0 auto;
          height: 63px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 75px;
          font-size: 15px;
        }
        .site-foot :global(.foot-bar.compact) { height: 68px; padding: 0 72px; }
        .site-foot :global(.foot-socials) {
          display: flex;
          gap: 24px;
        }
        .site-foot :global(.foot-socials a) {
          color: #ffffff;
          transition: opacity 0.2s ease;
        }
        .site-foot :global(.foot-socials a:hover) { opacity: 0.7; }
        .site-foot :global(.foot-copy) { color: #ffffff; }
        .site-foot :global(.foot-top) {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          font-size: 15px;
          font-family: inherit;
          margin-right: 74px;
          transition: transform 0.2s ease;
        }
        .site-foot :global(.foot-top:hover) { transform: translateY(-2px); }

        @media (max-width: 1200px) {
          .foot-nav { padding: 0 32px; }
          .foot-nav :global(a) { font-size: 18px; }
          .foot-mid { height: 360px; }
          .foot-chevs { display: none; }
          .foot-px { transform: scale(0.55); }
          .foot-px-tl { transform-origin: top left; }
          .foot-px-br { transform-origin: bottom right; }
          .site-foot :global(.foot-brand) { left: 50%; top: 50%; transform: translate(-50%, -50%); gap: 16px; }
          .foot-emblem { width: 110px; height: 110px; }
          .foot-word { font-size: clamp(40px, 7vw, 80px); }
          .foot-ltd { font-size: 26px; margin-left: -10px; }
        }
        @media (max-width: 700px) {
          .foot-nav { height: auto; padding: 24px 20px; gap: 10px; }
          .foot-sq { width: 6px; height: 6px; }
          .foot-nav :global(a) { font-size: 15px; }
          .foot-px { display: none; }
          .foot-emblem { width: 64px; height: 64px; }
          .foot-word { font-size: 34px; white-space: nowrap; }
          .foot-ltd { font-size: 18px; margin: 4px 0 0 -8px; }
          .site-foot :global(.foot-brand) { gap: 12px; }
          .site-foot :global(.foot-bar),
          .site-foot :global(.foot-bar.compact) {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 10px;
            height: auto;
            padding: 20px;
            text-align: center;
          }
          .site-foot :global(.foot-top) { justify-self: center; margin: 0; }
        }
      `}</style>
    </footer>
  );
};
