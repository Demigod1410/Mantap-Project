"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for anchor links
  const scrollToElement = (e, elementId) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/mantap-logo.jpg"
                  alt="Mantap Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                MANTAP
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {[
              { href: "#home", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#about", label: "About Us" },
              { href: "#why-us", label: "Why Us" },
              { href: "#contact", label: "Contact Us" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <a
                  href={item.href}
                  onClick={(e) => scrollToElement(e, item.href.substring(1))}
                  className={`font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-gray-800 hover:text-[#be1a1f]"
                      : "text-white font-semibold hover:text-[#f7a604]"
                  }`}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4"
          >
            <div className="py-2 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              {[
                { href: "#home", label: "Home" },
                { href: "#features", label: "Features" },
                { href: "#about", label: "About Us" },
                { href: "#why-us", label: "Why Us" },
                { href: "#contact", label: "Contact Us" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToElement(e, item.href.substring(1))}
                  className="block px-4 py-3 font-medium text-gray-800 hover:text-[#be1a1f] hover:bg-gray-50 rounded transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
