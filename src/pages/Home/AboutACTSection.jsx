import React from "react";
import { FaCogs, FaUsers, FaBoxOpen } from "react-icons/fa";

export default function AboutACT() {
  return (
    <section className="relative  text-white">
      {/* Heading */}
      <div className="text-center pt-10">
        <h2 className="text-3xl md:text-5xl font-bold p-10 text-blue-900 drop-shadow-md">
          Discover Excellence with ACT India
        </h2>
      </div>
      <div className="bg-blue-800">
        {/* About + Excavator */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row  items-center px-6 py-12 gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              About ACT
            </h3>
            <span className="block w-16 border-b-2 border-white mb-6"></span>

            <p className="text-white text-sm md:text-base leading-relaxed">
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
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10 px-6">
          {/* Equipment */}
          <div className="flex flex-col items-center">
            <FaCogs className="text-4xl mb-3" />
            <h3 className="text-3xl font-bold">1618 +</h3>
            <p className="uppercase tracking-wide text-sm mt-1">Equipment</p>
            <span className="block w-16 border-b border-white mt-3"></span>
          </div>

          {/* Customers */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl mb-3" />
            <h3 className="text-3xl font-bold">1122 +</h3>
            <p className="uppercase tracking-wide text-sm mt-1">Customers</p>
            <span className="block w-16 border-b border-white mt-3"></span>
          </div>

          {/* Product Lines */}
          <div className="flex flex-col items-center">
            <FaBoxOpen className="text-4xl mb-3" />
            <h3 className="text-3xl font-bold">7 +</h3>
            <p className="uppercase tracking-wide text-sm mt-1">
              Product Lines
            </p>
            <span className="block w-16 border-b border-white mt-3"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
