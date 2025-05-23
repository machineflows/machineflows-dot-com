
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookDemo = () => {
    window.open('https://cal.com/danielcoronado/25min', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a0d35] shadow-lg py-4' : 'bg-[#1a0d35] shadow-md py-6'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo with increased size */}
        <div className="scale-120">
          <Logo />
        </div>

        {/* Desktop Navigation with larger text */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="font-medium text-white text-lg hover:text-gray-300 transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="font-medium text-white text-lg hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="font-medium text-white text-lg hover:text-gray-300 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <Button 
            className="bg-white text-[#1a0d35] hover:bg-gray-100 text-lg px-6 py-2"
            onClick={handleBookDemo}
          >
            Book a demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a0d35] absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#solutions" 
              className="block py-2 text-white text-lg hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-white text-lg hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-white text-lg hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4">
              <Button 
                className="w-full bg-white text-[#1a0d35] hover:bg-gray-100 text-lg"
                onClick={() => {
                  window.open('https://cal.com/danielcoronado/25min', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
