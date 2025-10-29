"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                Transforming Temple Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              Mantap helps revive and grow Bharat's sacred temples through technology. We make it easy for devotees 
              to book seva, donate, and connect with temples, while giving temple teams simple tools to manage 
              everything smoothly on one platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Beginning Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] opacity-20 transform rotate-3 scale-105"></div>
                <Image
                  src="/ceremony.jpg"
                  alt="Traditional temple ceremonies and rituals"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                  Our Beginning
                </span>
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                We started Mantap because we felt something was missing. Temples, which have been 
                the heart of our communities for centuries, seemed distant not just physically but also 
                in the way people connect with them today.
              </p>
              <p className="text-gray-800 mb-6 leading-relaxed">
                We are devotees ourselves, deeply rooted in the traditions and culture temples carry, 
                but we also see how modern life makes it hard for many to stay connected.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We wanted to change that. To bring temples and devotees closer again by using 
                technology to support tradition, not replace it. Mantap is our answer to making sure 
                temples thrive and that devotees have an easier way to participate in temple life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-[#be1a1f] to-[#da4d01] text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Purpose</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Our mission is simple and powerful: to revive and support over 1,00,000 temples across 
              Bharat. Not just the buildings but the spirit they hold. We want every temple to run 
              smoothly, every devotee to feel involved, and every tradition to continue without 
              interruption.
            </p>
            <p className="text-xl leading-relaxed">
              We believe temples can be self-sufficient and transparent, trusted by the people they 
              serve. Mantap helps bring that to life by making seva booking simple, donations clear, 
              and temple management easier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                Who We Are
              </span>
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              We are a dedicated team with diverse backgrounds in technology and temple 
              communities, united by a shared commitment to preserving and strengthening temple 
              traditions for the future. Our aim is to provide practical, effective solutions that help 
              temples operate smoothly and engage more deeply with their devotees.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Every feature we build and every decision we make reflects this shared purpose in the 
              simplest, most honest way possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Join Us</h2>
            <p className="text-xl mb-10 leading-relaxed">
              This is not just about software. It is about community, culture, and a shared future. 
              If you care about temples, heritage, and faith, we welcome you to be a part of Mantap. 
              Together, we can bring temples and devotees back into harmony for generations ahead.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#be1a1f] to-[#da4d01] rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300"
            >
              Be Part of Our Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
