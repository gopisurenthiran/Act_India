import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
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

      
    </div>
  );
}
