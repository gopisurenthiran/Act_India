import { Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-12 py-10">
        
        {/* Row 1: Logo */}
        <div className="flex justify-start mb-8">
          <img
            src="/assets/logo.png"
            alt="ACT Logo"
            className="h-14 bg-white p-2 rounded"
          />
        </div>

        {/* Row 2: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Dealership */}
          <div>
            <h3 className="font-bold mb-3">Dealership</h3>
            <ul className="space-y-2 text-sm">
              {[
                "VOLVO",
                "SDLG",
                "EPIROC",
                "WACKER NEUSON",
                "FRANNA",
                "ULTRAFLOOR",
              ].map((brand) => (
                <li key={brand} className="hover:text-gray-300 cursor-pointer">
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold mb-3">Service</h3>
            <ul className="space-y-2 text-sm">
              {["Silent Demolition Contracts", "Recycling"].map((service) => (
                <li
                  key={service}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

         

          

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold mb-3">Get In Touch</h3>
            <label className="block text-sm mb-2">E-mail</label>
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="w-full px-3 py-2 rounded text-black focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs border-t border-white/30 pt-4">
          <p>
            Copyright © Advanced Construction Technologies (P) Ltd. All rights
            reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Instagram className="cursor-pointer hover:text-gray-300" size={18} />
            <Facebook className="cursor-pointer hover:text-gray-300" size={18} />
            <X className="cursor-pointer hover:text-gray-300" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
