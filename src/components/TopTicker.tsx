'use client';

import React from 'react';

export const TopTicker: React.FC = () => {
  return (
    <div 
      className="top-ticker-bar"
      style={{
        backgroundColor: '#050608',
        color: '#ffffff',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '11px',
        letterSpacing: '1px',
        userSelect: 'none',
        width: '100%',
        boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.03)'
      }}
    >
      {/* Background ambient pulse line */}
      <div className="ticker-ambient-glow" />

      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1240px',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Left Directional Chevron Stream: points right >>> */}
        <div 
          className="ticker-chevron-track left"
          style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
          title="Direction indicator"
        >
          {[0, 1, 2, 3].map((idx) => (
            <PixelTickerChevron key={idx} direction="right" delay={idx * 140} />
          ))}
        </div>

        {/* Center Live Indicator: WE ARE ONLINE with enhanced radar beacon */}
        <div 
          className="live-status-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '1.8px',
            padding: '4px 12px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            cursor: 'default'
          }}
        >
          <span 
            className="status-beacon-container"
            style={{
              position: 'relative',
              width: '10px',
              height: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="beacon-radar-ring" />
            <span className="beacon-core-dot" />
          </span>

          <span 
            className="ticker-status-text"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #f1f5f9 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: '2px'
            }}
          >
            WE ARE ONLINE
          </span>
        </div>

        {/* Right Directional Chevron Stream: points left <<< */}
        <div 
          className="ticker-chevron-track right"
          style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
          title="Direction indicator"
        >
          {[0, 1, 2, 3, 4].map((idx) => (
            <PixelTickerChevron key={idx} direction="left" delay={idx * 140} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-ambient-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%);
          animation: ambientSweep 6s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ambientSweep {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-30%);
          }
          50% {
            opacity: 0.8;
            transform: translateX(30%);
          }
        }

        .live-status-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
        }

        .beacon-radar-ring {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(52, 211, 153, 0.35);
          animation: radarPing 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .beacon-core-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #34d399, 0 0 12px rgba(52, 211, 153, 0.6);
          position: relative;
          z-index: 2;
        }

        @keyframes radarPing {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          70%, 100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const PixelTickerChevron: React.FC<{ direction: 'left' | 'right'; delay?: number }> = ({ direction, delay = 0 }) => (
  <span
    className={`ticker-chevron chevron-${direction}`}
    style={{
      width: '10px',
      height: '13px',
      backgroundColor: '#ffffff',
      maskImage: 'url("/images/arrow-tight.png")',
      WebkitMaskImage: 'url("/images/arrow-tight.png")',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      transform: direction === 'right' ? 'scaleX(-1)' : 'none',
      display: 'inline-block',
      flexShrink: 0,
      animationDelay: `${delay}ms`
    }}
  >
    <style jsx>{`
      .ticker-chevron {
        opacity: 0.45;
        transition: opacity 0.3s ease, transform 0.3s ease;
        animation: chevronWave 2.4s ease-in-out infinite;
      }

      .ticker-chevron:hover {
        opacity: 1 !important;
        filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
      }

      @keyframes chevronWave {
        0%, 100% {
          opacity: 0.35;
          transform: ${direction === 'right' ? 'scaleX(-1) translateX(0)' : 'translateX(0)'};
        }
        50% {
          opacity: 0.95;
          transform: ${direction === 'right' ? 'scaleX(-1) translateX(-3px)' : 'translateX(-3px)'};
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
        }
      }
    `}</style>
  </span>
);
