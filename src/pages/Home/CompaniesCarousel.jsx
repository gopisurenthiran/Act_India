import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function GroupOfCompanies() {
  return (
    <section className="max-w-6xl mx-auto py-12 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Group of Companies
        </h2>
        <div className="mt-2 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded"></div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-[-30px] flex items-center z-10">
        <button className="swiper-button-prev text-blue-600 hover:text-blue-800 text-2xl">
          &#8592;
        </button>
      </div>
      <div className="absolute inset-y-0 right-[-30px] flex items-center z-10">
        <button className="swiper-button-next text-blue-600 hover:text-blue-800 text-2xl">
          &#8594;
        </button>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        loop={true}
        slidesPerView={1}
        className="px-2"
      >
        {/* ✅ Slide 1 (just put your whole card here) */}
        <SwiperSlide>
          <img src="/assets/slide-1.png" alt="Slide 1" className="w-full" />
        </SwiperSlide>

        {/* ✅ Slide 2 */}
        <SwiperSlide>
          <img src="/assets/slide-2.png" alt="Slide 2" className="w-full" />
        </SwiperSlide>

        {/* ✅ Add more slides */}
        <SwiperSlide>
          <img src="/assets/slide-3.png" alt="Slide 3" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
