import React from "react";
import { FaHome, FaPhone, FaVideo, FaLightbulb, FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import Italy from "../assets/italy.png";

const Activities = () => {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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

  const services = [
    {
      title: "Nuove attivazioni",
      description: "Assistenza completa per attivazione contatori preposati.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Cambio fornitore",
      description: "Analisi approfondita e proposte convenienti verso compagnie più competitive.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Volture",
      description: "Supporto e gestione pratiche per cambio intestatario utenze (voltura ordinaria / mortis causa).",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Subentri",
      description: "Assistenza e compilazione pratiche per attivazione forniture cessate o sospese per morosità.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Posa contatori definitivi e temporanei",
      description: "Aiuto pratico nell'attività di contrattualistica e documentazione di conformità necessaria.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Aumento/Diminuzione potenza (Luce)",
      description: "Supporto e valutazione per adeguamento potenza su contatori elettrici.",
      icons: [{ component: FaLightbulb, color: "text-yellow-500" }],
    },
    {
      title: "Aumento/Diminuzione portata termica (Gas)",
      description: "Regolazione della portata termica del metano secondo le tue necessità.",
      icons: [{ component: FaFire, color: "text-red-600" }],
    },
    {
      title: "Modifica tensione (Luce)",
      description: "Adattamento della tensione elettrica in base ai tuoi bisogni specifici.",
      icons: [{ component: FaLightbulb, color: "text-yellow-500" }],
    },
    {
      title: "Cambio fornitore + Voltura contestuale",
      description: "Gestione switch con tariffa ottimale e assegnazione contestuale nuovo intestatario.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Agevolazione accise Gas",
      description: "Per aziende: agevolazione imposte erariali in base al codice ateco dell'attività.",
      icons: [{ component: FaFire, color: "text-red-600" }],
    },
    {
      title: "Agevolazione IVA Luce e Gas",
      description: "Per aziende: valutazione fattibilità per aventi diritto ad iva ridotta.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
    {
      title: "Offerte dedicate",
      description: "Per condomini, associazioni, enti locali ed ecclesiastici.",
      icons: [
        { component: FaLightbulb, color: "text-yellow-500" },
        { component: FaFire, color: "text-red-600" },
      ],
    },
  ];

  const activityMethods = [
    { icon: FaHome, label: "A domicilio" },
    { icon: FaPhone, label: "Telefonicamente" },
    { icon: FaVideo, label: "In videocall" },
  ];

  return (
    <>
      {/* Come lo faccio Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Title */}
            <motion.h3
              className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-tight"
              variants={fadeIn}
            >
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Come lo faccio
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 text-justify max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Offro una <span className="font-bold text-[#4A6FA5]">consulenza energetica gratuita e personalizzata</span>, durante la quale ti farò alcune domande ed analizzerò le tue bollette per capire esattamente come posso aiutarti.
            </motion.p>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Map */}
              <motion.div
                className="flex justify-center"
                variants={cardFadeIn}
              >
                <motion.img
                  src={Italy}
                  alt="Mappa d'Italia"
                  className="w-64 h-64 object-contain rounded-2xl shadow-xl border-4 border-white hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed text-justify"
                  variants={itemFade}
                >
                  Mi trovo ad <span className="font-bold text-[#4A6FA5]">Ancona (Marche)</span>, ma posso operare su <span className="font-semibold">tutto il territorio nazionale</span>.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-700 leading-relaxed text-justify"
                  variants={itemFade}
                >
                  In base alle tue esigenze, l'attività può essere svolta:
                </motion.p>

                {/* Activity Methods */}
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {activityMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#4A6FA5]/5 transition-colors duration-300"
                        variants={itemFade}
                      >
                        <Icon className="text-3xl text-[#4A6FA5] flex-shrink-0" />
                        <span className="text-gray-700 font-semibold text-lg">
                          {method.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Additional Info */}
                <motion.div className="pt-2 space-y-3" variants={staggerContainer}>
                  <motion.p
                    className="text-gray-700 leading-relaxed text-justify"
                    variants={itemFade}
                  >
                    Grazie alla mia <span className="font-bold text-[#4A6FA5]">esperienza nei settori di luce e gas</span>, conosco perfettamente tutti gli aspetti tecnici, le dinamiche e le procedure necessarie per muoversi con sicurezza nel mercato libero.
                  </motion.p>

                  <motion.p
                    className="text-gray-700 leading-relaxed text-justify"
                    variants={itemFade}
                  >
                    Mi <span className="font-semibold">aggiorno costantemente</span> per garantire ai miei clienti un supporto professionale e affidabile, semplificando la gestione delle loro utenze.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servizi Section */}
      <section
        id="Servizi"
        className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight"
              variants={fadeIn}
            >
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Scopri tutti i miei servizi
              </span>
            </motion.h2>
            <motion.p
              className="text-2xl sm:text-3xl font-bold text-[#4A6FA5]"
              variants={fadeIn}
            >
              Luce e Gas
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#4A6FA5]/30 transition-all duration-300 overflow-hidden"
                variants={cardFadeIn}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A6FA5]/0 to-[#357ABD]/0 group-hover:from-[#4A6FA5]/5 group-hover:to-[#357ABD]/5 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icons */}
                  <div className="flex gap-2 mb-3">
                    {service.icons.map((icon, idx) => {
                      const IconComponent = icon.component;
                      return (
                        <div
                          key={idx}
                          className={`text-2xl ${icon.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent />
                        </div>
                      );
                    })}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4A6FA5] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base text-justify">
                    {service.description}
                  </p>
                </div>

                {/* Accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <motion.a
              href="#Contatti"
              className="inline-block px-12 py-4 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contattami ora
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Activities;
