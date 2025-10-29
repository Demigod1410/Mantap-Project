"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

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

  const benefits = [
    {
      icon: "🏛️",
      title: "A Bridge, Not Just Software",
      description: "We offer temples independent, branded digital spaces while delivering devotees a smooth, transparent, and trusted experience."
    },
    {
      icon: "💰",
      title: "Transparent, Direct Donations",
      description: "Donations go straight from devotees to temple accounts, with full transparency and no middlemen."
    },
    {
      icon: "⚡",
      title: "Holistic Temple Management",
      description: "Support for every aspect of temple administration—from seva bookings to event management—simplifying daily operations."
    },
    {
      icon: "📈",
      title: "Scalability and Flexibility",
      description: "Adapts smoothly to every size and need, from single temples to large multi-branch trusts."
    },
    {
      icon: "📱",
      title: "Devotee-Centric Experience",
      description: "Easy access to seva booking, donations, prasadam shopping, and event notifications from anywhere."
    },
    {
      icon: "🤝",
      title: "Community-Focused Approach",
      description: "Join a movement built on respect, transparency, and preservation of our shared cultural heritage."
    }
  ];

  const comparisons = [
    {
      feature: "Temple Branding",
      mantap: "Custom branded platform",
      others: "Generic interface"
    },
    {
      feature: "Donation Flow",
      mantap: "Direct to temple account",
      others: "Through intermediary"
    },
    {
      feature: "Management Tools",
      mantap: "Complete ERP solution",
      others: "Basic booking system"
    },
    {
      feature: "Scalability",
      mantap: "Multi-branch support",
      others: "Single location focus"
    },
    {
      feature: "Mobile Access",
      mantap: "Full-featured app",
      others: "Limited functionality"
    }
  ];

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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                Why Temples & Devotees Choose Mantap
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg inline-flex">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === "mission"
                    ? "bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white"
                    : "text-gray-600 hover:text-[#be1a1f]"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white"
                    : "text-gray-600 hover:text-[#be1a1f]"
                }`}
              >
                Our Vision
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            {activeTab === "mission" ? (
              <p className="text-xl text-gray-800 leading-relaxed">
                Our mission is clear: to revive and sustain over 1,00,000 temples across Bharat by creating 
                a seamless connection between devotees and temple administration. We strive to preserve 
                sacred traditions, empower temples to become self-reliant, and make participation 
                effortless for every devotee.
              </p>
            ) : (
              <p className="text-xl text-gray-800 leading-relaxed">
                We envision a future where every temple flourishes as a vibrant center of culture, 
                spirituality, and community. A future where technology strengthens—not replaces—our 
                timeless heritage, making temple activities transparent, inclusive, and sustainable for 
                generations to come.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index * 0.2}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#be1a1f]/30"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
              The Mantap Difference
            </span>
          </motion.h2>

          {/* Desktop Table View */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hidden md:block"
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">Mantap</th>
                  <th className="py-4 px-6 text-left">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={item.feature} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                    <td className="py-4 px-6 text-[#8b1418] font-medium">✓ {item.mantap}</td>
                    <td className="py-4 px-6 text-gray-700">{item.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 max-w-2xl mx-auto">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index * 0.1}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.feature}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-20 text-sm font-semibold text-gray-600">Mantap:</div>
                    <div className="flex-1 text-[#8b1418] font-medium">✓ {item.mantap}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-20 text-sm font-semibold text-gray-600">Others:</div>
                    <div className="flex-1 text-gray-700">{item.others}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">The Mantap Promise</h2>
            <p className="text-xl mb-10">
              With Mantap, temples and devotees don't just use technology—they join a movement 
              built on respect, transparency, and the preservation of our shared cultural heritage.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#be1a1f] to-[#da4d01] rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300">
              Join the Movement
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
