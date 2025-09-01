import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Dealership", path: "/dealership" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between z-20 text-white bg-transparent backdrop-blur-sm">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="ACT Logo"
          className="h-10 md:h-12 object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Search Button */}
        <button className="flex items-center space-x-1 bg-white/20 border border-white rounded-full px-3 py-1 hover:bg-white/30 transition">
          <Search size={16} />
          <span>Search</span>
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Search */}
          <button className="flex items-center space-x-2 bg-white/20 border border-white rounded-full px-4 py-2 hover:bg-white/30 transition">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
