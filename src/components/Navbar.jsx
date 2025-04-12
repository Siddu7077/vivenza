import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 mb-24 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Vivenza Farmhouse Logo"
                className="h-14 w-auto mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium hover:text-green-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-lg font-medium hover:text-green-700 transition-colors">
              About
            </Link>
           
            <Link to="/gallery" className="text-lg font-medium hover:text-green-700 transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-lg font-medium hover:text-green-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Call Button */}
          <a
            href="tel:9697798888"
            className="hidden md:flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition-all shadow-md"
          >
            <Phone size={20} className="mr-2" />
            <span className="font-medium">+91 96977 98888</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-inner absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-green-700 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-green-700 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            
            <Link to="/gallery" className="text-gray-800 hover:text-green-700 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-700 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:9697798888" className="flex items-center text-green-700 font-medium py-2">
              <Phone size={18} className="mr-2" />
              <span>969 779 8888</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
