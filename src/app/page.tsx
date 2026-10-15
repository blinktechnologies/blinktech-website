'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesHub } from '@/components/ServicesHub';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { TeamPreview } from '@/components/TeamPreview';
import { PhilosophyQuote } from '@/components/PhilosophyQuote';
import { ComparisonSection } from '@/components/ComparisonSection';
import { AiSystemCta } from '@/components/AiSystemCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesHub />
      <ProjectShowcase />
      <TeamPreview />
      <PhilosophyQuote />
      <ComparisonSection />
      <AiSystemCta />
    </>
  );
}
