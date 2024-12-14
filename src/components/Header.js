import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu Items senza "Chi sono"
  const menuItems = ["Esperienze", "Attività", "Extra"];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 transition-all duration-300">
      {/* Contenitore Header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a
          href="#top"
          className="text-2xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition-colors duration-300"
        >
          Giorgio Sforza - Infermiere
        </a>

        {/* Navigazione Desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(" ", "")}`}
              className="text-gray-700 hover:text-blue-500 text-lg font-semibold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Menu Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Menu"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          ) : (
            <FaBars className="text-2xl hover:text-blue-500 transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Navigazione Mobile */}
      <div
        className={`md:hidden bg-white shadow-lg fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.replace(" ", "")}`}
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-500 text-xl font-semibold transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
