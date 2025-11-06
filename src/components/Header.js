import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Chi sono", link: "#Profile" },
    { name: "Servizi", link: "#Servizi" },
  ];



  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      if (id) scrollToElement(id);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("top");
          }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
            Martino
          </span>
          <span className="text-gray-900"> Bani</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToElement(item.link.substring(1));
              }}
              className="text-gray-700 hover:text-[#4A6FA5] text-base font-semibold transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a
            href="#Contatti"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("Contatti");
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contatti
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <FaTimes className="text-3xl text-[#4A6FA5]" />
          ) : (
            <FaBars className="text-3xl text-gray-900 hover:text-[#4A6FA5] transition-colors" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement(item.link.substring(1));
            }}
            className="text-2xl font-semibold text-gray-900 hover:text-[#4A6FA5] transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
        <motion.a
          href="#Contatti"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("Contatti");
          }}
          className="px-8 py-3 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] text-white rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Contatti
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default Header;
