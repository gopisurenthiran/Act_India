import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaUsers, FaBoxOpen } from "react-icons/fa";

export default function AboutACT() {
  return (
    <section className="relative text-white">
      <div className="bg-gradient-primary">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 py-10 gap-10">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>

          {/* Right Excavator */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/excavator.png"
              alt="Excavator"
              className="max-h-[280px] sm:max-h-[350px] md:max-h-[400px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
