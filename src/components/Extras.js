import React from "react";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

const Extras = () => {
  return (
    <section id="Extra" className="py-16 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        {/* Titolo */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          Extra
        </h2>

        {/* Griglia Extra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Siti Internet / Portfolio */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-blue-500 text-4xl mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Siti Internet / Portfolio</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Hai bisogno di un sito internet o portfolio come questo? <br />
              Contattami per maggiori informazioni e per sviluppare la tua presenza online in modo
              professionale e accattivante.
            </p>
          </div>

          {/* Infermiere a P.IVA */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-yellow-500 text-4xl mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Infermiere a P.IVA</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Vuoi saperne di più sul lavoro dell'infermiere a P.IVA per quanto riguarda tasse,
              scadenze, guadagni e organizzazione? 
              Contattami tranquillamente: ti guiderò con suggerimenti pratici ed esperienze dirette.<br />
              <strong> Il servizio è gratuito.</strong>
            </p>
          </div>
        </div>

        {/* Contattami Generale */}
        <div className="text-center mt-12">
          <a
            href="#Contatti"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extras;
