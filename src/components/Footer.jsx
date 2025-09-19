// FooterACT.tsx
import { Instagram, Facebook, X } from "lucide-react";

function PdfDocIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 48 48"
      className="shrink-0"
    >
      <path fill="#fff" d="M8 4h22l10 10v30a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      <path fill="#d32f2f" d="M40 14h-8a2 2 0 0 1-2-2V4z"/>
      <path fill="#d32f2f" d="M10 30h28v10H10z"/>
      <text
        x="14"
        y="38"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="10"
        fill="#fff"
      >
        PDF
      </text>
    </svg>
  );
}

export default function FooterACT() {
  return (
    <footer className="relative text-white">
      <div className="bg-gradient-primary">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-10 lg:px-12 py-8 md:py-10">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/assets/logo.png"
              alt="ACT Logo"
              className="h-12 w-auto rounded bg-white p-2 shadow-sm"
            />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Dealership */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px]">Dealership</h3>
              <ul className="space-y-2 text-[14px] text-white/90">
                {["Volvo", "SDLG", "Epiroc", "Ammann", "Husqvarna"].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Service */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px]">Service</h3>
              <ul className="space-y-2 text-[14px] text-white/90">
                {[
                  "Precare",
                  "Auxiliary service solutions",
                  "Equipments-as-a-Service",
                  "Operator Training & Certification",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Infrastructure */}
            <nav>
              <h3 className="mb-3 font-semibold text-[15px]">Infrastructure</h3>
              <ul className="space-y-2 text-[14px] text-white/90">
                {[
                  "Warehouses & Stockyards",
                  "Machine stockyard",
                  "Trainings facilities",
                  "Workshop - Chennai",
                  "Support vehicle",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* News */}
            <section>
              <h3 className="mb-3 font-semibold text-[15px]">News</h3>
              <ul className="space-y-3">
                {[
                  { title: "ACT Newsletter Oct-2018", href: "#" },
                  { title: "ACT Newsletter July-2019", href: "#" },
                  { title: "ACT Newsletter Jan-2020", href: "#" },
                ].map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="group flex items-center gap-3 text-[14px] text-white/95 hover:text-white transition-colors"
                    >
                      <PdfDocIcon />
                      <span className="underline decoration-transparent group-hover:decoration-white/70 underline-offset-2">
                        {title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Bottom row */}
          <div className="mt-8  pt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/85">
            <p>
              Copyright © Advanced Construction Technologies (P) Ltd. All rights reserved
            </p>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="X" className="hover:text-white">
                <X size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* subtle sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.06),transparent_30%)]" />
    </footer>
  );
}
