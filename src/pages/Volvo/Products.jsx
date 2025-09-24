// ProductsShowcase.jsx
import React, { useState } from "react";

/* ---- Replace these with your real images/titles/subtitles ---- */
const CATEGORIES = ["Products", "Attachments", "Supplies", "Electric Machines"];

const ITEMS = [
  // Products
  { category: "Products", title: "Crawler Excavators", subtitle: "Operating Weight 20T - 90T", img: "/assets/product-1.png" },
  { category: "Products", title: "Articulated Haulers", subtitle: "Payload Capacity 25T - 5T-", img: "/assets/product-2.png" },
  { category: "Products", title: "Wheel Loaders", subtitle: "Static tipping load at full turn 10T - 34T", img: "/assets/product-3.png" },
  { category: "Products", title: "Vibratory Soil Compactor", subtitle: "Operating Weight 11T", img: "/assets/product-4.png" },
  { category: "Products", title: "Vibratory Asphalt Compactor", subtitle: "Operating Weight 9T - 10T", img: "/assets/product-5.png" },
  { category: "Products", title: "Pneumatic Tyre Rollers", subtitle: "Operating Weight 10.5T", img: "/assets/product-6.png" },

  // Attachments
  { category: "Attachments", title: "Quick Couplers", img: "/assets/attach-1.png" },
  { category: "Attachments", title: "Excavator Bucket", subtitle: "Available for 20T - 95T", img: "/assets/attach-2.png" },
  { category: "Attachments", title: "Wheel Loader Buckets", subtitle: "Suitable for 10T - 34T", img: "/assets/attach-3.png" },
  { category: "Attachments", title: "Hydraulic Breakers", subtitle: "Suitable carrier 10T - 100T", img: "/assets/attach-4.png" },
  { category: "Attachments", title: "Wheel Loader Bracket", subtitle: "Suitable Carrier 10T - 34T", img: "/assets/attach-5.png" },
  { category: "Attachments", title: "Wheel Loader Forks", subtitle: "Suitable for 10T - 34T", img: "/assets/attach-6.png" },
  { category: "Attachments", title: "Grapples", subtitle: "Suitable for 10T - 21T", img: "/assets/attach-7.png" },

  // Supplies (use your hero image for the big showcase)
  { category: "Supplies", title: "Genuine Filters", subtitle: "Air / Fuel / Hydraulic", img: "/assets/supplies.png" },

  // EV
  { category: "Electric Machines", title: "Excavator", subtitle: "Operating Weight 50T", img: "/assets/electric-1.png" },
    { category: "Electric Machines", title: "Phenumatic Roller", subtitle: "Operating Weight 11T", img: "/assets/electric-2.png" },
      { category: "Electric Machines", title: "Mini Excavator", subtitle: "Operating Weight 5.5 T", img: "/assets/electric-3.png" },
        { category: "Electric Machines", title: "Double Drum Roller", subtitle: "Operating Weight 3.8T", img: "/assets/electric-4.png" },
];

export default function Products() {
  const [active, setActive] = useState("Products");
  const current = ITEMS.filter((i) => i.category === active);

  return (
    <section className="bg-white text-black py-10 md:py-16">
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
    <article className="bg-white ring-1 ring-gray-100 shadow-[0_8px_55px_-25px_rgba(0,0,0,0.35)] overflow-hidden transition hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.35)]">
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
