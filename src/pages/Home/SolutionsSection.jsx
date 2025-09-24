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
          <h2 className="text-3xl md:text-4xl font-bold text-black font-primary">
            Sustainable Demolition & Waste <br /> Recycling Solutions
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-secondary">
            ACT offers end-to-end consultancy for eco-friendly C&D waste
            recycling and demolition using advanced high-reach equipment up to
            26m.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-secondary font-semibold  font-primary"
          >
            Learn More
          </a>
        </motion.div>

     
      </div>
    </section>
  );
}
