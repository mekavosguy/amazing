import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Your Personal Laundry & Dry Cleaning Partner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-blue-600 font-semibold mb-8"
        >
          Clean Clothes, Zero Hassle!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-8"
        >
          Hate doing laundry? Don't have time for it? We're here to help!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/order"
            className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Order Now
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center items-center gap-4 text-gray-600"
        >
          <Sparkles className="w-5 h-5" />
          <span>First-time users get 10% OFF!</span>
        </motion.div>
      </div>
    </div>
  );
}