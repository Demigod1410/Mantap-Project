"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                MANTAP
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/sevas", label: "Sevas" },
              { href: "/events", label: "Events" },
              { href: "/notifications", label: "Notifications" },
              { href: "/about", label: "About" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-[#be1a1f]"
                      : "text-white font-semibold hover:text-[#f7a604]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={(e) => scrollToElement(e, 'footer')}
              className={`font-medium transition-colors cursor-pointer ${
                isScrolled
                  ? "text-gray-800 hover:text-[#be1a1f]"
                  : "text-white hover:text-[#f7a604]"
              }`}
            >
              Contact
            </motion.button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {[
              { 
                href: "/register",
                label: "Sign Up",
                className: "px-6 py-2 border rounded-full transition-all duration-300",
                style: isScrolled
                  ? "text-[#be1a1f] border-[#be1a1f] hover:bg-[#be1a1f] hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-[#be1a1f]"
              },
              {
                href: "/login",
                label: "Login",
                className: "px-6 py-2 rounded-full transition-all duration-300",
                style: isScrolled
                  ? "bg-[#be1a1f] text-white hover:bg-[#a01217]"
                  : "bg-white text-[#be1a1f] hover:bg-gray-100"
              }
            ].map((button, index) => (
              <motion.div
                key={button.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.2) }}
              >
                <Link
                  href={button.href}
                  className={`${button.className} ${button.style}`}
                >
                  {button.label}
                </Link>
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/sevas", label: "Sevas" },
              { href: "/events", label: "Events" },
              { href: "/notifications", label: "Notifications" },
              { href: "/about", label: "About" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block font-medium ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#be1a1f]"
                    : "text-white hover:text-[#f7a604]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={(e) => scrollToElement(e, 'footer')}
              className={`block w-full text-left font-medium ${
                isScrolled
                  ? "text-gray-800 hover:text-[#be1a1f]"
                  : "text-white hover:text-[#f7a604]"
              }`}
            >
              Contact
            </button>
            <div className="pt-4 space-y-3">
              <Link
                href="/register"
                className="block w-full px-6 py-2 text-center border rounded-full transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="block w-full px-6 py-2 text-center bg-[#be1a1f] text-white rounded-full hover:bg-[#a01217] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
