'use client';

import React, { useState } from 'react';
import { PixelCornerCluster } from './PixelBlocks';
import { ExternalLink, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dispatch' | 'telemetry' | 'analytics'>('dispatch');

  return (
    <section id="projects" style={{ padding: '90px 0 100px', backgroundColor: '#fafbfc', borderBottom: '1px solid #eeeff2', position: 'relative' }}>
      <div className="container">
        {/* Section Pill Badge */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '999px',
              backgroundColor: '#f1f2f5',
              fontSize: '11px',
              fontWeight: 600,
              color: '#334155',
              border: '1px solid #e2e8f0'
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0f172a' }} />
            <span>PROJECTS</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4.5vw, 48px)', 
            fontWeight: 800, 
            color: '#0a0a0c',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: '12px'
          }}
        >
          From Idea to Production
        </h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748b', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          Explore our portfolio of cutting-edge solutions built for scale and seamless user experiences across industries.
        </p>

        {/* Dark Showcase Container matching reference screenshot */}
        <div className="dark-showcase-box">
          {/* Stepped Pixel Clusters in Corners */}
          <div style={{ position: 'absolute', top: '18px', left: '18px', zIndex: 10, opacity: 0.85 }}>
            <PixelCornerCluster type="corner-top-left" size={12} color="#ffffff" />
          </div>
          <div style={{ position: 'absolute', bottom: '18px', right: '18px', zIndex: 10, opacity: 0.85 }}>
            <PixelCornerCluster type="corner-bottom-right" size={12} color="#ffffff" />
          </div>

          {/* 3D Realistic Laptop Container */}
          <div className="laptop-wrapper">
            <div className="laptop-lid">
              <div className="laptop-camera" />
              {/* Screen Area */}
              <div className="laptop-screen-bezel">
                {/* Browser bar */}
                <div className="screen-browser-bar">
                  <div className="window-dots">
                    <span style={{ backgroundColor: '#ef4444' }} />
                    <span style={{ backgroundColor: '#f59e0b' }} />
                    <span style={{ backgroundColor: '#10b981' }} />
                  </div>
                  <div className="browser-url-pill">
                    <span style={{ color: '#10b981' }}>https://</span>
                    <span>fleet-ops.blinktech.io/dispatch</span>
                  </div>
                  <div style={{ width: '36px' }} />
                </div>

                {/* Dashboard application inside screen */}
                <div className="dashboard-content">
                  {/* Left Sidebar */}
                  <div className="dashboard-sidebar">
                    <div 
                      className={`dash-menu-item ${activeTab === 'dispatch' ? 'active' : ''}`}
                      onClick={() => setActiveTab('dispatch')}
                    >
                      Fleet Dispatch
                    </div>
                    <div 
                      className={`dash-menu-item ${activeTab === 'telemetry' ? 'active' : ''}`}
                      onClick={() => setActiveTab('telemetry')}
                    >
                      Live Telemetry
                    </div>
                    <div 
                      className={`dash-menu-item ${activeTab === 'analytics' ? 'active' : ''}`}
                      onClick={() => setActiveTab('analytics')}
                    >
                      AI Optimization
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className="dashboard-main">
                    {/* Hero Banner with Truck */}
                    <div className="truck-banner">
                      <div className="truck-banner-text">
                        <div className="live-status-tag">
                          <span className="live-dot-pulse" />
                          <span>ACTIVE DISPATCH</span>
                        </div>
                        <h4 className="network-title">Trans-East Freight Corridor</h4>
                        <p className="network-sub">Route: Kigali ➔ Kampala ➔ Nairobi • 99.4% On-Time</p>
                      </div>
                      <div className="truck-preview-photo-box">
                        <img 
                          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80" 
                          alt="Logistics Freight Truck" 
                          className="truck-img" 
                        />
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="metrics-triad">
                      <div className="metric-cell">
                        <span className="metric-label">Active Shipments</span>
                        <span className="metric-number">1,482</span>
                      </div>
                      <div className="metric-cell">
                        <span className="metric-label">Route Optimization</span>
                        <span className="metric-number text-green">+34.8%</span>
                      </div>
                      <div className="metric-cell">
                        <span className="metric-label">Fleet Efficiency</span>
                        <span className="metric-number">99.1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass reflection sheen */}
                <div className="screen-glass-glare" />
              </div>
            </div>

            {/* Laptop Base */}
            <div className="laptop-hinge-bar" />
            <div className="laptop-bottom-chassis">
              <div className="laptop-thumb-notch" />
            </div>
          </div>

          {/* Under Laptop Info Strip */}
          <div className="showcase-caption-row">
            <div className="caption-client">
              <span className="client-tag">CLIENT & CATEGORY</span>
              <h5 className="client-name">East Africa Logistics Network</h5>
            </div>
            <div className="caption-desc">
              <p>
                Trans-East Cargo Network dispatch system reducing transit latency by 35% across regional distribution corridors with autonomous dispatch routing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dark-showcase-box {
          background: #0d0e12;
          border: 1px solid #1f2128;
          border-radius: 24px;
          padding: 60px 36px 40px;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .dark-showcase-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
        }

        .laptop-wrapper {
          max-width: 860px;
          margin: 0 auto 36px;
          perspective: 1000px;
        }

        .laptop-lid {
          background: #16181d;
          border-radius: 16px 16px 0 0;
          padding: 10px 10px 0;
          border: 1.5px solid #2e323b;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .laptop-camera {
          width: 5px;
          height: 5px;
          background: #3b82f6;
          border-radius: 50%;
          margin: 0 auto 6px;
          box-shadow: 0 0 4px #3b82f6;
        }

        .laptop-screen-bezel {
          background: #ffffff;
          border-radius: 6px 6px 0 0;
          overflow: hidden;
          position: relative;
        }

        .screen-browser-bar {
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }

        .window-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .browser-url-pill {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 999px;
          padding: 2px 14px;
          font-size: 10px;
          font-family: var(--font-mono);
          color: #475569;
          display: flex;
          gap: 4px;
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 160px 1fr;
          min-height: 280px;
        }

        .dashboard-sidebar {
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dash-menu-item {
          padding: 7px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dash-menu-item:hover {
          color: #0f172a;
          background: #e2e8f0;
        }

        .dash-menu-item.active {
          background: #0f172a;
          color: #ffffff;
        }

        .dashboard-main {
          padding: 16px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .truck-banner {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: #ffffff;
        }

        .live-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 8.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .live-dot-pulse {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: pulseGlow 1.5s infinite;
        }

        .network-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
          color: #ffffff;
        }

        .network-sub {
          font-size: 10px;
          color: #94a3b8;
          margin: 0;
        }

        .truck-preview-photo-box {
          width: 110px;
          height: 65px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .truck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .metrics-triad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .metric-cell {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 9.5px;
          color: #64748b;
          font-weight: 600;
        }

        .metric-number {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2px;
        }

        .metric-number.text-green {
          color: #10b981;
        }

        .screen-glass-glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%);
        }

        .laptop-hinge-bar {
          height: 10px;
          background: #1b1e24;
          border-left: 1.5px solid #2e323b;
          border-right: 1.5px solid #2e323b;
        }

        .laptop-bottom-chassis {
          height: 14px;
          background: linear-gradient(180deg, #94a3b8 0%, #64748b 100%);
          border-radius: 0 0 12px 12px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .laptop-thumb-notch {
          width: 80px;
          height: 4px;
          background: #334155;
          border-radius: 0 0 4px 4px;
          margin: 0 auto;
        }

        .showcase-caption-row {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 28px;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .client-tag {
          font-size: 9.5px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 4px;
        }

        .client-name {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .caption-desc p {
          font-size: 12.5px;
          line-height: 1.5;
          color: #94a3b8;
          margin: 0;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        @media (max-width: 768px) {
          .dashboard-content {
            grid-template-columns: 1fr;
          }
          .dashboard-sidebar {
            display: none;
          }
          .truck-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .showcase-caption-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};
