'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';
import { DotChevron } from './DotChevron';

interface Member {
  name: string;
  role: string;
  image: string;
  col: number; // 0..3
  top: number; // card top inside the grid (px, from the 1441px design)
}

const members: Member[] = [
  { name: 'BIENVENUE Alliance', role: 'BlinkTech Founder', image: '/images/team/Bienvenue_Alliance.png', col: 0, top: 0 },
  { name: 'BYIRINGIRO Emmanuel', role: 'BlinkTech Co-Founder', image: '/images/team/Emmanuel.png', col: 1, top: 40 },
  { name: 'BYIRINGIRO Samuel', role: 'BlinkTech Co-Founder', image: '/images/team/Samuel.png', col: 2, top: 0 },
  { name: 'KANEZA Amandine', role: 'BlinkTech Co-Founder', image: '/images/team/Amandine.png', col: 3, top: 40 },
  { name: 'UMURERWA Bonnette', role: 'Chief Media & Marketing Officer', image: '/images/team/Bonnette.png', col: 0, top: 430 },
  { name: 'ABAYO Moise', role: 'Chief Information Security Officer', image: '/images/team/Moise.png', col: 1, top: 510 },
  { name: 'NIYONKURU Darius', role: 'Chief Financial Officer', image: '/images/team/Darius.png', col: 2, top: 430 }
];

/** Stepped white pixel cluster (32px cells) used behind the portraits. */
const PixelCluster: React.FC<{ flip?: boolean; style: React.CSSProperties }> = ({ flip, style }) => (
  <svg
    className="team-px"
    width="112"
    height="96"
    viewBox="0 0 112 96"
    style={{ ...style, transform: flip ? 'scaleX(-1)' : undefined }}
    aria-hidden="true"
  >
    <rect x="0" y="0" width="32" height="32" fill="#ffffff" />
    <rect x="48" y="0" width="64" height="32" fill="#ffffff" />
    <rect x="32" y="32" width="32" height="32" fill="#ffffff" />
    <rect x="0" y="64" width="32" height="32" fill="#ffffff" />
  </svg>
);

const COL_X = [0, 330, 660, 990];

export const TeamPreview: React.FC = () => {
  return (
    <section id="teams" className="team">
      <ScrollReveal delay={60} yOffset={18}>
        <h2 className="team-heading">
          The Minds
          <br />
          Behind the Work
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={140} duration={800} yOffset={24}>
        <div className="team-stage">
          <PixelCluster style={{ left: 0, top: 0 }} />
          <PixelCluster flip style={{ left: 855, top: 0 }} />
          <PixelCluster flip style={{ left: 194, top: 430 }} />
          <PixelCluster style={{ left: 660, top: 430 }} />

          {members.map((m) => (
            <div key={m.name} className="member" style={{ left: COL_X[m.col], top: m.top }}>
              <div className="member-photo">
                <img src={m.image} alt={m.name} loading="lazy" decoding="async" />
              </div>
              <div className="member-badge">
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            </div>
          ))}

          <div className="bg-card" style={{ left: COL_X[3], top: 470 }}>
            <span className="bg-card-square" />
            <h3>Our Background</h3>
            <p>
              We are a team of builders based in Rwanda, creating technology that solves real-world problems. With 3+
              years of experience, we turn bold ideas into practical solutions that create impact.
            </p>
            <Link href="/teams" className="explore-btn" aria-label="Explore the team">
              <span className="explore-tile">
                <DotChevron direction="right" color="#6b7078" size={2.6} />
              </span>
              <span>Explore the team</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        .team {
          position: relative;
          background-color: #f3f4f6;
          background-image:
            linear-gradient(to right, rgba(17, 24, 39, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 24, 39, 0.025) 1px, transparent 1px);
          background-size: 50.5px 50.5px;
          padding: 56px 0 34px;
          overflow: hidden;
        }
        .team-heading {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 66px;
          font-weight: 600;
          line-height: 64px;
          letter-spacing: -0.03em;
          color: #0a0a0f;
          text-align: center;
          margin: 0;
        }
        .team-stage {
          position: relative;
          width: 1295px;
          height: 874px;
          margin: 70px auto 0;
          transform: translateX(-1px);
        }
        .team-stage :global(.team-px) {
          position: absolute;
          z-index: 0;
        }
        .member {
          position: absolute;
          width: 305px;
          height: 380px;
          z-index: 1;
        }
        .member-photo {
          position: absolute;
          inset: 0 0 0 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, #000 72%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 72%, transparent 100%);
        }
        .member-photo img {
          height: 410px;
          width: auto;
          max-width: none;
          margin-bottom: -40px;
          object-fit: contain;
          object-position: bottom center;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .member:hover .member-photo img { transform: scale(1.04) translateY(-4px); }
        .member-badge {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 20px;
          height: 90px;
          border-radius: 6px;
          background: #ffffff;
          border: 1px solid #eeeeef;
          box-shadow: 0 4px 0 #e6e6e8, 0 10px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 2;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .member:hover .member-badge { transform: translateY(-3px); }
        .member-badge h4 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -0.005em;
          color: #111111;
          margin: 0;
          white-space: nowrap;
        }
        .member-badge p {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          color: #66666a;
          margin: 8px 0 0;
          white-space: nowrap;
        }
        .bg-card {
          position: absolute;
          width: 305px;
          height: 404px;
          border-radius: 8px;
          padding: 48px 22px 0;
          color: #ffffff;
          background-color: #34373b;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(160deg, #3d4044 0%, #2c2e31 60%, #232528 100%);
          background-size: 40px 40px, 40px 40px, 100% 100%;
          box-shadow: 0 6px 0 #1e2023, 0 18px 30px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        .bg-card-square {
          display: block;
          width: 12px;
          height: 12px;
          background: #ffffff;
        }
        .bg-card h3 {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 27px;
          font-weight: 500;
          color: #ffffff;
          margin: 16px 0 0;
          letter-spacing: -0.005em;
        }
        .bg-card p {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 14px;
          line-height: 20px;
          color: #e4e4e6;
          margin: 22px 0 0;
          max-width: 252px;
        }
        .bg-card :global(.explore-btn) {
          position: absolute;
          left: 31px;
          right: 31px;
          bottom: 42px;
          height: 62px;
          border-radius: 10px;
          padding: 0 6px;
          display: flex;
          align-items: center;
          background: linear-gradient(180deg, #3a3d41 0%, #1e2023 100%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 0 #141517, 0 10px 18px rgba(0, 0, 0, 0.3);
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .bg-card :global(.explore-btn:hover) { transform: translateY(-2px); filter: brightness(1.15); }
        .bg-card :global(.explore-btn > span:last-child) { flex: 1; text-align: center; }
        .explore-tile {
          width: 44px;
          height: 50px;
          border-radius: 8px;
          background: linear-gradient(180deg, #f5f5f6 0%, #c9cbce 100%);
          box-shadow: inset 0 -2px 0 #9ccf6b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 1330px) {
          .team-stage {
            width: auto;
            height: auto;
            transform: none;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 28px 20px;
            padding: 0 24px;
            max-width: 1120px;
          }
          .team-stage :global(.team-px) { display: none; }
          .member, .bg-card {
            position: relative;
            left: auto !important;
            top: auto !important;
            width: auto;
          }
          .member-badge h4 { font-size: 20px; }
          .member-badge p { font-size: 14px; }
        }
        @media (max-width: 600px) {
          .team-heading { font-size: 44px; line-height: 46px; }
        }
      `}</style>
    </section>
  );
};
