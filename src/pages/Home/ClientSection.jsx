import React from "react";

import volvoLogo from "/assets/v.png";
import epirocLogo from "/assets/epiroc.png";
import ammannLogo from "/assets/amman.png";
import husqvarnaLogo from "/assets/hus.png";
import sdlgLogo from "/assets/sdlg.png";

const logos = [
  { name: "Volvo", image: volvoLogo },
  { name: "Epiroc", image: epirocLogo },
  { name: "Ammann", image: ammannLogo },
  { name: "Husqvarna", image: husqvarnaLogo },
  { name: "SDLG", image: sdlgLogo },
];

export default function ClientSection() {
  return (
    <section className="mt-4 mb-4 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md flex items-center justify-center w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-20 lg:w-[8rem] lg:h-[3rem] hover:shadow-lg transition"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-full max-w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
