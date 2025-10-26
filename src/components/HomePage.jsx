"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Notification data (mock data)
  const notifications = [
    {
      id: 1,
      title: "Special Seva Announcement",
      description: "Join us for the special Seva ceremony this weekend.",
      date: "October 26, 2025"
    },
    {
      id: 2,
      title: "Community Meeting",
      description: "Monthly community gathering scheduled for next Friday.",
      date: "November 1, 2025"
    },
    {
      id: 3,
      title: "Festival Preparation",
      description: "Volunteers needed for upcoming festival preparations.",
      date: "November 10, 2025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-xl text-[#be1a1f]">
              Mantap
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {["home", "sevas", "notifications", "about", "contact"].map((item) => (
                  <Link 
                    key={item}
                    href={item === "home" ? "/" : `/${item}`}
                    className={`${
                      activeLink === item 
                        ? "text-[#be1a1f] font-medium" 
                        : "text-gray-700 hover:text-[#da4d01] transition-colors duration-300"
                    } capitalize`}
                    onClick={() => setActiveLink(item)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#be1a1f] focus:outline-none"
              >
                <svg 
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden transition-all duration-300 ease-in-out`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "sevas", "notifications", "about", "contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "home" ? "/" : `/${item}`}
                  className={`${
                    activeLink === item 
                      ? "bg-[#be1a1f] bg-opacity-10 text-[#be1a1f]" 
                      : "hover:bg-gray-100"
                  } block px-3 py-2 rounded-md text-base font-medium capitalize`}
                  onClick={() => {
                    setActiveLink(item);
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#be1a1f] via-[#da4d01] to-[#f7a604] overflow-hidden">
          <div className="absolute inset-0">
            {/* Animated background elements */}
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white opacity-10 blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeIn}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Welcome to Mantap
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="max-w-2xl mx-auto text-xl sm:text-2xl text-white opacity-90"
              >
                Connecting devotion with simplicity.
              </motion.p>
              
              <motion.div variants={fadeIn}>
                <Link href="/sevas" 
                  className="inline-block bg-white text-[#be1a1f] font-medium px-8 py-3 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Explore Sevas
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* Quick Access Card 1 */}
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer border-t-4 border-[#be1a1f]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#be1a1f] bg-opacity-10 mb-4">
                  <svg className="w-8 h-8 text-[#be1a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Seva</h3>
                <p className="text-gray-600 text-sm">Reserve your spot for upcoming sevas and ceremonies</p>
              </motion.div>

              {/* Quick Access Card 2 */}
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer border-t-4 border-[#da4d01]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#da4d01] bg-opacity-10 mb-4">
                  <svg className="w-8 h-8 text-[#da4d01]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">View Notifications</h3>
                <p className="text-gray-600 text-sm">Stay updated with important announcements</p>
              </motion.div>

              {/* Quick Access Card 3 */}
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer border-t-4 border-[#f7a604]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f7a604] bg-opacity-10 mb-4">
                  <svg className="w-8 h-8 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
                <p className="text-gray-600 text-sm">Discover and participate in our community events</p>
              </motion.div>

              {/* Quick Access Card 4 */}
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer border-t-4 border-[#be1a1f]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#be1a1f] bg-opacity-10 mb-4">
                  <svg className="w-8 h-8 text-[#be1a1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Donate</h3>
                <p className="text-gray-600 text-sm">Support our community with your contribution</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Notifications Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeIn}
                className="text-3xl font-bold text-center mb-12 text-gray-800"
              >
                Recent Notifications
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {notifications.map((notification) => (
                  <motion.div 
                    key={notification.id}
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#f7a604] mr-2"></div>
                        <span className="text-sm text-gray-500">{notification.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{notification.title}</h3>
                      <p className="text-gray-600 mb-4">{notification.description}</p>
                      <Link href="/notifications" className="text-[#be1a1f] font-medium hover:text-[#da4d01] inline-flex items-center transition-colors duration-300">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={fadeIn}
                className="mt-10 text-center"
              >
                <Link 
                  href="/notifications"
                  className="inline-flex items-center text-[#be1a1f] font-medium hover:text-[#da4d01] transition-colors duration-300"
                >
                  View All Notifications
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-[#f7a604]">Mantap</h3>
              <p className="text-gray-300 max-w-md">
                Connecting devotion with simplicity. Join our community to experience
                the blend of tradition and modernity.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">Home</Link></li>
                <li><Link href="/sevas" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">Sevas</Link></li>
                <li><Link href="/notifications" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">Notifications</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@mantap.org
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Mantap. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f7a604] transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;