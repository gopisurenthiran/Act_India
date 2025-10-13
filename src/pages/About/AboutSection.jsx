import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden mb-12">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/home-banner-web-1.webp"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/volvo-mobile.webp"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-6 lg:px-12">
        <div className="max-w-4xl text-left md:text-left text-center md:text-left ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
    absolute 
    bottom-[3.5rem] left-[33%] transform -translate-x-1/2   /* 👈 mobile: centered, lower */
    md:bottom-[15rem] md:left-[6%] md:translate-x-0  /* 👈 desktop: higher, left aligned */
  "
          >
            <Link
              to="/contact"
              className="px-4 py-2 bg-white text-secondary text-lg shadow-lg transition font-primary"
            >
              know More →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
