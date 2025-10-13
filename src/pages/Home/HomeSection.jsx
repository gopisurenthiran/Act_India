import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  { id: 1, desktop: "/assets/banner/volvo_web.webp", mobile: "/assets/banner/volvo_mobile.webp", link: "/volvo" },
  { id: 2, desktop: "/assets/banner/amman-web.webp", mobile: "/assets/banner/ammann-mobile.webp", link: "/ammann" },
  { id: 3, desktop: "/assets/banner/sdlg-web.webp", mobile: "/assets/banner/sdlg.webp", link: "/sdlg" },
  { id: 4, desktop: "/assets/banner/epiroc-web.webp", mobile: "/assets/banner/epiroc-mobile.webp", link: "/epiroc" },
  { id: 5, desktop: "/assets/banner/husqvarna_web.webp", mobile: "/assets/banner/husqvarna-mobile.webp", link: "/husqvarna" },
];

export default function HomeSection() {
  return (
    <section className="relative w-full overflow-hidden mb-12">
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
            <Link to={slide.link} className="block relative w-full h-full">
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

              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
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
