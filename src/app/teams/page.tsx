'use client';

import React from 'react';
import { TeamsSection } from '@/components/TeamsSection';
import { AiSystemCta } from '@/components/AiSystemCta';

export default function TeamsPage() {
  return (
    <>
      <TeamsSection isFullPage={true} />
      <AiSystemCta />
    </>
  );
}
