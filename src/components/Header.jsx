import React from "react";
import { Search } from "lucide-react"; // icon library

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between z-20 text-white bg-transparent backdrop-blur-sm">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="ACT Logo"
          className="h-10 w-full md:h-12 object-contain"
        />
        
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        {["Home", "Services", "Dealership", "Gallery", "News", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            {item}
          </a>
        ))}

        {/* Search Button */}
        <button className="flex items-center space-x-1 bg-white/20 border border-white rounded-full px-3 py-1 hover:bg-white/30 transition">
          <Search size={16} />
          <span>Search</span>
        </button>
      </nav>
    </header>
  );
}
