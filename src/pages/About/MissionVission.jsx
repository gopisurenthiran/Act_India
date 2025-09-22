// MissionVision.jsx
import React from "react";


export default function MissionVision({
  years = 17,
  missionText = "We will pioneer innovative technology and solutions to customers delivering improved productivity, efficiency, profitability, ensuring high brand recall.",
  visionText = "ACT will enrich the construction and infrastructure sector through innovative technology and solutions.",
  visionImage = "/assets/vision-mission.png",

}) {
  return (
    <section className="bg-white text-neutral-900 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Section Heading */}
        <header className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our <span className="font-extrabold">MISSION</span> &{" "}
            <span className="font-extrabold">VISION</span>
          </h2>
        </header>

        {/* ===== Row 1: Mission (left) • Dots (middle) • Years badge (right) ===== */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Mission label + card */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-3 text-lg font-semibold">Mission</div>
            <div className="bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100">
              <p className="p-5 md:p-6 text-sm md:text-base text-neutral-700 leading-relaxed">
                {missionText}
              </p>
            </div>
          </div>

          {/* Vertical dotted indicator */}
          <div className="col-span-12 lg:col-span-1 hidden lg:flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            </div>
          </div>

          {/* Years badge */}
          <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
            <YearsBadge years={years} />
          </div>
        </div>

        {/* ===== Row 2: Vision image (left) • Vision text card (right) ===== */}
        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Vision image with dotted border + label pill */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              

              <div className=" p-3">
                <img
                  src={visionImage}
                  alt="Vision illustration"
                  className="w-[300px] h-full md:h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Vision text card */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-3 text-lg font-semibold">Vision</div>
            <div className="bg-white rounded-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-gray-100">
              <p className="p-5 md:p-6 text-sm md:text-base text-neutral-700 leading-relaxed">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Helper: Gradient circular badge ===== */
function YearsBadge({ years }) {
  return (
 <div className="relative w-48 h-48 md:w-56 md:h-56">
  {/* Background image instead of gradient circle */}
  <img
    src="/assets/mission.png"   // ← replace with your image path
    alt="Years Badge"
    className="absolute inset-0 w-full h-full rounded-full object-cover shadow-[0_25px_60px_-30px_rgba(0,0,0,0.35)]"
  />

  {/* Overlapping Text */}
  <div className="relative flex items-center justify-center w-full h-full text-white text-center px-4">
    <div>
      <div className="text-3xl md:text-4xl font-extrabold leading-tight">
        {years} Years
      </div>
      <div className="mt-1 text-sm md:text-base font-medium opacity-95">
        of Successful Work
      </div>
    </div>
  </div>
</div>


  );
}
