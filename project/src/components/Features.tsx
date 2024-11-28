import React from 'react';
import { Package, Clock, ThumbsUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: "Pickup & Delivery at Your Doorstep",
      description: "Skip the laundromat – we collect, clean, and return your clothes fresh and folded."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Quick & Reliable Service",
      description: "Perfect for busy professionals or anyone who values their time."
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-blue-500" />,
      title: "Ideal for the Always-on-the-Go",
      description: "Too busy or just hate doing laundry? Relax, we've got it covered."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}