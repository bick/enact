'use client';

import Header from '@/components/common/header';
import { HeroSection } from './hero';
import { Browser } from '@/components/common/browser';
import BubbleWrapper from './Bubble';
import { Footer } from '@/components/common/footer';
import { FeaturesSection } from './features';
import { FrameworksSection } from './frameworks';
import { QuotesSection } from './quotes';

export function Homepage() {
  return (
    <>
      <Header />
      <BubbleWrapper>
        <HeroSection />
        <Browser />
      </BubbleWrapper>
      <FeaturesSection />
      <FrameworksSection />
      <QuotesSection />
      <Footer />
    </>
  );
}
