import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <img
        src="/assets/banner/final-2.jpg"
        alt="Excavator"
        className="hidden md:block w-full h-full object-cover object-center"
      />

      {/* Background Image - Mobile */}
      <img
        src="/assets/banner/final-2-mob.jpg"
        alt="Excavator Mobile"
        className="block md:hidden w-full h-full object-cover object-center"
      />

      {/* Optional Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-6 lg:px-12">
        <div className="max-w-4xl text-center md:text-left mt-10">
          {/* You can place text or heading here if needed */}
        </div>
      </div>

     
    </div>
  );
}
