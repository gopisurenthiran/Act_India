import React, { useState, useEffect } from "react";

const companies = [
  { id: 1, name: "Pact Machines Ltd", description: "Authorised Dealer for VOLVO construction equipment in Kerala", logo: "/assets/img-07.png", link: "#" },
  { id: 2, name: "Bomacrete LLP", description: "Authorised Dealer for VOLVO construction equipment in Kerala", logo: "/assets/img-08.png", link: "#" },
  { id: 3, name: "PACT Power Solutions LLP", description: "Authorised Dealer for VOLVO PENTA / LINDE / KARCHER / COMPAIR / KELLEY in Tamil Nadu", logo: "/assets/img-09.png", link: "#" },
];

export default function CompaniesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const wrap = (i) => (i + companies.length) % companies.length;

  return (
    // Add top padding so content doesn't sit under the fixed header
    // If your header is ~72px tall, pt-20/pt-24 works well. Also add scroll-mt for hash links.
    <section id="group-of-companies" className="pt-24 md:pt-28 scroll-mt-28 py-12">
      {/* Create a stacking context so carousel z-index can't rise above the header */}
      <div className="relative z-0 max-w-6xl mx-auto text-left px-4 isolate">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-12 inline-block relative">
          Group of Companies
          <span className="absolute left-0 bottom-[-6px] w-24 h-[2px] bg-blue-500"></span>
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[320px] md:h-[420px] overflow-hidden">
          {companies.map((company, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === wrap(activeIndex - 1);
            const isNext = index === wrap(activeIndex + 1);

            return (
              <div
                key={company.id}
                // Lower z-indexes so header (z-50) stays on top while scrolling
                className={`absolute transition-all duration-700 ease-in-out bg-white shadow-xl flex items-center gap-6 p-6 rounded-xl
                  ${
                    isActive
                      ? "w-[90%] sm:w-[500px] md:w-[600px] h-[280px] sm:h-[340px] md:h-[300px] scale-100 opacity-100 z-[2] left-1/2 -translate-x-1/2"
                      : isPrev
                      ? "w-[180px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[240px] scale-90 opacity-30 blur-[1px] z-[1] left-[6%]"
                      : isNext
                      ? "w-[180px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[240px] scale-90 opacity-30 blur-[1px] z-[1] right-[6%]"
                      : "hidden"
                  }`}
              >
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Right side - Content */}
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold">{company.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{company.description}</p>
                  <a
                    href={company.link}
                    className="text-blue-600 font-semibold mt-4 inline-flex items-center gap-1"
                    aria-label={`Learn more about ${company.name}`}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
