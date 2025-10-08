import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function FirstSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/Contact-web.webp"
        alt="Excavator"
        className="hidden md:block absolute inset-0 object-cover"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/Contact.webp"
        alt="Excavator Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-6 lg:px-12">
        <div className="max-w-4xl text-left md:text-left text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
    absolute 
    bottom-[3.5rem] left-[33%] transform -translate-x-1/2   /* 👈 mobile: centered, lower */
    md:bottom-[10rem] md:left-[23%] md:translate-x-0  /* 👈 desktop: higher, left aligned */
  "
          >
          
            <HashLink
            smooth
             to="#form" // 👈 this matches the id on your form
              className="px-4 py-2 bg-white text-secondary text-lg shadow-lg transition font-primary"
            >
         Learn More →
            </HashLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
         
