import React from "react";

const infraData = [
  {
    title: "warehouses & stockyards",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "https://via.placeholder.com/100x80/cccccc/000000?text=Img",
  },
  {
    title: "Machine stockyard",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "https://via.placeholder.com/100x80/cccccc/000000?text=Img",
  },
  {
    title: "Trainings facilities",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "https://via.placeholder.com/100x80/cccccc/000000?text=Img",
  },
  {
    title: "Workshop - Chennai",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "https://via.placeholder.com/100x80/cccccc/000000?text=Img",
  },
  {
    title: "Support vehicle",
    desc: "PRECARE is a thoughtfully curated bouquet of support solutions aimed at ensuring 'CUSTOMER SUCCESS' in their respective businesses using our products and services.",
    image: "https://via.placeholder.com/100x80/cccccc/000000?text=Img",
  },
];

export default function Infrastructure() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      {/* Section Heading */}
      <h2 className="text-xl font-semibold mb-2">Infrastructure</h2>
      <p className="text-gray-600 mb-8">
        Infrastructure includes warehouses, machine stockyards, training
        facilities, Chennai workshop, and support vehicles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Large Image */}
        <div className="bg-gray-300 w-full h-[400px] md:h-[400px] rounded-md"></div>

        {/* Right List of Cards */}
        <div className="flex flex-col gap-4">
          {infraData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white shadow border rounded-md overflow-hidden"
            >
              {/* Left Text */}
              <div className="flex-1 p-4">
                <h3 className="font-semibold text-gray-900 mb-1 capitalize">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline"
                >
                  LEARN MORE →
                </a>
              </div>

              {/* Right Thumbnail */}
              <div className="w-32 h-full bg-gray-200 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
