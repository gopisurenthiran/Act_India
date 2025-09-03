import React from "react";
import { ArrowRight } from "lucide-react";

export default function Demolition() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6 md:px-12"
      style={{
        backgroundImage: "url('/assets/act-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Description */}
         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
          We provide <span className="font-bold">World Class Noiseless Demolition Services</span>
        </h2>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold">200+</p>
            <p className="text-sm  tracking-wider">Satisfied <br/> Clients</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-white/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold">3000+</p>
            <p className="text-sm  tracking-wider">Demolitions <br/>Completed </p>
          </div>
          <div className="hidden md:block h-12 w-px bg-white/50"></div>
          <div className="text-center">
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm tracking-wider">Pipeline <br/>Projects yearly</p>
          </div>
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#1010BC] font-medium px-6 py-2   transition"
          >
            Book Your Demolition Today <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
