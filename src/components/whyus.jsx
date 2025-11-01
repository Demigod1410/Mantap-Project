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
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>,
      title: "A Bridge, Not Just Software",
      description: "We offer temples independent, branded digital spaces while delivering devotees a smooth, transparent, and trusted experience."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>,
      title: "Transparent, Direct Donations",
      description: "Donations go straight from devotees to temple accounts, with full transparency and no middlemen."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>,
      title: "Holistic Temple Management",
      description: "Support for every aspect of temple administration—from seva bookings to event management—simplifying daily operations."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>,
      title: "Scalability and Flexibility",
      description: "Adapts smoothly to every size and need, from single temples to large multi-branch trusts."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>,
      title: "Devotee-Centric Experience",
      description: "Easy access to seva booking, donations, prasadam shopping, and event notifications from anywhere."
    },
    {
      icon: <svg className="w-10 h-10" fill="#c1201e" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
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
    <div id="why-us" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
                <div className="mb-4">{benefit.icon}</div>
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
                    <td className="py-4 px-6 text-green-600 font-medium flex items-center gap-2">
                      <span className="text-xl">✓</span> {item.mantap}
                    </td>
                    <td className="py-4 px-6 text-red-600 font-medium">
                      <span className="text-xl">✗</span> {item.others}
                    </td>
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
                    <div className="flex-1 text-green-600 font-medium flex items-center gap-1">
                      <span className="text-xl">✓</span> {item.mantap}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-20 text-sm font-semibold text-gray-600">Others:</div>
                    <div className="flex-1 text-red-600 font-medium flex items-center gap-1">
                      <span className="text-xl">✗</span> {item.others}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-100 relative">
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Mantap Promise</h2>
            <p className="text-xl mb-10 text-gray-800">
              With Mantap, temples and devotees don't just use technology—they join a movement 
              built on respect, transparency, and the preservation of our shared cultural heritage.
            </p>
            <a 
              href="https://forms.gle/UtGaAjgy6a6aDiXo8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#be1a1f] to-[#da4d01] text-white rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300"
            >
              Join the Movement
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
