'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophyQuote: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '90px 0 100px', backgroundColor: '#ffffff', borderBottom: '1px solid #eeeff2' }}>
      <div className="container">
        {/* Giant Quote Typography with interactive inline Hero section thumbnail */}
        <ScrollReveal delay={60} yOffset={24}>
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 16px' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4.8vw, 56px)', 
                fontWeight: 800, 
                color: '#0a0a0c',
                letterSpacing: '-0.03em',
                lineHeight: 1.25
              }}
            >
              Turning complexity into clarity and ideas{' '}
              <span 
                className="inline-hero-thumb"
                role="button"
                tabIndex={0}
                onClick={scrollToHero}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                title="View Hero Section"
                aria-label="Screenshot of hero section at home"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(82px, 9.5vw, 126px)',
                  height: 'clamp(38px, 4.4vw, 56px)',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: isHovered ? '1.5px solid #0a0a0c' : '1.5px solid #cbd5e1',
                  verticalAlign: 'middle',
                  margin: '0 8px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isHovered 
                    ? '0 10px 25px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.08)' 
                    : '0 4px 14px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  userSelect: 'none',
                  transform: isHovered ? 'translateY(-2px) scale(1.06)' : 'translateY(0) scale(1)',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <img 
                  src="/images/hero_section_thumb.png" 
                  alt="Hero Section at Home" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </span>{' '}
              into what comes next of that!
            </h2>
          </div>
        </ScrollReveal>

        {/* Subtitle Paragraph */}
        <ScrollReveal delay={140} yOffset={20}>
          <p 
            style={{ 
              textAlign: 'center', 
              fontSize: '14.5px', 
              color: '#64748b', 
              maxWidth: '680px', 
              margin: '0 auto 48px', 
              lineHeight: 1.6 
            }}
          >
            We bridge the gap between abstract challenges and elegant software solutions, delivering measurable business impact at startup velocity.
          </p>
        </ScrollReveal>

        {/* Laptop Project Showcase with exact reference asset */}
        <ScrollReveal delay={200} duration={850} yOffset={32}>
          <div className="laptop-reference-container">
            <div className="laptop-img-wrapper">
              <img 
                src="/images/laptop-mockup.png" 
                alt="Chatbot Website showcase"
                className="laptop-showcase-img"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .laptop-reference-container {
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          background: #0f1014;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .laptop-reference-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.35);
        }

        .laptop-img-wrapper {
          width: 100%;
          position: relative;
        }

        .laptop-showcase-img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </section>
  );
};
