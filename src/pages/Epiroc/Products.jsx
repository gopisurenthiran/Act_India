// ProductsShowcase.jsx
import React, { useState } from "react";

/* ---- Replace these with your real images/titles/subtitles ---- */
const CATEGORIES = ["Products","Supplies"];

const ITEMS = [
  // Products
{ category: "Products", title: "Hydraulic Breaker", subtitle: "SB Range (2.5T - 13T), MB Range (10T - 32T), HB Range (22T - 140T)", img: "/assets/1.png" },
{ category: "Products", title: "Bulk Pulverizer", subtitle: "(18T - 40T)", img: "/assets/2.png" },
{ category: "Products", title: "Combi Cutter", subtitle: "(13T - 85T)", img: "/assets/3.png" },
{ category: "Products", title: "Drum Cutter", subtitle: "(0.6T - 125T)", img: "/assets/4.png" },
{ category: "Products", title: "Steel Shears", subtitle: "Carrier Weight – Boom (2T - 65T), Stick (14T - 110T)", img: "/assets/5.png" },
{ category: "Products", title: "Crusher Bucket", subtitle: "(18T - 54T)", img: "/assets/6.png" },
{ category: "Products", title: "Compactor", subtitle: "(1T - 40T)", img: "/assets/7.png" },
{ category: "Products", title: "Multi Grab", subtitle: "16T - 100T", img: "/assets/8.png" },
{ category: "Products", title: "Magnet", subtitle: "(12T - 43T)", img: "/assets/9.png" },



  // Supplies (use your hero image for the big showcase)
  { category: "Supplies",  img: "/assets/supplies-2.png" },

];

export default function Products() {
  const [active, setActive] = useState("Products");
  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-white text-neutral-900 py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <nav className="flex gap-6 text-sm font-medium">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative py-3 -mb-px transition-colors ${
                    isActive ? "text-primary" : " hover:text-primary"
                  }`}
                >
                  {c}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Supplies: big showcase with dotted blue frame */}
        {active === "Supplies" ? (
          <div className="mx-auto">
            <div className=" p-2">
              <div className="">
                <img
                  src={current[0]?.img}
                  alt={current[0]?.title || "Supplies"}
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>
          </div>
        ) : (
          // Default grid for other tabs
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((p, i) => (
              <ProductCard key={`${p.title}-${i}`} {...p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ img, title, subtitle }) {
  return (
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)]">
      <div className="p-4">
        <div className="overflow-hidden">
          <img
            src={img}
            alt={title}
            className=" pt-10 transition-transform duration-300 hover:scale-[1.03]"
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
