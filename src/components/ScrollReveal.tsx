'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 750,
  yOffset = 28
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settled, setSettled] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '80px 0px -20px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once the entrance animation has finished, drop the compositor hints so long
  // pages don't keep dozens of promoted layers alive.
  useEffect(() => {
    if (!isVisible || settled) return;
    const t = setTimeout(() => setSettled(true), delay + duration + 50);
    return () => clearTimeout(t);
  }, [isVisible, settled, delay, duration]);

  const style: React.CSSProperties = settled
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'none' : 'blur(4px)',
        transform: isVisible ? 'none' : `translate3d(0, ${yOffset}px, 0) scale(0.98)`,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms, filter ${duration}ms ${EASE} ${delay}ms`,
        willChange: 'opacity, transform'
      };

  return (
    <div ref={elementRef} className={`scroll-reveal-container ${className}`} style={style}>
      {children}
    </div>
  );
};
