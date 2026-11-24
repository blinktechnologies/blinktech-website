'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophyQuote: React.FC = () => {
  const scrollToHero = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="philo">
      <ScrollReveal delay={60} yOffset={22}>
        <h2 className="philo-heading">
          Turning complexity into clarity
          <br />
          and ideas{' '}
          <button type="button" className="hero-thumb" onClick={scrollToHero} aria-label="Back to the hero section">
            <img src="/images/hero_section_thumb.png" alt="" loading="lazy" decoding="async" />
          </button>{' '}
          into what
          <br />
          comes next of that!
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={130} yOffset={18}>
        <p className="philo-text">
          We are a team of passionate individuals who saw the need for dependable and innovative software solutions.
          <br />
          Our story is guided by the belief that technology should solve real problems while empowering people and organizations.
          <br />
          With creativity and expertise, we craft solutions that are practical, scalable, and built with lasting value.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={190} duration={850} yOffset={28}>
        <div className="showcase">
          <img
            src="/images/showcase-ai-chatbot.png"
            alt="AI Chatbot Website shown on a laptop"
            loading="lazy"
            decoding="async"
            className="showcase-img"
          />
          <div className="sr-only">
            <h3>AI Chatbot Website</h3>
            <p>We developed an AI-powered website with integrated chatbot features focused on automation and seamless user support.</p>
            <ul>
              <li>+70% Response Time</li>
              <li>1 unified Chatbot system</li>
              <li>4 weeks Delivery time</li>
            </ul>
          </div>
          <Link href="/projects" className="showcase-nav prev" aria-label="See all our projects" />
          <Link href="/projects" className="showcase-nav next" aria-label="Browse projects" />
        </div>
      </ScrollReveal>

      <style jsx>{`
        .philo {
          background: #f3f4f6;
          padding: 112px 0 0;
        }
        .philo-heading {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 66px;
          font-weight: 600;
          line-height: 75px;
          letter-spacing: -0.03em;
          color: #0b0b16;
          text-align: center;
          margin: 0;
        }
        .hero-thumb {
          display: inline-block;
          vertical-align: middle;
          width: 140px;
          height: 64px;
          margin: -8px 12px 0;
          padding: 0;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .hero-thumb:hover {
          transform: translateY(-3px) scale(1.06) rotate(-2deg);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.24);
        }
        .hero-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .philo-text {
          font-family: var(--font-urbanist), 'Urbanist', sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #6b6b72;
          text-align: center;
          margin: 34px 0 0;
          padding: 0 16px;
        }
        .showcase {
          position: relative;
          max-width: 1407px;
          margin: 57px auto 0;
          aspect-ratio: 1407 / 680;
          overflow: hidden;
        }
        .showcase-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .showcase:hover .showcase-img { transform: scale(1.01); }
        .showcase :global(.showcase-nav) {
          position: absolute;
          bottom: 0;
          width: 8.17%;
          height: 16.2%;
          transition: background 0.25s ease;
        }
        .showcase :global(.showcase-nav.prev) { right: 8.17%; }
        .showcase :global(.showcase-nav.next) { right: 0; }
        .showcase :global(.showcase-nav:hover) { background: rgba(255, 255, 255, 0.1); }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
        @media (max-width: 900px) {
          .philo { padding-top: 72px; }
          .philo-heading { font-size: clamp(32px, 7vw, 56px); line-height: 1.15; padding: 0 16px; }
          .hero-thumb { width: 96px; height: 44px; }
          .philo-text br, .philo-heading br { display: none; }
        }
      `}</style>
    </section>
  );
};
