import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  { id: 1, desktop: "/assets/banner/home-banner-web-1.webp", mobile: "/assets/banner/home-banner-mob-1.webp" },
  { id: 2, desktop: "/assets/banner/home-banner-web-2.webp", mobile: "/assets/banner/home-banner-mob-2.webp" },
  { id: 3, desktop: "/assets/banner/home-banner-web-3.webp", mobile: "/assets/banner/home-banner-mob-3.webp" },
  { id: 4, desktop: "/assets/banner/home-banner-web-4.webp", mobile: "/assets/banner/home-banner-mob-4.webp" },
  { id: 5, desktop: "/assets/banner/home-banner-web-5.webp", mobile: "/assets/banner/home-banner-mob-5.webp" },
];

export default function HomeSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        allowTouchMove
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <div className="relative w-full h-full">
              {/* Desktop image */}
              <img
                src={slide.desktop}
                alt={`Slide ${slide.id} desktop`}
                className="hidden md:block w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Mobile image */}
              <img
                src={slide.mobile}
                alt={`Slide ${slide.id} mobile`}
                className="block md:hidden w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Optional gradient overlay for visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Navigation Arrows */}
        <div className="swiper-button-prev-custom absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full transition-all duration-300 shadow-md">
          <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
        </div>

        <div className="swiper-button-next-custom absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full transition-all duration-300 shadow-md">
          <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
        </div>
      </Swiper>
    </section>
  );
}
