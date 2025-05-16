
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleBookDemo = () => {
    window.open('https://cal.com/danielcoronado/25min', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your manufacturing process?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
          Join hundreds of companies that have accelerated their manufacturing with Machineflows AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-gray-100 text-base px-8"
            onClick={handleBookDemo}
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-base px-8"
            onClick={handleBookDemo}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
