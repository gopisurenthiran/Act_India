import React from "react";

const products = [
  { id: 1, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
  { id: 2, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
  { id: 3, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
  { id: 4, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
  { id: 5, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
  { id: 6, name: "Soil Compactor", image: "/assets/soil-compactor.png" },
];

export default function ProductsGrid() {
  return (
    <section className="py-12 px-6 md:px-12">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-lg font-bold relative inline-block">
          Products
          <span className="absolute left-0 -bottom-1 w-12 border-b-2 border-blue-500"></span>
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <p className="text-blue-800 font-semibold tracking-wide">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
