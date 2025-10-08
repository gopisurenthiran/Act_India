import React, { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const dealers = [
  { id: 1, name: "/assets/slider/1.png", product: "HYDRAULIC EXCAVATOR", img: "/assets/img-01.png", link: "/volvo" },
  { id: 2, name: "/assets/slider/2.png", product: "COMBI CUTTER", img: "/assets/img-02.png", link: "/epiroc" },
  { id: 3, name: "/assets/slider/3.png", product: "TRACKED PAVER", img: "/assets/img-03.png", link: "/ammann" },
  { id: 4, name: "/assets/slider/4.png", product: "SOIL COMPACTORS", img: "/assets/img-04.png", link: "/sdlg" },
];

export default function DealersSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((p) => (p - 1 + dealers.length) % dealers.length);
  const nextSlide = () => setIndex((p) => (p + 1) % dealers.length);

  // wrap-around 3 visible cards
  const visible = [0, 1, 2].map((i) => dealers[(index + i) % dealers.length]);

  return (
    <section className="w-full text-white">
      <div className="bg-gradient-primary py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header + nav */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold font-primary"
              >
                Dealers
              </motion.h2>
              <span className="block w-16 border-b-2 border-white sm:text-left lg:mx-0 mb-4 mt-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-2 text-lg md:text-xl font-secondary font-bold"
              >
                ACT India delivers sustainable <br /> C&amp;D solutions nationwide.
              </motion.p>
            </div>

            <div className="flex gap-6 mt-6 md:mt-0">
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <MoveLeft size={34} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <MoveRight size={34} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="mt-10">
            {/* ✅ Mobile (horizontal scroll) */}
            <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide">
              <AnimatePresence mode="wait">
                {visible.map((dealer) => (
                  <motion.div
                    key={`mobile-${dealer.id}-${dealer.product}`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white text-black shadow-lg 
                               flex flex-col items-start justify-between 
                               hover:shadow-2xl hover:scale-105 transition 
                               w-72 h-[360px] p-6 text-left 
                               flex-shrink-0 snap-center"
                  >
                

                    <div>
                      <img
                        src={dealer.name}
                        alt={dealer.product}
                        className="h-10 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    

                    <MotionLink
                      to={dealer.link}
                      whileHover={{ x: 5 }}
                      className="text-secondary font-primary font-semibold flex items-center gap-1"
                    >
                      Learn More →
                    </MotionLink>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ✅ Desktop (grid, no scroll) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {visible.map((dealer) => (
                  <motion.div
                    key={`desktop-${dealer.id}-${dealer.product}`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white text-black shadow-lg 
                               flex flex-col items-start justify-between 
                               hover:shadow-2xl hover:scale-105 transition 
                               w-80 h-[185px] p-6 text-left"
                  >
                    

                    <div>
                      <img
                        src={dealer.name}
                        alt={dealer.product}
                        className="h-12 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                   

                    <MotionLink
                      to={dealer.link}
                      whileHover={{ x: 5 }}
                      className="text-secondary font-primary font-semibold flex items-center gap-1"
                    >
                      Learn More →
                    </MotionLink>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
