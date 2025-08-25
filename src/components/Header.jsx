import React, { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/assets/excavator.jpg"
        alt="Excavator"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between z-10 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400">ACT</h1>
          <span className="text-xs md:text-sm">Concrete Solutions Providers</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {["Home", "Services", "Dealership", "Gallery", "News", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            )
          )}
          <button className="bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 transition">
            Search
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-white text-black rounded shadow-md p-4 space-y-2 w-48 z-20">
            {["Home", "Services", "Dealership", "Gallery", "News", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block hover:text-blue-500"
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full bg-blue-500 text-white py-1 rounded">
              Search
            </button>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20">
        {/* Welcome Text */}
        <p className="text-white text-sm md:text-base mb-2">
          Welcome to Advanced Construction Technologies
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-lg leading-snug mb-4">
          PIONEER IN INTRODUCING ADVANCED TECHNOLOGIES FOR THE CONSTRUCTION
          INDUSTRY
        </h2>

        {/* Learn More Button */}
        <button className="inline-flex items-center bg-blue-500 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-600 transition">
          Learn More
          <span className="ml-2">→</span>
        </button>

        {/* Address Block */}
        <div className="absolute bottom-6 left-6 md:left-12 flex items-start space-x-2 text-white text-sm md:text-base">
          <MapPin className="text-blue-400 mt-1" />
          <p className="max-w-xs">
            Chennai<br />
            No.5/55, Forest Range Road, Kuthambakkam Post & Village, Poonamalle Taluk,<br />
            Thiruvallur Dist., Chembarambakkam, Chennai, Tamil Nadu 600124
          </p>
        </div>
      </div>
    </div>
  );
}
