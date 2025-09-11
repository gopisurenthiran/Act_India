import React from "react";
import { FaCogs, FaUsers, FaBoxOpen } from "react-icons/fa";

export default function AboutACT() {
  return (
    <section className="relative text-white">
      {/* Heading */}
      <div className="text-center pt-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold py-6 text-blue-900 drop-shadow-md font-primary text-primary">
          Discover Excellence with ACT India
        </h2>
      </div>

      <div className="bg-gradient-primary">
        {/* About + Excavator */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 py-10 gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 font-primary">
              About ACT
            </h3>
            <span className="block w-16 border-b-2 border-white mx-auto lg:mx-0 mb-6"></span>

            <p className="text-white text-sm sm:text-base leading-relaxed font-secondary">
              Advanced Construction Technologies Pvt Ltd, ACT was established by
              Mohan Ramanathan as part of a 70 year old business conglomerate
              with multiple business interests. ACT provides a gateway to bring
              new and advanced products and services from across the globe to
              support the Indian Construction Industry. With more than 30 years
              of excellence in the field of construction, ACT remains a leader
              in providing solutions in the forms of equipment and services to
              the construction and infrastructure segments.
            </p>
          </div>

          {/* Right Excavator */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/assets/excavator.png"
              alt="Excavator"
              className="max-h-[280px] sm:max-h-[350px] md:max-h-[400px] w-auto object-contain"
            />
          </div>
        </div>
{/* Stats Section */}
<div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center lg:text-left py-10 px-4 sm:px-6">
  {/* Equipment */}
  <div className="flex flex-col items-center lg:items-start">
    <FaCogs className="text-3xl sm:text-4xl mb-3" />
    <span className="block w-16 border-b border-white mt-3"></span>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">1618 +</h3>
    <p className="uppercase tracking-wide text-xs sm:text-sm mt-1 font-secondary">
      Equipment
    </p>
  </div>

  {/* Customers */}
  <div className="flex flex-col items-center lg:items-start">
    <FaUsers className="text-3xl sm:text-4xl mb-3" />
    <span className="block w-16 border-b border-white mt-3"></span>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">1122 +</h3>
    <p className="uppercase tracking-wide text-xs sm:text-sm mt-1 font-secondary">
      Customers
    </p>
  </div>

  {/* Product Lines */}
  <div className="flex flex-col items-center lg:items-start col-span-2 lg:col-span-1">
    <FaBoxOpen className="text-3xl sm:text-4xl mb-3" />
    <span className="block w-16 border-b border-white mt-3"></span>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">7 +</h3>
    <p className="uppercase tracking-wide text-xs sm:text-sm mt-1 font-secondary">
      Product Lines
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
