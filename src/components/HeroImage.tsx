
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const HeroImage = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
      <div className="relative bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden animate-float">
        {/* Main dashboard card */}
        <div className="flex flex-col md:flex-row gap-4 p-6">
          {/* Left inventory card */}
          <Card className="bg-white shadow-md flex-shrink-0 w-full md:w-40">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-blue-500 rounded"></div>
                </div>
                <h3 className="font-medium text-gray-800">Inventory</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Current stock levels</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Raw materials</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Components</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Center analytics card */}
          <Card className="bg-white shadow-md flex-grow">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-blue-500 rounded"></div>
                </div>
                <h3 className="font-medium text-gray-800">Production Analytics</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Real-time insights into your manufacturing process</p>
              
              {/* Chart representation */}
              <div className="h-24 bg-blue-50 rounded-md mb-4 relative overflow-hidden">
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
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Efficiency</span>
                  <span className="font-medium text-blue-600">94%</span>
                </div>
                <Progress value={94} className="h-2 bg-blue-100" />
              </div>
            </div>
          </Card>

          {/* Right schedule card */}
          <Card className="bg-white shadow-md flex-shrink-0 w-full md:w-32">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 text-blue-500">⏱️</div>
                </div>
                <h3 className="font-medium text-gray-800">Schedule</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Today's progress</p>
              
              <div className="mt-3">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="text-center mt-1">
                  <span className="text-xs font-medium">75%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroImage;
