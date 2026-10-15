'use client';

import React from 'react';

interface AwardBannerProps {
  year?: string;
  category?: string;
  winner?: string;
  recipient?: string;
  height?: string | number;
}

export const AwardBanner: React.FC<AwardBannerProps> = ({
  year = '2025',
  category = 'Top Young Entrepreneur',
  winner = 'WINNER',
  recipient = 'LIBBLIO',
  height = '100%'
}) => {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: '380px',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #182038 0%, #0d1222 50%, #070a14 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '36px 24px',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background glow circle */}
      <div 
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }}
      />

      {/* East Africa AWARD X */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '28px' }}>
        <p style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#93c5fd', fontWeight: 400, letterSpacing: '0.5px', margin: 0 }}>
          East Africa
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span 
            style={{ 
              fontSize: 'clamp(32px, 4.5vw, 52px)', 
              fontWeight: 800, 
              color: '#dbeafe', 
              letterSpacing: '2px' 
            }}
          >
            AWARD
          </span>
          <span 
            style={{ 
              fontSize: 'clamp(36px, 5vw, 58px)', 
              fontWeight: 900, 
              color: '#ffffff',
              marginLeft: '2px',
              textShadow: '0 0 15px rgba(255,255,255,0.6)'
            }}
          >
            X
          </span>
        </div>
      </div>

      {/* 2025 Top Young Entrepreneur */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '16px' }}>
        <div style={{ fontSize: 'clamp(16px, 2.2vw, 24px)', fontWeight: 600, color: '#93c5fd' }}>
          {year}
        </div>
        <div style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 500, color: '#e0e7ff', letterSpacing: '-0.3px' }}>
          {category}
        </div>
      </div>

      {/* WINNER */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          fontSize: 'clamp(38px, 6vw, 68px)', 
          fontWeight: 900, 
          color: '#ffffff',
          letterSpacing: '2px',
          marginBottom: '28px',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}
      >
        {winner}
      </div>

      {/* Recipient + Laurel */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{ 
            fontSize: 'clamp(20px, 3vw, 32px)', 
            fontWeight: 800, 
            color: '#f8fafc',
            letterSpacing: '2px',
            marginBottom: '10px'
          }}
        >
          {recipient}
        </div>
        
        {/* Laurel Wreath SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.8 }}>
          <svg width="60" height="26" viewBox="0 0 60 26" fill="none">
            <path d="M5 22C12 18 16 10 18 2M5 22C10 23 20 20 28 15" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M55 22C48 18 44 10 42 2M55 22C50 23 40 20 32 15" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="18" r="2" fill="#cbd5e1" />
            <circle cx="16" cy="12" r="2" fill="#cbd5e1" />
            <circle cx="50" cy="18" r="2" fill="#cbd5e1" />
            <circle cx="44" cy="12" r="2" fill="#cbd5e1" />
          </svg>
        </div>
      </div>
    </div>
  );
};
