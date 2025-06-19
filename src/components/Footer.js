import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

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
      className="w-full bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Titolo della sezione */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight drop-shadow-md"
          variants={itemFadeIn}
        >
          Contatti
        </motion.h2>

        {/* Grid dei contatti (centrati) */}
        <motion.div
          className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row justify-center gap-12 text-center"
          variants={fadeIn}
        >
          {/* Email */}
          <motion.a
            href="mailto:unioservizi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Contattami per Email"
            className="flex items-center space-x-4 text-xl font-semibold hover:text-red-400 transition-all duration-300 group"
            variants={itemFadeIn}
          >
            <FaEnvelope className="text-3xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
            <span>E-mail</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/393338401484"
            target="_blank"
            rel="noopener noreferrer"
            title="Contattami tramite WhatsApp"
            className="flex items-center space-x-4 text-xl font-semibold hover:text-green-400 transition-all duration-300 group"
            variants={itemFadeIn}
          >
            <FaWhatsapp className="text-3xl text-green-500 group-hover:scale-110 transition-transform duration-300" />
            <span>WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Linea di separazione */}
        <motion.hr
          className="my-12 border-gray-600 opacity-50"
          variants={itemFadeIn}
        />

        {/* Copyright con link cliccabile */}
        <motion.div
          className="text-center"
          variants={itemFadeIn}
        >
          <p className="text-sm text-gray-400">
            Powered and designed by{" "}
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
      </div>
    </motion.footer>
  );
};

export default Footer;