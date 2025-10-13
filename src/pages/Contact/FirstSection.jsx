import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function FirstSection() {
  return (
  <div className="relative w-full overflow-hidden mb-12">
       {/* Background Image - Desktop */}
       <img
         src="/assets/banner/sdlg-web.webp"
         alt="Excavator"
         className="hidden md:block w-full h-full object-cover object-center"
       />
 
       {/* Background Image - Mobile */}
       <img
         src="/assets/banner/sdlg_mobile.webp"
         alt="Excavator Mobile"
         className="block md:hidden w-full h-full object-cover object-center"
       />
 
       {/* Overlay Gradient */}
       <div className="absolute inset-0 to-transparent"></div>
 
      
     </div>
  );
}
         
