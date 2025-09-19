import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function HusqvarnaSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/hus.png"
            alt="Epiroc Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
            Precision,<span className="font-light">Innovation,</span> <br />
            <span className="font-semibold">Trust.</span>
          </h3>

          {/* Divider */}
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          {/* Image with Left-aligned Arrows */}
          <div className="relative w-[400px] justify-start">
            <img
              src="/assets/sdlg-img.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">Husqvarna</span>{" "}
            <span className="font-normal">
             Leading Global Construction Tool Innovation
            </span>
          </h2>

          {/* Divider */}
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
         Husqvarna Construction, a part of the renowned Husqvarna Group, is a global leader in equipment and diamond tools for the light construction industry. Built for professionals shaping concrete, stone, and urban landscapes, our solutions combine cutting-edge technology with uncompromising performance. With a focus on precision and partnership, Husqvarna keeps you ahead of every project, every time. 
          </p>

          {/* Extra Note */}
          <div className="text-sm text-gray-500">
            You're Just a Click Away from Visiting
          </div>
          <span className="block w-10 sm:w-64 md:w-[380px] border-b-2 border-[#0071BB] mt-1"></span>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:underline transition"
          >
            Volvo CE India <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
