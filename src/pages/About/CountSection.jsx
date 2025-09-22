import React from "react";

const stats = [
  { value: "2500+", label: "SATISFIED CUSTOMERS" },
  { value: "4500+", label: "GUARDED MACHINES" },
  { value: "350+", label: "DRIVEN ACHIEVERS" },
  { value: "16+", label: "EXPANDING TAMIL NADU KERALA" },
  { value: "80+", label: "BUSINESS LEGACY SPAN" },
];

export default function CountSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center text-white">
            {stats.map((item, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 mb-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">{item.value}</h2>
                <p className="text-sm md:text-base mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer Section */}
      <section>
        <div className="bg-white h-16"></div>
      </section>
    </>
  );
}
