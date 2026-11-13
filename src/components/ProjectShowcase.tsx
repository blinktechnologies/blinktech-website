'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 'inziralink',
      title: 'Inziralink',
      description: 'A design of a platform that helps people transport goods easily just connecting companies to transport systems to ensure the safety and efficiency of transportation of Goods.',
      image: '/images/project_inziralink_exact.png',
      projectUrl: null
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
    }
  ];

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const current = projects[activeSlide];

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '76px 20px 92px', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #eeeff2',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1060px', margin: '0 auto' }}>
        {/* Section Pill Badge: • Projects */}
        <ScrollReveal delay={40} yOffset={14}>
          <div style={{ textAlign: 'center', marginBottom: '14px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Projects</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Heading & Subtitle */}
        <ScrollReveal delay={90} yOffset={20}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <h2 
              style={{ 
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(36px, 4.8vw, 56px)', 
                fontWeight: 800, 
                color: '#0a0b0d',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: '0 0 12px'
              }}
            >
              From Idea to Production
            </h2>
            <p 
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                lineHeight: 1.55,
                color: '#64748b',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              From concept to execution, we build solutions that matter.<br />
              Explore the breakthrough projects shaping the future of our industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Showcase Card matching exact design */}
        <ScrollReveal delay={160} duration={800} yOffset={24}>
          <div 
            className="showcase-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Outer Stepped Pixel Pattern (Outside the dark photo/video frame) */}
            <div className="project-corner-pixel top-left" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="0" y="0" width="16" height="16" fill="#f8fafc" />
                <rect x="16" y="0" width="16" height="16" fill="#f8fafc" />
                <rect x="0" y="16" width="16" height="16" fill="#f8fafc" />
                <rect x="16" y="16" width="16" height="16" fill="#ffffff" />
                <rect x="32" y="16" width="16" height="16" fill="#f8fafc" />
                <rect x="0" y="32" width="16" height="16" fill="#f8fafc" />
              </svg>
            </div>
            <div className="project-corner-pixel top-right" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="16" y="0" width="16" height="16" fill="#f8fafc" />
                <rect x="32" y="0" width="16" height="16" fill="#f8fafc" />
                <rect x="0" y="16" width="16" height="16" fill="#f8fafc" />
                <rect x="16" y="16" width="16" height="16" fill="#ffffff" />
                <rect x="32" y="16" width="16" height="16" fill="#f8fafc" />
                <rect x="32" y="32" width="16" height="16" fill="#f8fafc" />
              </svg>
            </div>

            {/* Dark Media Preview Box with clean photo inside */}
            <div className="media-preview-box">
              <img 
                key={current.id}
                src={current.image} 
                alt={current.title} 
                className="showcase-laptop-img"
              />
            </div>

            {/* Pagination Controls Row */}
            <div className="showcase-controls-row">
              <div className="showcase-dots-row">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`dot-pill ${activeSlide === idx ? 'dot-active' : ''}`}
                    aria-label={`Go to ${proj.title}`}
                  />
                ))}
              </div>

              {/* Slide Counter & Arrow Nav */}
              <div className="showcase-nav-actions">
                <span className="slide-counter-badge">
                  0{activeSlide + 1} / 0{projects.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                  className="showcase-arrow-btn"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % projects.length)}
                  className="showcase-arrow-btn"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Bottom Details Row */}
            <div key={`details-${current.id}`} className="showcase-details-row">
              <div className="project-title-group">
                <h3 className="project-heading-title">{current.title}</h3>
                {current.projectUrl && (
                  <a
                    href={current.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                  >
                    <span>Visit Live Site</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="project-description-box">
                <span className="desc-heading-label">DESCRIPTION</span>
                <p className="desc-body-text">{current.description}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .showcase-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 26px;
          padding: 16px 16px 28px;
          box-shadow: 0 10px 34px rgba(0, 0, 0, 0.05);
          max-width: 980px;
          margin: 0 auto;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .showcase-card:hover {
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
        }

        /* Exterior Corner Pixel Accents (positioned on outside border of media preview) */
        .project-corner-pixel {
          position: absolute;
          z-index: 4;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.04));
        }

        .project-corner-pixel.top-left {
          top: 10px;
          left: 10px;
        }

        .project-corner-pixel.top-right {
          top: 10px;
          right: 10px;
        }

        /* Dark Media Preview Box */
        .media-preview-box {
          position: relative;
          background: #111316;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .showcase-laptop-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          animation: fadeInSlide 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: scale(0.975) translateY(6px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        .showcase-card:hover .showcase-laptop-img {
          transform: scale(1.016);
        }

        /* Slider Controls */
        .showcase-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px 8px 18px;
        }

        .showcase-dots-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .showcase-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .slide-counter-badge {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.5px;
          margin-right: 4px;
        }

        .showcase-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          font-size: 18px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-arrow-btn:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-1px);
        }

        .dot-pill {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background-color: #d1d5db;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, transform 0.25s ease;
        }

        .dot-pill:hover {
          background-color: #94a3b8;
          transform: scale(1.15);
        }

        .dot-active {
          width: 24px;
          background-color: #0f172a;
        }

        /* Bottom Details */
        .showcase-details-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0 12px;
          gap: 32px;
          animation: detailsFadeIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-title-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }

        .project-live-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .project-live-link:hover {
          color: #1d4ed8;
          transform: translateX(2px);
        }

        @keyframes detailsFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-heading-title {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #0a0b0d;
          letter-spacing: -0.02em;
          margin: 0;
          flex-shrink: 0;
        }

        .project-description-box {
          max-width: 500px;
        }

        .desc-heading-label {
          display: block;
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .desc-body-text {
          font-family: var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          line-height: 1.58;
          color: #52525b;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .showcase-details-row {
            flex-direction: column;
            gap: 16px;
          }

          .project-description-box {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
