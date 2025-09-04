import React from "react";
import { VolumeX, Volume2, Leaf } from "lucide-react"; // icons

export default function DemolitionSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
         {/* Right image */}
        <div className="flex justify-center md:justify-end bg-[#F3F3F3]">
          <img
            src="/assets/demolition.png"
            alt="Excavator"
            className="w-full max-w-lg object-contain"
          />
        </div>
        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Experience <span className="font-extrabold">Noise-Free,</span>{" "}
            Efficient Demolition <br/>with Us
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            High Reach demolition excavators reaching up to 26M height with
            various eco friendly hydraulic attachments create a new dimensions
            to urban demolition.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <VolumeX className="w-5 h-5 text-blue-600" />
              <span>Silent Demolition</span>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-blue-600" />
              <span>Quiet Efficiency</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-blue-600" />
              <span>Eco Demolition</span>
            </div>
          </div>

          {/* Dropdown & Button */}
          <div className="mt-8 flex items-center gap-4">
            <select className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
            <a
              href="#"
              className="bg-blue-700 text-white px-6 py-2 rounded font-medium hover:bg-blue-800 transition inline-flex items-center"
            >
              Contact Us →
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
}
