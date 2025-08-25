import React from "react";
import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <img
            src="/assets/logo.webp"
            alt="ACT Logo"
            className="h-12 mb-4"
          />
          <p className="text-xs">Concrete Solution Providers</p>
        </div>

        {/* Dealership */}
        <div>
          <h3 className="font-bold mb-3">Dealership</h3>
          <ul className="space-y-2 text-sm">
            {["VOLVO", "SDLG", "EPIROC", "WACKER NEUSON", "FRANNA", "ULTRAFLOOR"].map((brand) => (
              <li key={brand} className="hover:text-gray-300 cursor-pointer">{brand}</li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-bold mb-3">Service</h3>
          <ul className="space-y-2 text-sm">
            {["Silent Demolition Contracts", "Recycling"].map((service) => (
              <li key={service} className="hover:text-gray-300 cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>

        {/* Gallery & News */}
        <div>
          <h3 className="font-bold mb-3">Gallery</h3>
          <ul className="space-y-2 text-sm mb-5">
            {["Photo Gallery", "Video Gallery"].map((item) => (
              <li key={item} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
          <h3 className="font-bold mb-3">News</h3>
          <ul className="space-y-2 text-sm">
            {[
              "ACT Newsletter Oct-2018",
              "ACT Newsletter July-2019",
              "ACT Newsletter Jan-2020",
            ].map((news) => (
              <li key={news} className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
                <span className="bg-white text-red-600 px-1 py-0.5 rounded-sm text-xs font-bold">PDF</span>
                <span>{news}</span>
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

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 text-xs border-t border-white/30 pt-4">
        <p>
          Copyright © Advanced Construction Technologies (P) Ltd. All rights reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Instagram className="cursor-pointer hover:text-gray-300" size={18} />
          <Facebook className="cursor-pointer hover:text-gray-300" size={18} />
          <X className="cursor-pointer hover:text-gray-300" size={18} />
        </div>
      </div>
    </footer>
  );
}
