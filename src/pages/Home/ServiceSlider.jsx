import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample data
const data = [
  {
    title: "precare",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    icons: ["📋", "⚙️", "✔️", "🛡️"],
    image: "https://via.placeholder.com/250x180/cccccc/000000?text=Image+1",
  },
  {
    title: "Auxillary service solutions",
    desc: "Comprehensive heavy equipment refurbishment — from hard-facing and bush replacements to structural welding, bucket rebuilds, and track link reconditioning.",
    icons: ["🔧", "🔄", "🔩", "🖼️"],
    image: "https://via.placeholder.com/250x180/cccccc/000000?text=Image+2",
  },
  {
    title: "Equipment-as-a-Service",
    desc: "Equipment-as-a-Service (EaaS) provides flexible access to VOLVO machines, ensuring optimum efficiency and performance without long-term commitments.",
    icons: ["🏗️", "📊", "💻", "⚡"],
    image: "https://via.placeholder.com/250x180/cccccc/000000?text=Image+3",
  },
  {
    title: "Operator training & certification",
    desc: "We conduct annual ESC certification programs to gain participants in safe and efficient equipment operation.",
    icons: ["🎓", "✔️", "⚙️", "🛠️"],
    image: "https://via.placeholder.com/250x180/cccccc/000000?text=Image+4",
  },
];

export default function ServiceSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Ensure refs exist before Swiper tries to attach
    console.log("Prev Button:", prevRef.current);
    console.log("Next Button:", nextRef.current);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 relative px-4">
      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-3"
      >
        <FaArrowLeft className="text-2xl text-blue-600" />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-3"
      >
        <FaArrowRight className="text-2xl text-blue-600" />
      </button>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={30}
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex border">
              {/* Left Content */}
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2 border-b-2 border-blue-600 inline-block">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex gap-4 text-blue-600 text-2xl mb-4">
                    {item.icons.map((icon, idx) => (
                      <span key={idx}>{icon}</span>
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-sm flex items-center gap-2"
                >
                  LEARN MORE →
                </a>
              </div>

              {/* Right Image */}
              <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
