"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    })
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-20 lg:pt-0">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6"
            >
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text block">
                Bridging Devotees
              </span>
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text block">
                and Temples Through
              </span>
              <span className="text-gray-900 block">Technology</span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="text-base sm:text-lg lg:text-xl text-gray-800 font-medium mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Mantap is a one-stop digital platform that connects devotees and temples with seamless seva booking, transparent donations, and smart temple management.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="flex justify-center lg:justify-start"
            >
              <a 
                href="https://forms.gle/9MkeHa5MvMoLfWL47"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base text-white font-medium bg-gradient-to-r from-[#be1a1f] to-[#da4d01] rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Book a Demo
              </a>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
              
              {/* Main image container */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/temple.jpg"
                  alt="Temple with devotees performing rituals"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-[#f7a604]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 bg-[#be1a1f]/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
