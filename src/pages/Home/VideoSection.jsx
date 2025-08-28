import React from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  return (
    <>
      {/* Video Section with Play Button */}
      <section className="relative flex justify-center items-center">
        {/* Background Image */}
        <img
          src="/assets/section-img.png"
          alt="Video Section"
          className="w-full h-auto object-cover"
        />

        {/* Play Icon Overlay */}
        <FaPlay className="absolute text-blue-600 hover:text-blue-700 transition duration-300 w-16 h-16" />
      </section>
    </>
  );
}
