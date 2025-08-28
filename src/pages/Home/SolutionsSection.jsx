import React from "react";
import { Volume2, Scissors, Building2, Recycle } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Sustainable Demolition & Waste <br /> Recycling Solutions
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            ACT offers end-to-end consultancy for eco-friendly C&D waste
            recycling and demolition using advanced high-reach equipment up to
            26m.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
          >
            Learn More
          </a>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row md:divide-x md:divide-gray-300 gap-12 md:gap-0">
          {/* Silent Demolition */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 px-6 flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold border-b-2 border-blue-600 inline-block pb-1">
                Silent Demolition
              </h3>
              <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                High Reach demolition excavators reaching up to 26M height with
                various eco-friendly hydraulic attachments create new dimensions
                to urban demolition.
              </p>

              {/* Icons */}
              <div className="flex justify-center md:justify-start gap-4 text-blue-600 mt-4">
                <Volume2 className="hover:scale-110 transition-transform" size={22} />
                <Scissors className="hover:scale-110 transition-transform" size={22} />
                <Building2 className="hover:scale-110 transition-transform" size={22} />
                <Recycle className="hover:scale-110 transition-transform" size={22} />
              </div>

              {/* Learn More */}
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/img-05.png"
              alt="Silent Demolition"
              className="h-56 object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Recycling */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 px-6 flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold border-b-2 border-blue-600 inline-block pb-1">
                Recycling
              </h3>
              <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                ACT offers end-to-end consultancy solutions for sustainable
                Construction & Demolition (C&D) waste recycling to conserve
                resources and reduce landfill burden.
              </p>

              {/* Icons */}
              <div className="flex justify-center md:justify-start gap-4 text-blue-600 mt-4">
                <Volume2 className="hover:scale-110 transition-transform" size={22} />
                <Scissors className="hover:scale-110 transition-transform" size={22} />
                <Building2 className="hover:scale-110 transition-transform" size={22} />
                <Recycle className="hover:scale-110 transition-transform" size={22} />
              </div>

              {/* Learn More */}
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/img-06.png"
              alt="Recycling"
              className="h-56 object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
