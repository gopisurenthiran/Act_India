// SupportVehicles.jsx
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/assets/support-1.png", label: "Support Vehicles - Slide 1" },
  { src: "/assets/support-2.png", label: "Support Vehicles - Slide 2" },
  { src: "/assets/support-3.png", label: "Support Vehicles - Slide 3" },
];

export default function Support({
  slides = SLIDES,
  title = "Support Vehicles",
  subtitle = "Built for Every Terrain",
  pillText = "Support Vehicles",
  autoplayMs = 4000,
  maxWidth = 540, // width of the framed card (px)
}) {
  const words = title.trim().split(" ");
  const last = words.pop();

  return (
    <section className="w-full bg-white text-neutral-900 py-10" id="support-vehicles">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <header className="text-center mb-6 relative z-10">
          <h2 className="text-[26px] sm:text-[30px] leading-tight font-semibold tracking-[0.01em]">
            {words.join(" ")} <span className="font-extrabold">{last}</span>
          </h2>
          <p className="mt-1 text-[14px] sm:text-[16px] text-neutral-600">
            {subtitle}
          </p>
        </header>

        {/* Perforated blue frame */}
        <div className="relative flex justify-center mt-4">
          <div
            className="
              relative rounded-xl p-[6px] isolate
              before:content-[''] before:absolute before:inset-0 before:rounded-xl
              before:[background:radial-gradient(circle,_rgba(59,130,246,0.9)_1.3px,_transparent_1.3px)]
              before:[background-size:10px_10px]
              before:pointer-events-none
            "
            style={{ maxWidth }}
          >
            {/* Card: aspect ratio + safe min height */}
            <div
              className="relative w-full aspect-[470/299] min-h-[240px] sm:min-h-[280px] overflow-hidden shadow-sm isolate"
              style={{ width: maxWidth }}
            >
              <ImageSlider
                slides={slides}
                pillText={pillText}
                autoplayMs={autoplayMs}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Slider ============== */
function ImageSlider({ slides, pillText, autoplayMs = 4000 }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const next = () => setIdx((p) => (p + 1) % slides.length);
  const prev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);
  const goTo = (i) => setIdx(i);

  // autoplay
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(next, autoplayMs);
    return () => clearInterval(timerRef.current);
  }, [paused, idx, slides.length, autoplayMs]);

  // swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    startX.current = null;
  };

  // keyboard
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Support vehicles slider"
      className="absolute inset-0 overflow-hidden outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides: full-bleed cross-fade */}
      {slides.map((s, i) => (
        <img
          key={s.src + i}
          src={s.src}
          aria-label={s.label}
          role="img"
          loading="lazy"
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Pill — reduced z-index and inside isolated container */}
      <div className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 max-w-[70%] select-none rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 px-2.5 py-[6px] sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-white shadow-lg shadow-blue-500/25">
        <span className="block truncate">{pillText}</span>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-10 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === idx}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              i === idx ? "bg-white/90" : "bg-white/55 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Soft fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/15 to-transparent" />
    </div>
  );
}
