'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { SectionPill } from './SectionPill';

const projects = [
  {
    id: 'inziralink',
    title: 'Inziralink',
    description: 'A design of a platform that helps people transport goods easily just connecting companies to transport systems to ensure the safety and efficiency of transportation of Goods.',
    image: '/images/project_inziralink_scene.png',
    projectUrl: null as string | null
  },
  {
    id: 'restohive',
    title: 'RestoHive',
    description: 'Resto Hive is an all-in-one restaurant management solution designed to simplify operations, boost efficiency, and enhance customer experiences. From POS and menu management to reservations, inventory, and payments, Resto Hive provides restaurants with the tools they need to grow and thrive in today’s fast-paced food industry.',
    image: '/images/project_restohive.png',
    projectUrl: 'https://restohive.com/'
  },
  {
    id: 'thepressradio',
    title: 'Thepressradio.com',
    description: 'ThePressRadio.com is a dynamic African-focused news and media platform delivering timely, credible stories from across Africa and the world. It covers diverse topics including politics, business, sports, lifestyle, and entertainment, while also offering an online radio station and space for public opinions.',
    image: '/images/project_thepressradio_com.png',
    projectUrl: 'https://thepressradio.com'
  },
  {
    id: 'mazi-care',
    title: 'Mazi-care website and web-app',
    description: 'MaziCare is a platform that connects families in Greece with verified caregivers, allowing users to easily create an account, describe their loved one’s needs, and receive personalized caregiver recommendations.',
    image: '/images/project_mazi_care_website_and_web_app.png',
    projectUrl: 'https://mazicare.gr/'
  },
  {
    id: 'wordpress-ecommerce',
    title: 'WordPress eCommerce Website',
    description: 'Developed a fully functional eCommerce platform using WordPress and WooCommerce, enabling seamless product browsing, cart management, and secure checkout. Implemented responsive design, product categorization, inventory management, and payment integration to deliver a smooth user experience across devices.',
    image: '/images/project_wordpress_ecommerce_website.png',
    projectUrl: 'https://www.blissfultreasureinterior.com'
  },
  {
    id: 'liinkspace',
    title: 'Liinkspace',
    description: 'Liinkspace gives you one link for everything you share — your personal page in one URL. Build links, feeds, and multi-page sites, track clicks, and keep full ownership of your work, socials, and offers in one place.',
    image: '/images/project_liinkspace.png',
    projectUrl: 'https://liinkspace.com'
  },
  {
    id: 'rcatalent',
    title: 'RCA Talent',
    description: 'RCA Talent is the Rwanda Coding Academy talent marketplace. Students showcase verified profiles while companies discover and connect with the next generation of tech talent — a trusted platform connecting exceptional developers with forward-thinking companies.',
    image: '/images/project_rcatalent.png',
    projectUrl: 'https://www.rcatalent.rw'
  }
];

// Light "bitten" pixel cells over the image corners (39px grid, from the design): [col, row, widthInCells]
const AUTOPLAY_MS = 5200;

const TL_CELLS: Array<[number, number, number]> = [[0, 0, 1], [2, 0, 2], [1, 1, 1], [0, 2, 1]];
const TR_CELLS: Array<[number, number, number]> = [[0, 0, 1], [2, 0, 1], [1, 1, 1], [0, 2, 1], [0, 3, 1]];

export const ProjectShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const isPaused = hovered || focused || !inView || !tabVisible || reduceMotion;

  const next = useCallback(() => setActiveSlide((p) => (p + 1) % projects.length), []);
  const prev = useCallback(() => setActiveSlide((p) => (p === 0 ? projects.length - 1 : p - 1)), []);

  // Only autoplay while the carousel is on screen, the tab is visible and motion is welcome
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onMq);

    const onVis = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVis);

    let io: IntersectionObserver | undefined;
    if (cardRef.current && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
      io.observe(cardRef.current);
    } else {
      setInView(true);
    }
    return () => {
      mq.removeEventListener('change', onMq);
      document.removeEventListener('visibilitychange', onVis);
      io?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [isPaused, activeSlide, next]);

  // Warm the cache for the neighbouring slides so switching never flashes
  useEffect(() => {
    [activeSlide + 1, activeSlide - 1 + projects.length].forEach((i) => {
      const img = new Image();
      img.src = projects[i % projects.length].image;
    });
  }, [activeSlide]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  };

  const current = projects[activeSlide];

  return (
    <section id="projects" className="projects">
      <ScrollReveal delay={40} yOffset={10}>
        <div className="proj-pill-row">
          <SectionPill label="Projects" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={90} yOffset={18}>
        <h2 className="proj-heading">From Idea to Production</h2>
        <p className="proj-sub">
          From concept to execution, we build solutions that matter.
          <br />
          Explore the breakthrough projects shaping the future of our industry.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={160} duration={800} yOffset={24}>
        <div
          ref={cardRef}
          className="proj-card"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
          }}
        >
          <div className="proj-media" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img
              key={current.id}
              src={current.image}
              alt={`${current.title} – project preview`}
              className="proj-img"
              draggable={false}
              decoding="async"
            />
            <span className="proj-count" aria-hidden="true">
              {String(activeSlide + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            {TL_CELLS.map(([c, r, w], i) => (
              <span key={`tl${i}`} className="px-cell" style={{ left: c * 39, top: r * 39, width: 39 * w }} />
            ))}
            {TR_CELLS.map(([c, r, w], i) => (
              <span key={`tr${i}`} className="px-cell" style={{ right: c * 39, top: r * 39, width: 39 * w }} />
            ))}
            <button
              type="button"
              className="proj-nav prev"
              aria-label="Previous project"
              onClick={prev}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="proj-nav next"
              aria-label="Next project"
              onClick={next}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="proj-dots-row">
            <div className="proj-dots">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`proj-dot ${activeSlide === idx ? 'on' : ''}`}
                  aria-label={`Show project ${idx + 1}: ${p.title}`}
                  aria-current={activeSlide === idx ? 'true' : undefined}
                >
                  {activeSlide === idx && (
                    <span
                      key={`${current.id}-${isPaused ? 'p' : 'r'}`}
                      className={`proj-dot-fill ${isPaused ? 'paused' : ''}`}
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
            {current.projectUrl ? (
              <a href={current.projectUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
                Visit live site <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="proj-link proj-link-muted">Case study coming soon</span>
            )}
          </div>

          <div className="proj-divider" />

          <div key={`d-${current.id}`} className="proj-details" aria-live={isPaused ? 'polite' : 'off'}>
            <div>
              <h3 className="proj-title">{current.title}</h3>
            </div>
            <div>
              <span className="proj-desc-label">DESCRIPTION</span>
              <p className="proj-desc">{current.description}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        .projects {
          position: relative;
          background: #f3f4f6;
          padding: 0 0 44px;
          border-bottom: 1px solid #dadcdf;
          box-shadow: inset 0 -15px 0 #f3f4f6, inset 0 -16px 0 #dadcdf;
        }
        .proj-pill-row {
          text-align: center;
          position: relative;
          z-index: 2;
          margin-top: -16px;
        }
        .proj-heading {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 74px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.035em;
          text-align: center;
          margin: 36px 0 0;
          padding-bottom: 6px;
          background: linear-gradient(90deg, #5c5f63 0%, #3b3d40 45%, #1f2022 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .proj-sub {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18px;
          line-height: 22px;
          color: #6b6b6e;
          text-align: center;
          margin: 26px 0 0;
        }
        .proj-card {
          position: relative;
          width: 1327px;
          max-width: calc(100% - 32px);
          margin: 58px auto 0;
          padding: 11px 11px 0;
          height: 885px;
          overflow: hidden;
          border-radius: 30px;
          background: #f3f3f4;
          border: 1px solid #e6e6e8;
          box-shadow: 0 6px 0 #e2e2e4, 0 14px 24px rgba(0, 0, 0, 0.04);
        }
        .proj-media {
          position: relative;
          height: 659px;
          border-radius: 30px;
          overflow: hidden;
          background: #26292d;
        }
        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: projIn 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .proj-card:hover .proj-img { transform: scale(1.012); }
        @keyframes projIn {
          from { opacity: 0; transform: scale(0.985); filter: blur(4px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .px-cell {
          position: absolute;
          height: 39px;
          background: #ececed;
          z-index: 2;
          pointer-events: none;
        }
        .proj-card:focus-visible { outline: 2px solid #0f172a; outline-offset: 4px; }
        .proj-media { touch-action: pan-y; user-select: none; }
        .proj-count {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 3;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(10, 10, 14, 0.45);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          font-variant-numeric: tabular-nums;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .proj-media:hover .proj-count, .proj-card:focus-within .proj-count { opacity: 1; }
        .proj-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 26px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          z-index: 3;
          backdrop-filter: blur(6px);
          transition: opacity 0.25s ease, background 0.25s ease;
        }
        .proj-nav.prev { left: 20px; }
        .proj-nav.next { right: 20px; }
        .proj-media:hover .proj-nav,
        .proj-card:focus-within .proj-nav { opacity: 1; }
        .proj-nav:hover { background: rgba(255, 255, 255, 0.3); }
        .proj-nav:active { transform: translateY(-50%) scale(0.92); }
        @media (hover: none) {
          .proj-nav, .proj-count { opacity: 1; }
          .proj-nav { background: rgba(10, 10, 14, 0.35); }
        }
        .proj-dots-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 44px 40px 0;
          height: 56px;
        }
        .proj-dots {
          display: flex;
          gap: 10px;
        }
        .proj-dot {
          position: relative;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #dcdcde;
          padding: 0;
          overflow: hidden;
          transition: background 0.25s ease, width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .proj-dot::before {
          /* invisible 32px hit area for touch */
          content: '';
          position: absolute;
          inset: -10px -3px;
        }
        .proj-dot:hover { background: #bfbfc3; }
        .proj-dot.on { width: 34px; background: #cfcfd2; }
        .proj-dot-fill {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: #1a1a1a;
          transform-origin: 0 50%;
          animation: dotFill linear forwards;
        }
        .proj-dot-fill.paused { animation: none; transform: none; }
        @keyframes dotFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .proj-divider {
          margin: 23px 40px 0;
          border-top: 1px solid #dcdcde;
        }
        .proj-details {
          display: grid;
          grid-template-columns: 517px 1fr;
          padding: 38px 40px 0;
          animation: projIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .proj-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 37px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #222222;
          margin: 8px 0 0;
          line-height: 40px;
          padding-right: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .proj-link {
          display: inline-block;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          color: #6b6b6e;
          transition: color 0.2s ease;
        }
        .proj-link:hover { color: #111111; }
        .proj-link-muted, .proj-link-muted:hover { color: #a3a3a8; cursor: default; }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
        .proj-desc-label {
          display: block;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17px;
          letter-spacing: 0.02em;
          color: #77777a;
        }
        .proj-desc {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 16px;
          line-height: 20px;
          color: #111111;
          margin: 8px 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 1100px) {
          .proj-heading { font-size: clamp(42px, 8vw, 74px); }
          .proj-card { height: auto; padding-bottom: 32px; overflow: visible; }
          .proj-media { height: auto; aspect-ratio: 1304 / 659; }
          .proj-details { grid-template-columns: 1fr; gap: 18px; }
          .px-cell { transform: scale(0.6); }
        }
        @media (max-width: 600px) {
          .proj-dots-row, .proj-details { padding-left: 20px; padding-right: 20px; }
          .proj-divider { margin-left: 20px; margin-right: 20px; }
          .proj-dots-row { gap: 12px; }
          .proj-dots { gap: 7px; }
          .proj-link { white-space: nowrap; font-size: 12px; }
          .proj-count { left: 12px; bottom: 12px; }
          .px-cell { display: none; }
        }
      `}</style>
    </section>
  );
};
