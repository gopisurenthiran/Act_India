import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/Banner.png"
        alt="Excavator"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/mobile-banner.jpg"
        alt="Excavator Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl text-left md:text-left text-center md:text-left">
          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700 md:text-gray-700 text-white mb-3 text-sm sm:text-base md:text-lg font-secondary"
          >
            Welcome to Advanced Construction Technologies
            <span className="block w-40 sm:w-64 md:w-[380px] border-b-2 border-primary mt-1 mx-auto md:mx-0"></span>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl font-bold font-primary leading-snug md:text-gray-900 text-white md:pr-[520px] pr-0"
          >
            PIONEER IN <br className="hidden md:block" /> INTRODUCING{" "}
            <br className="hidden md:block" /> ADVANCED{" "}
            <br className="hidden md:block" />
            TECHNOLOGIES FOR <br className="hidden md:block" /> THE CONSTRUCTION{" "}
            <br className="hidden md:block" /> INDUSTRY
          </motion.h1>

          {/* CTA Button */}
          <motion.div
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="mt-6 inline-block px-4 bg-white text-secondary text-lg shadow-lg transition font-primary"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
