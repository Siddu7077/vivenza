import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-[url('../assets/3.jpeg')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section with columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <img src="../assets/logo.jpeg" alt="Vivenza Farmhouse Logo" className="h-16 w-auto mb-4" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A luxurious retreat nestled in the serene countryside, offering the perfect blend of rustic charm and modern comfort for memorable getaways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-700 p-2 rounded-full text-white transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-700 p-2 rounded-full text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-700 p-2 rounded-full text-white transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </a>
              </li>
              <li>
                <a href="#rates" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Rates & Availability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">JBIT College, MURTHUZAGUDA MOINABAD, R.R Dist - 501504</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-green-400 mr-3 flex-shrink-0" />
                <a href="tel:9697798888" className="text-gray-300 hover:text-white">969 779 8888</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-green-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@vivenza.co.in" className="text-gray-300 hover:text-white">info@vivenza.co.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on special offers and events.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full sm:w-auto rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-r-md transition-all text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vivenza Farmhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}