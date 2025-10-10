import React from "react";

export default function GridPage() {
  return (
       <section className="w-full px-4 md:px-6 lg:px-8 py-6 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {/* ---------- Column 1 ---------- */}
        <div className="grid gap-4">
          <img
            src="/assets/r1-1.jpg"
            alt="Image 1"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r2-1.jpg"
            alt="Image 2"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r3-1.jpg"
            alt="Image 3"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
        </div>

        {/* ---------- Column 2 ---------- */}
        <div className="grid gap-4">
          <img
            src="/assets/r1-2.jpg"
            alt="Image 1"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r2-2.jpg"
            alt="Image 2"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r3-2.jpg"
            alt="Image 3"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
        </div>

        {/* ---------- Column 3 ---------- */}
        <div className="grid gap-4">
          <img
            src="/assets/r1-3.jpg"
            alt="Image 1"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r2-3.jpg"
            alt="Image 2"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r3-3.jpg"
            alt="Image 3"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
        </div>

        {/* ---------- Column 4 ---------- */}
        <div className="grid gap-4">
          <img
            src="/assets/r1-4.jpg"
            alt="Image 1"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r2-4.jpg"
            alt="Image 2"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
          <img
            src="/assets/r3-4.jpg"
            alt="Image 3"
            className="w-full rounded-lg object-contain bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
}
