// HomeSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  { id: 1, desktop: "/assets/banner/home-banner-web-1.webp", mobile: "/assets/banner/home-banner-mob-1.webp" },
  { id: 2, desktop: "/assets/banner/home-banner-web-2.webp", mobile: "/assets/banner/home-banner-mob-2.webp" },
  { id: 3, desktop: "/assets/banner/home-banner-web-3.webp", mobile: "/assets/banner/home-banner-mob-3.webp" },
  { id: 4, desktop: "/assets/banner/home-banner-web-4.webp", mobile: "/assets/banner/home-banner-mob-4.webp" },
  { id: 5, desktop: "/assets/banner/home-banner-web-5.webp", mobile: "/assets/banner/home-banner-mob-5.webp" },
];

export default function HomeSection() {
  return (
    <div className="relative w-full overflow-hidden h-[100svh] md:h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop
        allowTouchMove
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-[100svh] md:!h-screen">
            <div className="relative w-full h-[100svh] md:h-screen">
              {/* Desktop image */}
              <img
                src={slide.desktop}
                alt={`Slide ${slide.id} desktop`}
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Mobile image */}
              <img
                src={slide.mobile}
                alt={`Slide ${slide.id} mobile`}
                className="block md:hidden absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
