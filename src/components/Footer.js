import React, { useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaMapPin, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
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

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookieBanner(false);
  };

  return (
    <>
      {showCookieBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 sm:p-6 z-50 shadow-2xl border-t border-[#4A6FA5]/20 backdrop-blur-md"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Questo sito utilizza cookie tecnici e analitici (Google Analytics) per migliorare
              l'esperienza di navigazione. Per maggiori informazioni, consulta la nostra{" "}
              <Link to="/privacy" className="text-[#4A6FA5] hover:text-[#357ABD] underline font-semibold transition-colors">
                Informativa sulla Privacy
              </Link>{" "}
              e la nostra{" "}
              <Link to="/cookie" className="text-[#4A6FA5] hover:text-[#357ABD] underline font-semibold transition-colors">
                Informativa sui Cookie
              </Link>.
            </p>
            <motion.button
              onClick={handleAcceptCookies}
              className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Accetta
            </motion.button>
          </div>
        </motion.div>
      )}

      <motion.footer
        id="Contatti"
        className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 right-0 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ zIndex: 0 }}
        />
        <motion.div
          className="absolute bottom-10 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* CTA Section */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 rounded-2xl p-8 sm:p-10 border border-[#10B981]/30 backdrop-blur-sm hover:border-[#10B981]/50 transition-all duration-300"
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-extrabold mb-3 text-center"
                variants={fadeIn}
              >
                <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
                  Invia le tue bollette
                </span>
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto text-center leading-relaxed"
                variants={fadeIn}
              >
                Allega qui le tue fatture di luce e gas per ricevere una <span className="font-semibold">consulenza gratuita e personalizzata</span>!
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a
                  href="mailto:martinobani@gmail.com?subject=Consulenza Bollette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="mr-2 text-lg" />
                  Invia per Email
                </motion.a>
                <motion.a
                  href="https://wa.me/393338401484?text=Salve, vorrei inviare le mie bollette per una consulenza."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  Invia via WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Contact Info */}
            <motion.div
              className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-[#4A6FA5]/50 transition-all duration-300"
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold text-[#10B981] mb-4 flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                Contatti
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:unioservizi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#4A6FA5] transition-colors duration-300 group"
                >
                  <FaEnvelope className="text-[#4A6FA5] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">unioservizi@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/393338401484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#22C55E] transition-colors duration-300 group"
                >
                  <FaWhatsapp className="text-[#22C55E] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">+39 333 8401484</span>
                </a>
              </div>
            </motion.div>

            {/* Location & Hours */}
            <motion.div
              className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-[#4A6FA5]/50 transition-all duration-300"
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold text-[#4A6FA5] mb-4 flex items-center gap-2">
                <FaMapPin className="text-lg" />
                Ubicazione
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ancona (Marche), Italia
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Copertura totale sul territorio nazionale con la maggior parte dei fornitori
              </p>
              <div className="flex items-center gap-2 text-gray-300 mt-3">
                <FaClock className="text-[#10B981]" />
                <span className="text-sm">Disponibile 6 giorni su 7</span>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div
              className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-[#4A6FA5]/50 transition-all duration-300"
              variants={itemFadeIn}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold text-[#4A6FA5] mb-4">Informazioni</h3>
              <div className="space-y-2">
                <Link
                  to="/privacy"
                  className="block text-gray-300 hover:text-[#4A6FA5] transition-colors duration-300 font-medium"
                >
                  Informativa sulla Privacy
                </Link>
                <Link
                  to="/cookie"
                  className="block text-gray-300 hover:text-[#4A6FA5] transition-colors duration-300 font-medium"
                >
                  Informativa sui Cookie
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />

          {/* Copyright e Area Privata */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center py-2" // Aggiungo flex-row per allineare gli elementi
            variants={itemFadeIn}
          >
            <p className="text-sm text-gray-400 order-2 sm:order-1 mt-2 sm:mt-0">
              © 2025 Martino Bani - Consulente Energetico Indipendente - Powered by{" "}
              <a
                href="https://www.giorgiosforza.it"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A6FA5] hover:text-[#357ABD] transition-colors duration-300"
              >
                Giorgio Sforza
              </a>
            </p>
            
            {/* LINK NASCOSTO PER AREA PRIVATA (Nuova Aggiunta) */}
            <div className="order-1 sm:order-2">
                <Link
                  to="/Login"
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300"
                >
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