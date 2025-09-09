import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Hammer,
  Gauge,
  Zap,
  ArrowLeftRight,
  MoveLeft ,
  MoveRight
} from "lucide-react";


const slides = [
{
id: 1,
model: "EC210",
sub: "with Hydraulic Crusher",
strongTop: "Powerful,",
softTop: "precise concrete",
strongBottom: "Demolition.",
image: "/assets/img-01.png",
tapeBg:
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
},
{
id: 2,
model: "EC220",
sub: "with Rock Breaker",
strongTop: "Unmatched,",
softTop: "rock breaking",
strongBottom: "Performance.",
image: "/assets/img-01.png",
tapeBg:
"https://images.unsplash.com/photo-1581090700227-4c4f50b8e8f2?q=80&w=1920&auto=format&fit=crop",
},
{
id: 3,
model: "EC240",
sub: "with Demolition Shear",
strongTop: "Efficient,",
softTop: "steel cutting",
strongBottom: "Solution.",
image: "/assets/img-01.png",
tapeBg:
"https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1920&auto=format&fit=crop",
},
{
id: 4,
model: "EC250",
sub: "with Hydraulic Hammer",
strongTop: "Heavy,",
softTop: "impact force",
strongBottom: "Delivered.",
image: "/assets/img-01.png",
tapeBg:
"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop",
},
{
id: 5,
model: "EC300",
sub: "with Multi-Processor",
strongTop: "Versatile,",
softTop: "all-in-one",
strongBottom: "Demolition Tool.",
image: "/assets/img-01.png",
tapeBg:
"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1920&auto=format&fit=crop",
},
];

export default function ServicesSlider({ autoPlay = true, interval = 6500 }) {
  const [idx, setIdx] = useState(0);
  const [drag, setDrag] = useState(null);
  const timer = useRef(null);

  const go = (n) => setIdx((p) => (p + n + slides.length) % slides.length);
  const goTo = (n) => setIdx(((n % slides.length) + slides.length) % slides.length);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    clearInterval(timer.current);
    timer.current = setInterval(() => go(1), interval);
    return () => clearInterval(timer.current);
  }, [idx, autoPlay, interval]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // drag/swipe
  const onPointerDown = (e) => setDrag({ x: px(e), t: Date.now() });
  const onPointerUp = (e) => {
    if (!drag) return;
    const dx = px(e) - drag.x;
    const dt = Date.now() - drag.t;
    if (Math.abs(dx) > 60 || (Math.abs(dx) > 30 && dt < 300)) go(dx < 0 ? 1 : -1);
    setDrag(null);
  };
  const px = (e) => e.clientX ?? e.touches?.[0]?.clientX ?? 0;

  const s = slides[idx];

  return (
    <section className="w-full bg-white">
      {/* ===== HERO ===== */}
      <div
        className="relative mx-auto max-w-[1360px] px-4 md:px-6 pt-8 md:pt-10 overflow-hidden"
        onMouseDown={onPointerDown}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
      >
        {/* Diagonal photo tape */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-[-18%] right-[28%] -z-10"
          style={{
            backgroundImage: `url(${s.tapeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0% 100%, 45% 100%, 85% 0%, 40% 0%)",
            WebkitClipPath: "polygon(0% 100%, 45% 100%, 85% 0%, 40% 0%)",
          }}
        />

        {/* Headline */}
        <div className="pt-2 md:pt-4">
          <h1 className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] font-extrabold text-black">
            {s.strongTop} <span className="text-[#2867F5] font-semibold align-top text-[0.55em] ml-1">{s.softTop}</span>
            <br />
            <span className="relative inline-block">
              {s.strongBottom}
              <span className="block h-[3px] w-[84px] bg-[#2867F5] rounded-full mt-2" />
            </span>
          </h1>
        </div>

        {/* EC210 overlay text + machine */}
        <div className="relative w-full select-none">
          <div className="pointer-events-none absolute left-[12%] top-[8%] text-white font-extrabold tracking-widest text-5xl md:text-6xl lg:text-7xl mix-blend-overlay drop-shadow">
            {s.model}
          </div>

          <img
            src={s.image}
            alt={`${s.model} Excavator`}
            className="mx-auto w-[92%] md:w-[82%] lg:w-[78%] drop-shadow-xl"
            draggable={false}
          />

          {/* Arrow controls (bottom-right like reference) */}
          <div className="absolute right-6 bottom-6 flex items-center gap-6">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="text-[#1b66f0] hover:opacity-80 focus:outline-none"
            >
              <MoveLeft className="h-7 w-7" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="text-[#1b66f0] hover:opacity-80 focus:outline-none"
            >
              <MoveRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* ===== BLUE FEATURE STRIP ===== */}
      <div className="relative w-full bg-gradient-to-r from-sky-900 via-blue-800 to-indigo-900 text-white">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 py-8 md:py-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Title block */}
          <div className="md:col-span-2">
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{s.model} <span className="font-light"> </span></div>
            <div className="text-white/90 text-2xl md:text-3xl font-semibold -mt-1">with</div>
            <div className="text-2xl md:text-3xl font-semibold mt-1">{s.sub}</div>
          </div>

          {/* Tall divider */}
          <div className="hidden md:block h-full w-[2px] bg-white/25 mx-auto" />

          {/* Features with icons + thin separators */}
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 w-full">
            <Feature icon={<Hammer className="h-6 w-6" />} a="Heavy-Duty" b="Demolition" />
            <Divider className="lg:block hidden" />
            <Feature icon={<Gauge className="h-6 w-6" />} a="Precision" b="Control" />
            <Divider className="lg:block hidden" />
            <Feature icon={<Zap className="h-6 w-6" />} a="High" b="Efficiency" />
            <Divider className="lg:block hidden" />
            <Feature icon={<ArrowLeftRight className="h-6 w-6" />} a="Versatile" b="Operation" />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={
              "h-2.5 rounded-full transition-all " +
              (i === idx ? "bg-[#1b66f0] w-8" : "bg-slate-300 w-2.5 hover:bg-slate-400")
            }
          />
        ))}
      </div>
    </section>
  );
}

function Feature({ icon, a, b }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 shrink-0">{icon}</div>
      <div className="text-[18px] md:text-[20px] font-semibold leading-tight">
        <div>{a}</div>
        <div>{b}</div>
      </div>
    </div>
  );
}

function Divider({ className = "" }) {
  return <div className={`h-10 w-px bg-white/25 mx-auto ${className}`} />;
}
