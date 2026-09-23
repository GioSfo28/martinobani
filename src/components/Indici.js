import React from "react";
import { FaBolt, FaGasPump, FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ============================================================
   INDICI COMPONENT
   ============================================================ */
const Indici = () => {
  const shouldReduceMotion = useReducedMotion();

  const indici = [
    {
      title: "PUN (Prezzo Unico Nazionale)",
      description:
        "Sta per PREZZO UNICO NAZIONALE, ed è l'indicatore del costo all'ingrosso dell'energia elettrica che viene scambiata tra i produttori e i fornitori sul mercato della borsa elettrica italiana. Sulla base della quantità di energia prodotta nelle diverse zone d'Italia e dei prezzi locali, il mercato determina un costo medio nazionale (Prezzo Unico appunto) che varia di giorno in giorno e anche di ora in ora. L'andamento si autoregola tenendo conto anche dell'energia derivante da fonti rinnovabili che quella da fonti fossili come petrolio e gas.",
      icon: FaBolt,
      // Palette coerente: luce = ambra
      tone: {
        ring: "ring-[#E8A44D]/20",
        ringHover: "hover:ring-[#E8A44D]/40",
        iconBg: "from-[#E8A44D] to-[#D18B2E]",
        iconShadow: "shadow-[0_4px_12px_rgba(232,164,77,0.4)]",
        glow: "bg-[#E8A44D]/10",
        accent: "from-[#E8A44D] via-[#F5C176] to-[#E8A44D]",
        tag: "text-[#B8802B] bg-[#E8A44D]/10 ring-[#E8A44D]/25",
        tagLabel: "Luce",
      },
    },
    {
      title: "Dispacciamento",
      description:
        "È una di quelle voci presenti nella nostra bolletta della luce ed è stabilita dalle autorità. Uguale per tutti sul territorio nazionale e non dipesa dal fornitore. È una quota che viene pagata per riconoscere a Terna il lavoro estremamente complesso, che in ogni momento della giornata svolge per mantenere costante la quantità di energia prodotta e quella consumata da famiglie imprese. Viene accorpata nel totale al kWh nella voce 'spesa per la vendita materia energia' che varia ogni mese in base ai picchi e ai carichi della rete.",
      icon: FaExchangeAlt,
      // Rete = blu brand
      tone: {
        ring: "ring-[#4A6FA5]/20",
        ringHover: "hover:ring-[#4A6FA5]/40",
        iconBg: "from-[#4A6FA5] to-[#2C4A7C]",
        iconShadow: "shadow-[0_4px_12px_rgba(74,111,165,0.4)]",
        glow: "bg-[#4A6FA5]/10",
        accent: "from-[#4A6FA5] via-[#357ABD] to-[#4A6FA5]",
        tag: "text-[#357ABD] bg-[#4A6FA5]/10 ring-[#4A6FA5]/25",
        tagLabel: "Rete",
      },
    },
    {
      title: "PSV (Punto di Scambio Virtuale)",
      description:
        "Sta per PUNTO DI SCAMBIO VIRTUALE, tra i punti in entrata ed i punti in uscita della rete Nazionale di Gasdotti; presso il quale gli utenti abilitati e soggetti del settore, possono effettuare su base giornaliera, scambi e cessioni di gas. È quindi il punto principale di incontro tra domanda e offerta del mercato di gas in Italia. Qui si definisce il prezzo all'ingrosso e di conseguenza in base a questo valore, i vari fornitori valutano il prezzo della materia prima; sia per l'acquisto, che per la rivendita al cliente finale con le varie offerte nel mercato libero.",
      icon: FaGasPump,
      // Gas = blu (fiamma)
      tone: {
        ring: "ring-[#357ABD]/20",
        ringHover: "hover:ring-[#357ABD]/40",
        iconBg: "from-[#357ABD] to-[#2C4A7C]",
        iconShadow: "shadow-[0_4px_12px_rgba(53,122,189,0.4)]",
        glow: "bg-[#357ABD]/10",
        accent: "from-[#357ABD] via-[#4A6FA5] to-[#357ABD]",
        tag: "text-[#357ABD] bg-[#357ABD]/10 ring-[#357ABD]/25",
        tagLabel: "Gas",
      },
    },
  ];

  return (
    <section
      id="Indici"
      className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* =========================================================
          GLOW DECORATIVI (pointer-events-none)
         ========================================================= */}
      <motion.div
        className="pointer-events-none absolute top-20 -right-20 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 bg-[#E8A44D]/5 rounded-full blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER SEZIONE
           ========================================================= */}
        <motion.div
          className="text-center mb-16"
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
              Glossario
            </span>
          </motion.div>

          {/* Titolo */}
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
              Glossario
            </span>{" "}
            <span className="text-gray-900">indici energetici</span>
          </motion.h2>

          {/* Divider gradiente */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center py-5"
          >
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#4A6FA5]/60 to-transparent rounded-full" />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Comprendere le voci principali della tua bolletta è il primo passo per ottimizzare i tuoi consumi e scegliere l'offerta più adatta a te.
          </motion.p>
        </motion.div>

        {/* =========================================================
            GRID INDICI
           ========================================================= */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {indici.map((item, i) => {
            const Icon = item.icon;
            const t = item.tone;
            return (
              <motion.div
                key={i}
                variants={cardFadeIn}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className={`group relative bg-white rounded-3xl p-7 sm:p-8
                            ring-1 ${t.ring} ${t.ringHover}
                            shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)]
                            hover:shadow-[0_4px_12px_rgba(16,24,40,0.06),0_16px_40px_rgba(74,111,165,0.15)]
                            transition-all duration-500 overflow-hidden
                            flex flex-col h-full`}
              >
                {/* Glow interno top-right */}
                <span
                  className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40
                              rounded-full ${t.glow} blur-3xl
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                {/* Tag categoria top-right */}
                <span
                  className={`absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.15em]
                              px-2.5 py-1 rounded-full ring-1 ${t.tag}`}
                >
                  {t.tagLabel}
                </span>

                {/* Icona in box gradiente */}
                <div className="relative mb-6">
                  <div
                    className={`grid place-items-center w-14 h-14 rounded-2xl
                                bg-gradient-to-br ${t.iconBg} ${t.iconShadow}
                                text-white text-xl
                                group-hover:scale-105 group-hover:rotate-[-4deg]
                                transition-transform duration-300`}
                  >
                    <Icon aria-hidden="true" />
                  </div>
                </div>

                {/* Titolo */}
                <h3 className="text-xl sm:text-[22px] font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Descrizione */}
                <p className="text-gray-600 leading-relaxed text-[15px] italic flex-1">
                  {item.description}
                </p>

                {/* Accent line bottom */}
                <span
                  className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-0
                              group-hover:w-full
                              bg-gradient-to-r ${t.accent}
                              transition-all duration-500 rounded-b-3xl`}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================================
            FOOTER INFORMATIVO
           ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div
            className="relative flex items-start gap-3 px-5 sm:px-6 py-4 rounded-2xl
                       bg-gradient-to-br from-[#4A6FA5]/8 via-white to-[#E8A44D]/5
                       ring-1 ring-[#4A6FA5]/15
                       shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.05)]"
          >
            {/* Icona info */}
            <span className="grid place-items-center w-8 h-8 flex-shrink-0 mt-0.5
                             rounded-full bg-white ring-1 ring-[#4A6FA5]/15
                             text-[#4A6FA5] shadow-sm">
              <FaInfoCircle className="text-sm" aria-hidden="true" />
            </span>

            {/* Testo */}
            <p className="text-[#2C4A7C] text-sm font-medium leading-relaxed text-left">
              💡 Ricorda: questi indici sono regolati dal mercato e dalle autorità competenti (GME, ARERA, SNAM).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Indici;