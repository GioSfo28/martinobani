import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Contatti" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Titolo della sezione */}
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
          Contatti
        </h2>

        {/* Grid dei contatti (centrati) */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row justify-center gap-8 text-center">
          {/* Email */}
          <a
            href="mailto:unioservizi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Contattami per Email"
            className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-3xl text-red-500" />
            <span>E-mail</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/393338401484"
            target="_blank"
            rel="noopener noreferrer"
            title="Contattami tramite WhatsApp"
            className="flex items-center space-x-3 text-lg hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp className="text-3xl text-green-500" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Linea di separazione */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright con link cliccabile */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Powered and designed by{" "}
            <a
              href="https://www.giorgiosforza.it"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-200 hover:text-white transition-colors duration-300"
            >
              Giorgio Sforza
            </a>{" "}
            © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;