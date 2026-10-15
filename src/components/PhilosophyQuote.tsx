'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophyQuote: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section style={{ padding: '90px 0 100px', backgroundColor: '#ffffff', borderBottom: '1px solid #eeeff2' }}>
      <div className="container">
        {/* Giant Quote Typography with interactive inline play pill */}
        <ScrollReveal delay={60} yOffset={24}>
          <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 16px' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 5vw, 56px)', 
                fontWeight: 800, 
                color: '#0a0a0c',
                letterSpacing: '-0.03em',
                lineHeight: 1.2
              }}
            >
              Turning complexity into clarity and ideas{' '}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label="Play showreel"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(38px, 4.5vw, 52px)',
                  height: 'clamp(38px, 4.5vw, 52px)',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  verticalAlign: 'middle',
                  margin: '0 8px',
                  color: '#0f172a',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12)';
                  e.currentTarget.style.borderColor = '#0f172a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
              >
                <Play size={18} fill="#0f172a" style={{ marginLeft: '3px' }} />
              </button>{' '}
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
