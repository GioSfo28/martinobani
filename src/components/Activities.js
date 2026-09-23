import React, { useCallback } from "react";
import {
  FaHome,
  FaPhone,
  FaVideo,
  FaLightbulb,
  FaFire,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import Italy from "../assets/italy.png";

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const itemFade = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ============================================================
   DATA
   ============================================================ */
const SERVICES = [
  {
    title: "Nuove attivazioni",
    description: "Assistenza completa per attivazione contatori preposati.",
    tags: ["luce", "gas"],
  },
  {
    title: "Cambio fornitore",
    description:
      "Analisi approfondita e proposte convenienti verso compagnie più competitive.",
    tags: ["luce", "gas"],
  },
  {
    title: "Volture",
    description:
      "Supporto e gestione pratiche per cambio intestatario utenze (voltura ordinaria / mortis causa).",
    tags: ["luce", "gas"],
  },
  {
    title: "Subentri",
    description:
      "Assistenza e compilazione pratiche per attivazione forniture cessate o sospese per morosità.",
    tags: ["luce", "gas"],
  },
  {
    title: "Posa contatori definitivi e temporanei",
    description:
      "Aiuto pratico nell'attività di contrattualistica e documentazione di conformità necessaria.",
    tags: ["luce", "gas"],
  },
  {
    title: "Aumento/Diminuzione potenza",
    description:
      "Supporto e valutazione per adeguamento potenza su contatori elettrici.",
    tags: ["luce"],
  },
  {
    title: "Aumento/Diminuzione portata termica",
    description:
      "Regolazione della portata termica del metano secondo le tue necessità.",
    tags: ["gas"],
  },
  {
    title: "Modifica tensione",
    description:
      "Adattamento della tensione elettrica in base ai tuoi bisogni specifici.",
    tags: ["luce"],
  },
  {
    title: "Cambio fornitore + Voltura",
    description:
      "Gestione switch con tariffa ottimale e assegnazione contestuale nuovo intestatario.",
    tags: ["luce", "gas"],
  },
  {
    title: "Agevolazione accise Gas",
    description:
      "Per aziende: agevolazione imposte erariali in base al codice ateco dell'attività.",
    tags: ["gas"],
    badge: "Business",
  },
  {
    title: "Agevolazione IVA Luce e Gas",
    description:
      "Per aziende: valutazione fattibilità per aventi diritto ad IVA ridotta.",
    tags: ["luce", "gas"],
    badge: "Business",
  },
  {
    title: "Offerte dedicate",
    description: "Per condomini, associazioni, enti locali ed ecclesiastici.",
    tags: ["luce", "gas"],
    badge: "Custom",
  },
];

const ACTIVITY_METHODS = [
  { icon: FaHome, label: "A domicilio", desc: "Presso la tua sede o abitazione" },
  { icon: FaPhone, label: "Telefonicamente", desc: "Comodo e senza spostamenti" },
  { icon: FaVideo, label: "In videocall", desc: "Consulenza visiva in tempo reale" },
];

const CONTACT_ID = "Contatti";

/* ============================================================
   SMALL COMPONENTS
   ============================================================ */
const TagIcon = ({ type }) => {
  const isLuce = type === "luce";
  const Icon = isLuce ? FaLightbulb : FaFire;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider
        ${
          isLuce
            ? "bg-[#E8A44D]/12 text-[#B8802B] ring-1 ring-[#E8A44D]/25"
            : "bg-[#4A6FA5]/12 text-[#357ABD] ring-1 ring-[#4A6FA5]/25"
        }`}
    >
      <Icon className="text-[9px]" aria-hidden="true" />
      {isLuce ? "Luce" : "Gas"}
    </span>
  );
};

/* ============================================================
   ACTIVITIES COMPONENT
   ============================================================ */
const Activities = () => {
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
        el.getBoundingClientRect().top +
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

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToElement(CONTACT_ID);
  };

  return (
    <>
      {/* =========================================================
          COME LO FACCIO
         ========================================================= */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Glow decorativo */}
        <motion.div
          className="pointer-events-none absolute top-0 -right-20 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl"
          animate={
            shouldReduceMotion ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A6FA5]/8 ring-1 ring-[#4A6FA5]/15 text-[#4A6FA5] text-[11px] font-bold uppercase tracking-[0.2em]">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[#4A6FA5] opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#4A6FA5]" />
                </span>
                Il mio metodo
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={fadeIn}
              className="text-4xl sm:text-5xl font-extrabold text-center mb-5 tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Come lo faccio
              </span>
            </motion.h3>

            {/* Intro */}
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto"
            >
              Offro una{" "}
              <span className="font-bold text-[#4A6FA5]">
                consulenza energetica gratuita e personalizzata
              </span>
              , durante la quale analizzerò le tue bollette per capire esattamente
              come posso aiutarti.
            </motion.p>
          </motion.div>

          {/* ---------- Content grid ---------- */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* --- MAPPA ITALIA --- */}
            <motion.div
              className="relative flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardFadeIn}
            >
              <div className="relative">
                {/* Glow dietro */}
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#4A6FA5]/25 to-[#E8A44D]/15 blur-3xl"
                  aria-hidden="true"
                />

                {/* Frame card */}
                <div className="relative p-6 rounded-3xl bg-white ring-1 ring-gray-100 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]">
                  <div className="relative inline-block">
                    <motion.img
                      src={Italy}
                      alt="Mappa d'Italia"
                      loading="lazy"
                      className="w-56 h-56 sm:w-72 sm:h-72 object-contain block"
                      whileHover={
                        shouldReduceMotion ? undefined : { scale: 1.04 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 24,
                      }}
                    />

                    {/* Etichetta "Ancona" — solo testo */}
                    <span
                      className="absolute -translate-x-1/2 -translate-y-1/2
                                 px-2.5 py-1 rounded-full bg-white
                                 text-[11px] font-bold text-gray-800
                                 shadow ring-1 ring-black/5 whitespace-nowrap
                                 pointer-events-none select-none"
                      style={{ top: "38%", left: "62%" }}
                      aria-label="Ancona"
                    >
                      Ancona
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- TESTO --- */}
            <motion.div
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.p
                variants={itemFade}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Mi trovo ad{" "}
                <span className="font-bold text-[#4A6FA5]">
                  Ancona (Marche)
                </span>
                , ma posso operare su{" "}
                <span className="font-semibold text-gray-900">
                  tutto il territorio nazionale
                </span>
                .
              </motion.p>

              <motion.p
                variants={itemFade}
                className="text-lg text-gray-700 leading-relaxed"
              >
                In base alle tue esigenze, l'attività può essere svolta:
              </motion.p>

              {/* Activity methods */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
              >
                {ACTIVITY_METHODS.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardFadeIn}
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -4 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 26,
                      }}
                      className="group flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-gray-200/70 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)] hover:ring-[#4A6FA5]/30 hover:shadow-[0_8px_24px_rgba(74,111,165,0.12)] transition-all duration-300"
                    >
                      <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C] text-white shadow-[0_4px_12px_rgba(74,111,165,0.35)] group-hover:scale-105 group-hover:rotate-[-4deg] transition-transform duration-300">
                        <Icon className="text-lg" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-bold text-gray-900 tracking-tight">
                        {method.label}
                      </span>
                      <span className="text-[11px] text-gray-500 leading-snug">
                        {method.desc}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Extra */}
              <motion.div
                variants={staggerContainer}
                className="pt-4 space-y-4"
              >
                <motion.p
                  variants={itemFade}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                >
                  Grazie alla mia{" "}
                  <span className="font-bold text-[#4A6FA5]">
                    esperienza nei settori di luce e gas
                  </span>
                  , conosco perfettamente tutti gli aspetti tecnici, le dinamiche
                  e le procedure necessarie per muovermi con sicurezza nel
                  mercato libero.
                </motion.p>

                <motion.p
                  variants={itemFade}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                >
                  Mi{" "}
                  <span className="font-semibold text-gray-900">
                    aggiorno costantemente
                  </span>{" "}
                  per garantire ai miei clienti un supporto professionale e
                  affidabile, semplificando la gestione delle loro utenze.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVIZI — LUCE & GAS
         ========================================================= */}
      <section
        id="Servizi"
        className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      >
        {/* Glow decorativi */}
        <motion.div
          className="pointer-events-none absolute bottom-0 -left-20 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
          animate={
            shouldReduceMotion ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute top-20 -right-20 w-80 h-80 bg-[#E8A44D]/5 rounded-full blur-3xl"
          animate={
            shouldReduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* ---------- Header sezione ---------- */}
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A6FA5]/8 ring-1 ring-[#4A6FA5]/15 text-[#4A6FA5] text-[11px] font-bold uppercase tracking-[0.2em]">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[#4A6FA5] opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#4A6FA5]" />
                </span>
                12 servizi dedicati
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
                Scopri tutti i miei servizi
              </span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-3"
            >
              <FaLightbulb className="text-[#E8A44D]" aria-hidden="true" />
              <span className="font-semibold">Luce</span>
              <span className="text-gray-300" aria-hidden="true">
                ·
              </span>
              <FaFire className="text-[#357ABD]" aria-hidden="true" />
              <span className="font-semibold">Gas</span>
            </motion.p>
          </motion.div>

          {/* ---------- Grid servizi ---------- */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {SERVICES.map((service, index) => (
              <motion.a
                key={index}
                href={`#${CONTACT_ID}`}
                onClick={handleContactClick}
                variants={cardFadeIn}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                aria-label={`Richiedi informazioni su: ${service.title}`}
                className="group relative bg-white rounded-3xl p-6 ring-1 ring-gray-100 hover:ring-[#4A6FA5]/25 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)] hover:shadow-[0_4px_12px_rgba(16,24,40,0.06),0_16px_40px_rgba(74,111,165,0.15)] transition-all duration-500 overflow-hidden flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/40"
              >
                {/* Glow interno top-right */}
                <span className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#4A6FA5]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge opzionale (Business / Custom) */}
                {service.badge && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8A44D] bg-[#E8A44D]/10 px-2.5 py-1 rounded-full ring-1 ring-[#E8A44D]/20">
                    {service.badge}
                  </span>
                )}

                {/* Icone luce/gas */}
                <div className="flex gap-2 mb-4">
                  {service.tags.map((tag, i) => (
                    <TagIcon key={i} type={tag} />
                  ))}
                </div>

                {/* Titolo */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#4A6FA5] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Descrizione */}
                <p className="text-gray-600 leading-relaxed text-[15px] flex-1">
                  {service.description}
                </p>

                {/* Arrow bottom-right — sempre visibile ora */}
                <span className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end text-[#4A6FA5] text-xs font-semibold gap-1.5 transition-all duration-300 group-hover:gap-2.5">
                  Richiedi info
                  <FaArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>

                {/* Accent line bottom */}
                <span className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#4A6FA5] via-[#357ABD] to-[#E8A44D] transition-all duration-500 rounded-b-3xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* ---------- CTA ---------- */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <motion.a
              href={`#${CONTACT_ID}`}
              onClick={handleContactClick}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] shadow-[0_8px_24px_rgba(74,111,165,0.5)] hover:shadow-[0_12px_36px_rgba(74,111,165,0.65)] transition-shadow duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/50 overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
              </span>
              <span className="relative z-10">Contattami ora</span>
              <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <FaCheckCircle
                  className="text-[#E8A44D] text-xs"
                  aria-hidden="true"
                />
                Consulenza gratuita
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FaCheckCircle
                  className="text-[#E8A44D] text-xs"
                  aria-hidden="true"
                />
                Nessun costo aggiuntivo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FaMapMarkerAlt
                  className="text-[#E8A44D] text-xs"
                  aria-hidden="true"
                />
                Tutta Italia
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Activities;