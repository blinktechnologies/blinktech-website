'use client';

import React, { useEffect, useState } from 'react';
import { BTLogo } from './BTLogo';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if the page has already loaded in this session to make return visits ultra fast
    const hasLoaded = sessionStorage.getItem('blink_loaded');
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('blink_loaded', 'true');
      setTimeout(() => setShouldRender(false), 550); // allow fade out transition to complete
    }, hasLoaded ? 350 : 800);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`page-loader-overlay ${loading ? 'active' : 'fade-out'}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: loading ? 'all' : 'none',
        transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.5s ease'
      }}
    >
      {/* Background Technical Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center',
          pointerEvents: 'none'
        }}
      />

      {/* Center Hero-Style Emblem Container matching exact Hero styling */}
      <div className="loader-center-card">
        {/* 4 Black Corner Marks */}
        <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
        <div style={{ position: 'absolute', top: '-3px', right: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
        <div style={{ position: 'absolute', bottom: '-3px', left: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />
        <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '6px', height: '6px', backgroundColor: '#000000', zIndex: 10 }} />

        {/* Orbit Dashed Halo with Spinning Radar Animation */}
        <div className="loader-dashed-halo" />

        {/* Central Metallic BT Emblem */}
        <div className="loader-emblem">
          <BTLogo size={96} />
        </div>
      </div>

      <style jsx>{`
        .page-loader-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .page-loader-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loader-center-card {
          position: relative;
          width: 140px;
          height: 140px;
          background-color: #ffffff;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
          border: 1px dashed #cbd5e1;
          animation: cardPulse 1.8s ease-in-out infinite alternate;
        }

        .loader-dashed-halo {
          position: absolute;
          width: 114px;
          height: 114px;
          border-radius: 50%;
          border: 1.5px dashed #475569;
          animation: spinHalo 1.8s linear infinite;
        }

        .loader-emblem {
          animation: emblemBreath 2s ease-in-out infinite alternate;
        }

        @keyframes spinHalo {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cardPulse {
          0% {
            transform: scale(0.97);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          }
          100% {
            transform: scale(1.03);
            box-shadow: 0 20px 48px rgba(0, 0, 0, 0.1);
          }
        }

        @keyframes emblemBreath {
          0% {
            transform: scale(0.96);
          }
          100% {
            transform: scale(1.04);
          }
        }
      `}</style>
    </div>
  );
};

