"use client";

import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [hoverSide, setHoverSide] = useState(null); // null, 'left', or 'right'
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Features and Why Us content
  const features = [
    { 
      icon: "🏠", 
      text: "Home Page",
      description: "Quick access to sevas, notifications, and an easy navigation menu"
    },
    { 
      icon: "🙏", 
      text: "Seva Booking",
      description: "Browse and book daily, monthly, or special sevas effortlessly"
    },
    { 
      icon: "✨", 
      text: "Donations & Events",
      description: "A one-stop space for making donations and viewing upcoming events"
    },
    { 
      icon: "🔔", 
      text: "Personalized Notifications",
      description: "Get timely updates on sevas, events, and booking reminders"
    },
  ];

  const templeFeatures = [
    { 
      icon: "📊", 
      text: "Dashboard View",
      description: "A comprehensive overview of temple activities (donations, bookings, and participation, etc.)"
    },
    { 
      icon: "📅", 
      text: "Seva Booking",
      description: "Organize and update seva details with ease, tracking availability and reminders"
    },
    { 
      icon: "📈", 
      text: "Smart Reporting",
      description: "Access real-time insights on revenue, seva popularity, and donor activity"
    },
    { 
      icon: "🏛️", 
      text: "Multi Branch Control",
      description: "Manage operations across multiple temple branches from one centralized dashboard"
    },
    { 
      icon: "📦", 
      text: "Asset Mapping",
      description: "Categorize and track temple assets for optimized and efficient utilization"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mouse position tracking with middle dead zone
  const handleMouseMove = (e) => {
    if (isMobile) return;
    
    const container = containerRef.current;
    if (!container) return;

    const { left, width } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const thirdWidth = width / 3;
    
    // Define the middle section (one-third of the total width)
    if (mouseX > thirdWidth && mouseX < (thirdWidth * 2)) {
      setHoverSide(null); // Middle section - no movement
    } else if (mouseX <= thirdWidth) {
      setHoverSide('left'); // Left third
    } else {
      setHoverSide('right'); // Right third
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (isMobile) return;
    setHoverSide(null);
  };

  // Animation variants for the image
  const imageVariants = {
    center: {
      x: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    left: {
      x: "-25%",
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    right: {
      x: "25%",
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  // Animation variants for side panels
  const leftPanelVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const rightPanelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  // Render helper for feature items
  const renderItems = (items) => {
    return items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start space-x-4 mb-8"
      >
        <span className="text-3xl mt-1">{item.icon}</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {item.text}
          </span>
          <span className="text-sm text-gray-300 mt-1 leading-relaxed">
            {item.description}
          </span>
        </div>
      </motion.div>
    ));
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#be1a1f] via-[#da4d01] to-[#f7a604]"
      role="banner"
      aria-label="Hero section with interactive panels"
    >
      {/* Left Arrow Indicator */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
        initial={{ opacity: 0.3, x: 0 }}
        animate={{
          opacity: hoverSide === 'left' ? 0 : 0.6,
          x: hoverSide === 'left' ? -20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-white text-xs mt-2 font-semibold drop-shadow-lg">Temple</span>
        </div>
      </motion.div>

      {/* Right Arrow Indicator */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
        initial={{ opacity: 0.3, x: 0 }}
        animate={{
          opacity: hoverSide === 'right' ? 0 : 0.6,
          x: hoverSide === 'right' ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white text-xs mt-2 font-semibold drop-shadow-lg">Devotee</span>
        </div>
      </motion.div>

      {/* Left Panel - Why Us */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1/3 flex flex-col justify-center items-start px-12
                   backdrop-blur-md bg-black/30 text-white z-20"
        initial="hidden"
        animate={hoverSide === 'left' ? 'visible' : 'hidden'}
        variants={leftPanelVariants}
      >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Temple Features
        </h2>
        {renderItems(templeFeatures)}
      </motion.div>

      {/* Central Image */}
      <motion.div
        className="relative w-[1200px] md:w-[1400px] lg:w-[1600px] h-screen z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        variants={imageVariants}
        animate={
          hoverSide === 'left' 
            ? { scale: 1, opacity: 1, x: "25%" }
            : hoverSide === 'right' 
              ? { scale: 1, opacity: 1, x: "-25%" }
              : { 
                  scale: 1, 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 1.2, 
                    ease: [0.25, 0.1, 0.25, 1],
                  }
                }
        }
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/temple.jpg"
            alt="Temple representing our spiritual connection"
            fill
            className="object-cover rounded-xl shadow-2xl"
            priority
          />
        </motion.div>

        {/* Mantap Title Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { 
              delay: 0.5,
              duration: 1, 
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl bg-black/20 px-8 py-4 rounded-2xl backdrop-blur-sm"
            initial={{ scale: 0.9 }}
            animate={{ 
              scale: 1,
              transition: { 
                delay: 0.5,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent inline-block"
              initial={{ rotateX: -40 }}
              animate={{ 
                rotateX: 0,
                transition: { 
                  delay: 0.7,
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
            >
              MANTAP
            </motion.span>
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Right Panel - Features */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/3 flex flex-col justify-center items-start px-12
                   backdrop-blur-md bg-black/30 text-white z-20"
        initial="hidden"
        animate={hoverSide === 'right' ? 'visible' : 'hidden'}
        variants={rightPanelVariants}
      >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Devotee Features
        </h2>
        {renderItems(features)}
      </motion.div>

      {/* Mobile Notice - Only visible on small screens */}
      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm px-4">
          <p>👆 Scroll to explore more features</p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
