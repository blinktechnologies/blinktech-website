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
        userSelect: 'none',
        width: '100%'
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
        {/* Left Pixel Chevrons: 4 pointing right */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
          <PixelTickerChevron direction="right" />
        </div>

        {/* Center Live Indicator: WE ARE ONLINE with gradient */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: "var(--font-ui), 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '1.8px',
          }}
        >
          <span 
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #e2e8f0 45%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontFamily: "var(--font-ui), 'Inter', sans-serif",
              fontWeight: 700,
              color: 'transparent'
            }}
          >
            WE ARE ONLINE
          </span>
          <div 
            className="online-dot"
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#374151',
              border: '1.5px solid rgba(255, 255, 255, 0.5)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '2px'
            }}
          >
            <div 
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.9)'
              }}
            />
          </div>
        </div>

        {/* Right Pixel Chevrons: 5 pointing left */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
          <PixelTickerChevron direction="left" />
        </div>
      </div>

      <style jsx>{`
        .online-dot {
          animation: onlinePulse 2.5s infinite ease-in-out;
        }

        @keyframes onlinePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

const PixelTickerChevron: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <div
    style={{
      width: '10px',
      height: '13px',
      backgroundColor: '#ffffff',
      opacity: 0.65,
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
      flexShrink: 0
    }}
  />
);
