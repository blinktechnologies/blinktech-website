'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { BTLogo } from '@/components/BTLogo';
import { PixelCornerCluster } from '@/components/PixelBlocks';
import { AiSystemCta } from '@/components/AiSystemCta';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <section className="tech-grid-bg" style={{ padding: '80px 0 100px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <PixelCornerCluster type="corner-top-right" size={18} color="#000000" />
        </div>

        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span className="pill-badge">
                <span className="dot" />
                Get in Touch
              </span>
            </div>
            <h1 
              style={{ 
                fontSize: 'clamp(36px, 5.5vw, 60px)', 
                fontWeight: 800, 
                color: '#0a0a0c',
                letterSpacing: '-0.03em',
                marginBottom: '16px'
              }}
            >
              Contact BlinkTech
            </h1>
            <p style={{ fontSize: '16px', color: '#575a65', lineHeight: 1.6 }}>
              Have an ambitious vision or need enterprise software architecture? Let’s talk.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info-card">
              <BTLogo size={52} />
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '20px 0 12px' }}>
                Let’s Build Together
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px' }}>
                Our engineering teams operate across Kigali, East Africa, and globally to support high-velocity deployments.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#e2e8f0' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#1e222d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} color="#38bdf8" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>EMAIL US</span>
                    <a href="mailto:contact@blinktech.rw" style={{ fontSize: '14px', fontWeight: 600 }}>contact@blinktech.rw</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#e2e8f0' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#1e222d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} color="#38bdf8" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>CALL US</span>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>+250 788 000 000</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#e2e8f0' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#1e222d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} color="#38bdf8" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>HEADQUARTERS</span>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Kigali Innovation City, Rwanda</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '24px' }}>
                    We have received your message and will respond within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-metallic">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        outline: 'none',
                        background: '#f9fafb'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '8px' }}>
                      Work Email *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        outline: 'none',
                        background: '#f9fafb'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '8px' }}>
                      Subject
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Enterprise Cloud Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        outline: 'none',
                        background: '#f9fafb'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '8px' }}>
                      Message *
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Describe your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        outline: 'none',
                        background: '#f9fafb',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-metallic"
                    style={{ padding: '12px 28px', alignSelf: 'flex-start', borderRadius: '8px' }}
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <AiSystemCta />

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 36px;
          max-width: 1040px;
          margin: 0 auto;
        }

        .contact-info-card {
          background: #0f1013;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
          border: 1px solid #23252b;
        }

        .contact-form-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
