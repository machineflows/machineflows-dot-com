
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Database, Activity, Calendar } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  
  return <span>{count}</span>;
};

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[800px] mx-auto my-8 md:my-12">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 animate-pulse"></div>
      
      <Card className="relative bg-white shadow-xl w-full overflow-hidden rounded-xl">
        <div className="flex flex-col p-6 gap-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
              <Activity className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-lg">Production Analytics</h3>
              <p className="text-sm text-gray-500">Real-time insights into your manufacturing process</p>
            </div>
          </div>
          
          {/* Chart */}
          <div className="h-56 bg-blue-50 rounded-md relative overflow-hidden mt-2">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path
                d="M0,15 Q10,5 20,15 T40,15 T60,20 T80,5 T100,15"
                fill="none"
                stroke="#dbeafe"
                strokeWidth="1.5"
              />
              <path
                d="M0,15 Q10,10 20,5 T40,20 T60,10 T80,15 T100,5"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="1.5"
                strokeDasharray="2"
              />
            </svg>
          </div>
          
          {/* Efficiency */}
          <div className="mt-1">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium text-gray-700">Efficiency</span>
              <span className="font-medium text-blue-600"><AnimatedNumber end={94} duration={1500} />%</span>
            </div>
            <Progress value={94} className="h-3 bg-blue-100" />
          </div>
        </div>
      </Card>

      {/* Side cards with improved spacing and positioning */}
      <div className="absolute left-0 md:left-[-100px] top-1/2 transform -translate-y-1/2 -translate-x-1/4 md:translate-x-0 z-10 max-w-[150px] md:max-w-[180px]">
        <Card className="bg-white shadow-lg w-full">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                <Database className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-800">Inventory</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">Current stock levels</p>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Raw materials</span>
                  <span className="font-medium"><AnimatedNumber end={87} duration={1200} />%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 transition-all duration-1000" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Components</span>
                  <span className="font-medium"><AnimatedNumber end={62} duration={1200} />%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 transition-all duration-1000" style={{width: '62%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="absolute right-0 md:right-[-100px] top-1/4 translate-x-1/4 md:translate-x-0 z-10 max-w-[140px] md:max-w-[160px]">
        <Card className="bg-white shadow-lg w-full">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-800">Schedule</h3>
            </div>
            <p className="text-xs text-gray-500 mb-2">Today's progress</p>
            
            <div className="mt-3">
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-blue-500 transition-all duration-1000" style={{width: '75%'}}></div>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium"><AnimatedNumber end={75} duration={1200} />%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HeroImage;
