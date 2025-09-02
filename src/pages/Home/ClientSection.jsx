import React from "react";

import volvoLogo from "/assets/v.png";
import epirocLogo from "/assets/epiroc.png";
import frannaLogo from "/assets/franna.png";
import ammannLogo from "/assets/amman.png";
import husqvarnaLogo from "/assets/hus.png";
import sdlgLogo from "/assets/sdlg.png";

const logos = [
  { name: "Volvo", image: volvoLogo },
  { name: "Epiroc", image: epirocLogo },
  { name: "Franna", image: frannaLogo },
  { name: "Ammann", image: ammannLogo },
  { name: "Husqvarna", image: husqvarnaLogo },
  { name: "SDLG", image: sdlgLogo },
];

export default function ClientSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 px-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md  flex items-center justify-center w-40 h-20hover:shadow-lg transition"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
