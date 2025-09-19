// ProductsShowcase.jsx
import React, { useState, Fragment } from "react";

/* ---------- Tabs ---------- */
const TABS = ["Products", "Accessories"];

/* ---------- Products data ---------- */
const PRODUCT_SECTIONS = [
  {
    heading: "Products",
    items: [
      { title: "Ride On Trowels", subtitle: "", img: "/assets/hus-1.png" },
      { title: "Wall / Wire Saws", subtitle: "Blade size 600 – 1600mm, Cutting Depth 250mm – 730mm", img: "/assets/hus-2.png" },
      { title: "Power Pack", subtitle: "", img: "/assets/hus-3.png" },
      { title: "Floor Scarifiers", subtitle: "Working width 200 – 300mm • 230V / 400V", img: "/assets/hus-4.png" },
      { title: "Floor Grinders", subtitle: "Engine Power 15 kW, Grinding width 350 – 850mm", img: "/assets/hus-5.png" },
      { title: "Dust & Slurry Equipment", subtitle: "", img: "/assets/hus-6.png" },
      { title: "Floor Saws", subtitle: "Cutting Depth 450 – 620mm, Blade Diameter 350 – 1500mm", img: "/assets/hus-7.png" },
      { title: "Tile and Masonry Saws", subtitle: "TS 350E 14”/350mm Cutting Depth 125mm, Blade Diameter 350 mm", img: "/assets/hus-8.png" },
      { title: "Concrete Core Drills", subtitle: "Cutting Depth 0 – 450mm", img: "/assets/hus-9.png" },
      { title: "Shot Blasters", subtitle: "Working width 250 – 500mm • 400V", img: "/assets/hus-10.png" },
      { title: "Demolition Equipment", subtitle: "1 Ton to 5 Ton Reach tools & Bits • 18kw to 27kw", img: "/assets/hus-11.png" },
    ],
  },

  /* ✅ Soil Compactors block (title + specs like screenshot) */
  {
    heading: "Soil Compactors",
    items: [
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-1.png",
        specs: [
          "Centrifugal Force: 25.4kN",
          "Weight: 180 kg, Plate Width: 500mm",
          "Engine: 3.2 kW / 4.3 Hp (Forward)",
        ],
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-2.png",
        specs: [
          "Centrifugal Force: 20kN",
          "Weight: 681 kg, Drum Width: 650mm",
          "Engine: 5.6 kW / 7.5 Hp",
        ],
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-3.png",
        specs: [
          "Centrifugal Force: 36kN",
          "Weight: 245 kg, Plate Width: 500mm",
          "Engine: 3.1 kW / 4.15 Hp (Forward & Rev)",
        ],
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-4.png",
        specs: [
          "Weight: 60 kg to 92 kg",
          "Plate Width: 11–13 inch",
          "Diesel | Petrol",
        ],
      },
    ],
  },

  {
    heading: "Power Cutters",
    items: [
      { title: 'Power Cutters"', subtitle: "Cutting Depth 155mm", img: "/assets/power-1.png" },
      { title: 'Power Cutters"', subtitle: "Cutting Depth 400mm", img: "/assets/power-2.png" },
      { title: 'Power Cutters"', subtitle: "Cutting Depth 155mm", img: "/assets/power-3.png" },
    ],
  },
  {
    heading: "Concrete Vibrators",
    items: [
      { title: "Poker", subtitle: "Size: 26 - 90mm; High Frequency Electrical/Mechanical, 5m, 10m, 12m", img: "/assets/concrete-1.png" },
      { title: "Shutter Vibrator", subtitle: "RPM 3000 | 6000", img: "/assets/concrete-2.png" },
    ],
  },
];

/* ---------- Accessories data (image-only cards) ---------- */
const ACCESSORIES = [
  {  img: "/assets/access-1.png" },
  { img: "/assets/access-2.png" },
  { img: "/assets/access-3.png" },
  {   img: "/assets/access-4.png" },
];

/* ---------- Grid ---------- */
function Grid({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>;
}

/* ---------- Generic product card ---------- */
function ProductCard({ img, title, subtitle, className = "" }) {
  return (
    <article
      className={`bg-white rounded-xl ring-1 ring-gray-100 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="p-4">
        <div className="bg-white/60 rounded-lg border border-gray-100/70 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-44 md:h-52 w-full object-contain p-6 transition-transform duration-300 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-5 pb-5">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-blue-800">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
}

/* ---------- Soil Compactor card (dotted frame + specs) ---------- */
function SoilCard({ img, title, specs, className = "" }) {
  return (
    <article
      className={`bg-white rounded-xl shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="p-5">
        <div className=" bg-white p-2">
          <img
            src={img}
            alt={title}
            className="h-52 md:h-56 w-full object-contain bg-white"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-5 pb-5">
        <h3 className="uppercase tracking-wide font-extrabold text-[14px] md:text-[15px] text-blue-800">
          {title}
        </h3>
        <ul className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed space-y-0.5">
          {specs?.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    </article>
  );
}

/* ---------- Accessory card (dotted frame + title) ---------- */
function AccessoryCard({ img, title, className = "" }) {
  return (
    <article
      className={`bg-white rounded-xl shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="p-5">
        <div className="rounded-xl bg-white p-2">
          <img
            src={img}
            alt={title}
            className="h-52 md:h-56 w-full object-contain bg-white"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-5 pb-5 text-center">
        <h3 className="uppercase tracking-wide font-extrabold text-[14px] md:text-[15px] text-blue-800">
          {title}
        </h3>
      </div>
    </article>
  );
}

/* ---------- Main ---------- */
export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");

  return (
    <section className="bg-white text-neutral-900 py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <nav className="flex gap-6 text-sm font-medium">
            {TABS.map((tab) => {
              const isActive = active === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`relative py-3 -mb-px transition-colors ${
                    isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-neutral-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Render */}
        {active === "Accessories" ? (
          /* ACCESSORIES GRID
             - Centers 1 item on last row via lg:col-start-2
             - Centers 2 items on last row via a spacer cell (only on lg) */
          <Grid>
            {ACCESSORIES.map((a, i) => {
              const total = ACCESSORIES.length;
              const oneLeft = total % 3 === 1 && i === total - 1;
              return (
                <AccessoryCard
                  key={`acc-${i}`}
                  {...a}
                  className={oneLeft ? "lg:col-start-2" : ""}
                />
              );
            })}
            {/* Spacer to center last row when there are 2 items (total % 3 === 2) */}
            {ACCESSORIES.length % 3 === 2 && (
              <div className="hidden lg:block" aria-hidden />
            )}
          </Grid>
        ) : (
          /* PRODUCTS: grouped sections */
          <div className="space-y-10 md:space-y-14">
            {PRODUCT_SECTIONS.map((section, si) => {
              const isSoil = section.heading.toLowerCase() === "soil compactors";
              const total = section.items.length;

              return (
                <Fragment key={si}>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-neutral-900">
                    {section.heading}
                  </h2>

                  <Grid>
                    {section.items.map((p, i) => {
                      // Center a single last-row card on lg by shifting it to column 2
                      const oneLeft = total % 3 === 1 && i === total - 1;
                      const centerSingleOnLg = oneLeft ? "lg:col-start-2" : "";

                      return isSoil ? (
                        <SoilCard key={`${section.heading}-${i}`} {...p} className={centerSingleOnLg} />
                      ) : (
                        <ProductCard key={`${section.heading}-${p.title}-${i}`} {...p} className={centerSingleOnLg} />
                      );
                    })}
                    {/* Spacer to center last row when there are 2 items */}
                    {total % 3 === 2 && <div className="hidden lg:block" aria-hidden />}
                  </Grid>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
