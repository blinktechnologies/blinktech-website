'use client';

import React, { useState } from 'react';
import { Bot, ClipboardList, FileText, ScanFace, ShieldCheck, Unplug } from 'lucide-react';
import { BTLogo } from './BTLogo';
import { ScrollReveal } from './ScrollReveal';
import { SectionPill } from './SectionPill';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ICON = { size: 30, color: '#ffffff', strokeWidth: 1.6 };

const leftServices: ServiceItem[] = [
  {
    id: 'software',
    icon: <Bot {...ICON} />,
    title: 'Software Development',
    description: 'Building scalable, secure, and high-performance applications tailored to business needs.'
  },
  {
    id: 'aiml',
    icon: <ClipboardList {...ICON} />,
    title: 'AI/ML Solution',
    description: 'Delivering intelligent solutions powered by data to drive automation and smarter decisions.'
  },
  {
    id: '3d',
    icon: <FileText {...ICON} />,
    title: '3D Modelling',
    description: 'Designing realistic and detailed 3D models for animations and product concepts.'
  }
];

const rightServices: ServiceItem[] = [
  {
    id: 'uiux',
    icon: <ScanFace {...ICON} />,
    title: 'Human-Centered UI UX',
    description: 'Crafting intuitive and engaging interfaces that enhance user experience across devices.'
  },
  {
    id: 'mobile',
    icon: <ShieldCheck {...ICON} />,
    title: 'Mobile Development',
    description: 'Building user-friendly mobile applications tailored for performance and seamless digital experience.'
  },
  {
    id: 'video',
    icon: <Unplug {...ICON} />,
    title: 'Video Editing',
    description: 'Enhancing raw footage with professional editing and effects to create impactful videos'
  }
];

export const ServicesHub: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  const lit = (ids: string[]) => (active && ids.includes(active) ? 'wire lit' : 'wire');

  return (
    <section id="services" className="services">
      <div className="services-panel">
        <ScrollReveal delay={40} yOffset={14}>
          <div style={{ textAlign: 'center' }}>
            <SectionPill label="Services" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} yOffset={18}>
          <h2 className="svc-heading">What We Provide</h2>
        </ScrollReveal>

        <ScrollReveal delay={160} duration={850} yOffset={26}>
          <div className="svc-hub">
            <div className="svc-col">
              {leftServices.map((s) => (
                <div
                  key={s.id}
                  className={`svc-card ${active === s.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span className="svc-icon">{s.icon}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="svc-center">
              {/* Connector wiring — coordinates match the 1441px design */}
              <svg className="wires" width="472" height="842" viewBox="0 0 472 842" fill="none" aria-hidden="true">
                {/* left bracket */}
                <path className={lit(['software'])} d="M0 95 H33 Q47 95 47 109 V406" />
                <path className={lit(['3d'])} d="M0 732 H33 Q47 732 47 718 V406" />
                <path className={lit(['aiml', 'software', '3d'])} d="M0 406 H85" />
                <circle cx="47" cy="406" r="3" fill="#111" />
                {/* right bracket */}
                <path className={lit(['uiux'])} d="M472 95 H439 Q425 95 425 109 V406" />
                <path className={lit(['video'])} d="M472 731 H439 Q425 731 425 717 V406" />
                <path className={lit(['mobile', 'uiux', 'video'])} d="M472 406 H388" />
                <circle cx="425" cy="406" r="3" fill="#111" />
              </svg>

              <div className="hub-card">
                <span className="hub-mark" style={{ top: 48, left: -4 }} />
                <span className="hub-mark" style={{ top: 48, right: -4 }} />
                <span className="hub-mark" style={{ bottom: 48, left: -4 }} />
                <span className="hub-mark" style={{ bottom: 48, right: -4 }} />
                <span className="hub-halo" />
                <span className="hub-logo"><BTLogo size={224} /></span>
              </div>
            </div>

            <div className="svc-col">
              {rightServices.map((s) => (
                <div
                  key={s.id}
                  className={`svc-card ${active === s.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span className="svc-icon">{s.icon}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .services {
          background: #f3f4f6;
          position: relative;
        }
        .services-panel {
          max-width: 1435px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 0 0 40px 40px;
          padding: 18px 0 119px;
          box-shadow: 0 1px 0 #e3e4e7;
        }
        .svc-heading {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 74px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.035em;
          text-align: center;
          margin: 22px 0 0;
          background: linear-gradient(90deg, #5c5f63 0%, #3b3d40 45%, #1f2022 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          padding-bottom: 6px;
        }
        .svc-hub {
          display: grid;
          grid-template-columns: 416px 472px 416px;
          justify-content: center;
          margin-top: 71px;
          margin-left: 3px;
        }
        .svc-col {
          display: flex;
          flex-direction: column;
          gap: 64px;
          position: relative;
          z-index: 2;
        }
        .svc-card {
          height: 238px;
          border-radius: 28px;
          background: #f3f3f4;
          border: 1px solid #efeff1;
          box-shadow:
            0 6px 0 #e6e6e8,
            0 14px 24px rgba(0, 0, 0, 0.04);
          padding: 28px 32px 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          cursor: default;
        }
        .svc-card:hover,
        .svc-card.is-active {
          transform: translateY(-4px);
          box-shadow:
            0 6px 0 #dcdcdf,
            0 22px 34px rgba(0, 0, 0, 0.07);
        }
        .svc-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(180deg, #2c2c2e 0%, #161617 100%);
          box-shadow: 0 4px 0 #0c0c0d, 0 10px 16px rgba(0, 0, 0, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }
        .svc-card:hover .svc-icon { transform: scale(1.06); }
        .svc-title {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 25px;
          font-weight: 500;
          letter-spacing: -0.005em;
          color: #111111;
          margin: 36px 0 0;
          line-height: 30px;
        }
        .svc-desc {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #7a7a7c;
          margin: 9px 0 0;
        }
        .svc-center {
          position: relative;
          height: 842px;
        }
        .wires {
          position: absolute;
          top: 0;
          left: 0;
        }
        .wires :global(.wire) {
          stroke: #111111;
          stroke-width: 1.1;
          transition: stroke 0.25s ease, stroke-width 0.25s ease;
        }
        .wires :global(.wire.lit) {
          stroke-width: 2;
          stroke-dasharray: 6 4;
          animation: wireFlow 0.8s linear infinite;
        }
        @keyframes wireFlow {
          to { stroke-dashoffset: -20; }
        }
        .hub-card {
          position: absolute;
          left: 85px;
          top: 263px;
          width: 303px;
          height: 302px;
          border-radius: 20px;
          border: 1px dashed #c4c7cc;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hub-mark {
          position: absolute;
          width: 7px;
          height: 7px;
          background: #000000;
        }
        .hub-halo {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 1px dashed #c4c7cc;
          animation: hubSpin 60s linear infinite;
        }
        @keyframes hubSpin { to { transform: rotate(360deg); } }
        .hub-logo {
          position: relative;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hub-card:hover .hub-logo { transform: scale(1.05) rotate(3deg); }

        @media (max-width: 1360px) {
          .svc-hub { grid-template-columns: minmax(0, 1fr) 300px minmax(0, 1fr); padding: 0 24px; margin-left: 0; }
          .wires { display: none; }
          .hub-card { left: 50%; top: 50%; transform: translate(-50%, -50%); width: 260px; height: 260px; }
          .hub-halo { width: 256px; height: 256px; }
          .svc-card { height: auto; min-height: 238px; padding-bottom: 24px; }
          .svc-center { height: auto; }
        }
        @media (max-width: 900px) {
          .svc-heading { font-size: clamp(44px, 10vw, 72px); }
          .svc-hub { grid-template-columns: 1fr; gap: 28px; margin-top: 48px; }
          .svc-center { order: -1; height: 280px; }
          .svc-col { gap: 28px; }
        }
      `}</style>
    </section>
  );
};
