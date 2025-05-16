
import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25"></div>
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden animate-float">
        <div className="p-2">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Machineflows Platform Interface" 
            className="rounded-md w-full h-auto"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroImage;
