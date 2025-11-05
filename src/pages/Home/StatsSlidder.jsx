import React from "react";
import CountUp from "react-countup";

const stats = [
  { value: 2500, suffix: "+", label: "Satisfied\nCustomers" },
  { value: 4500, suffix: "+", label: "Guarded\nMachines" },
  { value: 350, suffix: "+", label: "Drivers\nAchievers" },
  { value: 16, suffix: "+", label: "Expanding\n Tamil Nadu, Kerala" },
  { value: 80, suffix: "+", label: "Business Legacy\nSpan" },
  { value: 20, suffix: "+", label: "Regional Brand\nDominance" },
];


export default function StatsSection() {
  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center text-left text-secondary  py-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 mb-6"
              >
                <h2 className="text-3xl md:text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  />
                </h2>
               <p className="text-sm md:text-[14px] mt-2 leading-snug whitespace-pre-line text-black text-left">
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
