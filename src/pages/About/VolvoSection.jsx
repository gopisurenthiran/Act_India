import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function VolvoSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/volvo-logo.png"
            alt="Volvo Logo"
            className="w-32 mb-4"
          />

          {/* Tagline */}
          <h3 className="text-2xl font-bold leading-snug">
            Strength,<span className="font-light"> Innovation,</span> <br />
            <span className="font-semibold">Reliability.</span>
          </h3>

          {/* Divider */}
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          {/* Image with Left-aligned Arrows */}
          <div className="relative w-full justify-start">
            <img
              src="/assets/volvo.png"
              alt="Volvo Excavator"
              className="w-full"
            />

            {/* Navigation Arrows */}
            <div className="flex justify-start gap-6 mt-4">
              <button className="text-blue-600 hover:text-blue-800 transition">
                <ArrowLeft size={28} />
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition">
                <ArrowRight size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-snug">
            <span className="font-extrabold">Volvo</span>{" "}
            <span className="font-normal">
              Construction Solutions Backed by ACT Expertise
            </span>
          </h2>

          {/* Divider */}
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Volvo is a global leader in trucks, buses, construction equipment,
            and industrial power systems. ACT, through its group company PACT
            Machines Pvt. Ltd., is an authorized dealer for Volvo Construction
            Equipment in Tamil Nadu and Kerala. Volvo operates on strong core
            values: Quality, Safety, and Environmental Care.
          </p>

          {/* Extra Note */}
          <div className="text-sm text-gray-500">
            You're Just a Click Away from Visiting
          </div>

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
