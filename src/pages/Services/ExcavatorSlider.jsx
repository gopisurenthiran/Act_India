import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/img1.png",
    label: "EC210",
    heading: (
      <>
        Powerful, <span className="text-blue-600 font-medium">precise concrete</span>{" "}
        <span className="text-black">Demolition.</span>
      </>
    ),
    features: [
      "Heavy-Duty Demolition",
      "Precision Control",
      "High Efficiency",
      "Versatile Operation",
    ],
    highlight: "EC210 with Hydraulic Crusher",
  },
  {
    id: 2,
    image: "/assets/img2.png",
    label: "EC220",
    heading: (
      <>
        Built for <span className="text-blue-600 font-medium">endurance</span>{" "}
        and <span className="text-black">strength.</span>
      </>
    ),
    features: [
      "Fuel Efficient",
      "Operator Comfort",
      "Durable Structure",
      "Eco Friendly",
    ],
    highlight: "EC220 with Rock Breaker",
  },
  {
    id: 3,
    image: "/assets/img3.png",
    label: "EC250",
    heading: (
      <>
        Superior <span className="text-blue-600 font-medium">precision</span>{" "}
        and <span className="text-black">control.</span>
      </>
    ),
    features: [
      "Advanced Hydraulics",
      "Precision Performance",
      "Operator Visibility",
      "Compact Design",
    ],
    highlight: "EC250 with Hydraulic Hammer",
  },
  {
    id: 4,
    image: "/assets/img4.png",
    label: "EC300",
    heading: (
      <>
        Maximum <span className="text-blue-600 font-medium">reach</span> and{" "}
        <span className="text-black">efficiency.</span>
      </>
    ),
    features: [
      "26M High Reach",
      "Stability & Balance",
      "Efficient Operation",
      "Versatile Applications",
    ],
    highlight: "EC300 High Reach Excavator",
  },
  {
    id: 5,
    image: "/assets/img5.png",
    label: "EC350",
    heading: (
      <>
        Designed for <span className="text-blue-600 font-medium">mega projects</span>{" "}
        with <span className="text-black">power.</span>
      </>
    ),
    features: [
      "Heavy Load Capacity",
      "Eco Smart Engine",
      "Long Service Life",
      "Extreme Power",
    ],
    highlight: "EC350 Mega Demolition Excavator",
  },
];

export default function ExcavatorSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto p-6 relative transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left Image with angled background */}
          <div className="relative flex justify-center">
            {/* Diagonal background */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-tr from-green-200 to-sky-200 z-0"></div>
            <div className="relative z-10">
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full max-w-lg object-contain"
              />
              <span className="absolute top-6 left-6 text-white text-3xl font-bold drop-shadow-md">
                {slide.label}
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-right md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              {slide.heading}
            </h2>
            {/* Slider arrows */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Blue Bottom Feature Bar */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white mt-10 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center p-6 text-sm md:text-base font-medium">
            <div className="md:border-r border-white/40">
              <span className="font-bold text-lg">{slide.highlight.split(" ")[0]}</span>{" "}
              {slide.highlight.replace(slide.highlight.split(" ")[0], "")}
            </div>
            {slide.features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  index !== slide.features.length - 1
                    ? "md:border-r border-white/40"
                    : ""
                }`}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
