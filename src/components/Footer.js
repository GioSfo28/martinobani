import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Contatti" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Titolo della sezione */}
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
          Contatti
        </h2>

        {/* Grid dei contatti */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Facebook */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://www.facebook.com/giorgio.sforza.4/"
              target="_blank"
              rel="noopener noreferrer"
              title="Contattami su Facebook"
              className="flex items-center space-x-3 text-lg hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF className="text-3xl text-blue-500" />
              <span>Seguimi su Facebook</span>
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://www.instagram.com/gio_sfo/?hl=it"
              target="_blank"
              rel="noopener noreferrer"
              title="Contattami su Instagram"
              className="flex items-center space-x-3 text-lg hover:text-orange-500 transition-colors duration-300"
            >
              <FaInstagram className="text-3xl text-orange-500" />
              <span>Seguimi su Instagram</span>
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="mailto:infermiere@giorgiosforza.it"
              target="_blank"
              rel="noopener noreferrer"
              title="Contattami per Email"
              className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors duration-300"
            >
              <FaEnvelope className="text-3xl text-red-500" />
              <span>infermiere@giorgiosforza.it</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://wa.me/393477179349"
              target="_blank"
              rel="noopener noreferrer"
              title="Contattami tramite WhatsApp"
              className="flex items-center space-x-3 text-lg hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp className="text-3xl text-green-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Linea di separazione */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Powered and designed by <span className="font-semibold text-gray-200">Giorgio Sforza</span> © 2020 - 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
