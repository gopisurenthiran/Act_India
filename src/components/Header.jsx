import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timer, setTimer] = useState(null);

  const dropdowns = {
    Dealers: [
      { name: "Volvo", path: "/volvo" },
      { name: "Epiroc", path: "/epiroc" },
      { name: "SDLG", path: "/sdlg" },
      { name: "Ammann", path: "/ammann" },
      { name: "Husqvarna", path: "/husqvarna" },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Dealers", path: "/volvo", dropdown: dropdowns.Dealers },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleEnter = (name) => {
    if (timer) clearTimeout(timer);
    setActiveDropdown(name);
  };

  const handleLeave = () => {
    const newTimer = setTimeout(() => setActiveDropdown(null), 1000);
    setTimer(newTimer);
  };

  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-sm">
      <section className="py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/assets/logo.svg"
                alt="ACT Logo"
                className="h-[2rem] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-primary text-black">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleEnter(link.name)}
                  onMouseLeave={handleLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative flex items-center py-1 hover:text-primary
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                       after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                       ${isActive ? "text-secondary after:scale-x-100" : ""}`
                    }
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </NavLink>

                  {activeDropdown === link.name && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56">
                      <ul className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                `relative block px-4 py-2 text-sm hover:text-primary
                                 after:content-[''] after:absolute after:left-4 after:bottom-0 after:h-[2px] after:w-[calc(100%-2rem)] 
                                 after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                                 ${isActive ? "text-primary font-semibold after:scale-x-100" : ""}`
                              }
                            >
                              {item.name}
                            </NavLink>
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
                  className={({ isActive }) =>
                    `relative py-1 hover:text-primary
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                     after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                     ${isActive ? "text-secondary after:scale-x-100" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Search Button */}
            <button className="flex items-center font-primary border border-blue-600 rounded-full px-3 py-1 hover:bg-gradient-primary hover:text-white transition">
              <Search size={16} />
              <span className="ml-1">Search</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-2 py-6 px-6 md:hidden">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="w-full">
                <button
                  className="w-full flex justify-between items-center py-2 text-sm font-medium hover:text-primary"
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
                      <NavLink
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `relative block py-1 text-sm
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                           after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                           ${isActive ? "text-primary after:scale-x-100" : ""}`
                        }
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
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium
                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                   after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                   ${isActive ? "text-primary after:scale-x-100" : ""}`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          {/* Mobile Search */}
          <button className="flex items-center border border-blue-600 text-primary rounded-full px-4 py-2 mt-2 hover:bg-gradient-primary hover:text-white transition">
            <Search size={18} />
            <span className="ml-1">Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
