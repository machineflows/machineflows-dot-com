
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

// Planets to move around each orbital ring
const orbitalPlanets = {
  inner: [
    { size: 4, color: "bg-blue-400", position: 0 },
    { size: 6, color: "bg-machineflows-light", position: 60 },
    { size: 3, color: "bg-purple-300", position: 120 },
    { size: 5, color: "bg-indigo-300", position: 180 },
    { size: 4, color: "bg-violet-400", position: 240 },
    { size: 3, color: "bg-blue-300", position: 300 },
  ],
  middle: [
    { size: 5, color: "bg-pink-300", position: 0 },
    { size: 3, color: "bg-indigo-400", position: 72 },
    { size: 5, color: "bg-purple-400", position: 144 },
    { size: 4, color: "bg-blue-400", position: 216 },
    { size: 6, color: "bg-machineflows-light", position: 288 }
  ],
  outer: [
    { size: 6, color: "bg-violet-400", position: 0 },
    { size: 3, color: "bg-blue-300", position: 90 },
    { size: 5, color: "bg-pink-300", position: 180 },
    { size: 4, color: "bg-indigo-400", position: 270 }
  ]
};

const IntegrationsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<any>(null);

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

  return (
    <section className="section-padding bg-[#100822] py-24 relative overflow-hidden">
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
                      } transition-all duration-500 relative`}
                    >
                      {/* Orbital system around active slide */}
                      {i === activeSlide && (
                        <>
                          {/* Inner orbital ring */}
                          <div className="absolute h-24 w-24 rounded-full border border-machineflows-light/30">
                            <div className="absolute inset-0 rounded-full animate-spin-slow">
                              {orbitalPlanets.inner.map((planet, index) => (
                                <div 
                                  key={`inner-${index}`}
                                  className={`absolute ${planet.color} rounded-full`}
                                  style={{
                                    height: `${planet.size}px`,
                                    width: `${planet.size}px`,
                                    transform: `rotate(${planet.position}deg) translateX(12px)`,
                                    top: 'calc(50% - ${planet.size / 2}px)',
                                    left: 'calc(50% - ${planet.size / 2}px)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Middle orbital ring */}
                          <div className="absolute h-40 w-40 rounded-full border border-purple-400/30">
                            <div className="absolute inset-0 rounded-full animate-spin-medium">
                              {orbitalPlanets.middle.map((planet, index) => (
                                <div 
                                  key={`middle-${index}`}
                                  className={`absolute ${planet.color} rounded-full`}
                                  style={{
                                    height: `${planet.size}px`,
                                    width: `${planet.size}px`,
                                    transform: `rotate(${planet.position}deg) translateX(20px)`,
                                    top: 'calc(50% - ${planet.size / 2}px)',
                                    left: 'calc(50% - ${planet.size / 2}px)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Outer orbital ring */}
                          <div className="absolute h-56 w-56 rounded-full border border-blue-400/30">
                            <div className="absolute inset-0 rounded-full animate-spin-fast">
                              {orbitalPlanets.outer.map((planet, index) => (
                                <div 
                                  key={`outer-${index}`}
                                  className={`absolute ${planet.color} rounded-full`}
                                  style={{
                                    height: `${planet.size}px`,
                                    width: `${planet.size}px`,
                                    transform: `rotate(${planet.position}deg) translateX(28px)`,
                                    top: 'calc(50% - ${planet.size / 2}px)',
                                    left: 'calc(50% - ${planet.size / 2}px)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      
                      <div 
                        className={`bg-white shadow-lg rounded-xl flex items-center justify-center transition-all duration-500 ${
                          i === activeSlide 
                            ? 'h-28 w-28 shadow-xl shadow-purple-500/30 z-30 relative' 
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
