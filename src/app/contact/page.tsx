'use client';

import React, { useState } from 'react';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    helpWith: '',
    projectDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Urbanist', sans-serif" }}>
      {/* Hero & Form Section */}
      <section 
        className="tech-grid-bg" 
        style={{ 
          padding: '50px 0 70px', 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Stepped Black Pixel Blocks in Upper Left (Matching Image 1) */}
        <div 
          className="contact-pixel-step"
          style={{
            position: 'absolute',
            top: '0px',
            left: 'calc((100vw - 1240px) / 2 + 12px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <div style={{ position: 'relative', width: '90px', height: '90px' }}>
            {/* Row 0: 2 blocks */}
            <div style={{ position: 'absolute', top: '0px', left: '0px', width: '30px', height: '30px', backgroundColor: '#000000' }} />
            <div style={{ position: 'absolute', top: '0px', left: '30px', width: '30px', height: '30px', backgroundColor: '#000000' }} />
            {/* Row 1: 1 block */}
            <div style={{ position: 'absolute', top: '30px', left: '0px', width: '30px', height: '30px', backgroundColor: '#000000' }} />
            {/* Row 2: 1 block */}
            <div style={{ position: 'absolute', top: '60px', left: '0px', width: '30px', height: '30px', backgroundColor: '#000000' }} />
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Area */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 46px' }}>
            {/* Pill Badge: • Contact us (tactile 3D pill matching Services and Projects pages) */}
            <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: "var(--font-urbanist), 'Urbanist', sans-serif",
                  color: '#0f172a',
                  border: '3px solid #eceef1ff',
                  boxShadow: '4px 4px 14px 4px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'inline-block' }} />
                <span>Contact us</span>
              </div>
            </div>

            {/* Main Headline: Let's build what's next. */}
            <h1 
              style={{ 
                fontSize: 'clamp(38px, 5.5vw, 68px)', 
                fontWeight: 900, 
                color: '#0a0a0c',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '18px'
              }}
            >
              Let&apos;s build what&apos;s next.
            </h1>

            {/* Subtitles */}
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              Have an idea, a challenge, or a project in mind?
            </p>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              Let&apos;s turn it into a solution that makes an impact.
            </p>
          </div>

          {/* Large Master Card Container */}
          <div 
            className="contact-master-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e8eaee',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.02)',
              padding: '10px',
              maxWidth: '1060px',
              margin: '0 auto'
            }}
          >
            <div className="contact-card-grid">
              {/* Left Dark Column */}
              <div 
                className="contact-dark-panel"
                style={{
                  background: 'linear-gradient(180deg, #282a32 0%, #1e2026 40%, #131417 100%)',
                  borderRadius: '16px',
                  padding: '38px 32px',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.16)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div>
                  {/* Brand Header: Logo + BLINK-TECH */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        overflow: 'hidden', 
                        flexShrink: 0,
                        backgroundColor: '#ffffff',
                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.15), 0 4px 14px rgba(0, 0, 0, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2px'
                      }}
                    >
                      <img src="/images/bt-logo.png" alt="BT Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span 
                      style={{ 
                        fontFamily: "'Urbanist', sans-serif", 
                        fontSize: '13.5px', 
                        fontWeight: 800, 
                        letterSpacing: '1.2px', 
                        color: '#f8fafc',
                        textTransform: 'uppercase'
                      }}
                    >
                      BLINK-TECH
                    </span>
                  </div>

                  {/* Heading: Let's connect. */}
                  <h2 
                    style={{ 
                      fontSize: '34px', 
                      fontWeight: 700, 
                      color: '#ffffff', 
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                      fontFamily: "'Urbanist', sans-serif"
                    }}
                  >
                    Let&apos;s connect.
                  </h2>

                  {/* Description */}
                  <p style={{ color: '#a1a5b3', fontSize: '14.5px', lineHeight: 1.55, marginBottom: '32px' }}>
                    Big ideas start with a simple hello. Tell us what you&apos;re thinking.
                  </p>

                  {/* Location info: BASED IN / Kigali, Rwanda */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '36px' }}>
                    <div 
                      style={{ 
                        color: '#ffffff',
                        marginTop: '2px'
                      }}
                    >
                      <MapPin size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <span 
                        style={{ 
                          display: 'block', 
                          fontSize: '11px', 
                          fontWeight: 700, 
                          color: '#717684', 
                          letterSpacing: '1px', 
                          textTransform: 'uppercase',
                          marginBottom: '3px'
                        }}
                      >
                        BASED IN
                      </span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
                        Kigali, Rwanda
                      </span>
                    </div>
                  </div>

                  {/* Social Section Header */}
                  <div 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      letterSpacing: '1.2px', 
                      color: '#717684', 
                      textTransform: 'uppercase',
                      marginBottom: '10px' 
                    }}
                  >
                    FIND US ON SOCIAL
                  </div>

                  {/* Social Links List matching design */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="contact-social-row"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="social-icon-box">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>LinkedIn</span>
                      </div>
                      <ArrowUpRight size={17} className="social-arrow" />
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="contact-social-row"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="social-icon-box">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>Instagram</span>
                      </div>
                      <ArrowUpRight size={17} className="social-arrow" />
                    </a>

                    {/* Twitter */}
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="contact-social-row"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="social-icon-box">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>Twitter</span>
                      </div>
                      <ArrowUpRight size={17} className="social-arrow" />
                    </a>
                  </div>
                </div>

                {/* Bottom Text of Left Panel */}
                <div style={{ marginTop: '38px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: '#7a8090', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>
                    From concept to execution, we build solutions that matter.
                  </p>
                </div>
              </div>

              {/* Right Form Column */}
              <div 
                className="contact-form-panel"
                style={{
                  padding: '36px 36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h2 
                    style={{ 
                      fontSize: '30px', 
                      fontWeight: 800, 
                      color: '#0a0a0c', 
                      letterSpacing: '-0.02em',
                      marginBottom: '10px' 
                    }}
                  >
                    Your next big idea starts here.
                  </h2>

                  <p style={{ color: '#5b6170', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '28px' }}>
                    Whether you&apos;re building something new or improving what&apos;s already there, we&apos;d love to hear about it. Share a little about your project below.
                  </p>

                  {submitted ? (
                    <div 
                      style={{
                        padding: '40px 24px',
                        textAlign: 'center',
                        backgroundColor: '#f8fafc',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        margin: '20px 0'
                      }}
                    >
                      <div 
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: '#ecfdf5',
                          color: '#10b981',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px'
                        }}
                      >
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                        Thank You!
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '13.5px', maxWidth: '380px', margin: '0 auto 20px' }}>
                        We&apos;ve received your project details. An engineering lead will review your submission and reach out within 24 hours.
                      </p>
                      <button 
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', helpWith: '', projectDetails: '' });
                        }}
                        className="btn-metallic"
                        style={{ fontSize: '12px', padding: '9px 20px' }}
                      >
                        Send Another Project Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {/* Row 1: Name & Email */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
                        <div>
                          <label 
                            style={{ 
                              display: 'block', 
                              fontSize: '12.5px', 
                              fontWeight: 700, 
                              color: '#111827', 
                              marginBottom: '8px' 
                            }}
                          >
                            Your name
                          </label>
                          <input 
                            type="text"
                            required
                            placeholder="What's your name?"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="clean-form-input"
                          />
                        </div>

                        <div>
                          <label 
                            style={{ 
                              display: 'block', 
                              fontSize: '12.5px', 
                              fontWeight: 700, 
                              color: '#111827', 
                              marginBottom: '8px' 
                            }}
                          >
                            Email address
                          </label>
                          <input 
                            type="email"
                            required
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="clean-form-input"
                          />
                        </div>
                      </div>

                      {/* Row 2: What can we help you with? */}
                      <div>
                        <label 
                          style={{ 
                            display: 'block', 
                            fontSize: '12.5px', 
                            fontWeight: 700, 
                            color: '#111827', 
                            marginBottom: '8px' 
                          }}
                        >
                          What can we help you with?
                        </label>
                        <input 
                          type="text"
                          placeholder="Design, development, AI, or something else?"
                          value={formData.helpWith}
                          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                          className="clean-form-input"
                        />
                      </div>

                      {/* Row 3: Tell us about your project */}
                      <div>
                        <label 
                          style={{ 
                            display: 'block', 
                            fontSize: '12.5px', 
                            fontWeight: 700, 
                            color: '#111827', 
                            marginBottom: '8px' 
                          }}
                        >
                          Tell us about your project
                        </label>
                        <textarea 
                          rows={4}
                          placeholder="What are you building? Share your goals, ideas, or the challenge you'd like to solve."
                          value={formData.projectDetails}
                          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                          className="clean-form-input"
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      {/* Action Row: Button + Note */}
                      <div 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '18px', 
                          marginTop: '6px',
                          flexWrap: 'wrap'
                        }}
                      >
                        <button 
                          type="submit" 
                          disabled={loading}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'linear-gradient(180deg, #383a42 0%, #1f2025 50%, #141416 100%)',
                            color: '#ffffff',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            fontSize: '13px',
                            fontWeight: 700,
                            border: '1px solid #2d2f36',
                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          className="submit-discuss-btn"
                        >
                          <span>{loading ? 'Submitting...' : "Let's discuss your project"}</span>
                          <ArrowUpRight size={16} />
                        </button>

                        <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4 }}>
                          <span style={{ display: 'block' }}>No polished brief needed.</span>
                          <span>Just bring your idea.</span>
                        </div>
                      </div>
                    </form>
                  )}
                </div>

                {/* Bottom Divider & Tagline */}
                <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #eef0f3' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '3px' }}>
                    A new product. A smarter workflow. A better experience.
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Whatever comes next, let&apos;s find the right way to build it.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Slogan below card */}
          <div style={{ textAlign: 'center', marginTop: '36px', marginBottom: '10px' }}>
            <p style={{ fontSize: '13.5px', color: '#888e9b', fontWeight: 500, letterSpacing: '0.2px' }}>
              Turning complexity into clarity, together.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-card-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 16px;
        }

        .contact-social-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .contact-social-row:last-child {
          border-bottom: none;
        }

        .contact-social-row:hover {
          padding-left: 3px;
        }

        .social-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(180deg, #2e313a 0%, #1c1e24 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 2px 6px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .contact-social-row:hover .social-icon-box {
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 4px 10px rgba(0, 0, 0, 0.4);
        }

        .social-arrow {
          color: #94a3b8;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .contact-social-row:hover .social-arrow {
          color: #ffffff;
          transform: translate(2px, -2px);
        }

        .clean-form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background-color: #ffffff;
          font-family: 'Urbanist', sans-serif;
          font-size: '13.5px';
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .clean-form-input::placeholder {
          color: #9ca3af;
          font-weight: 400;
        }

        .clean-form-input:focus {
          border-color: #0f172a;
          box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.08);
        }

        .submit-discuss-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 900px) {
          .contact-card-grid {
            grid-template-columns: 1fr;
          }
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
          .contact-master-card {
            padding: 8px;
          }
          .contact-pixel-step {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
