import React from 'react';
import { ShoppingCart, Loader, Home } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
      title: "1. Book Your Service",
      description: "Message us on WhatsApp to schedule a pickup."
    },
    {
      icon: <Loader className="w-12 h-12 text-blue-500" />,
      title: "2. We Do the Work",
      description: "Your clothes are washed, dried, and folded with care."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: "3. Get Fresh Laundry Delivered",
      description: "Enjoy clean clothes without lifting a finger!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}