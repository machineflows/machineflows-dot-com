
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-32 md:pt-36 md:pb-40 overflow-hidden bg-[#1a0d35]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              From RFQs to manufacturing parts. <span className="text-secondary">Fast.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg">
              Machineflows is a secure AI-native for your manufacturers, built with ISO 9001 compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 bg-white text-[#1a0d35] hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 text-white border-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <HeroImage />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
