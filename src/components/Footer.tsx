
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Accelerating manufacturing with AI-powered workflows while maintaining ISO 9001 compliance.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3.95C21.175 4.625 20.25 5.1 19.25 5.4C18.6646 4.76385 17.9071 4.32336 17.0729 4.14435C16.2387 3.96534 15.3695 4.05869 14.5906 4.41271C13.8116 4.76674 13.1611 5.36485 12.7247 6.11925C12.2883 6.87365 12.0867 7.75076 12.15 8.625V9.625C10.5666 9.67085 9.00005 9.3302 7.5749 8.63443C6.14976 7.93866 4.90966 6.90976 3.975 5.65C3.975 5.65 0.975 12.65 7.975 15.65C6.149 16.9312 3.97841 17.5784 1.775 17.5C8.775 21.5 17.275 17.5 17.275 8.575C17.2745 8.29996 17.2486 8.02546 17.198 7.755C18.0897 6.9585 18.7323 5.91232 22 3.95Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Machineflows. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">ISO 9001 Certified</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
