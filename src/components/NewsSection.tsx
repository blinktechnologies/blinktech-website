'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SectionPill } from './SectionPill';

const TITLE = 'A HEART-WARMING FAMILY REUNION: EMBRACING TOGETHERNESS ! EMBARKING CHERISHED MOMENTS TOGETHER';

const ArrowLong = () => (
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 7h25M20 1l6 6-6 6" />
  </svg>
);

const ShareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
    <path d="M21.5 2.5L2.5 10l7.5 3 3 7.5z" />
    <path d="M10 13l11.5-10.5" />
  </svg>
);

export const NewsSection: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const flash = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'BlinkTech News', url });
        return;
      }
      await navigator.clipboard.writeText(url);
      flash('Link copied to clipboard');
    } catch (err) {
      if ((err as Error)?.name !== 'AbortError') flash('Couldn\u2019t share — copy the address bar link instead');
    }
  };

  const openFeature = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = featureRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  };

  return (
    <section className="news">
      <svg className="news-px" width="128" height="96" viewBox="0 0 128 96" aria-hidden="true">
        <rect x="0" y="0" width="64" height="32" fill="#000" />
        <rect x="96" y="0" width="32" height="32" fill="#000" />
        <rect x="64" y="32" width="32" height="32" fill="#000" />
        <rect x="96" y="64" width="32" height="32" fill="#000" />
      </svg>

      <div className="news-inner">
        {/* Featured article */}
        <div className="feature" id="featured-story" ref={featureRef} tabIndex={-1}>
          <img src="/images/news-award-hero.png" alt="East Africa AwardX 2025 Top Young Entrepreneur winner" className="feature-img" />

          <div className="feature-body">
            <SectionPill label="Awards" />
            <h1 className="feature-title">{TITLE}</h1>
            <p className="feature-text">
              Our Itinerary Is Brimming With Activities That Cater To Every Family Member&apos;s Interests, Ensuring That Each
              Moment Is As Special As The Bonds We Share. From Heart-Warming Conversations Over Home-Cooked Meals To Exploring
              The Local Attractions Hand In Hand, This Visit Is A Celebration Of The Ties That Bind Us.
            </p>
            <p className="feature-text">
              Amidst The Hustle And Bustle Of Our Daily Lives, This Family Reunion Serves As A Reminder Of The Importance Of
              Taking A Pause And Relishing The Company Of Those Who Matter Most.
            </p>

            <div className="author-row">
              <img src="/images/news-author.png" alt="Devon Lane" className="author-img" />
              <div>
                <span className="author-name">Devon Lane</span>
                <span className="author-date">May 31, 2023</span>
              </div>
              <button type="button" className="share-btn" onClick={share} aria-label="Share this article">
                <ShareIcon />
              </button>
            </div>

            <div className="slides">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  type="button"
                  className={`slide-dot ${slide === i ? 'on' : ''}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Show story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured news */}
        <div className="fn-head">
          <h2>Featured News</h2>
          <SectionPill label="See All" />
        </div>

        <div className="fn-grid">
          {[0, 1].map((i) => (
            <article key={i} className="fn-card" onClick={openFeature}>
              <div className="fn-media">
                <img
                  src="/images/news-award-card.png"
                  alt="AwardX 2025 Top Young Entrepreneur winner"
                  loading="lazy"
                  decoding="async"
                />
                <a href="#featured-story" className="read-more" onClick={openFeature} aria-label={`Read more: ${TITLE.toLowerCase()}`}>
                  Read More
                  <ArrowLong />
                </a>
              </div>
              <h3>{TITLE}</h3>
            </article>
          ))}
        </div>
      </div>

      <div className={`news-toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>

      <style jsx>{`
        .feature { outline: none; scroll-margin-top: 150px; }
        .news-toast {
          position: fixed;
          left: 50%;
          bottom: 28px;
          z-index: 70;
          padding: 12px 20px;
          border-radius: 12px;
          background: #0b0b16;
          color: #ffffff;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 15px;
          font-weight: 500;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, 12px);
          transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .news-toast.show { opacity: 1; transform: translate(-50%, 0); }
        .fn-card { cursor: pointer; }
        .fn-card:hover h3 { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }
        .news {
          position: relative;
          background: #ffffff;
          padding: 70px 0 98px;
        }
        .news-px {
          position: absolute;
          top: 17px;
          right: 0;
        }
        .news-inner {
          max-width: 1346px;
          margin: 0 auto;
          padding: 0 24px 0 8px;
          box-sizing: content-box;
        }
        .feature {
          display: grid;
          grid-template-columns: 600px 1fr;
          gap: 40px;
          align-items: start;
        }
        .feature-img {
          width: 600px;
          height: 651px;
          object-fit: cover;
          display: block;
        }
        .feature-body {
          padding-top: 26px;
          max-width: 690px;
        }
        .feature-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 27px;
          font-weight: 600;
          line-height: 34px;
          letter-spacing: 0;
          color: #111111;
          margin: 37px 0 0;
        }
        .feature-text {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 19px;
          font-weight: 300;
          line-height: 24px;
          color: #77777c;
          margin: 37px 0 0;
        }
        .feature-text + .feature-text { margin-top: 24px; }
        .author-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 37px;
          max-width: 525px;
        }
        .author-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          display: block;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #222222;
        }
        .author-date {
          display: block;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 12px;
          color: #9a9aa0;
          margin-top: 4px;
        }
        .share-btn {
          margin-left: auto;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 0;
          transition: transform 0.2s ease;
        }
        .share-btn:hover { transform: translate(2px, -2px); background: #f3f4f6; }
        .slides {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 42px;
        }
        .slide-dot {
          width: 14px;
          height: 14px;
          border-radius: 7px;
          background: #c9c9cc;
          padding: 0;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
        }
        .slide-dot.on {
          width: 70px;
          background: #000000;
        }
        .fn-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 49px;
          padding-right: 7px;
        }
        .fn-head h2 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 33px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #111111;
          margin: 0;
        }
        .fn-grid {
          display: grid;
          grid-template-columns: 652px 652px;
          gap: 42px;
          margin-top: 47px;
        }
        .fn-media {
          position: relative;
          height: 296px;
          overflow: hidden;
        }
        .fn-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fn-card:hover .fn-media img { transform: scale(1.03); }
        .read-more {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 178px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: #ffffff;
          border-radius: 25px 0 0 0;
          border-top: 1px solid #111;
          border-left: 1px solid #111;
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #111111;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
          transition: gap 0.25s ease;
        }
        .read-more:hover { gap: 26px; }
        .fn-card h3 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 23px;
          font-weight: 600;
          line-height: 29px;
          letter-spacing: 0;
          color: #111111;
          margin: 30px 0 0;
          max-width: 600px;
        }
        @media (max-width: 1400px) {
          .news-inner { max-width: none; padding: 0 24px; box-sizing: border-box; }
          .feature { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr); }
          .feature-img { width: 100%; height: auto; aspect-ratio: 600 / 651; }
          .fn-grid { grid-template-columns: 1fr 1fr; }
          .fn-media { height: auto; aspect-ratio: 652 / 296; }
        }
        @media (max-width: 900px) {
          .feature { grid-template-columns: 1fr; }
          .fn-grid { grid-template-columns: 1fr; }
          .feature-title { font-size: 22px; line-height: 28px; }
          .feature-text { font-size: 16px; }
          .fn-card h3 { font-size: 19px; line-height: 25px; }
        }
      `}</style>
    </section>
  );
};
