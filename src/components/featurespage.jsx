"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState("devotees");

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

  const devoteeFeatures = [
    {
      icon: "🙏",
      title: "Seva Booking Made Easy",
      description: "Book daily, weekly, special, or endowment sevas anytime from your phone or computer—no waiting, no hassle."
    },
    {
      icon: "💝",
      title: "Give with Confidence",
      description: "Donate directly to the temple's bank account with full visibility and instant receipts. Support temple causes like renovation, festivals, and community programs."
    },
    {
      icon: "🛍️",
      title: "Temple Store Access",
      description: "Shop prasadam, sacred photos, and spiritual offerings online, delivered to your doorstep or available for temple pickup."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Management",
      description: "Easily manage seva bookings and donations for all your family members in one place, making devotion a shared experience."
    },
    {
      icon: "🔔",
      title: "Event and Seva Notifications",
      description: "Receive timely alerts about upcoming sevas, festivals, and special temple events so you never miss an opportunity to participate."
    },
    {
      icon: "💬",
      title: "WhatsApp Integration",
      description: "Stay connected effortlessly with seamless notifications and support through WhatsApp."
    }
  ];

  const templeFeatures = [
    {
      icon: "📊",
      title: "Complete ERP System",
      description: "From seva management, donation tracking, staff scheduling, inventory control to asset management, our platform simplifies every temple task."
    },
    {
      icon: "🏛️",
      title: "Multi-Branch Management",
      description: "Manage multiple temples or branches under a single super admin panel. Get a complete overview while respecting each temple's traditions."
    },
    {
      icon: "🎨",
      title: "Independent Temple Branding",
      description: "Showcase your temple's unique identity with custom branding. Publish your temple's history, event galleries, and announcements to engage devotees."
    },
    {
      icon: "📈",
      title: "Smart Reporting and Insights",
      description: "Get clear, detailed reports on donations, seva participation, finances, and inventory. Empower trustees and committees with transparent data."
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Integrate Mantap's seva booking and donation systems smoothly with your existing temple website without disruption."
    },
    {
      icon: "🤝",
      title: "Devotee and Community Engagement",
      description: "Bring devotees together through satsangs, bhajans, and spiritual gatherings. Mantap creates a connected community that celebrates and strengthens Bharat's sacred traditions."
    }
  ];

  return (
    <div id="features" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
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
                Features That Empower
              </span>
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              At Mantap, we offer a complete, easy-to-use platform designed to meet the unique needs of
              temples and devotees alike. Whether you're a devotee looking to participate in temple rituals, or
              a temple administrator managing daily operations, our services make everything simple,
              transparent, and connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Toggle Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex justify-center mb-16 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-2 rounded-full shadow-lg inline-flex">
              <button
                onClick={() => setActiveTab("devotees")}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === "devotees"
                    ? "bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white"
                    : "text-gray-600 hover:text-[#be1a1f]"
                }`}
              >
                For Devotees
              </button>
              <button
                onClick={() => setActiveTab("temples")}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === "temples"
                    ? "bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white"
                    : "text-gray-600 hover:text-[#be1a1f]"
                }`}
              >
                For Temples
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {(activeTab === "devotees" ? devoteeFeatures : templeFeatures).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={index * 0.2}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#be1a1f]/30"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                Join Us in Strengthening Temple Communities
              </span>
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Mantap brings devotees and temples together with technology that is simple,
              transparent, and respectful of tradition.
            </p>
            <a
              href="https://forms.gle/9MkeHa5MvMoLfWL47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-white font-medium bg-gradient-to-r from-[#be1a1f] to-[#da4d01] rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Book a Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
