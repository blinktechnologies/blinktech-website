'use client';

import React from 'react';
import { DotChevron } from './DotChevron';

export const TopTicker: React.FC = () => {
  return (
    <div className="top-ticker-bar">
      <div className="ticker-row">
        <div className="ticker-chevrons">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="ticker-chev" style={{ animationDelay: `${i * 160}ms` }}>
              <DotChevron direction="right" color="#d1d5db" size={2.6} />
            </span>
          ))}
        </div>

        <div className="ticker-status">
          <span className="ticker-we">WE ARE</span>
          <span className="ticker-online">ONLINE</span>
          <span className="ticker-toggle" aria-hidden="true">
            <span className="ticker-toggle-dot" />
          </span>
        </div>

        <div className="ticker-chevrons">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="ticker-chev" style={{ animationDelay: `${(4 - i) * 160}ms` }}>
              <DotChevron direction="left" color="#d1d5db" size={2.6} />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .top-ticker-bar {
          background-color: #030712;
          color: #ffffff;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          user-select: none;
          width: 100%;
        }
        .ticker-row {
          display: flex;
          align-items: center;
          gap: 64px;
        }
        .ticker-chevrons {
          display: flex;
          align-items: center;
          gap: 64px;
        }
        .ticker-chev {
          display: inline-flex;
          animation: tickerPulse 2.4s ease-in-out infinite;
        }
        .ticker-status {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .ticker-we {
          font-weight: 700;
          color: #ffffff;
        }
        .ticker-online {
          font-weight: 500;
          color: #d1d5db;
        }
        .ticker-toggle {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: #6b7078;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-left: 6px;
        }
        .ticker-toggle-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ffffff;
          animation: tickerBlink 2s ease-in-out infinite;
        }
        @keyframes tickerPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes tickerBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        @media (max-width: 900px) {
          .ticker-row, .ticker-chevrons { gap: 28px; }
          .ticker-chevrons :global(.ticker-chev:nth-child(n + 3)) { display: none; }
        }
      `}</style>
    </div>
  );
};
