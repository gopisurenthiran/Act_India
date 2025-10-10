// HomeSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

// Banner slide data
const slides = [
  {
    id: 1,
    desktop: "/assets/banner/homepage-web.webp",
    mobile: "/assets/banner/Homepage-mob.webp",
   
  },
  {
    id: 2,
    desktop: "/assets/banner/banner2-web.webp",
    mobile: "/assets/banner/banner2-mob.webp",
   
  },
  {
    id: 3,
    desktop: "/assets/banner/banner3-web.webp",
    mobile: "/assets/banner/banner3-mob.webp",
   
  },
];

export default function HomeSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        effect="fade"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background Image - Desktop */}
              <img
                src={slide.desktop}
                alt={`Slide ${slide.id}`}
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
              />

              {/* Background Image - Mobile */}
              <img
                src={slide.mobile}
                alt={`Slide ${slide.id}`}
                className="block md:hidden absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay (optional gradient or tint) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  absolute 
                  bottom-[3.5rem] left-1/2 transform -translate-x-1/2
                  md:bottom-[10rem] md:left-[23%] md:translate-x-0
                "
              >
              
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
