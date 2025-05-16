
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "AI-Powered Manufacturing",
    description: "Leverage artificial intelligence to optimize your manufacturing processes and reduce time to production."
  },
  {
    title: "ISO 9001 Compliance",
    description: "Built from the ground up with compliance in mind, ensuring quality management standards are met."
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your sensitive manufacturing data and intellectual property."
  },
  {
    title: "Streamlined RFQs",
    description: "Simplify and accelerate your request for quotes process with automated workflows and templates."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manufacturing Excellence, <span className="gradient-text">Simplified</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform streamlines your entire manufacturing workflow, from initial request to final delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border border-gray-100">
              <CardHeader>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="gradient-border">
            <div className="px-8 py-12 sm:py-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to revolutionize your manufacturing process?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join hundreds of companies that have transformed their operations with Machineflows.
                  </p>
                </div>
                <div className="md:col-span-5 flex justify-end">
                  <a href="#contact" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity inline-flex items-center">
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
