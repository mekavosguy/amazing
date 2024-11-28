import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceOption {
  name: string;
  pricePerPiece: number;
  description: string;
}

export function OrderForm() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [pieces, setPieces] = useState<number>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const services: ServiceOption[] = [
    {
      name: "Regular Laundry",
      pricePerPiece: 30,
      description: "Wash, dry, and fold service for everyday clothes"
    },
    {
      name: "Dry Cleaning",
      pricePerPiece: 100,
      description: "Professional dry cleaning for delicate garments"
    },
    {
      name: "Ironing & Folding",
      pricePerPiece: 20,
      description: "Professional pressing and neat folding"
    }
  ];

  const currentService = services.find(s => s.name === selectedService);
  const total = currentService ? currentService.pricePerPiece * pieces : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Order:\nService: ${selectedService}\nPieces: ${pieces}\nTotal: ₹${total}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
    setOrderSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`);
    }, 1500);
  };

  if (orderSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-4">Order Submitted!</h2>
        <p className="text-gray-600 mb-4">Redirecting you to WhatsApp to confirm your order...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {services.map((service) => (
            <motion.div
              key={service.name}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-lg cursor-pointer border-2 transition-colors ${
                selectedService === service.name
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
              onClick={() => setSelectedService(service.name)}
            >
              <h3 className="font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <p className="text-blue-600 font-bold">₹{service.pricePerPiece}/piece</p>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Pieces
              </label>
              <input
                type="number"
                min="1"
                value={pieces}
                onChange={(e) => setPieces(parseInt(e.target.value) || 1)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-lg font-semibold">Total: ₹{total}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Place Order via WhatsApp
            </motion.button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}