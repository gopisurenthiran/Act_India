import React, { useState, useEffect, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const dealers = [
  { id: 1, logo: "/assets/dealer-1.svg", title: "Mfg of Heavy Construction Equipment & Road Machinery", link: "/volvo" },
  { id: 2, logo: "/assets/epiroc-final.svg", title: "Hydraulic Attachments", link: "/epiroc" },
  { id: 3, logo: "/assets/sdlg.png", title: "Construction Equipment", link: "/sdlg" },
  { id: 4, logo: "/assets/husqvarna-final.svg", title: "Road Machinery", link: "/husqvarna" },
  { id: 5, logo: "/assets/dealer-4.svg", title: "Mfg of Heavy Construction Equipment", link: "/ammann" },
];

export default function DealersSection() {
  const [index, setIndex] = useState(0);
  const mobileRef = useRef(null);

  // Desktop navigation
  const prevSlide = () => setIndex((p) => (p - 1 + dealers.length) % dealers.length);
  const nextSlide = () => setIndex((p) => (p + 1) % dealers.length);

  // Desktop visible cards
  const visible = Array.from({ length: 3 }, (_, i) => dealers[(index + i) % dealers.length]);

  // Autoplay for desktop
  useEffect(() => {
    const auto = setInterval(nextSlide, 3000);
    return () => clearInterval(auto);
  }, []);

  // Mobile scroll
  const scrollMobile = (direction) => {
    if (!mobileRef.current) return;
    const card = mobileRef.current.querySelector(":scope > *");
    const gap = 24; // same as CSS gap-6
    const scrollAmount = (card?.offsetWidth || 288) + gap;
    mobileRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full text-white">
      <div className="bg-[#F5F5F5] py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl text-black font-bold font-primary"
              >
                Brand partner
              </motion.h2>
              <span className="block w-16 border-b-2 border-black mb-4 mt-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-2 text-lg md:text-xl text-black font-secondary font-bold"
              >
                ACT India delivers sustainable <br /> C&amp;D solutions nationwide.
              </motion.p>
            </div>

            {/* Desktop arrows top-right */}
            <div className="hidden sm:flex gap-6 mt-6 md:mt-0">
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="p-2 rounded-full bg-black  transition"
              >
                <MoveLeft size={34} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next"
                className="p-2 rounded-full bg-black transition"
              >
                <MoveRight size={34} />
              </button>
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={() => scrollMobile("prev")}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <MoveLeft size={28} />
            </button>
            <button
              onClick={() => scrollMobile("next")}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <MoveRight size={28} />
            </button>
          </div>

        {/* Mobile Carousel */}
<div className="sm:hidden mt-4">
  <div
    ref={mobileRef}
    className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide scroll-smooth"
  >
    {dealers.map((dealer) => (
      <motion.div
        key={dealer.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white text-black shadow-lg flex flex-col justify-between
                   hover:shadow-xl hover:scale-[1.02] transition-all
                   w-64 h-[200px] p-4 flex-shrink-0 snap-center"
      >
        <img src={dealer.logo} alt={dealer.title} className="h-10 object-contain" />
        <p className="mt-3 text-sm font-secondary">{dealer.title}</p>
        <MotionLink
          to={dealer.link}
          whileHover={{ x: 4 }}
          className="text-secondary font-primary font-semibold mt-3"
        >
          Learn More →
        </MotionLink>
      </motion.div>
    ))}
  </div>
</div>


          {/* Desktop Carousel */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 relative">
            <AnimatePresence mode="wait">
              {visible.map((dealer) => (
                <motion.div
                  key={dealer.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white text-black shadow-lg
                             flex flex-col items-start justify-between
                             hover:shadow-2xl hover:scale-105 transition
                             w-80 h-[185px] p-6 text-left"
                >
                  <img src={dealer.logo} alt={dealer.title} className="h-12 object-contain" />
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
    </section>
  );
}
