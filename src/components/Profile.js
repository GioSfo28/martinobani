import React from "react";
import profileImage from "../assets/MB.jpeg";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Profile = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div
      id="Profile"
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 text-center py-12 px-4 sm:px-6 lg:px-8"
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* L'IMMAGINE RIMANE QUI IDENTICA */}
        <motion.div
          className="relative inline-block mb-6"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="relative w-56 h-56 sm:w-64 sm:h-64"
            whileHover={{ boxShadow: "0 0 40px rgba(74, 111, 165, 0.4)" }}
          >
            <img
              src={profileImage}
              alt="Martino Bani"
              className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-500"
            />
            {/* Animated ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#4A6FA5]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow pulse */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#4A6FA5]/20 to-[#357ABD]/20 blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 mt-5 tracking-tight"
          variants={fadeIn}
        >
          <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
            Martino Bani
          </span>
        </motion.h1>

        {/* Subtitles */}
        <motion.p
          className="text-xl sm:text-2xl  text-gray-700 mt-2 font-semibold max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Consulente energetico | Esperto in gestione utenze | Supporto fotovoltaico
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-justify text-gray-600 mt-2 max-w-2xl mx-auto italic"
          variants={fadeIn}
        >
          Opero a livello nazionale, offrendo consulenza energetica a privati, micro-imprese e aziende.
        </motion.p>
      </motion.div>

      {/* Chi sono */}
      <motion.div
        className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3"
            variants={fadeIn}
          >
            <FaUser className="text-[#4A6FA5] text-3xl sm:text-4xl" />
            <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
              Chi sono
            </span>
          </motion.h2>

          {/* Content Box */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl border border-[#4A6FA5]/10 transition-all duration-300"
            variants={fadeIn}
            whileHover={{ y: -4 }}
          >
            <motion.p
              className="text-gray-700 leading-relaxed text-justify text-lg text-center mb-4"
              variants={itemFade}
            >
              Sono <span className="font-bold text-[#4A6FA5]">Martino Bani</span>, un consulente specializzato nell'ottimizzazione delle spese per energia elettrica e metano. Mi dedico a <span className="font-semibold">semplificare la gestione delle utenze</span>, garantendo trasparenza e risparmio senza costi aggiuntivi.
            </motion.p>

            <motion.p
              className="text-gray-700 leading-relaxed text-justify text-lg text-center mb-5"
              variants={itemFade}
            >
              Il mio approccio si basa su <span className="font-bold text-[#4A6FA5]">competenza, affidabilità e innovazione</span>. Offro servizi completi, tra cui:
            </motion.p>

            {/* Services List */}
            <motion.ul
              className="space-y-3 my-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Analisi e confronto delle migliori offerte sul mercato.",
                "Gestione volture, subentri e attivazioni contatori.",
                "Consulenza gratuita per il fotovoltaico e agevolazioni fiscali.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#4A6FA5]/5 transition-colors duration-300"
                  variants={itemFade}
                >
                  <span className="text-[#4A6FA5] text-2xl font-bold flex-shrink-0 mt-0">•</span>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="text-gray-700 text-justify leading-relaxed text-lg text-center"
              variants={itemFade}
            >
              Con anni di esperienza nel settore energetico, mi impegno a fornire soluzioni <span className="font-semibold">personalizzate per ogni cliente</span>, garantendo sempre la massima professionalità e chiarezza.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="relative z-10 text-center py-10 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.a
          href="#Servizi"
          className="inline-block px-10 py-4 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Scopri i miei servizi
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Profile;
