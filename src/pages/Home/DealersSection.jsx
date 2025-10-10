import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const dealers = [
  {
    id: 1,
    logo: "/assets/dealer-1.svg",
    title: "Mfg of Heavy Construction Equipment & Road Machinery",
    link: "/volvo",
  },
  {
    id: 2,
    logo: "/assets/dealer-2.svg",
    title: "Hydraulic Attachments",  
    link: "/epiroc",
  },
    {
    id: 3,
    logo: "/assets/dealer-3.svg",
    title: "Construction Equipment",
    link: "/sdlg",
  },
    {
    id: 4,
    logo: "/assets/dealer-5.svg",
    title: "Road Machinery",
    link: "/husqvarna",
  },
  {
    id: 5,
    logo: "/assets/dealer-4.svg",
    title: "Mfg of Heavy Construction Equipment",
    link: "/ammann",
  },


];

export default function DealersSection() {
  const [index, setIndex] = useState(0);

  // next/prev handlers
  const prevSlide = () =>
    setIndex((p) => (p - 1 + dealers.length) % dealers.length);
  const nextSlide = () =>
    setIndex((p) => (p + 1) % dealers.length);

  // orderly wrap-around for 3 visible cards
  const visible = Array.from({ length: 3 }, (_, i) =>
    dealers[(index + i) % dealers.length]
  );

  // optional autoplay every 3s
  useEffect(() => {
    const auto = setInterval(nextSlide, 3000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section className="w-full text-white">
      <div className="bg-gradient-primary py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* ---------- Header ---------- */}
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
              <span className="block w-16 border-b-2 border-white mb-4 mt-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-2 text-lg md:text-xl font-secondary font-bold"
              >
                ACT India delivers sustainable <br /> C&amp;D solutions nationwide.
              </motion.p>
            </div>

            {/* Navigation Arrows */}
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

          {/* ---------- Carousel ---------- */}
          <div className="mt-10">
            {/* ✅ Mobile (horizontal scroll) */}
            <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide">
              {dealers.map((dealer) => (
                <motion.div
                  key={`mobile-${dealer.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white text-black shadow-lg 
                             flex flex-col items-start justify-between 
                             hover:shadow-2xl hover:scale-105 transition 
                             w-72 h-[360px] p-6 text-left 
                             flex-shrink-0 snap-center"
                >
                  <img
                    src={dealer.logo}
                    alt={dealer.title}
                    className="h-10 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-4 text-sm font-secondary">{dealer.title}</p>
                  <MotionLink
                    to={dealer.link}
                    whileHover={{ x: 5 }}
                    className="text-secondary font-primary font-semibold flex items-center gap-1 mt-4"
                  >
                    Learn More →
                  </MotionLink>
                </motion.div>
              ))}
            </div>

            {/* ✅ Desktop (animated 3 visible cards) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {visible.map((dealer) => (
                  <motion.div
                    key={`desktop-${dealer.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white text-black shadow-lg 
                               flex flex-col items-start justify-between 
                               hover:shadow-2xl hover:scale-105 transition 
                               w-80 h-[185px] p-6 text-left"
                  >
                    <img
                      src={dealer.logo}
                      alt={dealer.title}
                      className="h-12 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="mt-2 text-sm font-secondary">{dealer.title}</p>
                    <MotionLink
                      to={dealer.link}
                      whileHover={{ x: 5 }}
                      className="text-secondary font-primary font-semibold flex items-center gap-1 mt-2"
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
