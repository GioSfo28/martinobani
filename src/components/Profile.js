import React from "react";
import profileImage from "../assets/MB.jpeg"; // Ensure the correct image is used
import { FaUser } from "react-icons/fa"; // Icon for "Chi sono"
import { motion } from "framer-motion"; // For animations

const Profile = () => {
  // Animation variants for smooth transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.div
        id="ChiSono"
        className="text-center py-16 px-4 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt="Martino Bani"
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full mx-auto shadow-xl border-4 border-white object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-[#4A6FA5]/10 animate-pulse"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-6 tracking-tight">
          Martino Bani
        </h1>
        <p className="text-xl text-gray-600 mt-3 font-medium max-w-3xl mx-auto">
          Consulente Energetico | Esperto in Gestione Utenze | Supporto Fotovoltaico
        </p>
        <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto italic">
          Opero a livello nazionale, offrendo consulenza energetica a privati, micro-imprese e aziende.
        </p>
      </motion.div>

      {/* Chi sono */}
      <motion.div
        className="py-16 px-4 sm:px-6 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A6FA5] mb-6 flex items-center">
            <FaUser className="text-[#4A6FA5] mr-3 text-2xl" />
            Chi sono
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <p className="text-gray-700 leading-relaxed text-justify text-lg">
              Sono Martino Bani, un consulente specializzato nell'ottimizzazione delle spese per energia elettrica e metano. Mi dedico a semplificare la gestione delle utenze, garantendo trasparenza e risparmio senza costi aggiuntivi.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">
              Il mio approccio si basa su <strong>competenza, affidabilità e innovazione</strong>. Offro servizi completi, tra cui:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#4A6FA5] mr-2">•</span> Analisi e confronto delle migliori offerte sul mercato.
              </li>
              <li className="flex items-start">
                <span className="text-[#4A6FA5] mr-2">•</span> Gestione volture, subentri e attivazioni contatori.
              </li>
              <li className="flex items-start">
                <span className="text-[#4A6FA5] mr-2">•</span> Consulenza gratuita per il fotovoltaico e agevolazioni fiscali.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg">
              Con anni di esperienza nel settore energetico, mi impegno a fornire soluzioni personalizzate per ogni cliente, garantendo sempre la massima professionalità e chiarezza.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center py-12 px-4 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <a
          href="#Servizi"
          className="inline-block px-10 py-4 bg-[#4A6FA5] text-white font-semibold rounded-full shadow-xl hover:bg-[#3B5D8A] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50"
        >
          Scopri i miei servizi
        </a>
      </motion.div>
    </div>
  );
};

export default Profile;