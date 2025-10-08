import React, { useState, useEffect, Fragment } from "react";

/* ---------- Tabs ---------- */
const TABS = ["Products", "Accessories"];

/* ---------- Products data ---------- */
const PRODUCT_SECTIONS = [
  {
    heading: "Products",
    items: [
      {
        title: "Ride On Trowels",
        subtitle: "",
        img: "/assets/hus-1.png",
        link: "https://www.husqvarnaconstruction.com/int/power-trowels/crt36/",
      },
      {
        title: "Wall / Wire Saws",
        subtitle: "Blade size 600 – 1600mm, Cutting Depth 250mm – 730mm",
        img: "/assets/hus-2.png",
        link: "#",
      },
      {
        title: "Power Pack",
        subtitle: "",
        img: "/assets/hus-3.png",
        link: "https://www.husqvarnaconstruction.com/in/power-packs/pp492/",
      },
      {
        title: "Floor Scarifiers",
        subtitle: "Working width 200 – 300mm • 230V / 400V",
        img: "/assets/hus-4.png",
        link: "https://www.husqvarnaconstruction.com/in/floor-scarifiers/bmp215/",
      },
      {
        title: "Floor Grinders",
        subtitle: "Engine Power 15 kW, Grinding width 350 – 850mm",
        img: "/assets/hus-5.png",
        link: "https://www.husqvarnaconstruction.com/int/floor-grinders/pg8s/",
      },
      {
        title: "Dust & Slurry Equipment",
        subtitle: "",
        img: "/assets/hus-6.png",
        link: "https://www.husqvarnaconstruction.com/int/dust-and-slurry-equipment/s26/",
      },
      {
        title: "Floor Saws",
        subtitle: "Cutting Depth 450 – 620mm, Blade Diameter 350 – 1500mm",
        img: "/assets/hus-7.png",
        link: "https://www.husqvarnaconstruction.com/in/floor-saws/fs400lv/",
      },
      {
        title: "Tile and Masonry Saws",
        subtitle: "TS 350E 14”/350mm Cutting Depth 125mm, Blade Diameter 350 mm",
        img: "/assets/hus-8.png",
        link: "https://www.husqvarnaconstruction.com/in/tile-and-masonry-saws/ts300e/",
      },
      {
        title: "Concrete Core Drills",
        subtitle: "Cutting Depth 0 – 450mm",
        img: "/assets/hus-9.png",
        link: "https://www.husqvarnaconstruction.com/int/concrete-core-drills/dm400/",
      },
      {
        title: "Shot Blasters",
        subtitle: "Working width 250 – 500mm • 400V",
        img: "/assets/hus-10.png",
        link: "https://www.husqvarnaconstruction.com/in/shot-blasters/blastrac-1-10dps75/",
      },
      {
        title: "Demolition Equipment",
        subtitle: "1 Ton to 5 Ton Reach tools & Bits • 18kw to 27kw",
        img: "/assets/hus-11.png",
        link: "https://www.husqvarnaconstruction.com/in/demolition-equipment/dxr305/",
      },
    ],
  },
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
        link: "https://www.husqvarnaconstruction.com/in/compactors/lf160-mp-146015104/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-2.png",
        specs: [
          "Centrifugal Force: 20kN",
          "Weight: 681 kg, Drum Width: 650mm",
          "Engine: 5.6 kW / 7.5 Hp",
        ],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lp6500/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-3.png",
        specs: [
          "Centrifugal Force: 36kN",
          "Weight: 245 kg, Plate Width: 500mm",
          "Engine: 3.1 kW / 4.15 Hp (Forward & Rev)",
        ],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lg200/",
      },
      {
        title: "SOIL COMPACTORS",
        img: "/assets/soil-4.png",
        specs: [
          "Weight: 60 kg to 92 kg",
          "Plate Width: 11–13 inch",
          "Diesel | Petrol",
        ],
        link: "https://www.husqvarnaconstruction.com/in/compactors/lt8005/",
      },
    ],
  },
  {
    heading: "Power Cutters",
    items: [
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 155mm",
        img: "/assets/power-1.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k970/",
      },
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 400mm",
        img: "/assets/power-2.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k4000-cut-n-break/",
      },
      {
        title: "Power Cutters",
        subtitle: "Cutting Depth 155mm",
        img: "/assets/power-3.png",
        link: "https://www.husqvarnaconstruction.com/in/power-cutters/k1270-rail/",
      },
    ],
  },
  {
    heading: "Concrete Vibrators",
    items: [
      {
        title: "Poker",
        subtitle:
          "Size: 26 - 90mm; High Frequency Electrical/Mechanical, 5m, 10m, 12m",
        img: "/assets/concrete-1.png",
        link: "https://www.husqvarnaconstruction.com/in/concrete-vibrators/smart/",
      },
      {
        title: "Shutter Vibrator",
        subtitle: "RPM 3000 | 6000",
        img: "/assets/concrete-2.png",
        link: "https://www.husqvarnaconstruction.com/in/concrete-vibrators/er407b/",
      },
    ],
  },
];

/* ---------- Accessories data ---------- */
const ACCESSORIES = [
  {
    img: "/assets/access-1.png",
    link: "https://www.husqvarnaconstruction.com/int/diamond-tools/diamond-blades/vari-cut-s50/",
  },
  {
    img: "/assets/access-2.png",
    link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-blades/el10-cnb/",
  },
  {
    img: "/assets/access-3.png",
    link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-core-drill-bits/elite-drill-d1640/?article=546153502",
  },
  {
    img: "/assets/access-4.png",
    link: "https://www.husqvarnaconstruction.com/in/diamond-tools/diamond-wires/elite-wire-c1000/",
  },
];

/* ---------- Grid ---------- */
function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

/* ---------- Product Card ---------- */
function ProductCard({ img, title, subtitle, link, onClick }) {
  return (
    <article className="bg-white rounded-xl ring-1 ring-gray-100 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] cursor-pointer">
      <div className="p-4" onClick={onClick}>
        <div className="bg-white/60 rounded-lg border border-gray-100/70 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-contain p-6 transition-transform duration-300 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-5 pb-6 text-center">
        <h3 className="uppercase tracking-wide font-extrabold text-[15px] md:text-[16px] text-blue-800">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed">
            {subtitle}
          </p>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-blue-700 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition"
          >
            View Details →
          </a>
        )}
      </div>
    </article>
  );
}

/* ---------- Soil Compactor Card ---------- */
function SoilCard({ img, title, specs = [], link, onClick }) {
  return (
    <article className="bg-white rounded-xl shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] cursor-pointer">
      <div className="p-5" onClick={onClick}>
        <div className="bg-white p-2 border border-gray-200 rounded-lg">
          <img src={img} alt={title} className="object-contain bg-white" />
        </div>
      </div>
      <div className="px-5 pb-6 text-center">
        <h3 className="uppercase tracking-wide font-extrabold text-[14px] md:text-[15px] text-blue-800">
          {title}
        </h3>
        <ul className="mt-2 text-[13px] md:text-[14px] text-neutral-600 leading-relaxed space-y-0.5 text-left inline-block">
          {specs.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-700 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition"
            >
              View Details →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

/* ---------- Accessory Card ---------- */
function AccessoryCard({ img, link, onClick }) {
  return (
    <article
      className="bg-white rounded-xl shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_70px_-32px_rgba(0,0,0,0.35)] cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="rounded-xl bg-white p-2">
          <img
            src={img}
            alt="Accessory"
            className="object-contain bg-white"
            loading="lazy"
          />
        </div>
      </div>
      {link && (
        <div className="pb-5 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 px-5 py-2 bg-blue-700 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition"
            onClick={(e) => e.stopPropagation()}
          >
            View Details →
          </a>
        </div>
      )}
    </article>
  );
}

/* ---------- Modal ---------- */
function ProductModal({ item, onClose }) {
  const images = item.gallery?.length ? item.gallery : [item.img];
  const [index, setIndex] = useState(0);

  const clamp = (n) => (n + images.length) % images.length;
  const goPrev = () => setIndex((i) => clamp(i - 1));
  const goNext = () => setIndex((i) => clamp(i + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/80 text-white text-xl hover:bg-black"
        >
          ×
        </button>

        <div className="relative bg-neutral-50">
          <div className="aspect-[16/9] flex items-center justify-center">
            <img
              key={images[index]}
              src={images[index]}
              alt={`${item.title || "Accessory"} ${index + 1}`}
              className="max-h-[70vh] w-auto object-contain mx-auto"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 text-white h-10 w-10 rounded-full hover:bg-black"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function ProductsShowcase() {
  const [active, setActive] = useState("Products");
  const [selected, setSelected] = useState(null);

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
                    isActive ? "text-blue-700" : "hover:text-blue-700"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-blue-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Render */}
        {active === "Accessories" ? (
          <Grid>
            {ACCESSORIES.map((a, i) => (
              <AccessoryCard
                key={i}
                {...a}
                onClick={() => setSelected(a)}
              />
            ))}
          </Grid>
        ) : (
          <div className="space-y-10 md:space-y-14">
            {PRODUCT_SECTIONS.map((section, si) => (
              <Fragment key={si}>
                <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-neutral-900">
                  {section.heading}
                </h2>
                <Grid>
                  {section.items.map((p, i) =>
                    section.heading.toLowerCase() === "soil compactors" ? (
                      <SoilCard key={i} {...p} onClick={() => setSelected(p)} />
                    ) : (
                      <ProductCard
                        key={i}
                        {...p}
                        onClick={() => setSelected(p)}
                      />
                    )
                  )}
                </Grid>
              </Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
