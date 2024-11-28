import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function PricingSection() {
  const services = [
    {
      name: "Regular Laundry",
      price: 30,
      items: ["T-shirts", "Pants", "Shirts", "Undergarments"]
    },
    {
      name: "Dry Cleaning",
      price: 100,
      items: ["Suits", "Dresses", "Jackets", "Coats"]
    },
    {
      name: "Ironing & Folding",
      price: 20,
      items: ["All types of clothes", "Professional pressing", "Neat folding"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{service.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">₹{service.price}<span className="text-sm text-gray-600">/piece</span></p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/order"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Order Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}