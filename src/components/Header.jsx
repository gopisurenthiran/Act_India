import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // mobile accordion
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop dropdown
  const [timer, setTimer] = useState(null);

  // HASH DROPDOWN DATA
  const dropdowns = {
    Services: [
      { name: "Precare", path: "#precare" },
      { name: "Auxillary Services", path: "#auxillary-services" },
      { name: "EAAS", path: "#eaas" },
      { name: "Operator Training", path: "#training" },
    ],
    Dealers: [
      { name: "Volvo", path: "/dealership" },
      { name: "Epiroc", path: "/epiroc" },
      { name: "SDLG", path: "/sdlg" },
      { name: "Ammann", path: "/ammann" },
      { name: "Husqvarna", path: "/husqvarna" },
    ],
    Infrastructure: [
      { name: "Warehouse & Stockyard", path: "#warehouse" },
      { name: "Machine Stockyard", path: "#machine-stockyard" },
      { name: "Trainings facilities", path: "#training" },
      { name: "Workshop-Chennai", path: "#workshop" },
      { name: "Support Vehicles", path: "#support-vehicles" },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: dropdowns.Services },
    { name: "Dealers", path: "/dealership", dropdown: dropdowns.Dealers },
    {
      name: "Infrastructure",
      path: "/infrastructure",
      dropdown: dropdowns.Infrastructure,
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // handle desktop dropdown hover delay
  const handleEnter = (name) => {
    if (timer) clearTimeout(timer);
    setActiveDropdown(name);
  };

  const handleLeave = () => {
    const newTimer = setTimeout(() => setActiveDropdown(null), 3000); // 3 sec hold
    setTimer(newTimer);
  };

  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-sm">
      <section className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="ACT Logo"
                className="h-10 md:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-primary font-primary">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleEnter(link.name)}
                  onMouseLeave={handleLeave}
                >
                  <a
                    href={link.path}
                    className="hover:text-blue-600 flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  {/* Dropdown */}
                  {activeDropdown === link.name && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56">
                      <ul className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={item.path}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
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
                      <a
                        key={idx}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-medium "
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
