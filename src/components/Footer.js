import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants for smooth transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      id="Contatti"
      className="w-full bg-gradient-to-t from-[#1F2937] to-[#111827] text-white py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Sezione CTA Bollette */}
        <motion.div
          className="text-center bg-[#10B981]/10 rounded-2xl p-6 sm:p-8 mb-10 border border-[#10B981]/20 shadow-lg"
          variants={itemFadeIn}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10B981] mb-3 tracking-tight">
            Invia le Tue Bollette
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl mx-auto">
            Allega le tue bollette per email o via WhatsApp e sarai ricontattato per una consulenza gratuita!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="mailto:unioservizi@gmail.com?subject=Consulenza Bollette"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#EF4444] text-white font-semibold rounded-lg shadow-md hover:bg-[#DC2626] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              variants={itemFadeIn}
            >
              <FaEnvelope className="mr-2 text-lg" />
              Invia per Email
            </motion.a>
            <motion.a
              href="https://wa.me/393338401484?text=Salve, vorrei inviare le mie bollette per una consulenza."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#22C55E] text-white font-semibold rounded-lg shadow-md hover:bg-[#16A34A] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              variants={itemFadeIn}
            >
              <FaWhatsapp className="mr-2 text-lg" />
              Invia via WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Sezione Contatti */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left"
          variants={fadeIn}
        >
          <motion.div variants={itemFadeIn}>
            <h3 className="text-lg font-semibold text-[#4A6FA5] mb-3">Contatti</h3>
            <a
              href="mailto:unioservizi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-[#EF4444] transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>unioservizi@gmail.com</span>
            </a>
            <a
              href="https://wa.me/393338401484"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-[#22C55E] mt-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>+39 333 8401484</span>
            </a>
          </motion.div>
          <motion.div variants={itemFadeIn}>
            <p className="text-sm text-gray-400">
              Powered by{" "}
              <a
                href="https://www.giorgiosforza.it"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A6FA5] hover:text-[#3B5D8A] transition-colors duration-300"
              >
                Giorgio Sforza
              </a>{" "}
              © 2025
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;