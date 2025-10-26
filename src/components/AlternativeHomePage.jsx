"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AlternativeHomePage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Smooth scroll function for anchor links
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const features = [
    {
      id: 1,
      title: "Community Sevas",
      description: "Participate in traditional ceremonies and community service activities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Digital Donations",
      description: "Contribute to important causes with secure digital payments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Event Scheduling",
      description: "Stay updated with community gatherings and special ceremonies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      quote: "Mantap has transformed how our community connects and participates in sevas. The platform is intuitive and beautiful.",
      author: "Priya Sharma",
      position: "Community Leader"
    },
    {
      id: 2,
      quote: "I love the simplicity and elegance of Mantap. It's made spiritual practices more accessible to our younger generation.",
      author: "Raj Patel",
      position: "Temple Volunteer"
    },
    {
      id: 3,
      quote: "The notification system ensures I never miss important community events. The interface is stunning and easy to navigate.",
      author: "Maya Singh",
      position: "Regular Devotee"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                MANTAP
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <Link href="/home" className="text-gray-800 font-medium hover:text-[#be1a1f] transition-colors">
                Home
              </Link>
              <Link href="/sevas" className="text-gray-800 hover:text-[#be1a1f] transition-colors">
                Sevas
              </Link>
              <Link href="/notifications" className="text-gray-800 hover:text-[#be1a1f] transition-colors">
                Notifications
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-[#be1a1f] transition-colors">
                About
              </Link>
              <a href="#footer" onClick={scrollToFooter} className="text-gray-800 hover:text-[#be1a1f] transition-colors cursor-pointer">
                Contact
              </a>
            </div>
            
            <div className="md:hidden">
              <button className="text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <div className="hidden md:flex">
              <Link href="/register" className="px-6 py-2 mr-4 text-[#be1a1f] border border-[#be1a1f] rounded-full hover:bg-[#be1a1f] hover:text-white transition-all duration-300">
                Sign Up
              </Link>
              <Link href="/login" className="px-6 py-2 text-white bg-[#be1a1f] rounded-full hover:bg-[#a01217] transition-all duration-300">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative h-screen overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text block">Devotion Meets</span>
                <span className="bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">Modern Simplicity</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-800 mb-10 max-w-lg font-medium"
              >
                Experience spirituality in a modern way. Mantap brings tradition and technology together for a seamless devotional journey.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link href="/explore" className="px-8 py-4 text-white font-medium bg-gradient-to-r from-[#be1a1f] to-[#da4d01] rounded-full hover:shadow-lg hover:shadow-[#be1a1f]/20 transition-all duration-300">
                  Explore Sevas
                </Link>
                <Link href="/about" className="px-8 py-4 text-gray-700 font-medium border border-gray-300 rounded-full hover:border-[#be1a1f] hover:text-[#be1a1f] transition-all duration-300">
                  Learn More
                </Link>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative z-20"
              >
                <div className="relative w-full h-[500px]">
                  {/* Background gradient for consistency with text section */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] rounded-2xl transform rotate-3 scale-95"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      src="/temple.jpg"
                      alt="Ancient Hindu temple with ornate architecture at sunset"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f7a604]/20 rounded-full blur-xl"></div>
              <div className="absolute top-20 left-0 w-20 h-20 bg-[#be1a1f]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      

      {/* Stats Section */}
        <div className="py-30 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <span className="text-5xl font-bold text-[#be1a1f]">5000+</span>
              <p className="text-gray-600 mt-2">Active Community Members</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <span className="text-5xl font-bold text-[#da4d01]">200+</span>
              <p className="text-gray-600 mt-2">Sevas Completed Monthly</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <span className="text-5xl font-bold text-[#f7a604]">50+</span>
              <p className="text-gray-600 mt-2">Community Locations</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="h-screen flex items-center justify-center py-10 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.span 
              variants={fadeInUp}
              custom={0}
              className="text-5xl  font-semibold uppercase tracking-wider text-[#be1a1f]"
            >
              Our Services
            </motion.span>
            <motion.h2 
              variants={fadeInUp} 
              custom={2}
              className="text-3xl py-2 font-bold mt-2 mb-3 bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text"
            >
              Features That Enhance Your Spiritual Journey
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              custom={2}
              className="text-gray-600 mt-3"
            >
              Mantap combines ancient traditions with modern technology to create a seamless experience for devotees.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                custom={index + 3}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#be1a1f]/30 flex flex-col"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#be1a1f]/20 to-[#f7a604]/20 mb-8">
                  <div className="text-[#be1a1f] transform scale-110">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#be1a1f]">Calendar</span>
            <h2 className="text-4xl font-bold text-gray-700 mt-2 mb-4">Upcoming Events</h2>
            <p className="text-gray-700 font-medium">
              Stay connected with important ceremonies and community gatherings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-[#be1a1f] to-[#da4d01] p-6 text-white">
                <div className="text-5xl font-bold">26</div>
                <div className="text-xl">October 2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Special Seva Ceremony</h3>
                <p className="text-gray-600 mb-4">Join us for the special Seva ceremony this weekend.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>5:00 PM - 8:00 PM</span>
                </div>
                <div className="mt-6">
                  <Link href="/events/seva-ceremony" className="text-[#be1a1f] font-medium hover:text-[#da4d01] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-[#da4d01] to-[#f7a604] p-6 text-white">
                <div className="text-5xl font-bold">01</div>
                <div className="text-xl">November 2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Meeting</h3>
                <p className="text-gray-600 mb-4">Monthly community gathering scheduled for discussion and planning.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>6:30 PM - 8:30 PM</span>
                </div>
                <div className="mt-6">
                  <Link href="/events/community-meeting" className="text-[#be1a1f] font-medium hover:text-[#da4d01] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-[#f7a604] to-[#be1a1f] p-6 text-white">
                <div className="text-5xl font-bold">10</div>
                <div className="text-xl">November 2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Festival Preparation</h3>
                <p className="text-gray-600 mb-4">Volunteers needed for upcoming festival preparations.</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="mt-6">
                  <Link href="/events/festival-prep" className="text-[#be1a1f] font-medium hover:text-[#da4d01] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="px-8 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-[#be1a1f] hover:text-[#be1a1f] transition-all duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7a604]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#be1a1f]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#be1a1f]">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-700 mt-2 mb-4">What Our Community Says</h2>
            <p className="text-gray-600">
              Hear from members who have experienced the Mantap platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="mb-6">
                  {/* Stars */}
                  <div className="flex text-[#f7a604]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Connect with like-minded individuals and enhance your spiritual journey with Mantap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/register" className="px-8 py-3 bg-white text-[#be1a1f] font-medium rounded-full hover:bg-opacity-90 transition-all duration-300">
              Sign Up Now
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#be1a1f] via-[#da4d01] to-[#f7a604] text-transparent bg-clip-text">
                  MANTAP
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting devotion with simplicity. Modern solutions for timeless traditions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#f7a604]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f7a604]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f7a604]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/sevas" className="text-gray-400 hover:text-white transition-colors">Sevas</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/seva-booking" className="text-gray-400 hover:text-white transition-colors">Book Seva</Link></li>
                <li><Link href="/donations" className="text-gray-400 hover:text-white transition-colors">Make Donation</Link></li>
                <li><Link href="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link href="/notifications" className="text-gray-400 hover:text-white transition-colors">Notifications</Link></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Saraswat Software Solutions Pvt. Ltd. Yelachenahalli, Bengaluru- 560078
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 8660017174
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3 text-[#f7a604]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                    ceo@mantap.co.in
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mantap. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/faq" className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlternativeHomePage;