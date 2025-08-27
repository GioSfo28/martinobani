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
    centerMode: false,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  // Array dei partner con loghi e nomi (aggiunto A2A)
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
            Collaboro con le migliori compagnie energetiche per offrirti soluzioni affidabili e convenienti.
          </p>
        </motion.div>

        {/* Carosello dei loghi */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-5xl mx-auto overflow-hidden"
        >
          <div className="slick-container">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div key={index} className="outline-none focus:outline-none">
                  <div className="px-2 sm:px-4">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-center items-center h-32 sm:h-36">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-20 sm:h-24 w-auto max-w-[200px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;