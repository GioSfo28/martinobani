import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapPin,
  FaClock,
  FaShieldAlt,
  FaCookieBite,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

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

const itemFadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */
const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowCookieBanner(true);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookieBanner(false);
  };

  // Anno dinamico: parte da 2025 fino all'anno corrente
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear > 2025 ? `2025 - ${currentYear}` : "2025";

  return (
    <>
      {/* =========================================================
          COOKIE BANNER
         ========================================================= */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed bottom-0 left-0 right-0 z-[9998] p-3 sm:p-4"
            role="region"
            aria-label="Consenso cookie"
          >
            <div
              className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4
                         px-5 sm:px-6 py-4 rounded-2xl
                         bg-slate-900/95 backdrop-blur-xl
                         ring-1 ring-white/10
                         shadow-[0_8px_32px_rgba(0,0,0,0.3),0_24px_64px_rgba(0,0,0,0.25)]"
            >
              {/* Icona */}
              <span
                className="grid place-items-center w-10 h-10 flex-shrink-0
                           rounded-xl bg-[#4A6FA5]/15 text-[#4A6FA5]
                           ring-1 ring-[#4A6FA5]/25"
                aria-hidden="true"
              >
                <FaCookieBite className="text-lg" />
              </span>

              {/* Testo */}
              <p className="flex-1 text-sm text-slate-300 leading-relaxed">
                Questo sito utilizza cookie tecnici e analitici (Google Analytics)
                per migliorare l'esperienza di navigazione. Per maggiori
                informazioni, consulta la nostra{" "}
                <Link
                  to="/privacy"
                  className="text-[#E8A44D] hover:text-[#F5C176] underline underline-offset-2 font-semibold transition-colors"
                >
                  Informativa sulla Privacy
                </Link>{" "}
                e la nostra{" "}
                <Link
                  to="/cookie"
                  className="text-[#E8A44D] hover:text-[#F5C176] underline underline-offset-2 font-semibold transition-colors"
                >
                  Informativa sui Cookie
                </Link>
                .
              </p>

              {/* CTA */}
              <motion.button
                onClick={handleAcceptCookies}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="group relative inline-flex items-center gap-2 flex-shrink-0
                           px-5 py-2.5 rounded-full
                           text-white font-bold text-sm
                           bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                           shadow-[0_4px_14px_rgba(74,111,165,0.5)]
                           hover:shadow-[0_8px_24px_rgba(74,111,165,0.65)]
                           transition-shadow duration-300
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/40
                           overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span
                    className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                               bg-gradient-to-r from-transparent via-white/40 to-transparent
                               translate-x-[-200%] group-hover:translate-x-[400%]
                               transition-transform duration-700 ease-out"
                  />
                </span>
                <span className="relative z-10">Accetta</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FOOTER
         ========================================================= */}
      <motion.footer
        id="Contatti"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
        className="relative w-full overflow-hidden
                   bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                   text-white pt-20 pb-10"
      >
        {/* ---------- Glow decorativi (pointer-events-none) ---------- */}
        <motion.div
          className="pointer-events-none absolute top-10 -right-20 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 -left-20 w-96 h-96 bg-[#E8A44D]/8 rounded-full blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* Grid pattern sottile */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* =========================================================
              CTA — INVIA BOLLETTE
             ========================================================= */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="relative rounded-3xl p-8 sm:p-10 lg:p-12
                         bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent
                         backdrop-blur-md
                         ring-1 ring-white/10
                         shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                         overflow-hidden"
            >
              {/* Glow interno */}
              <span
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-72
                           rounded-full bg-[#4A6FA5]/20 blur-[100px]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -bottom-24 right-0 w-80 h-80
                           rounded-full bg-[#E8A44D]/10 blur-[100px]"
                aria-hidden="true"
              />

              {/* Badge */}
              <motion.div variants={fadeIn} className="mb-6 flex justify-center">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5
                             rounded-full bg-[#E8A44D]/10 ring-1 ring-[#E8A44D]/25
                             text-[#E8A44D] text-[11px] font-bold uppercase tracking-[0.2em]"
                >
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#E8A44D] opacity-75 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#E8A44D]" />
                  </span>
                  Consulenza gratuita
                </span>
              </motion.div>

              {/* Titolo */}
              <motion.h2
                variants={fadeIn}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 tracking-tight"
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Invia le tue bollette
                </span>
              </motion.h2>

              {/* Sottotitolo */}
              <motion.p
                variants={fadeIn}
                className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto text-center leading-relaxed"
              >
                Allega qui le tue fatture di luce e gas per ricevere una{" "}
                <span className="font-semibold text-white">
                  consulenza gratuita e personalizzata
                </span>
                !
              </motion.p>

              {/* CTA row */}
              <motion.div
                variants={staggerContainer}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                {/* Email */}
                <motion.a
                  href="mailto:martinobani@gmail.com?subject=Consulenza Bollette"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemFadeIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="group relative inline-flex items-center justify-center gap-2
                             px-8 py-4 rounded-full
                             text-white font-bold text-base
                             bg-gradient-to-r from-[#4A6FA5] to-[#357ABD]
                             shadow-[0_8px_24px_rgba(74,111,165,0.5)]
                             hover:shadow-[0_12px_36px_rgba(74,111,165,0.7)]
                             transition-shadow duration-300
                             focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6FA5]/50
                             overflow-hidden"
                >
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span
                      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                                 bg-gradient-to-r from-transparent via-white/40 to-transparent
                                 translate-x-[-200%] group-hover:translate-x-[400%]
                                 transition-transform duration-700 ease-out"
                    />
                  </span>
                  <FaEnvelope className="relative z-10 text-lg" aria-hidden="true" />
                  <span className="relative z-10">Invia per Email</span>
                </motion.a>

                {/* WhatsApp — verde brandizzato */}
                <motion.a
                  href="https://wa.me/393338401484?text=Salve, vorrei inviare le mie bollette per una consulenza."
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemFadeIn}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="group relative inline-flex items-center justify-center gap-2
                             px-8 py-4 rounded-full
                             text-white font-bold text-base
                             bg-gradient-to-r from-[#25D366] to-[#128C7E]
                             shadow-[0_8px_24px_rgba(37,211,102,0.45)]
                             hover:shadow-[0_12px_36px_rgba(37,211,102,0.6)]
                             transition-shadow duration-300
                             focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40
                             overflow-hidden"
                >
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span
                      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                                 bg-gradient-to-r from-transparent via-white/40 to-transparent
                                 translate-x-[-200%] group-hover:translate-x-[400%]
                                 transition-transform duration-700 ease-out"
                    />
                  </span>
                  <FaWhatsapp className="relative z-10 text-lg" aria-hidden="true" />
                  <span className="relative z-10">Invia via WhatsApp</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================================================
              MAIN FOOTER CONTENT — 3 card
             ========================================================= */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* ---- Contatti ---- */}
            <motion.div
              variants={itemFadeIn}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative rounded-3xl p-6
                         bg-white/[0.04] backdrop-blur-md
                         ring-1 ring-white/10 hover:ring-[#4A6FA5]/40
                         shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.2)]
                         hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_16px_40px_rgba(74,111,165,0.15)]
                         transition-all duration-500 overflow-hidden"
            >
              <span
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                           rounded-full bg-[#4A6FA5]/15 blur-3xl
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <h3 className="relative text-lg font-bold mb-5 flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-xl
                                 bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C]
                                 text-white text-sm
                                 shadow-[0_4px_12px_rgba(74,111,165,0.4)]">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <span className="text-white">Contatti</span>
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:unioservizi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 py-1"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10
                                   text-[#4A6FA5] group-hover/link:bg-[#4A6FA5]/15 group-hover/link:ring-[#4A6FA5]/40
                                   transition-all duration-300">
                    <FaEnvelope className="text-xs" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-sm">unioservizi@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/393338401484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 py-1"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10
                                   text-[#25D366] group-hover/link:bg-[#25D366]/15 group-hover/link:ring-[#25D366]/40
                                   transition-all duration-300">
                    <FaWhatsapp className="text-xs" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-sm">+39 333 8401484</span>
                </a>
              </div>
            </motion.div>

            {/* ---- Ubicazione ---- */}
            <motion.div
              variants={itemFadeIn}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative rounded-3xl p-6
                         bg-white/[0.04] backdrop-blur-md
                         ring-1 ring-white/10 hover:ring-[#4A6FA5]/40
                         shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.2)]
                         hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_16px_40px_rgba(74,111,165,0.15)]
                         transition-all duration-500 overflow-hidden"
            >
              <span
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                           rounded-full bg-[#E8A44D]/15 blur-3xl
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <h3 className="relative text-lg font-bold mb-5 flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-xl
                                 bg-gradient-to-br from-[#E8A44D] to-[#D18B2E]
                                 text-white text-sm
                                 shadow-[0_4px_12px_rgba(232,164,77,0.4)]">
                  <FaMapPin aria-hidden="true" />
                </span>
                <span className="text-white">Ubicazione</span>
              </h3>

              <p className="text-slate-200 font-semibold text-sm">
                Ancona (Marche), Italia
              </p>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Copertura totale sul territorio nazionale con la maggior parte dei
                fornitori
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-slate-300">
                <FaClock className="text-[#E8A44D] text-xs" aria-hidden="true" />
                <span className="text-xs font-medium">Disponibile 6 giorni su 7</span>
              </div>
            </motion.div>

            {/* ---- Informazioni ---- */}
            <motion.div
              variants={itemFadeIn}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative rounded-3xl p-6
                         bg-white/[0.04] backdrop-blur-md
                         ring-1 ring-white/10 hover:ring-[#4A6FA5]/40
                         shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.2)]
                         hover:shadow-[0_4px_12px_rgba(0,0,0,0.15),0_16px_40px_rgba(74,111,165,0.15)]
                         transition-all duration-500 overflow-hidden"
            >
              <span
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                           rounded-full bg-[#4A6FA5]/15 blur-3xl
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <h3 className="relative text-lg font-bold mb-5 flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-xl
                                 bg-gradient-to-br from-[#4A6FA5] to-[#2C4A7C]
                                 text-white text-sm
                                 shadow-[0_4px_12px_rgba(74,111,165,0.4)]">
                  <FaShieldAlt aria-hidden="true" />
                </span>
                <span className="text-white">Informazioni</span>
              </h3>

              <div className="space-y-2">
                <Link
                  to="/privacy"
                  className="group/link flex items-center justify-between
                             px-3 py-2.5 -mx-1 rounded-xl
                             text-slate-300 hover:text-white
                             hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-medium text-sm">
                    Informativa sulla Privacy
                  </span>
                  <FaChevronRight
                    className="text-xs text-slate-500 group-hover/link:text-[#4A6FA5] group-hover/link:translate-x-0.5 transition-all duration-300"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/cookie"
                  className="group/link flex items-center justify-between
                             px-3 py-2.5 -mx-1 rounded-xl
                             text-slate-300 hover:text-white
                             hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-medium text-sm">
                    Informativa sui Cookie
                  </span>
                  <FaChevronRight
                    className="text-xs text-slate-500 group-hover/link:text-[#4A6FA5] group-hover/link:translate-x-0.5 transition-all duration-300"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================================
              BOTTOM BAR — copyright
             ========================================================= */}
          <div
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemFadeIn}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2"
          >
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-slate-400 order-2 sm:order-1 text-center sm:text-left">
              © {copyrightYear} Martino Bani — Consulente Energetico Indipendente ·
              Powered by{" "}
              <a
                href="https://www.giorgiosforza.it"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A6FA5] hover:text-[#E8A44D] transition-colors duration-300"
              >
                Giorgio Sforza
              </a>
            </p>

            {/* Area privata */}
            <div className="order-1 sm:order-2">
              <Link
                to="/Login"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6FA5]/40 rounded-md px-2 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" aria-hidden="true" />
                Area privata
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;