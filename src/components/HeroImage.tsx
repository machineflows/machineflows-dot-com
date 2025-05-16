
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Database, Activity, Calendar } from 'lucide-react';

const HeroImage = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden animate-float scale-110">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Left inventory card */}
          <Card className="bg-white shadow-lg flex-shrink-0 w-full md:w-44">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <Database className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-800">Inventory</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Current stock levels</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span>Raw materials</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
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
          <Card className="bg-white shadow-lg flex-grow">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <Activity className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-800">Production Analytics</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Real-time insights into your manufacturing process</p>
              
              {/* Chart representation - closer to the image design */}
              <div className="h-32 bg-blue-50 rounded-md mb-6 relative overflow-hidden">
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
                <div className="flex justify-between text-xs mb-1.5">
                  <span>Efficiency</span>
                  <span className="font-medium text-blue-600">94%</span>
                </div>
                <Progress value={94} className="h-2.5 bg-blue-100" />
              </div>
            </div>
          </Card>

          {/* Right schedule card */}
          <Card className="bg-white shadow-lg flex-shrink-0 w-full md:w-44">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-800">Schedule</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Today's progress</p>
              
              <div className="mt-3">
                <div className="h-2.5 w-full bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm font-medium">75%</span>
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
