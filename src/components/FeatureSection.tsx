
import React from 'react';
import { Activity, Database, Clock, BarChart2, DollarSign, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Real-time Analytics",
    description: "Query in natural language to get instant insights into your production performance and make faster decisions.",
    icon: Activity
  },
  {
    title: "Quote In Seconds",
    description: "Get instant quotes for your parts with our AI-powered quoting engine.",
    icon: DollarSign
  },
  {
    title: "Stay Compliant 24/7",
    description: "Built with ISO 9001 compliance, so you can focus on what matters most.",
    icon: Shield
  },
  {
    title: "Inventory Management  ",
    description: "Track raw materials, components, and finished goods with precision to optimize stock levels and reduce waste.",
    icon: Database
  },
  // {
  //   title: "Production Planning",
  //   description: "Create detailed production schedules and manage workflows with AI-powered optimization.",
  //   icon: BarChart2
  // },
  {
    title: "Time Tracking",
    description: "Capture accurate labor hours and productivity metrics for better resource allocation.",
    icon: Clock
  },
  {
    title: "Quality Control",
    description: "Implement quality checks and automate inspection processes to maintain product excellence.",
    icon: Activity
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold mb-4 text-[#1a0d35]">
            Quote faster. Track jobs with precision.
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Machineflows helps you respond to RFQs instantly and stay on top of every part in production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 bg-[#0f0721] text-white overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2a1d4a] mb-5">
                  <feature.icon className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
