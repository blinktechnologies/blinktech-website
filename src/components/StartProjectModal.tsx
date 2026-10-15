'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { BTLogo } from './BTLogo';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI & Cloud Solutions',
    budget: '$5,000 - $15,000',
    description: ''
  });

  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(10, 10, 15, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        className="modal-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid #f0f2f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #fafafa, #ffffff)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BTLogo size={36} />
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: 0 }}>Start a Project</h3>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Let's build something extraordinary together.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '8px',
              backgroundColor: '#f3f4f6',
              color: '#4b5563',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
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
              <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Request Received!</h4>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto 24px' }}>
                Thank you for reaching out to BlinkTech. Our engineering team will review your proposal and reply within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="btn-metallic"
                style={{ borderRadius: '8px', padding: '10px 24px' }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '6px' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Byiringiro Emmanuel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '6px' }}>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '6px' }}>Service of Interest</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#f9fafb'
                    }}
                  >
                    <option>Product Development</option>
                    <option>Web Systems</option>
                    <option>UI/UX Design</option>
                    <option>Mobile Applications</option>
                    <option>AI & Cloud Solutions</option>
                    <option>Maintenance & Support</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '6px' }}>Estimated Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#f9fafb'
                    }}
                  >
                    <option>&lt; $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $30,000</option>
                    <option>$30,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#374151', marginBottom: '6px' }}>Project Summary</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project goals, timelines, and technical requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#f9fafb',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                <button 
                  type="button" 
                  onClick={onClose}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#4b5563',
                    backgroundColor: '#f3f4f6',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-metallic"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Submit Inquiry</span>
                  <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          animation: backdropFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-card {
          animation: modalScale 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes backdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScale {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
