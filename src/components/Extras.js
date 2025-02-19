import React from "react";
import { FaLaptopCode, FaBriefcase, FaLink } from "react-icons/fa";

const Extras = () => {
  return (
    <>
      {/* Divisore tra le sezioni */}
      <div className="h-16 bg-gradient-to-b from-gray-100 to-transparent"></div>

      <section id="Extra" className="py-16 bg-gradient-to-b from-transparent to-gray-100">
        <div className="container mx-auto px-6">
          {/* Titolo */}
          <h2 className="text-4xl font-bold text-center text-[#3B5D8A] mb-12 tracking-wide">
            Extra
          </h2>

          {/* Griglia Extra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Siti Internet / Portfolio */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-[#4A6FA5] text-4xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Siti Internet / Portfolio</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Hai bisogno di un sito internet o portfolio come questo? <br />
                Contattami per maggiori informazioni e per sviluppare la tua presenza online in modo
                professionale e accattivante.
              </p>
            </div>

            {/* Infermiere a P.IVA */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
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

          {/* Separatore */}
          <div className="my-12 border-t border-gray-300"></div>

          {/* Siti Creati Personalmente */}
          <h3 className="text-3xl font-bold text-center text-[#3B5D8A] mb-8">
            Esempi di siti creati personalmente
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Professioni Sanitarie Help */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaLink className="text-green-600 text-4xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Professioni Sanitarie Help</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un portale dedicato a studenti e professionisti delle professioni sanitarie. Trova risorse, informazioni utili e supporto per la preparazione ai test d’ingresso.
              </p>
              <a
                href="https://www.professionisanitariehelp.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A6FA5] font-semibold hover:underline"
              >
                www.professionisanitariehelp.it
              </a>
            </div>

            {/* Legami di Luce */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FaLink className="text-[#E91E63] text-4xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Legami di Luce</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Un'app di dating cattolico progettata per connettere persone che condividono valori e fede. Crea legami autentici e significativi.
              </p>
              <a
                href="https://www.legamidiluce.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A6FA5] font-semibold hover:underline"
              >
                www.legamidiluce.it
              </a>
            </div>
          </div>

          {/* Contattami Generale */}
          <div className="text-center mt-12">
            <a
              href="#Contatti"
              className="inline-block px-8 py-4 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition-colors duration-300"
            >
              Contattami
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Extras;
