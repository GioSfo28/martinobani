import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa i loghi
import BluenergyLogo from "../assets/bluenergy.jpg";
import VivigasLogo from "../assets/vivigas.jpg";
import EnergiaCorrenteLogo from "../assets/energia-corrente.jpg";
import AlperiaLogo from "../assets/alperia.png";
import EniPlenitudeLogo from "../assets/eni-plenitude.png";
import A2ALogo from "../assets/a2a.png";

const Partners = () => {
  // Animazione per il fade-in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Configurazione del carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet grande
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // tablet e mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // Array dei partner con loghi e nomi
  const partners = [
    { name: "Bluenergy", logo: BluenergyLogo },
    { name: "Vivigas", logo: VivigasLogo },
    { name: "Energia Corrente", logo: EnergiaCorrenteLogo },
    { name: "Alperia", logo: AlperiaLogo },
    { name: "Eni Plenitude", logo: EniPlenitudeLogo },
    { name: "A2A", logo: A2ALogo },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Titolo della sezione */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B5D8A] tracking-tight drop-shadow-md">
            I miei partners
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Collaboro con le migliori compagnie per offrirti soluzioni affidabili e convenienti.
          </p>
        </motion.div>

        {/* Carosello dei loghi */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-5xl mx-auto overflow-hidden"
        >
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center px-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-center items-center w-full h-40">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-20 w-full max-w-[180px] object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
