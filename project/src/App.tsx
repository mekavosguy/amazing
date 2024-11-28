import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { OrderForm } from './components/OrderForm';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">LaundryPro</Link>
            <Link
              to="/order"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Order Now
            </Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" />
                <a href="https://wa.me/YOUR_NUMBER" className="hover:text-blue-400">WhatsApp Us</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Coimbatore</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Regular Laundry</li>
                <li>Dry Cleaning</li>
                <li>Ironing & Folding</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} LaundryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PricingSection />
    </>
  );
}

function OrderPage() {
  return (
    <div className="py-16 bg-gray-50">
      <OrderForm />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}