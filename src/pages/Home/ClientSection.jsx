import React from "react";

import volvoLogo from "/assets/volvo.svg";
import epirocLogo from "/assets/epiroc-final.svg";
import ammannLogo from "/assets/Ammann.svg";
import husqvarnaLogo from "/assets/husqvarna-final.svg";
import sdlgLogo from "/assets/SDLG.svg";

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
