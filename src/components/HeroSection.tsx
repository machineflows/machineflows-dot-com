
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden hero-pattern">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From RFQs to manufacturing parts. <span className="gradient-text">Fast.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Machineflows is a secure AI-native for your manufacturers, built with ISO 9001 compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Book a Demo
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-red-400 border-2 border-white"></div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> manufacturers trust us
              </p>
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
