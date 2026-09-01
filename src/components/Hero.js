import React, { useEffect } from "react";
import {
  FaLightbulb,
  FaBriefcase,
  FaFire,
  FaBolt,
  FaUsers,
  FaSolarPanel,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
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
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden py-32">
        {/* Background ... */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1537486336219-a3dd8e2dc6b5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" />

        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ zIndex: 5 }}
        />

        <motion.div
          className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl"
            variants={fadeIn}
          >
            <span className="block">Martino Bani</span>
            <span className="block mt-2 pb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Il tuo consulente energetico di fiducia
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl sm:text-2xl text-gray-100 font-semibold leading-relaxed"
            variants={fadeIn}
          >
            Specializzato nel trovare soluzioni migliori e più trasparenti, nel settore di luce e gas.
          </motion.p>

          <motion.p
            className="mt-8 text-base sm:text-lg lg:text-xl text-yellow-300 font-bold uppercase tracking-wider"
            variants={fadeIn}
          >
            <span className="block">
              ⚡ Ti semplifico la vita facendoti risparmiare tempo e denaro
            </span>
            <span className="block mt-3">
              🔥 NON DOVRAI PIÙ PERDERE ENERGIE A CONTROLLARE SCADENZE E COMPILARE CONTRATTI
            </span>
          </motion.p>

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Che tu sia un privato, un'azienda o un libero professionista, affida
            a me le tue utenze e goditi il risparmio!
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <motion.a
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("Profile");
              }}
              className="cursor-pointer px-10 py-4 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50 text-lg"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Scopri di più
            </motion.a>
            <motion.a
              href="#Contatti"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("Contatti");
              }}
              className="px-10 py-4 bg-white/20 backdrop-blur-md text-white font-bold border-2 border-white rounded-full hover:bg-white/30 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contattami ora
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Banner Slogan Premium - Versione Elegante e Pulita */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        /* Usa rounded-3xl se vuoi un effetto "scheda" staccata, altrimenti rimuovilo per full-width */
        className="relative w-full overflow-hidden py-20 px-6 bg-slate-900 rounded-3xl shadow-2xl my-8"
      >
        {/* Sfondo Premium: Gradiente neutro e luce radiale per dare profondità */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
          {/* Luce soffusa centrale, non invadente */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-amber-500/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Contenuto */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Badge Minimalista */}
          <motion.div
            variants={fadeIn}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm">
              {/* Semplice punto luce al posto di icone ingombranti */}
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Servizio Esclusivo
            </span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 w-full"
          >
            {/* Prima riga - Sobria ed elegante */}
            <motion.h3
              variants={fadeIn}
              className="text-xl md:text-2xl font-light text-slate-300"
            >
              Non si tratta solo di trovare il prezzo più basso.
            </motion.h3>

            {/* Seconda riga - Il vero gancio (Hook) */}
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 leading-tight"
            >
              Offerte sempre aggiornate, trasparenti <br className="hidden md:block" />
              e senza costi nascosti.
            </motion.h2>

            {/* Separatore elegante */}
            <motion.div
              variants={fadeIn}
              className="flex justify-center py-6"
            >
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
            </motion.div>

            {/* Promessa Finale - Box in Glassmorphism per massimizzare l'attenzione */}
            <motion.div
              variants={fadeIn}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-slate-600 to-slate-800/50 max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="px-8 py-6 bg-slate-900/80 backdrop-blur-xl rounded-[15px] border border-slate-700/50 shadow-inner">
                <p className="text-lg md:text-2xl font-medium text-slate-200 leading-relaxed">
                  Delegando a me il 100% delle pratiche,<br />
                  <span className="text-amber-400 font-bold block mt-3 text-2xl md:text-4xl tracking-tight">
                    senza spendere un euro.
                  </span>
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      {/* Servizi Section */}
      <section className="w-full py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Servizi offerti
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluzioni complete e personalizzate per tutte le tue esigenze energetiche
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: FaLightbulb,
                title: "Gestione Utenze",
                description:
                  "Consulenza energetica professionale per contatori domestici e business.",
              },
              {
                icon: FaSolarPanel,
                title: "Consulenza Fotovoltaico",
                description:
                  "Analisi dettagliata per installazione pannelli fotovoltaici.",
              },
              {
                icon: FaBriefcase,
                title: "Supporto Tecnico Energetico",
                description:
                  "Assistenza completa per tutte le tue esigenze nel mondo dell'energia.",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4A6FA5]/30"
                  variants={cardFadeIn}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4A6FA5]/10 to-[#357ABD]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <IconComponent className="relative text-5xl text-[#4A6FA5] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: FaFire, count: "2000+", label: "Contratti stipulati" },
              { icon: FaBolt, count: "1000+", label: "Contatori gestiti" },
              { icon: FaUsers, count: "500+", label: "Clienti soddisfatti" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#4A6FA5]/10 to-[#357ABD]/10 border border-[#4A6FA5]/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                  variants={cardFadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent className="text-5xl text-[#4A6FA5] mx-auto mb-4" />
                  <h3 className="text-5xl font-bold text-[#4A6FA5] mb-2">
                    {stat.count}
                  </h3>
                  <p className="text-gray-700 font-semibold text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;