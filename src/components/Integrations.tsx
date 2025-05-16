
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Integration data with name, icon/logo, and category
const integrations = [
  {
    name: "Slack",
    icon: <img src="/lovable-uploads/c65c8c58-b19e-4f43-9f1a-139b0d4d2f44.png" alt="Slack Connect" className="w-auto h-10 object-contain" />,
    category: "Communication"
  },
  {
    name: "Microsoft Teams",
    icon: <img src="/lovable-uploads/bdecf3b9-8f35-4912-a761-deb5a2c24d2e.png" alt="Microsoft Teams" className="w-auto h-10 object-contain" />,
    category: "Communication"
  },
  {
    name: "Stripe",
    icon: <img src="/lovable-uploads/1b5a5c24-e490-4b42-bb09-f032b3cb30ed.png" alt="Stripe" className="w-auto h-10 object-contain" />,
    category: "Finance"
  },
  {
    name: "Gmail",
    icon: <img src="/lovable-uploads/6b9727df-9703-4399-8532-cf998e280a64.png" alt="Gmail" className="w-auto h-10 object-contain" />,
    category: "Communication"
  },
  {
    name: "QuickBooks",
    icon: <img src="/lovable-uploads/9f89826d-68e8-44ae-9ccd-1c27d8165afd.png" alt="QuickBooks" className="w-auto h-10 object-contain" />,
    category: "Finance"
  },
  {
    name: "Outlook",
    icon: <img src="/lovable-uploads/e9bfc0c2-5896-4424-bcb6-ac8a81f45782.png" alt="Outlook" className="w-auto h-10 object-contain" />,
    category: "Communication"
  },
  {
    name: "Rippling",
    icon: <img src="/lovable-uploads/a4c862b8-c7ba-4fcd-a8a6-4f0a6980b55d.png" alt="Rippling" className="w-auto h-10 object-contain" />,
    category: "Finance"
  }
];

const IntegrationsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const [animateParticles, setAnimateParticles] = useState(false);

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % integrations.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // This effect ensures the carousel scrolls to the active slide when activeSlide changes
  useEffect(() => {
    if (api && api.scrollTo) {
      api.scrollTo(activeSlide);
    }
  }, [activeSlide, api]);

  // Start particle animation after component mounts
  useEffect(() => {
    setAnimateParticles(true);
  }, []);

  return (
    <section className="section-padding bg-[#100822] py-24 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {/* Generate animated particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-white opacity-20 animate-pulse ${
              animateParticles ? 'animate-float' : ''
            }`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120924]/30 to-[#100822] z-0"></div>
      
      <div className="max-container relative z-10">
        {/* Title and logo section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Enhanced logo with more dramatic glow effect */}
              <div className="h-24 w-24 bg-[#050419] rounded-full shadow-lg flex items-center justify-center relative z-30 border-4 border-white/20 mb-6">
                <img 
                  src="/lovable-uploads/8bc4e5f8-53b2-468e-89e6-4a2027842209.png" 
                  alt="Machineflows" 
                  className="h-20 w-20 object-cover rounded-full"
                />
              </div>
              
              {/* Enhanced glow effect under logo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-machineflows-light to-machineflows-dark rounded-full opacity-50 blur-xl animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -inset-12 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Integrations for Your Manufacturing Business
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Connect with the tools you already use to streamline your operations
          </p>
        </div>
        
        <div className="relative overflow-hidden py-16">
          {/* Enhanced orbital rings with pulsing effects */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border-2 border-machineflows-light/30 animate-[spin_20s_linear_infinite] relative">
              <div className="absolute h-3 w-3 bg-machineflows-light rounded-full -right-1 top-1/2 transform -translate-y-1/2 animate-pulse"></div>
            </div>
            <div className="h-96 w-96 rounded-full border-2 border-white/15 absolute animate-[spin_40s_linear_infinite_reverse] relative">
              <div className="absolute h-2 w-2 bg-white rounded-full -bottom-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
            <div className="h-[32rem] w-[32rem] rounded-full border border-machineflows/15 absolute animate-[spin_60s_linear_infinite] relative">
              <div className="absolute h-4 w-4 bg-purple-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2 animate-pulse"></div>
            </div>
          </div>
          
          {/* Fixed height container with plenty of vertical space */}
          <div className="relative z-20 mx-auto max-w-6xl min-h-[400px] flex items-center">
            <Carousel
              opts={{
                loop: true,
                align: "center",
                startIndex: activeSlide,
                containScroll: false,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="py-10">
                {integrations.map((integration, i) => (
                  <CarouselItem 
                    key={i} 
                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 py-10 transition-all duration-700"
                  >
                    <div 
                      className={`flex flex-col items-center ${
                        i === activeSlide 
                          ? 'scale-125 opacity-100 z-10' 
                          : 'scale-75 opacity-50'
                      } transition-all duration-500`}
                    >
                      <div 
                        className={`bg-white shadow-lg rounded-xl flex items-center justify-center transition-all duration-500 ${
                          i === activeSlide 
                            ? 'h-28 w-28 shadow-xl shadow-purple-500/30' 
                            : 'h-20 w-20'
                        }`}
                      >
                        <div className="flex items-center justify-center w-full h-full p-4">
                          {integration.icon}
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <span 
                          className={`font-medium transition-all duration-300 block ${
                            i === activeSlide 
                              ? 'text-white text-xl mb-2' 
                              : 'text-gray-400 text-sm mb-1'
                          }`}
                        >
                          {integration.name}
                        </span>
                        <span 
                          className={`transition-all duration-300 block ${
                            i === activeSlide 
                              ? 'text-purple-300 text-sm' 
                              : 'text-gray-500 text-xs'
                          }`}
                        >
                          {integration.category}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        
        {/* Enhanced animated connecting lines with better animation */}
        <div className="relative z-10 h-48">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path className="data-flow-line stroke-machineflows-light animate-pulse" fill="none" strokeWidth="1" strokeDasharray="5,5" d="M400,200 C300,100 100,250 200,350">
              <animate attributeName="stroke-dashoffset" from="0" to="100" dur="8s" repeatCount="indefinite" />
            </path>
            <path className="data-flow-line stroke-machineflows" fill="none" strokeWidth="1" strokeDasharray="5,5" d="M400,200 C500,100 700,150 600,350">
              <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="12s" repeatCount="indefinite" />
            </path>
            <path className="data-flow-line stroke-white" fill="none" strokeWidth="1" strokeDasharray="3,3" d="M400,200 C300,300 500,350 300,350">
              <animate attributeName="stroke-dashoffset" from="0" to="50" dur="15s" repeatCount="indefinite" />
            </path>
            <path className="data-flow-line stroke-machineflows-light" fill="none" strokeWidth="1" strokeDasharray="4,6" d="M400,200 C450,150 550,50 700,150">
              <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="10s" repeatCount="indefinite" />
            </path>
            <path className="data-flow-line stroke-purple-400" fill="none" strokeWidth="1" strokeDasharray="5,5" d="M400,200 C350,150 100,100 150,250">
              <animate attributeName="stroke-dashoffset" from="0" to="70" dur="9s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        
        <div className="mt-8 text-center relative z-20">
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Need a custom integration? <span className="text-purple-300 hover:text-white transition-colors cursor-pointer">Contact our team today</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
