import React, { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dealers = [
  {
    id: 1,
    name: "/logos/volvo.png",
    product: "HYDRAULIC EXCAVATOR",
    img: "/assets/img-01.png",
  },
  {
    id: 2,
    name: "/logos/epiroc.png",
    product: "COMBI CUTTER",
    img: "/assets/img-02.png",
  },
  {
    id: 3,
    name: "/logos/sdlg.png",
    product: "TRACKED PAVER",
    img: "/assets/img-03.png",
  },
  {
    id: 4,
    name: "/logos/franna.png",
    product: "DOZER",
    img: "/assets/img-04.png",
  },
];

export default function DealersSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? dealers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === dealers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full  text-white ">
        <div className="bg-blue-600 py-12">
<div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Header Left + Navigation Right */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          {/* Header Left */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Dealers
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-2 text-lg md:text-xl"
            >
              ACT India delivers sustainable <br /> C&D solutions nationwide.
            </motion.p>
          </div>

          {/* Navigation Right */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <MoveLeft
              size={34}
              className="text-white cursor-pointer hover:scale-125 transition"
              onClick={prevSlide}
            />
            <MoveRight
              size={34}
              className="text-white cursor-pointer hover:scale-125 transition"
              onClick={nextSlide}
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {dealers.slice(index, index + 3).map((dealer) => (
                <motion.div
                  key={dealer.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white text-black shadow-lg 
             flex flex-col items-center justify-between 
             hover:shadow-2xl hover:scale-105 transition 
             w-80 h-[400px] p-6"
                >
                  {/* Product Image */}
                  <motion.img
                    src={dealer.img}
                    alt={dealer.product}
                    className="h-32 object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Dealer Logo */}
                  <div className="mt-3">
                    <img
                      src={dealer.name}
                      alt={dealer.product}
                      className="h-12 object-contain"
                    />
                  </div>

                  {/* Product Title */}
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-md text-lg font-bold mt-3 text-center">
                    {dealer.product}
                  </span>

                  {/* Learn More */}
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-semibold mt-4 flex items-center gap-1"
                  >
                    Learn More →
                  </motion.a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
        </div>
      

      {/* Bottom Section */}
      <div className="bg-white text-center mt-14 py-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-black"
        >
          Sustainable Demolition & Waste <br /> Recycling Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 text-gray-700 text-sm md:text-base max-w-2xl mx-auto"
        >
          ACT offers end-to-end consultancy for eco-friendly C&D waste <br /> recycling
          and demolition using advanced high-reach <br /> equipment up to 26m.
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 font-semibold mt-6 inline-block"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}
