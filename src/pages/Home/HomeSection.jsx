import React from "react";
import { motion } from "framer-motion";


export default function HomeSection() {
  return (
    <div className="relative h-screen w-full h-[500px] overflow-hidden h-full">
      {/* Background Image */}
      <img
        src="/assets/Banner.png"
        alt="Excavator"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0  to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-12 text-left">
        <div className="max-w-4xl">
          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700 mb-3 text-sm sm:text-base md:text-lg font-secondary"
          >
            Welcome to Advanced Construction Technologies
            <span className="block w-40 sm:w-64 md:w-[380px] border-b-2 border-sky-600 mt-1"></span>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl font-bold font-primary leading-snug text-gray-900 pr-[520px]"
          >
            PIONEER IN <br /> INTRODUCING <br /> ADVANCED <br /> TECHNOLOGIES FOR <br />
            THE CONSTRUCTION <br /> INDUSTRY
          </motion.h1>

          {/* CTA Button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block  px-4 bg-white text-blue-700 text-xl sm:text-xl md:text-lg  shadow-lg  transition font-primary"
          >
            Learn More →
          </motion.a>
        </div>
      </div>

      {/* Location Box (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-12 left-2 sm:left-4 p-0 w-64 sm:w-72"
      >
        <h3 className="font-bold text-gray-900 text-base sm:text-lg font-primary">📍 Chennai</h3>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-secondary">
          No.5/55, Forest Range Road, <br />
          Kuthambakkam Post & Village, <br />
          Poonamalle Taluk, <br /> Thiruvallur Dist, <br />
          Chennai, Tamil Nadu - 600124
        </p>
      </motion.div>
    </div>
  );
}
