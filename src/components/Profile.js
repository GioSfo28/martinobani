import React, { useCallback, useEffect } from "react";
import profileImage from "../assets/MB.jpeg";
import {
  FaUser,
  FaCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBolt,
  FaLeaf,
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/* ============================================================
   DATA
   ============================================================ */
const HIGHLIGHTS = [
  {
    icon: FaBolt,
    title: "Gestione utenze",
    desc: "Luce, gas, volture e subentri seguiti dall'inizio alla fine.",
  },
  {
    icon: FaLeaf,
    title: "Fotovoltaico",
    desc: "Analisi gratuita, agevolazioni fiscali e installazione.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Copertura nazionale",
    desc: "Consulenza a privati, micro-imprese e aziende in tutta Italia.",
  },
];

const SERVICES_LIST = [
  "Analisi e confronto delle migliori offerte sul mercato.",
  "Gestione volture, subentri e attivazioni contatori.",
  "Consulenza gratuita per il fotovoltaico e agevolazioni fiscali.",
];

/* ============================================================
   PROFILE COMPONENT
   ============================================================ */
const Profile = () => {
  const shouldReduceMotion = useReducedMotion();

  /* ---------- Smooth scroll verso una sezione ---------- */
  const scrollToElement = useCallback(
    (id) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      // Legge l'altezza header dalla CSS var impostata dall'Header
      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h"
          )
        ) || 80;

      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [shouldReduceMotion]
  );

  /* ---------- Deep link con hash (#Servizi) ---------- */
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => scrollToElement(id), 120);
    return () => clearTimeout(t);
  }, [scrollToElement]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    scrollToElement("Servizi");
  };

  return (
    <div
      id="Profile"
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* =========================================================
          GLOW DECORATIVI (pointer-events-none, non interferiscono)
         ========================================================= */}
      <motion.div
        className="pointer-events-none absolute top-20 -right-20 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={
          shouldReduceMotion ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-20 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
        animate={
          shouldReduceMotion ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* =========================================================
          HERO PROFILE — foto + titolo + claim
         ========================================================= */}
      <motion.div
        className="relative z-10 text-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {/* ---------- Foto con anello animato ---------- */}
        <motion.div className="relative inline-block mb-8" variants={fadeIn}>
          <motion.div
            className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            {/* Ring esterno gradiente (rotante) */}
            <motion.div
              className="absolute -inset-1.5 rounded-full
                         bg-[conic-gradient(from_0deg,#4A6FA5,#357ABD,#E8A44D,#4A6FA5)]
                         opacity-90"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            {/* Ring bianco di separazione */}
            <div
              className="absolute -inset-1 rounded-full bg-white"
              aria-hidden="true"
            />

            {/* Foto */}
            <img
              src={profileImage}
              alt="Martino Bani"
              className="relative w-full h-full rounded-full object-cover
                         shadow-[0_8px_32px_rgba(74,111,165,0.25)]
                         ring-1 ring-black/5"
            />

            {/* Glow pulsante dietro */}
            <motion.div
              className="absolute -inset-6 rounded-full
                         bg-gradient-to-r from-[#4A6FA5]/25 to-[#E8A44D]/20 blur-2xl -z-10"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Badge "Disponibile" sotto la foto */}
          <motion.div variants={fadeIn} className="mt-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5
                         rounded-full bg-white/80 backdrop-blur-md
                         ring-1 ring-gray-200 shadow-sm
                         text-gray-700 text-[11px] font-bold uppercase tracking-[0.18em]"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8A44D] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#E8A44D]" />
              </span>
              Disponibile per nuove consulenze
            </span>
          </motion.div>
        </motion.div>

        {/* ---------- Nome ---------- */}
        <motion.h1
          variants={fadeIn}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
            Martino Bani
          </span>
        </motion.h1>

        {/* ---------- Ruolo ---------- */}
        <motion.p
          variants={fadeIn}
          className="mt-4 text-base sm:text-lg font-semibold text-gray-700 max-w-3xl mx-auto
                     flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        >
          <span className="text-[#4A6FA5]">Consulente energetico</span>
          <span className="text-gray-300" aria-hidden="true">
            •
          </span>
          <span>Esperto in gestione utenze</span>
          <span className="text-gray-300" aria-hidden="true">
            •
          </span>
          <span>Supporto fotovoltaico</span>
        </motion.p>

        {/* ---------- Claim ---------- */}
        <motion.p
          variants={fadeIn}
          className="mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto italic leading-relaxed"
        >
          Opero a livello nazionale, offrendo consulenza energetica a privati,
          micro-imprese e aziende.
        </motion.p>

        {/* ---------- Highlights (3 mini-card) ---------- */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="group flex flex-col items-center text-center gap-3 p-5
                           rounded-2xl bg-white/70 backdrop-blur-md
                           ring-1 ring-gray-200/70
                           shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)]
                           hover:ring-[#4A6FA5]/30 hover:shadow-[0_8px_24px_rgba(74,111,165,0.12)]
                           transition-all duration-300"
              >
                <span
                  className="grid place-items-center w-11 h-11 rounded-xl
                             bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C]
                             text-white shadow-[0_4px_12px_rgba(74,111,165,0.35)]
                             group-hover:scale-105 group-hover:rotate-[-4deg]
                             transition-transform duration-300"
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-gray-900 tracking-tight">
                  {h.title}
                </span>
                <span className="text-xs text-gray-500 leading-relaxed">
                  {h.desc}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* =========================================================
          CHI SONO — blocco narrativo
         ========================================================= */}
      <motion.div
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          {/* ---------- Section title ---------- */}
          <motion.div variants={fadeIn} className="text-center mb-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5
                         rounded-full bg-[#4A6FA5]/8 ring-1 ring-[#4A6FA5]/15
                         text-[#4A6FA5] text-[11px] font-bold uppercase tracking-[0.2em] mb-5"
            >
              <FaUser className="text-xs" aria-hidden="true" />
              Chi sono
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Il valore di un consulente al tuo fianco
              </span>
            </h2>
          </motion.div>

          {/* ---------- Content card ---------- */}
          <motion.div
            variants={fadeIn}
            className="relative bg-white rounded-3xl p-8 sm:p-10
                       ring-1 ring-gray-100
                       shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]
                       overflow-hidden"
          >
            {/* Glow interno top-right */}
            <span
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72
                         rounded-full bg-[#4A6FA5]/8 blur-3xl"
              aria-hidden="true"
            />
            {/* Accent line left */}
            <span
              className="pointer-events-none absolute top-8 bottom-8 left-0 w-1
                         rounded-r-full bg-gradient-to-b from-[#4A6FA5] via-[#357ABD] to-[#E8A44D]"
              aria-hidden="true"
            />

            <div className="relative space-y-5">
              <motion.p
                variants={itemFade}
                className="text-gray-700 leading-relaxed text-base sm:text-lg"
              >
                Sono{" "}
                <span className="font-bold text-[#4A6FA5]">Martino Bani</span>,
                un consulente specializzato nell'ottimizzazione delle spese per
                energia elettrica e metano. Mi dedico a{" "}
                <span className="font-semibold text-gray-900">
                  semplificare la gestione delle utenze
                </span>
                , garantendo trasparenza e risparmio senza costi aggiuntivi.
              </motion.p>

              <motion.p
                variants={itemFade}
                className="text-gray-700 leading-relaxed text-base sm:text-lg"
              >
                Il mio approccio si basa su{" "}
                <span className="font-bold text-[#4A6FA5]">
                  competenza, affidabilità e innovazione
                </span>
                . Offro servizi completi, tra cui:
              </motion.p>

              {/* ---------- Lista servizi ---------- */}
              <motion.ul
                className="space-y-3 my-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {SERVICES_LIST.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemFade}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-xl
                               hover:bg-[#4A6FA5]/5 transition-colors duration-300"
                  >
                    <span
                      className="grid place-items-center w-6 h-6 flex-shrink-0 mt-0.5
                                 rounded-full bg-[#4A6FA5]/10 text-[#4A6FA5]"
                      aria-hidden="true"
                    >
                      <FaCheckCircle className="text-xs" />
                    </span>
                    <span className="text-gray-700 text-base sm:text-[17px] font-medium leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={itemFade}
                className="text-gray-700 leading-relaxed text-base sm:text-lg pt-2"
              >
                Con anni di esperienza nel settore energetico, mi impegno a
                fornire soluzioni{" "}
                <span className="font-semibold text-gray-900">
                  personalizzate per ogni cliente
                </span>
                , garantendo sempre la massima professionalità e chiarezza.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================================
          CTA
         ========================================================= */}
      <motion.div
        className="relative z-10 text-center pb-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
      >
        <motion.a
          href="#Servizi"
          onClick={handleServicesClick}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="group relative inline-flex items-center gap-2
                     px-8 py-4 rounded-full
                     text-white font-bold text-base
                     bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                     shadow-[0_8px_24px_rgba(74,111,165,0.5)]
                     hover:shadow-[0_12px_36px_rgba(74,111,165,0.65)]
                     transition-shadow duration-300
                     focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/50
                     overflow-hidden"
        >
          {/* Shine effect */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span
              className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                         bg-gradient-to-r from-transparent via-white/40 to-transparent
                         translate-x-[-200%] group-hover:translate-x-[400%]
                         transition-transform duration-700 ease-out"
            />
          </span>
          <span className="relative z-10">Scopri i miei servizi</span>
          <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

        <p className="mt-5 text-sm text-gray-500">
          Consulenza gratuita · Nessun costo aggiuntivo
        </p>
      </motion.div>
    </div>
  );
};

export default Profile;