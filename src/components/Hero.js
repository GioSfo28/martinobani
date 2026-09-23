import React, { useEffect, useCallback } from "react";
import {
  FaLightbulb,
  FaBriefcase,
  FaFire,
  FaBolt,
  FaUsers,
  FaSolarPanel,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/* ============================================================
   SERVICES + STATS DATA
   ============================================================ */
const SERVICES = [
  {
    icon: FaLightbulb,
    title: "Gestione Utenze",
    description:
      "Consulenza energetica professionale per contatori domestici e business.",
    tag: "Luce & Gas",
  },
  {
    icon: FaSolarPanel,
    title: "Consulenza Fotovoltaico",
    description:
      "Analisi dettagliata per installazione pannelli fotovoltaici.",
    tag: "Green",
  },
  {
    icon: FaBriefcase,
    title: "Supporto Tecnico Energetico",
    description:
      "Assistenza completa per tutte le tue esigenze nel mondo dell'energia.",
    tag: "Full-service",
  },
];

const STATS = [
  { icon: FaFire, count: "2000+", label: "Contratti stipulati" },
  { icon: FaBolt, count: "1000+", label: "Contatori gestiti" },
  { icon: FaUsers, count: "500+", label: "Clienti soddisfatti" },
];

/* ============================================================
   HERO COMPONENT
   ============================================================ */
const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  /* ---------- Smooth scroll con altezza header dinamica ---------- */
  const scrollToElement = useCallback(
    (id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h"
          )
        ) || 80;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        12;

      window.scrollTo({
        top,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [shouldReduceMotion]
  );

  /* ---------- Deep link ---------- */
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => scrollToElement(id), 120);
    return () => clearTimeout(t);
  }, [scrollToElement]);

  return (
    <>
      {/* =========================================================
          HERO — SECTION PRINCIPALE
         ========================================================= */}
      <section
        id="top"
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center py-32 sm:py-40"
      >
        {/* -------- Background statico (no fixed, no overflow-hidden) -------- */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1537486336219-a3dd8e2dc6b5?q=80&w=2664&auto=format&fit=crop")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        {/* -------- Overlay scuro + gradiente brand -------- */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B1424]/85 via-[#0B1424]/70 to-[#0B1424]/90"
          aria-hidden="true"
        />
        {/* Tinta brand */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-tr from-[#4A6FA5]/25 via-transparent to-[#E8A44D]/10 mix-blend-overlay"
          aria-hidden="true"
        />

        {/* -------- Glow decorativo (fisso, fuori dal flusso) -------- */}
        <motion.div
          className="pointer-events-none fixed top-1/3 -left-40 w-[28rem] h-[28rem] bg-[#4A6FA5]/25 rounded-full blur-[120px] z-[1]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 60, 0], y: [0, 40, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none fixed bottom-0 -right-40 w-[26rem] h-[26rem] bg-[#E8A44D]/15 rounded-full blur-[120px] z-[1]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -50, 0], y: [0, -30, 0] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* -------- Contenuto -------- */}
        <motion.div
          className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="mb-8 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5
                         rounded-full bg-white/10 backdrop-blur-md
                         ring-1 ring-white/20 text-white/90
                         text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8A44D] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#E8A44D]" />
              </span>
              Consulente Energetico · Disponibile
            </span>
          </motion.div>

          {/* Titolo */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            <span className="block">Martino Bani</span>
            <span className="mt-3 inline-block py-3 bg-gradient-to-r from-[#E8A44D] via-[#F5C176] to-[#E8A44D] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(232,164,77,0.25)]">
              Il tuo consulente energetico
            </span>
          </motion.h1>

          {/* Sottotitolo */}
          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg sm:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Specializzato nel trovare soluzioni migliori e più trasparenti nel
            settore di <span className="text-white font-semibold">luce</span> e{" "}
            <span className="text-white font-semibold">gas</span>.
          </motion.p>

          {/* Value props — 2 card inline */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch max-w-3xl mx-auto"
          >
            {[
              { emoji: "⚡", text: "Risparmia tempo e denaro" },
              { emoji: "🔥", text: "Zero scadenze, zero contratti" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3
                           rounded-2xl bg-white/8 backdrop-blur-md
                           ring-1 ring-white/15
                           text-left text-white/95 text-sm sm:text-base font-semibold
                           hover:bg-white/12 hover:ring-white/25
                           transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Audience */}
          <motion.p
            variants={fadeIn}
            className="mt-8 text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Che tu sia un <span className="text-white/95 font-semibold">privato</span>,{" "}
            un'<span className="text-white/95 font-semibold">azienda</span> o un{" "}
            <span className="text-white/95 font-semibold">libero professionista</span>,
            affida a me le tue utenze e goditi il risparmio.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeIn}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary */}
            <motion.a
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("Profile");
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative inline-flex items-center justify-center gap-2
                         cursor-pointer px-8 py-4 rounded-full
                         text-white font-bold text-base
                         bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                         shadow-[0_8px_24px_rgba(74,111,165,0.5)]
                         hover:shadow-[0_12px_36px_rgba(74,111,165,0.65)]
                         transition-shadow duration-300
                         focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/50
                         overflow-hidden"
            >
              {/* Shine */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span
                  className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                             bg-gradient-to-r from-transparent via-white/40 to-transparent
                             translate-x-[-200%] group-hover:translate-x-[400%]
                             transition-transform duration-700 ease-out"
                />
              </span>
              <span className="relative z-10">Scopri di più</span>
              <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary — ghost glass */}
            <motion.a
              href="#Contatti"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("Contatti");
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="inline-flex items-center justify-center gap-2
                         px-8 py-4 rounded-full
                         text-white font-bold text-base
                         bg-white/10 backdrop-blur-md
                         ring-2 ring-white/30
                         hover:bg-white/20 hover:ring-white/50
                         transition-all duration-300
                         focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Contattami ora
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex items-center justify-center gap-2 text-white/60 text-xs sm:text-sm"
          >
            <FaCheckCircle className="text-[#E8A44D]" aria-hidden="true" />
            <span>Consulenza gratuita · Risposta entro 24h</span>
          </motion.div>
        </motion.div>

        {/* -------- Scroll indicator -------- */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
            Scroll
          </span>
          <motion.span
            className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent"
            animate={shouldReduceMotion ? undefined : { scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* =========================================================
          BANNER SLOGAN — ridisegnato in stile moderno
         ========================================================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
        className="relative w-full overflow-hidden py-20 px-6
                   bg-slate-950 rounded-3xl shadow-2xl my-8 max-w-7xl mx-auto
                   ring-1 ring-white/5"
      >
        {/* Background glow */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#E8A44D]/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4A6FA5]/15 rounded-full blur-[120px]" />
          {/* Grid pattern sottile */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div variants={fadeIn} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-5 py-1.5
                         bg-white/5 backdrop-blur-md
                         ring-1 ring-white/10 rounded-full
                         text-[#E8A44D] text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8A44D] opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#E8A44D]" />
              </span>
              Servizio Esclusivo
            </span>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 w-full">
            {/* Riga 1 */}
            <motion.h3
              variants={fadeIn}
              className="text-lg md:text-xl font-light text-slate-400"
            >
              Non si tratta solo di trovare il prezzo più basso.
            </motion.h3>

            {/* Riga 2 — hook principale */}
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-extrabold leading-tight
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-white via-slate-100 to-slate-400"
            >
              Offerte sempre aggiornate, trasparenti{" "}
              <br className="hidden md:block" />
              e senza costi nascosti.
            </motion.h2>

            {/* Separatore */}
            <motion.div variants={fadeIn} className="flex justify-center py-6">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#E8A44D]/60 to-transparent" />
            </motion.div>

            {/* Box glassmorphism */}
            <motion.div
              variants={fadeIn}
              className="relative p-[1px] rounded-2xl max-w-2xl mx-auto
                         bg-gradient-to-b from-white/15 to-white/[0.02]
                         transition-transform duration-300 hover:scale-[1.015]"
            >
              <div className="px-8 py-7 bg-slate-950/70 backdrop-blur-xl rounded-[15px]
                              ring-1 ring-inset ring-white/5">
                <p className="text-lg md:text-2xl font-medium text-slate-200 leading-relaxed">
                  Delegando a me il 100% delle pratiche,
                  <span
                    className="block mt-3 text-2xl md:text-4xl font-extrabold tracking-tight
                               bg-gradient-to-r from-[#E8A44D] via-[#F5C176] to-[#E8A44D]
                               bg-clip-text text-transparent"
                  >
                    senza spendere un euro.
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================================
          SERVIZI + STATS
         ========================================================= */}
      <section className="w-full py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header sezione */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 rounded-full
                             bg-[#4A6FA5]/10 text-[#4A6FA5]
                             text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              Cosa faccio
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Servizi offerti
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluzioni complete e personalizzate per tutte le tue esigenze
              energetiche
            </p>
          </motion.div>

          {/* Cards servizi */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8
                             ring-1 ring-gray-100 hover:ring-[#4A6FA5]/30
                             shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)]
                             hover:shadow-[0_4px_12px_rgba(16,24,40,0.06),0_16px_40px_rgba(74,111,165,0.15)]
                             transition-all duration-500 overflow-hidden"
                  variants={cardFadeIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                >
                  {/* Glow interno top-right */}
                  <span className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                                   rounded-full bg-[#4A6FA5]/10 blur-3xl
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Tag */}
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.15em]
                                   text-[#4A6FA5]/70 bg-[#4A6FA5]/8 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>

                  {/* Icona */}
                  <div className="relative mb-6">
                    <div className="grid place-items-center w-14 h-14 rounded-2xl
                                    bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C]
                                    text-white text-2xl
                                    shadow-[0_6px_16px_rgba(74,111,165,0.35)]
                                    group-hover:scale-105 group-hover:rotate-[-4deg]
                                    transition-transform duration-300">
                      <IconComponent aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow footer */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#4A6FA5]">
                      Scopri di più
                    </span>
                    <FaArrowRight className="text-[#4A6FA5] text-sm
                                             transition-transform duration-300
                                             group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {STATS.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-[#4A6FA5]/8 via-white to-[#357ABD]/5
                             ring-1 ring-[#4A6FA5]/15 rounded-3xl p-8 text-center
                             hover:ring-[#4A6FA5]/30 hover:shadow-[0_8px_32px_rgba(74,111,165,0.15)]
                             transition-all duration-300 overflow-hidden group"
                  variants={cardFadeIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                                   bg-gradient-to-br from-[#4A6FA5]/5 to-transparent
                                   transition-opacity duration-500" />

                  <div className="grid place-items-center w-12 h-12 mx-auto mb-5
                                  rounded-2xl bg-white shadow-[0_4px_12px_rgba(74,111,165,0.2)]
                                  ring-1 ring-[#4A6FA5]/10">
                    <IconComponent className="text-2xl text-[#4A6FA5]" aria-hidden="true" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-[#4A6FA5] mb-2 tracking-tight">
                    {stat.count}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
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