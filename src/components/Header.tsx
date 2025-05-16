
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#1a0d35] shadow-md py-4">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="font-medium text-white hover:text-gray-300 transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="font-medium text-white hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="font-medium text-white hover:text-gray-300 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="bg-white text-[#1a0d35] hover:bg-gray-100">Book a demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a0d35] absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#solutions" 
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4">
              <Button className="w-full bg-white text-[#1a0d35] hover:bg-gray-100">Book a demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
