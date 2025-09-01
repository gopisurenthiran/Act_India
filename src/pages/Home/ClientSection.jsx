import React from "react";

export default function ClientSection() {
  return (
    <>
      {/* Logos Section */}
      <section className="bg-white p-10 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center px-4">
          <img src="/logos/volvo.png" alt="Volvo" className="h-10 mx-auto bg-white" />
          <img src="/logos/epiroc.png" alt="Epiroc" className="h-10 mx-auto" />
          <img src="/logos/franna.png" alt="Franna" className="h-10 mx-auto" />
          <img src="/logos/ammann.png" alt="Ammann" className="h-10 mx-auto" />
          <img
            src="/logos/husqvarna.png"
            alt="Husqvarna"
            className="h-10 mx-auto"
          />
          <img src="/logos/sdlg.png" alt="SDLG" className="h-10 mx-auto" />
        </div>
      </section>
    </>
  );
}
