
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050419] text-white py-4">
      <div className="max-container px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
          {/* Empty div for left spacing on larger screens */}
          <div className="hidden sm:block sm:w-1/4"></div>
          
          {/* Logo in center */}
          <div className="mb-2 sm:mb-0 flex justify-center sm:w-1/2">
            <img 
              src="/lovable-uploads/bb4884cb-0c54-4f73-a4d0-b0e52dd2d1b1.png" 
              
              alt="Machineflows" 
              className="h-8" 
            />
          </div>
          
          {/* Contact email and social icons on the right */}
          <div className="flex flex-col items-center sm:items-end sm:w-1/4">
            <a href="mailto:info@machineflows.com" className="text-white/70 hover:text-white text-sm mb-1">
              info@machineflows.com
            </a>
            
            <div className="flex space-x-4">
              <a href="https://www.twitter.com/machineflows" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/machineflows" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/machineflows" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/page/machineflows" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section - even more compact */}
        <div className="border-t border-white/10 pt-1 text-center text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} Machineflows, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
