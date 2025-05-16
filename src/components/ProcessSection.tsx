
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Submit RFQs",
    description: "Easily submit detailed request for quotes through our intuitive platform."
  },
  {
    number: "02",
    title: "AI Processing",
    description: "Our AI analyzes your requests and matches them with the right manufacturers."
  },
  {
    number: "03",
    title: "Receive Quotes",
    description: "Get competitive quotes from qualified manufacturers in record time."
  },
  {
    number: "04",
    title: "Manufacture Parts",
    description: "Approve quotes and track production all the way to delivery."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process takes you from initial request to finished parts with unprecedented speed and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%-16px)] w-full h-0.5 bg-gray-200"></div>
              )}
              <div className="bg-white rounded-lg p-8 relative z-10 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
