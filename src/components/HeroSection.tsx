
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-32 md:pt-36 md:pb-40 overflow-hidden bg-[#1a0d35]">
      {/* Abstract animated background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-[800px] h-[800px] opacity-20 -top-[400px] -right-[400px] rounded-full bg-secondary blur-[80px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] opacity-10 top-[20%] -left-[300px] rounded-full bg-purple-700 blur-[100px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute w-[400px] h-[400px] opacity-10 bottom-[10%] right-[20%] rounded-full bg-indigo-500 blur-[80px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        
        {/* Particle grid effect */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Flowing lines */}
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M0,128 C320,192 480,64 640,96 C800,128 960,256 1280,160 L1280,320 L0,320 Z" 
            fill="url(#wave-gradient)"
            className="animate-pulse"
            style={{ animationDuration: '15s' }}
          />
          <path 
            d="M0,192 C160,96 320,128 480,160 C640,192 800,128 960,160 C1120,192 1280,224 1280,224 L1280,320 L0,320 Z" 
            fill="url(#wave-gradient)"
            className="animate-pulse"
            style={{ animationDuration: '20s', animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="container max-w-8xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              From RFQs to manufacturing parts. <span className="text-secondary">Fast.</span>
            </h1>
            
            <p className="text-lg md:text-3xl text-gray-300 mb-10 max-w-lg">
              Secure AI-native platform for manufacturers to track their workflows.
              <br />
              Built with ISO 9001 compliance.
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
