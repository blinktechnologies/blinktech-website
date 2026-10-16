import React from 'react';
import Image from 'next/image';

interface BTLogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
}

export const BTLogo: React.FC<BTLogoProps> = ({ size = 72, className = '', withText = false }) => {
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src="/images/bt-logo.png" 
          alt="Blink-Tech Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.35))'
          }}
        />
      </div>

      {withText && (
        <div style={{ display: 'inline-flex', alignItems: 'flex-start', userSelect: 'none', position: 'relative' }}>
          <span 
            style={{ 
              fontFamily: "'Urbanist', sans-serif", 
              fontWeight: 800, 
              fontSize: '22px', 
              letterSpacing: '-0.3px',
              display: 'inline-flex',
              alignItems: 'baseline'
            }}
          >
            <span style={{ color: '#64748b' }}>Blink</span>
            <span style={{ color: '#000000' }}>-Tech</span>
          </span>
          <span 
            style={{ 
              fontFamily: "'Urbanist', sans-serif",
              fontSize: '10px', 
              fontWeight: 700, 
              color: '#64748b', 
              marginLeft: '2px',
              transform: 'translateY(-3px)'
            }}
          >
            Ltd
          </span>
        </div>
      )}
    </div>
  );
};

export const BlinkTechTextLogo: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'flex-start', userSelect: 'none', position: 'relative' }}>
      <span 
        style={{ 
          fontFamily: "'Urbanist', sans-serif", 
          fontWeight: 800, 
          fontSize: '22px', 
          letterSpacing: '-0.3px',
          display: 'inline-flex',
          alignItems: 'baseline'
        }}
      >
        <span style={{ color: isLight ? '#64748b' : '#94a3b8' }}>Blink</span>
        <span style={{ color: isLight ? '#000000' : '#ffffff' }}>-Tech</span>
      </span>
      <span 
        style={{ 
          fontFamily: "'Urbanist', sans-serif",
          fontSize: '10px', 
          fontWeight: 700, 
          color: isLight ? '#64748b' : '#94a3b8', 
          marginLeft: '2px',
          transform: 'translateY(-3px)'
        }}
      >
        Ltd
      </span>
    </div>
  );
};
