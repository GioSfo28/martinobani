import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu Items
  const menuItems = [
    { name: "Chi sono", link: "#ChiSono" },
    { name: "Servizi", link: "#Servizi" },
  ];

  // Animation variants for smooth transitions
  const menuFadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1 },
    },
  };

  const menuItemFade = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Function to handle smooth scrolling to an element
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Header height
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // Handle hashchange event
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      if (id) {
        scrollToElement(id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.header
      className="bg-white shadow-lg fixed top-0 w-full z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contenitore Header */}
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - Nome professionale */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("top");
          }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300"
          style={{ color: "#4A6FA5" }}
        >
          Martino <span className="text-gray-900">Bani</span>
        </a>

        {/* Navigazione Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToElement(item.link.substring(1));
              }}
              className="text-gray-900 hover:text-[#4A6FA5] text-lg font-semibold transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A6FA5] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          {/* Pulsante Contatti Desktop */}
          <a
            href="#Contatti"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("Contatti");
            }}
            className="px-6 py-2 bg-[#4A6FA5] text-white rounded-full font-semibold hover:bg-[#3B5D8A] transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50"
          >
            Contatti
          </a>
        </nav>

        {/* Menu Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <FaTimes className="text-3xl hover:text-[#4A6FA5] transition-colors duration-300" />
          ) : (
            <FaBars className="text-3xl hover:text-[#4A6FA5] transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Navigazione Mobile */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        variants={menuFadeIn}
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement(item.link.substring(1));
            }}
            className="text-gray-900 hover:text-[#4A6FA5] text-2xl font-semibold transition-colors duration-300"
            variants={menuItemFade}
          >
            {item.name}
          </motion.a>
        ))}
        {/* Pulsante Contatti Mobile */}
        <motion.a
          href="#Contatti"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("Contatti");
          }}
          className="px-8 py-3 bg-[#4A6FA5] text-white rounded-full font-semibold hover:bg-[#3B5D8A] transition-all duration-300 text-xl shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50"
          variants={menuItemFade}
        >
          Contatti
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default Header;