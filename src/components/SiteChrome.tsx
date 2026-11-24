'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Site-wide UX helpers:
 *  - skip link for keyboard / screen-reader users
 *  - thin reading-progress bar along the top edge
 *  - floating back-to-top button after the first screen
 */
export const SiteChrome: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      setShowTop(window.scrollY > window.innerHeight * 0.9);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="read-progress" aria-hidden="true">
        <div ref={barRef} className="read-progress-bar" />
      </div>

      <button
        type="button"
        className={`to-top ${showTop ? 'show' : ''}`}
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <style jsx>{`
        .skip-link {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 10000;
          padding: 10px 18px;
          border-radius: 10px;
          background: #0b0b16;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          transform: translateY(-160%);
          transition: transform 0.2s ease;
        }
        .skip-link:focus { transform: translateY(0); }
        .read-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 60;
          pointer-events: none;
        }
        .read-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #5f6165, #0b0b16);
          transform-origin: 0 50%;
          transform: scaleX(0);
        }
        .to-top {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 55;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(180deg, #5f6165 0%, #3b3d41 55%, #2a2b2e 100%);
          border: 1px solid #2a2b2e;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 3px 0 #1f2023, 0 14px 26px rgba(0, 0, 0, 0.25);
          opacity: 0;
          visibility: hidden;
          transform: translateY(14px) scale(0.9);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.3s, filter 0.2s ease;
        }
        .to-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        .to-top.show:hover { transform: translateY(-3px); filter: brightness(1.12); }
        .to-top.show:active { transform: translateY(1px); }
        @media (max-width: 600px) {
          .to-top { right: 16px; bottom: 16px; width: 44px; height: 44px; }
        }
      `}</style>
    </>
  );
};
