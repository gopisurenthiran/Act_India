import React from "react";

export default function ProductSection() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('assets/act-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-xl md:text-4xl  font-bold text-white mb-4">
          Authorized Dealer of World Class Excavators
        </h1>
        <p className="text-gray-200 mb-6 text-sm md:text-lg">
          ACT Brings the World’s Greatest Excavation Legacy to you!
        </p>
        <a
          href="#"
          className="inline-flex items-center bg-white px-5 py-2  font-semibold text-blue-700  transition"
        >
          Learn More about our Products
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
