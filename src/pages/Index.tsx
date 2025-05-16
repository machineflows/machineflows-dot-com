
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import IntegrationsSection from '@/components/Integrations';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main className="pt-28">
        <HeroSection />
        <FeatureSection />
        <IntegrationsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
