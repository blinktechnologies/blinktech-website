'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { SectionPill } from './SectionPill';
import { DotChevron } from './DotChevron';

const LinkedinIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
  </svg>
);

const XIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const founders = [
  { name: 'BIENVENUE Alliance', role: 'BlinkTech Founder', image: '/images/team/Bienvenue_Alliance.png' },
  { name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/Emmanuel.png' },
  { name: 'BYIRINGIRO Samuel', role: 'BlinkTech Co-Founder', image: '/images/team/Samuel.png' },
  { name: 'KANEZA Amandine', role: 'BlinkTech Co-Founder', image: '/images/team/Amandine.png' },
  { name: 'UMURERWA Bonnette', role: 'Chief Media & Marketing Officer', image: '/images/team/Bonnette.png' },
  { name: 'ABAYO Moise', role: 'Chief Information Security Officer', image: '/images/team/Moise.png' },
  { name: 'NIYONKURU Darius', role: 'Chief Financial Officer', image: '/images/team/Darius.png' }
];

const developers = [
  { name: 'UWASE UTUJE Sandrine', image: '/images/team/sandrine_circle.png' },
  { name: 'TWARIMITSWE Aron', image: '/images/team/aron_circle.png' },
  { name: 'IRAKOZE Prince Bonheur', image: '/images/team/prince_bonheur_circle.png' },
  { name: 'IMPANO Blessed Winner', image: '/images/team/blessed_winner_circle.png' },
  { name: 'ISHIMWE Amani Samuel', image: '/images/team/amani_samuel_circle.png' },
  { name: 'HITAYEZU Frank', image: '/images/team/hitayezu_frank_circle.png' },
  { name: 'IZERE Joshua', image: '/images/team/izere_joshua_circle.png' },
  { name: 'UWASE Sonia', image: '/images/team/uwase_sonia_circle.png' }
];

export const TeamsSection: React.FC<{ isFullPage?: boolean }> = () => {
  return (
    <section className="teams-page">
      {/* ---------- Header on grid ---------- */}
      <div className="tp-header">
        <svg className="tp-px" width="128" height="96" viewBox="0 0 128 96" aria-hidden="true">
          <rect x="0" y="0" width="32" height="32" fill="#000" />
          <rect x="64" y="0" width="64" height="32" fill="#000" />
          <rect x="32" y="32" width="32" height="32" fill="#000" />
          <rect x="0" y="64" width="32" height="32" fill="#000" />
        </svg>
        <ScrollReveal delay={40} yOffset={12}>
          <div style={{ textAlign: 'center' }}>
            <SectionPill label="Our Team" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} yOffset={16}>
          <h1 className="tp-title">The Minds of BlinkTech</h1>
          <p className="tp-sub">
            Meet the brains behind every solution, driven by tech to build,
            <br />
            solve &amp; give real impacts to the world.
          </p>
        </ScrollReveal>
      </div>

      {/* ---------- Founders ---------- */}
      <ScrollReveal delay={80} yOffset={12}>
        <h2 className="tp-label">FOUNDERS OF BLINKTECH</h2>
      </ScrollReveal>
      <ScrollReveal delay={140} duration={800} yOffset={20}>
        <div className="founders">
          {founders.map((f) => (
            <div key={f.name} className="founder">
              <div className="founder-photo">
                <img src={f.image} alt={f.name} loading="lazy" decoding="async" />
              </div>
              <div className="founder-badge">
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="tp-chevs" aria-hidden="true">
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} className="tp-chev" style={{ animationDelay: `${(10 - i) * 120}ms` }}>
            <DotChevron direction="left" color="#111111" size={2.6} />
          </span>
        ))}
      </div>

      {/* ---------- Developers ---------- */}
      <ScrollReveal delay={80} yOffset={12}>
        <h2 className="tp-label tp-label-dev">THE DEVELOPERS BEHIND EVERY SOLUTION</h2>
      </ScrollReveal>
      <ScrollReveal delay={140} duration={800} yOffset={20}>
        <div className="devs">
          {developers.map((d) => (
            <div key={d.name} className="dev">
              <div className="dev-photo">
                <img src={d.image} alt={d.name} loading="lazy" decoding="async" />
              </div>
              <h3>{d.name}</h3>
              <p>SOFTWARE ENGINEER</p>
              <div className="dev-socials">
                <a href="https://www.linkedin.com/company/blink-technologiz/" target="_blank" rel="noopener noreferrer" aria-label="BlinkTech on LinkedIn (opens in a new tab)"><LinkedinIcon /></a>
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label={`${d.name} on X`}><XIcon /></a>
                <a href="https://www.instagram.com/_blink_tech/" target="_blank" rel="noopener noreferrer" aria-label="BlinkTech on Instagram (opens in a new tab)"><InstagramIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <style jsx>{`
        .teams-page {
          background: #f3f4f6;
          padding-bottom: 120px;
          position: relative;
          overflow: hidden;
        }
        .tp-header {
          position: relative;
          max-width: 1408px;
          height: 309px;
          margin: 0 auto;
          padding-top: 62px;
          background-image:
            linear-gradient(to right, #e4e5e8 1px, transparent 1px),
            linear-gradient(to bottom, #e4e5e8 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: 0 0;
          -webkit-mask-image: linear-gradient(to bottom, #000 85%, transparent 100%);
        }
        .tp-px {
          position: absolute;
          top: 0;
          left: 0;
        }
        .tp-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 82px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.04em;
          text-align: center;
          margin: 22px 0 0;
          padding-bottom: 6px;
          background: linear-gradient(90deg, #5c5f63 0%, #3b3d40 45%, #1f2022 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .tp-sub {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18px;
          line-height: 27px;
          color: #6b6b72;
          text-align: center;
          margin: 26px 0 0;
        }
        .tp-label {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 23px;
          font-weight: 700;
          letter-spacing: 0.005em;
          color: #000000;
          text-align: center;
          margin: 20px 0 0;
        }
        .founders {
          display: grid;
          grid-template-columns: repeat(4, 306px);
          justify-content: center;
          column-gap: 24px;
          row-gap: 26px;
          margin: 62px auto 0;
          transform: translateX(-12px);
        }
        .founder {
          position: relative;
          height: 380px;
        }
        .founder-photo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, #000 75%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 75%, transparent 100%);
        }
        .founder-photo img {
          height: 410px;
          width: auto;
          max-width: none;
          margin-bottom: -40px;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .founder:hover .founder-photo img { transform: scale(1.04) translateY(-4px); }
        .founder-badge {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 22px;
          height: 90px;
          border-radius: 6px;
          background: #ffffff;
          box-shadow: 0 4px 0 #e6e6e8, 0 10px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .founder:hover .founder-badge { transform: translateY(-3px); }
        .founder-badge h3 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: #111111;
          margin: 0;
          white-space: nowrap;
        }
        .founder-badge p {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          color: #66666a;
          margin: 8px 0 0;
          white-space: nowrap;
        }
        .tp-chevs {
          display: flex;
          gap: 41px;
          padding-left: 17px;
          margin-top: 80px;
        }
        .tp-chev {
          display: inline-flex;
          width: 10px;
          justify-content: center;
          animation: tpChev 2.4s ease-in-out infinite;
        }
        @keyframes tpChev {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .tp-label-dev { margin-top: 70px; }
        .devs {
          display: grid;
          grid-template-columns: repeat(5, 262px);
          justify-content: center;
          row-gap: 50px;
          margin: 90px auto 0;
        }
        .dev {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .dev-photo {
          width: 188px;
          height: 196px;
          border-radius: 50%;
          overflow: hidden;
          background: #e5e7eb;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .dev:hover .dev-photo { transform: translateY(-4px); box-shadow: 0 14px 26px rgba(0, 0, 0, 0.12); }
        .dev-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .dev h3 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          margin: 52px 0 0;
          white-space: nowrap;
        }
        .dev p {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 13px;
          color: #444448;
          margin: 12px 0 0;
        }
        .dev-socials {
          display: flex;
          gap: 11px;
          margin-top: 14px;
        }
        .dev-socials a {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2b2b2e;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .dev-socials a:hover { transform: translateY(-2px); background: #000000; }
        .dev-socials a { position: relative; }
        .dev-socials a::after { content: ""; position: absolute; inset: -6px -5px; }

        @media (max-width: 1360px) {
          .founders { grid-template-columns: repeat(auto-fill, minmax(260px, 306px)); transform: none; padding: 0 20px; }
          .devs { grid-template-columns: repeat(auto-fill, minmax(220px, 262px)); padding: 0 20px; }
          .founder-badge h3 { font-size: 20px; }
          .founder-badge p { font-size: 14px; }
        }
        @media (max-width: 700px) {
          .tp-title { font-size: clamp(40px, 11vw, 70px); }
          .tp-sub br { display: none; }
          .tp-sub { padding: 0 20px; }
          .tp-px { transform: scale(0.6); transform-origin: top left; }
          .tp-chevs { display: none; }
          .dev h3 { font-size: 17px; white-space: normal; }
        }
      `}</style>
    </section>
  );
};
