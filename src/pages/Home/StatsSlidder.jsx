import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const stats = [
  { value: "2500+", label: "SATISFIED CUSTOMERS" },
  { value: "4500+", label: "GUARDED MACHINES" },
  { value: "350+", label: "DRIVEN ACHIEVERS" },
  { value: "16+", label: "EXPANDING TAMIL NADU KERALA" },
  { value: "80+", label: "BUSINESS LEGACY SPAN" },
  { value: "20+", label: "REGIONAL BRAND DOMINANCE" },
];

export default function StatsSlider() {
  return (
    <>
     <section className="bg-gradient-primary from-blue-600 to-blue-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          {stats.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{item.value}</h2>
                <p className="text-sm md:text-base mt-2">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <section>
    <div className="bg-white h-16"></div>
    </section>
    </>
   
  );
}
