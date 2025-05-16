
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
    <section className="section-padding bg-[#100822] py-24">
      <div className="max-container">
        {/* Title and logo section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="h-24 w-24 bg-[#050419] rounded-full shadow-lg flex items-center justify-center relative z-30 border-4 border-white/20 mb-6">
                <img 
                  src="/lovable-uploads/a6ee0ac3-d1b3-40d9-a173-cae4f70a3e1b.png" 
                  alt="Machineflows" 
                  className="h-20 w-20 object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-machineflows-light to-machineflows-dark rounded-full opacity-30 blur-lg animate-pulse"></div>
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
          {/* Orbital rings - now without center logo */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border-2 border-machineflows-light/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="h-96 w-96 rounded-full border-2 border-white/10 absolute animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="h-[32rem] w-[32rem] rounded-full border border-machineflows/10 absolute animate-[spin_60s_linear_infinite]"></div>
          </div>
          
          {/* Fixed height container with plenty of vertical space */}
          <div className="relative z-10 mx-auto max-w-6xl min-h-[400px] flex items-center">
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
                            ? 'h-28 w-28 shadow-xl shadow-machineflows/20' 
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
                              ? 'text-machineflows-light text-sm' 
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
        
        {/* Animated connecting lines */}
        <div className="relative z-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path className="data-flow-line stroke-machineflows-light" fill="none" strokeWidth="1" d="M400,200 C300,100 100,250 200,350" />
            <path className="data-flow-line stroke-machineflows" fill="none" strokeWidth="1" d="M400,200 C500,100 700,150 600,350" />
            <path className="data-flow-line stroke-white" fill="none" strokeWidth="1" d="M400,200 C300,300 500,350 300,350" />
            <path className="data-flow-line stroke-machineflows-light" fill="none" strokeWidth="1" d="M400,200 C450,150 550,50 700,150" />
            <path className="data-flow-line stroke-machineflows-dark" fill="none" strokeWidth="1" d="M400,200 C350,150 100,100 150,250" />
          </svg>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Need a custom integration? Contact our team today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
