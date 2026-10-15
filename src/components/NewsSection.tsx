'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, ArrowRight } from 'lucide-react';
import { AwardBanner } from './AwardCard';

export const NewsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 0 100px' }}>
      <div className="container">
        {/* Main Featured Award Article Row */}
        <div className="award-hero-layout">
          {/* Left: Award Banner Visual */}
          <div className="award-visual-col">
            <AwardBanner height="100%" />
          </div>

          {/* Right: Article Details */}
          <div className="award-content-col">
            <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
              <span className="pill-badge">
                <span className="dot" />
                Awards
              </span>
            </div>

            <h1 className="award-article-title">
              A HEART-WARMING FAMILY REUNION: EMBRACING TOGETHERNESS ! EMBARKING CHERISHED MOMENTS TOGETHER
            </h1>

            <div className="award-article-text">
              <p>
                Our Itinerary Is Brimming With Activities That Cater To Every Family Member's Interests, Ensuring That Each Moment Is As Special As The Bonds We Share. From Heart-Warming Conversations Over Home-Cooked Meals To Exploring The Local Attractions Hand In Hand, This Visit Is A Celebration Of The Ties That Bind Us.
              </p>
              <p>
                Amidst The Hustle And Bustle Of Our Daily Lives, This Family Reunion Serves As A Reminder Of The Importance Of Taking A Pause And Relishing The Company Of Those Who Matter Most.
              </p>
            </div>

            {/* Author and Action Row */}
            <div className="author-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                  alt="Devon Lane"
                  className="author-avatar"
                />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', margin: 0 }}>Devon Lane</h4>
                  <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>May 31, 2023</p>
                </div>
              </div>

              <button 
                className="share-btn"
                title="Share this article"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'BlinkTech Award', url: window.location.href });
                  } else {
                    alert('Link copied to clipboard!');
                  }
                }}
              >
                <Send size={16} />
              </button>
            </div>

            {/* Pagination Controls */}
            <div className="pagination-row">
              <div className="pill-indicator" />
              <div className="dot-indicator" />
              <div className="dot-indicator" />
            </div>
          </div>
        </div>

        {/* Featured News Section */}
        <div style={{ marginTop: '90px' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#0a0a0c', letterSpacing: '-0.02em', margin: 0 }}>
              Featured News
            </h2>
            <button className="btn-pill-light" style={{ fontSize: '12.5px', padding: '6px 16px' }}>
              <span className="dot" style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#000', display: 'inline-block' }} />
              See All
            </button>
          </div>

          {/* Cards Grid */}
          <div className="featured-news-grid">
            {/* Card 1 */}
            <div className="news-card">
              <div className="news-card-media">
                <AwardBanner height={260} />
                <button className="read-more-overlay-btn">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              <h3 className="news-card-title">
                A HEART-WARMING FAMILY REUNION: EMBRACING TOGETHERNESS ! EMBARKING CHERISHED MOMENTS TOGETHER
              </h3>
            </div>

            {/* Card 2 */}
            <div className="news-card">
              <div className="news-card-media">
                <AwardBanner height={260} />
                <button className="read-more-overlay-btn">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              <h3 className="news-card-title">
                A HEART-WARMING FAMILY REUNION: EMBRACING TOGETHERNESS ! EMBARKING CHERISHED MOMENTS TOGETHER
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .award-hero-layout {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .award-visual-col {
          width: 100%;
        }

        .award-content-col {
          display: flex;
          flex-direction: column;
        }

        .award-article-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.25;
          color: '#0a0a0c';
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .award-article-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 14.5px;
          line-height: 1.65;
          color: #575a65;
          margin-bottom: 32px;
        }

        .author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #f1f2f5;
          margin-bottom: 24px;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid #e5e7eb;
        }

        .share-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f3f4f6;
          color: #4b5563;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .share-btn:hover {
          background: #0a0a0c;
          color: #ffffff;
        }

        .pagination-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pill-indicator {
          width: 32px;
          height: 6px;
          border-radius: 999px;
          background-color: #0a0a0c;
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #d1d5db;
        }

        .featured-news-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .news-card {
          display: flex;
          flex-direction: column;
        }

        .news-card-media {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .read-more-overlay-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: #ffffff;
          color: #0a0a0c;
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s;
          border: 1px solid #e5e7eb;
        }

        .read-more-overlay-btn:hover {
          transform: translateX(2px);
          background: #f8fafc;
        }

        .news-card-title {
          font-size: 16px;
          font-weight: 800;
          line-height: 1.4;
          color: #0a0a0c;
          letter-spacing: -0.01em;
        }

        @media (max-width: 900px) {
          .award-hero-layout {
            grid-template-columns: 1fr;
          }
          .featured-news-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
