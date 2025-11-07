import React from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import { ArrowUpRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stats = [
  { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
  { value: 4500, suffix: "+", label: "Guarded\nMachines" },
  { value: 350, suffix: "+", label: "Drivers\nAchievers" },
  { value: 16, suffix: "+", label: "Expanding\nTamil Nadu, Kerala" },
  { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
];

export default function StatsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#F5F5F5] py-12 rounded-3xl max-w-5xl mx-auto mb-16">
      <div className=" px-6">
        <Slider {...settings}>
          {stats.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className="relative group bg-white text-black rounded-2xl p-8 flex flex-col justify-center transition-all duration-500 hover:bg-secondary cursor-pointer hover:text-white"
              >
                {/* Arrow (hidden until hover) */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-blue-600 w-5 h-5" />
                </div>

                {/* Number */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUp start={0} end={item.value} duration={2} suffix={item.suffix} />
                </h2>

                {/* Label */}
                <p className="text-sm md:text-base leading-snug whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
