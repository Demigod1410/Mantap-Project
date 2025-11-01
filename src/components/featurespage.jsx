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
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
      title: "Seva Booking Made Easy",
      description: "Book daily, weekly, special, or endowment sevas anytime from your phone or computer—no waiting, no hassle."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: "Give with Confidence",
      description: "Donate directly to the temple's bank account with full visibility and instant receipts. Support temple causes like renovation, festivals, and community programs."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>,
      title: "Temple Store Access",
      description: "Shop prasadam, sacred photos, and spiritual offerings online, delivered to your doorstep or available for temple pickup."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      title: "Family Management",
      description: "Easily manage seva bookings and donations for all your family members in one place, making devotion a shared experience."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>,
      title: "Event and Seva Notifications",
      description: "Receive timely alerts about upcoming sevas, festivals, and special temple events so you never miss an opportunity to participate."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>,
      title: "WhatsApp Integration",
      description: "Stay connected effortlessly with seamless notifications and support through WhatsApp."
    }
  ];

  const templeFeatures = [
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>,
      title: "Complete ERP System",
      description: "From seva management, donation tracking, staff scheduling, inventory control to asset management, our platform simplifies every temple task."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>,
      title: "Multi-Branch Management",
      description: "Manage multiple temples or branches under a single super admin panel. Get a complete overview while respecting each temple's traditions."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
      title: "Independent Temple Branding",
      description: "Showcase your temple's unique identity with custom branding. Publish your temple's history, event galleries, and announcements to engage devotees."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>,
      title: "Smart Reporting and Insights",
      description: "Get clear, detailed reports on donations, seva participation, finances, and inventory. Empower trustees and committees with transparent data."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V18z"/></svg>,
      title: "Seamless Integration",
      description: "Integrate Mantap's seva booking and donation systems smoothly with your existing temple website without disruption."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
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
                <div className="mb-4">{feature.icon}</div>
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
