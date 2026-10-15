'use client';

import React, { useState } from 'react';
import { BTLogo } from './BTLogo';
import { Code2, Palette, BrainCircuit, Cloud, Kanban, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServicesHub: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const leftServices: ServiceItem[] = [
    {
      id: 'srv-code',
      icon: <Code2 size={18} color="#ffffff" />,
      title: 'Custom Software Dev',
      description: 'End-to-end bespoke web systems, scalable backend architectures, and enterprise platforms.'
    },
    {
      id: 'srv-uiux',
      icon: <Palette size={18} color="#ffffff" />,
      title: 'UI/UX Design',
      description: 'Human-centered design systems, responsive interfaces, and seamless interactive user journeys.'
    },
    {
      id: 'srv-ai',
      icon: <BrainCircuit size={18} color="#ffffff" />,
      title: 'AI Systems',
      description: 'Intelligent autonomous agents, generative models, and algorithmic automation for workflows.'
    }
  ];

  const rightServices: ServiceItem[] = [
    {
      id: 'srv-cloud',
      icon: <Cloud size={18} color="#ffffff" />,
      title: 'Cloud Infrastructure',
      description: 'Elastic multi-cloud architectures, Kubernetes orchestration, and serverless scalability.'
    },
    {
      id: 'srv-pm',
      icon: <Kanban size={18} color="#ffffff" />,
      title: 'Product Management',
      description: 'Data-driven roadmapping, agile sprint governance, and rapid product-market validation.'
    },
    {
      id: 'srv-consult',
      icon: <Users size={18} color="#ffffff" />,
      title: 'Consultancy',
      description: 'Strategic digital transformation, technology audits, and fractional CTO advisory services.'
    }
  ];

  return (
    <section id="services" style={{ padding: '90px 0 100px', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Pill Badge */}
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
              <span>Services</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={120} yOffset={20}>
          <h2 
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4.5vw, 48px)', 
              fontWeight: 800, 
              color: '#0a0a0c',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: '64px'
            }}
          >
            What We Provide
          </h2>
        </ScrollReveal>

        {/* Hub Diagram Grid */}
        <ScrollReveal delay={200} duration={850} yOffset={32}>
          <div className="services-hub-wrapper">
          {/* Left Column (3 Cards) */}
          <div className="services-column">
            {leftServices.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${activeCard === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                {/* Circuit connector terminal on card right edge */}
                <div className="connector-dot connector-right" />
              </div>
            ))}
          </div>

          {/* Center BT Hub Node with Animated Vector Lines */}
          <div className="services-center-hub">
            <svg 
              className="circuit-svg" 
              viewBox="0 0 240 480" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Top Path */}
              <path 
                d="M 10 70 H 80 Q 120 70 120 170 V 240" 
                className={`circuit-path ${activeCard === 'srv-code' ? 'lit' : ''}`} 
              />
              {/* Left Middle Path */}
              <path 
                d="M 10 240 H 120" 
                className={`circuit-path ${activeCard === 'srv-uiux' ? 'lit' : ''}`} 
              />
              {/* Left Bottom Path */}
              <path 
                d="M 10 410 H 80 Q 120 410 120 310 V 240" 
                className={`circuit-path ${activeCard === 'srv-ai' ? 'lit' : ''}`} 
              />

              {/* Right Top Path */}
              <path 
                d="M 230 70 H 160 Q 120 70 120 170 V 240" 
                className={`circuit-path ${activeCard === 'srv-cloud' ? 'lit' : ''}`} 
              />
              {/* Right Middle Path */}
              <path 
                d="M 230 240 H 120" 
                className={`circuit-path ${activeCard === 'srv-pm' ? 'lit' : ''}`} 
              />
              {/* Right Bottom Path */}
              <path 
                d="M 230 410 H 160 Q 120 410 120 310 V 240" 
                className={`circuit-path ${activeCard === 'srv-consult' ? 'lit' : ''}`} 
              />
            </svg>

            {/* Central BT Emblem with dashed framing */}
            <div className="hub-emblem-container">
              <div className="hub-dashed-frame-top" />
              <div className="hub-core-circle">
                <BTLogo size={88} />
              </div>
              <div className="hub-dashed-frame-bottom" />
            </div>
          </div>

          {/* Right Column (3 Cards) */}
          <div className="services-column">
            {rightServices.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${activeCard === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                {/* Circuit connector terminal on card left edge */}
                <div className="connector-dot connector-left" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      </div>

      <style jsx>{`
        .services-hub-wrapper {
          display: grid;
          grid-template-columns: 1fr 240px 1fr;
          align-items: center;
          gap: 20px;
          position: relative;
          max-width: 1140px;
          margin: 0 auto;
        }

        .services-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 24px 22px;
          position: relative;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .service-card:hover, .service-card.active {
          border-color: #0f172a;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          transform: translateY(-3px);
        }

        .service-icon-box {
          width: 36px;
          height: 36px;
          background-color: #0a0a0c;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease;
        }

        .service-card:hover .service-icon-box {
          transform: scale(1.08);
        }

        .service-title {
          font-size: 16px;
          font-weight: 800;
          color: #0a0a0c;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .service-desc {
          font-size: 12px;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }

        .connector-dot {
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }

        .connector-right {
          right: -4px;
        }

        .connector-left {
          left: -4px;
        }

        .service-card:hover .connector-dot,
        .service-card.active .connector-dot {
          background: #0f172a;
          box-shadow: 0 0 8px rgba(15, 23, 42, 0.4);
          transform: translateY(-50%) scale(1.25);
        }

        .services-center-hub {
          position: relative;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circuit-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .circuit-path {
          stroke: #e2e8f0;
          stroke-width: 1.5;
          stroke-dasharray: 4 4;
          animation: circuitFlow 20s linear infinite;
          transition: stroke 0.3s ease, stroke-width 0.3s ease;
        }

        .circuit-path.lit {
          stroke: #0f172a;
          stroke-width: 2.5;
          stroke-dasharray: none;
          filter: drop-shadow(0 0 4px rgba(15, 23, 42, 0.3));
        }

        @keyframes circuitFlow {
          from {
            stroke-dashoffset: 80;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .hub-emblem-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hub-dashed-frame-top,
        .hub-dashed-frame-bottom {
          width: 60px;
          height: 1px;
          border-top: 1px dashed #cbd5e1;
        }

        .hub-core-circle {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .hub-core-circle:hover {
          transform: scale(1.06) rotate(3deg);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 960px) {
          .services-hub-wrapper {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .services-center-hub {
            order: -1;
            height: 140px;
          }
          .circuit-svg {
            display: none;
          }
          .connector-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
