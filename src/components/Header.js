import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu Items aggiornati per Martino Bani
  const menuItems = [
    { name: "Chi sono", link: "#ChiSono" },
    { name: "Servizi", link: "#Servizi" }
  ];

  // Funzione per gestire lo scorrimento verso un elemento specifico
      const scrollToElement = (id) => {
          const element = document.getElementById(id);
          if (element) {
              const headerHeight = 80; // Altezza dell'header
              const offset = element.offsetTop - headerHeight;
              window.scrollTo({
                  top: offset,
                  behavior: "smooth", // Scorrimento fluido
              });
          }
      };
  
      // Gestione dell'evento hashchange
      useEffect(() => {
          const handleHashChange = () => {
              const id = window.location.hash.substring(1); // Estrae l'id dall'hash
              if (id) {
                  scrollToElement(id);
              }
          };
  
          // Ascolta il cambio di hash
          window.addEventListener("hashchange", handleHashChange);
  
          // Pulisce l'event listener quando il componente si smonta
          return () => window.removeEventListener("hashchange", handleHashChange);
      }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 transition-all duration-300">
      {/* Contenitore Header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo - Nome professionale */}
        <a
          href="#top"
          className="text-2xl font-extrabold tracking-wide transition-colors duration-300"
          style={{ color: "#4A6FA5" }} // Blu professionale
        >
          Martino <span className="text-gray-800">Bani</span>
        </a>

        {/* Navigazione Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-800 hover:text-[#4A6FA5] text-lg font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* Pulsante Contatti Desktop */}
          <a
            href="#Contatti"
            onClick={(e) => {
              e.preventDefault(); // Previeni il comportamento predefinito del link
              scrollToElement("Contatti"); // Scorri manualmente verso l'elemento
            }}
            className="px-5 py-2 bg-[#4A6FA5] text-white rounded-lg font-semibold hover:bg-[#3B5D8A] transition-colors duration-300 shadow-md"
          >
            Contatti
          </a>
        </nav>

        {/* Menu Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Menu"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl hover:text-[#4A6FA5] transition-colors duration-300" />
          ) : (
            <FaBars className="text-2xl hover:text-[#4A6FA5] transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Navigazione Mobile */}
      <div
        className={`md:hidden bg-white shadow-lg fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{ visibility: menuOpen ? "visible" : "hidden" }} // Fix visibilità
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 hover:text-[#4A6FA5] text-xl font-semibold transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        {/* Pulsante Contatti Mobile */}
        <a
          href="#Contatti"
          onClick={() => setMenuOpen(false)}
          className="px-6 py-3 bg-[#4A6FA5] text-white rounded-lg font-semibold hover:bg-[#3B5D8A] transition-colors duration-300 text-xl shadow-md"
        >
          Contatti
        </a>
      </div>
    </header>
  );
};

export default Header;