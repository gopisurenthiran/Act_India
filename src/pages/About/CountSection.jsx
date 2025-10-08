import React from "react";
import CountUp from "react-countup";

const stats = [
  { value: 2500, suffix: "+", label: "SATISFIED CUSTOMERS" },
  { value: 4500, suffix: "+", label: "GUARDED\nMACHINES" }, // force 2 lines
  { value: 350, suffix: "+", label: "DRIVEN\nACHIEVERS" }, // force 2 lines
  { value: 16, suffix: "+", label: "EXPANDING TAMIL NADU KERALA" },
  { value: 80, suffix: "+", label: "BUSINESS LEGACY SPAN" },
  
];

export default function StatsSection() {
  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center text-left text-secondary border rounded-md border-secondary focus:border-blue-200 py-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 mb-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  />
                </h2>
                <p className="text-sm md:text-base mt-2 leading-snug whitespace-pre-line text-left">
                  {item.label}
                </p>
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
