'use client';

import React, { useState } from 'react';
import { PixelCornerCluster } from './PixelBlocks';
import { ScrollReveal } from './ScrollReveal';

export const ProjectShowcase: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [userRole, setUserRole] = useState<'transporter' | 'client'>('transporter');

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '80px 0 90px', 
        backgroundColor: '#fafbfc', 
        borderBottom: '1px solid #eeeff2', 
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Section Pill Badge: • Projects */}
        <ScrollReveal delay={50} yOffset={16}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                backgroundColor: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
              <span>Projects</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={120} yOffset={20}>
          <h2 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(34px, 4.8vw, 56px)', 
              fontWeight: 800, 
              color: '#0a0a0c',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: '14px'
            }}
          >
            From Idea to Production
          </h2>
        </ScrollReveal>

        {/* Subtitle Paragraphs */}
        <ScrollReveal delay={180} yOffset={20}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 46px' }}>
            <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 4px', lineHeight: 1.5 }}>
              From concept to execution, we build solutions that matter.
            </p>
            <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
              Explore the breakthrough projects shaping the future of our industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Dark Showcase Container with 3D Laptop and Tech Harness Texture */}
        <ScrollReveal delay={240} duration={850} yOffset={32}>
          <div className="dark-project-canvas">
            {/* Corner Stepped Pixel Clusters */}
            <div className="corner-pixel pixel-tl">
              <PixelCornerCluster type="corner-top-left" size={12} color="#ffffff" />
            </div>
            <div className="corner-pixel pixel-tr">
              <PixelCornerCluster type="corner-top-right" size={12} color="#ffffff" />
            </div>

            {/* Background Texture Straps / Harness */}
            <div className="harness-straps-bg">
              <div className="strap strap-1" />
              <div className="strap strap-2" />
              <div className="strap strap-3" />
            </div>

            {/* 3D Realistic Laptop Container */}
            <div className="laptop-3d-chassis">
              {/* Display Bezel */}
              <div className="macbook-screen-lid">
                <div className="macbook-notch-camera" />
                
                {/* Screen Canvas: InziraLink Registration UI */}
                <div className="inziralink-screen">
                  {/* Screen Header Bar */}
                  <div className="inzira-header">
                    <div className="inzira-brand">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <span className="inzira-logo-text">
                        inzira<span style={{ color: '#2563eb' }}>Link</span>
                      </span>
                    </div>

                    {/* Transporter / Client Role Toggle */}
                    <div className="role-toggle-pills">
                      <button 
                        className={`role-pill ${userRole === 'transporter' ? 'active' : ''}`}
                        onClick={() => setUserRole('transporter')}
                      >
                        Transporter
                      </button>
                      <button 
                        className={`role-pill ${userRole === 'client' ? 'active' : ''}`}
                        onClick={() => setUserRole('client')}
                      >
                        client
                      </button>
                    </div>
                  </div>

                  {/* Main Screen Body */}
                  <div className="inzira-body-grid">
                    {/* Left Column: Truck Graphic & Title */}
                    <div className="truck-showcase-column">
                      <h3 className="register-heading">
                        Register to <span style={{ color: '#2563eb' }}>InziraLink</span>
                      </h3>

                      <div className="truck-graphic-wrapper">
                        {/* High Quality Freight Truck */}
                        <img 
                          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80" 
                          alt="InziraLink Freight Logistics Truck"
                          className="freight-truck-img" 
                        />
                      </div>

                      <p className="truck-tagline">
                        Reliable logistic for a growing Rwanda
                      </p>
                    </div>

                    {/* Right Column: Registration Form */}
                    <div className="form-column">
                      <div className="form-card">
                        <h4 className="form-title">
                          Register as a {userRole}
                        </h4>

                        <div className="inputs-stack">
                          <input type="text" placeholder="Name" className="inzira-input" readOnly />
                          <input type="text" placeholder="Type of vehicle" className="inzira-input" readOnly />
                          <input type="text" placeholder="Plate number" className="inzira-input" readOnly />
                          <input type="text" placeholder="Email" className="inzira-input" readOnly />
                          <input type="text" placeholder="Telephone" className="inzira-input" readOnly />
                          <input type="password" placeholder="Password" className="inzira-input" readOnly />
                        </div>

                        <button className="inzira-submit-btn">
                          Register
                        </button>

                        <div className="form-footer-login">
                          <span>Already have an account? </span>
                          <span className="login-link">Login</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Hinge & Keyboard Deck */}
              <div className="macbook-hinge" />
              <div className="macbook-base">
                <div className="macbook-notch" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Pagination Row below showcase matching reference */}
        <div className="carousel-nav-row">
          <div className="pagination-dots">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                className={`pagination-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Show project slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="pagination-line" />
        </div>
      </div>

      <style jsx>{`
        .dark-project-canvas {
          background-color: #2b2e35;
          background-image: radial-gradient(circle at 50% 30%, #3e434f 0%, #202329 100%);
          border-radius: 28px;
          padding: 60px 40px 36px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .dark-project-canvas:hover {
          transform: translateY(-2px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
        }

        .corner-pixel {
          position: absolute;
          z-index: 10;
          opacity: 0.9;
        }

        .pixel-tl {
          top: 18px;
          left: 18px;
        }

        .pixel-tr {
          top: 18px;
          right: 18px;
        }

        /* Harness / Straps textured background */
        .harness-straps-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.35;
          z-index: 1;
        }

        .strap {
          position: absolute;
          background: #18191f;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
          height: 18px;
          width: 140%;
          left: -20%;
        }

        .strap-1 {
          top: 35%;
          transform: rotate(-12deg);
        }

        .strap-2 {
          top: 65%;
          transform: rotate(8deg);
        }

        .strap-3 {
          top: 80%;
          transform: rotate(-6deg);
        }

        /* Laptop Chassis */
        .laptop-3d-chassis {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          perspective: 1100px;
        }

        .macbook-screen-lid {
          background: #111317;
          border-radius: 18px 18px 0 0;
          padding: 10px 10px 0;
          border: 1.5px solid #3c404b;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .macbook-notch-camera {
          width: 5px;
          height: 5px;
          background: #3b82f6;
          border-radius: 50%;
          margin: 0 auto 6px;
          box-shadow: 0 0 4px #3b82f6;
        }

        .inziralink-screen {
          background: #ffffff;
          border-radius: 8px 8px 0 0;
          padding: 16px 24px 24px;
          overflow: hidden;
          min-height: 380px;
        }

        .inzira-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .inzira-brand {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .inzira-logo-text {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.2px;
        }

        .role-toggle-pills {
          display: flex;
          gap: 6px;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 999px;
        }

        .role-pill {
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          background: transparent;
          transition: all 0.2s ease;
        }

        .role-pill.active {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .inzira-body-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          align-items: center;
        }

        .truck-showcase-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .register-heading {
          font-size: 19px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
          letter-spacing: -0.3px;
        }

        .truck-graphic-wrapper {
          width: 220px;
          height: 140px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .freight-truck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .truck-tagline {
          font-size: 11px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .form-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
          text-align: center;
          text-transform: capitalize;
        }

        .inputs-stack {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 12px;
        }

        .inzira-input {
          width: 100%;
          padding: 7px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 10.5px;
          color: #0f172a;
          background: #fafbfc;
          outline: none;
        }

        .inzira-submit-btn {
          width: 100%;
          background: #2563eb;
          color: #ffffff;
          padding: 8px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .inzira-submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .form-footer-login {
          text-align: center;
          font-size: 10px;
          color: #64748b;
          margin-top: 10px;
        }

        .login-link {
          color: #2563eb;
          font-weight: 600;
          cursor: pointer;
        }

        .macbook-hinge {
          height: 10px;
          background: #1b1e24;
          border-left: 1.5px solid #3c404b;
          border-right: 1.5px solid #3c404b;
        }

        .macbook-base {
          height: 16px;
          background: linear-gradient(180deg, #94a3b8 0%, #64748b 100%);
          border-radius: 0 0 14px 14px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .macbook-notch {
          width: 90px;
          height: 4px;
          background: #334155;
          border-radius: 0 0 4px 4px;
          margin: 0 auto;
        }

        /* Carousel Navigation Row */
        .carousel-nav-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
          padding-left: 8px;
        }

        .pagination-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pagination-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #cbd5e1;
          cursor: pointer;
          border: none;
          padding: 0;
          transition: all 0.25s ease;
        }

        .pagination-dot.active {
          background-color: #0f172a;
          transform: scale(1.2);
        }

        .pagination-line {
          flex: 1;
          height: 1px;
          background-color: #e5e7eb;
        }

        @media (max-width: 820px) {
          .inzira-body-grid {
            grid-template-columns: 1fr;
          }
          .dark-project-canvas {
            padding: 36px 18px 24px;
          }
        }
      `}</style>
    </section>
  );
};
