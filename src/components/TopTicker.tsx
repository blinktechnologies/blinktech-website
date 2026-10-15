'use client';

import React from 'react';

export const TopTicker: React.FC = () => {
  return (
    <div 
      style={{
        backgroundColor: '#050608',
        color: '#ffffff',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '11px',
        letterSpacing: '1px',
        userSelect: 'none'
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1240px',
          padding: '0 24px'
        }}
      >
        {/* Left Pixel Chevrons */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
        </div>

        {/* Center Live Indicator: WE ARE ONLINE */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Outfit', var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '1.6px',
            color: '#f8fafc'
          }}
        >
          <span style={{ color: '#d1d5db' }}>WE ARE</span>
          <span style={{ color: '#ffffff' }}>ONLINE</span>
          <div 
            className="online-dot"
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              display: 'inline-block',
              marginLeft: '2px'
            }}
          />
        </div>

        <style jsx>{`
          .online-dot {
            box-shadow: 0 0 10px rgba(74, 222, 128, 0.8), 0 0 4px #4ade80;
            animation: onlinePulse 2.5s infinite ease-in-out;
          }

          @keyframes onlinePulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 8px rgba(74, 222, 128, 0.7), 0 0 3px #4ade80;
            }
            50% {
              transform: scale(1.15);
              box-shadow: 0 0 14px rgba(74, 222, 128, 1), 0 0 6px #4ade80;
            }
          }
        `}</style>

        {/* Right Pixel Chevrons */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
        </div>
      </div>
    </div>
  );
};

const PixelTickerChevron: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <svg width="6" height="8" viewBox="0 0 6 8" fill="none" style={{ opacity: 0.55 }}>
    {direction === 'right' ? (
      <>
        <circle cx="1" cy="1" r="0.8" fill="#ffffff" />
        <circle cx="3" cy="2.5" r="0.8" fill="#ffffff" />
        <circle cx="5" cy="4" r="0.8" fill="#ffffff" />
        <circle cx="3" cy="5.5" r="0.8" fill="#ffffff" />
        <circle cx="1" cy="7" r="0.8" fill="#ffffff" />
      </>
    ) : (
      <>
        <circle cx="5" cy="1" r="0.8" fill="#ffffff" />
        <circle cx="3" cy="2.5" r="0.8" fill="#ffffff" />
        <circle cx="1" cy="4" r="0.8" fill="#ffffff" />
        <circle cx="3" cy="5.5" r="0.8" fill="#ffffff" />
        <circle cx="5" cy="7" r="0.8" fill="#ffffff" />
      </>
    )}
  </svg>
);
