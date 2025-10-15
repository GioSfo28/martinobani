import React from "react";
import { FaHome, FaPhone, FaVideo, FaLightbulb, FaFire } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // For animations
import Italy from "../assets/italy.png";

const Activities = () => {
  // Animation variants for smooth transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Divisore tra le sezioni */}
      <div className="h-16 bg-gradient-to-b from-transparent to-gray-100"></div>

      {/* Sezione "Come lo faccio" */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#3B5D8A] text-center mb-8 tracking-tight">
              Come lo faccio
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              Offro una consulenza energetica gratuita e personalizzata, durante la quale ti farò alcune domande ed analizzerò le tue bollette per capire esattamente come posso aiutarti.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Mappa d'Italia */}
              <motion.img
                src={Italy}
                alt="Mappa d'Italia"
                className="w-56 h-56 object-contain rounded-xl shadow-md"
                variants={cardFadeIn}
              />
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mi trovo ad Ancona (Marche), ma posso operare su tutto il territorio nazionale.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  In base alle tue esigenze, l'attività può essere svolta:
                </p>
                <ul className="flex flex-col space-y-3 mt-4">
                  <li className="flex items-center space-x-3">
                    <FaHome className="text-2xl text-[#4A6FA5]" />
                    <span className="text-gray-700 font-semibold">A domicilio</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaPhone className="text-2xl text-[#4A6FA5]" />
                    <span className="text-gray-700 font-semibold">Telefonicamente</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaVideo className="text-2xl text-[#4A6FA5]" />
                    <span className="text-gray-700 font-semibold">In videocall</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-6 text-justify">
                  Grazie alla mia esperienza nei settori di luce e gas, conosco perfettamente tutti gli aspetti tecnici, le dinamiche e le procedure necessarie per muoversi con sicurezza nel mercato libero.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                  Mi aggiorno costantemente per garantire ai miei clienti un supporto professionale e affidabile, semplificando la gestione delle loro utenze.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section id="Servizi" className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Titolo Principale */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B5D8A] tracking-tight drop-shadow-md">
              Scopri tutti i miei servizi
            </h2>
            <p className="text-3xl font-bold text-[#4A6FA5] mt-4">Luce e Gas</p>
          </motion.div>

          {/* Lista dei Servizi */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Nuove attivazioni",
                description: "Assistenza completa per attivazione contatori preposati.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Cambio fornitore",
                description: "Analisi approfondita e proposte convenienti verso compagnie più competitive.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Volture",
                description: "Supporto e gestione pratiche per cambio intestatario utenze (voltura ordinaria / mortis causa).",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Subentri",
                description: "Assistenza e compilazione pratiche per attivazione forniture cessate o sospese per morosità.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Posa contatori definitivi e temporanei",
                description: "Aiuto pratico nell'attività di contrattualistica e documentazione di conformità necessaria per impianto e posa di nuovi contatori.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Aumento/Diminuzione potenza (Luce)",
                description: "Supporto e valutazione per adeguamento potenza su contatori elettrici.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />],
              },
              {
                title: "Aumento/Diminuzione portata termica (Gas)",
                description: "Regolazione della portata termica del metano secondo le tue necessità.",
                icons: [<FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Modifica tensione (Luce)",
                description: "Adattamento della tensione elettrica in base ai tuoi bisogni specifici.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />],
              },
              {
                title: "Cambio fornitore + Voltura contestuale",
                description: "Gestione switch con tariffa ottimale e assegnazione contestuale nuovo intestatario.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Agevolazione accise Gas",
                description: "Per aziende: agevolazione imposte erariali in base al codice ateco dell'attività.",
                icons: [<FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Agevolazione IVA Luce e Gas",
                description: "Per aziende: valutazione fattibilità per aventi diritto ad iva ridotta.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
              {
                title: "Offerte dedicate",
                description: "Per condomini, associazioni, enti locali ed ecclesiastici.",
                icons: [<FaLightbulb className="text-2xl text-yellow-500" />, <FaFire className="text-2xl text-red-600" />],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={cardFadeIn}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {service.icons}
                  <h3 className="text-xl font-bold text-[#4A6FA5]">{service.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Pulsante Contatti */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <a
              href="#Contatti"
              className="inline-block px-10 py-4 bg-[#4A6FA5] text-white font-semibold rounded-full shadow-xl hover:bg-[#3B5D8A] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50"
            >
              Contattami ora
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Activities;