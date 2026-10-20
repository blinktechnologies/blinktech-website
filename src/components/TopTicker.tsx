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
            gap: '4px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '1.8px',
            color: '#f8fafc'
          }}
        >
          <span 
            style={{
              background: 'linear-gradient(90deg, #9ca3af 0%, #d1d5db 45%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
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
              marginLeft: '4px'
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
  <img 
    src="/images/Arrow 19.png" 
    alt="" 
    style={{ 
      width: '10px', 
      height: '10px', 
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',
      opacity: 0.65,
      transform: direction === 'right' ? 'scaleX(-1)' : 'none' 
    }} 
  />
);
