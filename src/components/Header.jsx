import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // mobile accordion

  const dropdowns = {
    Services: [
      { name: "Silent Demolition", path: "/services/silent-demolition" },
      { name: "Recycling", path: "/services/recycling" },
    ],
    Dealership: [
      { name: "Volvo", path: "/dealership/volvo" },
      { name: "Epiroc", path: "/dealership/epiroc" },
      { name: "SDLG", path: "/dealership/sdlg" },
      { name: "Franna", path: "/dealership/franna" },
      { name: "Ammann", path: "/dealership/ammann" },
      { name: "Husqvarna", path: "/dealership/husqvarna" },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: dropdowns.Services },
    { name: "Dealership", path: "/dealership", dropdown: dropdowns.Dealership },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-sm">
      <section className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="ACT Logo"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-primary font-primary">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <NavLink
                    to={link.path}
                    className="hover:text-blue-600 flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </NavLink>
                  {/* Dropdown */}
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48">
                    <ul className="py-2">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <NavLink
                            to={item.path}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="hover:text-blue-600"
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Search Button */}
            <button className="flex items-center font-primary text-gradient-primary border border-primary rounded-full px-3 py-1 hover:opacity-90 transition">
  <Search size={16} />
  <span className="ml-1">Search</span>
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
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-2 py-6 px-6 md:hidden transition-all duration-300">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="w-full">
                <button
                  className="w-full flex justify-between items-center py-2 text-sm font-medium hover:text-blue-600 font-primary"
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.name && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item, idx) => (
                      <NavLink
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-sm hover:text-blue-600"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-medium hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            )
          )}

          {/* Mobile Search */}
          <button className="flex items-center border border-blue-600 text-blue-600 rounded-full px-4 py-2 mt-2 hover:bg-blue-600 hover:text-white transition font-primary">
            <Search size={18} />
            <span className="ml-1">Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
