import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import loghi
import BluenergyLogo from "../assets/bluenergy.jpg";
import VivigasLogo from "../assets/vivigas.jpg";
import EnergiaCorrenteLogo from "../assets/energia-corrente.jpg";
import AlperiaLogo from "../assets/alperia.png";
import EniPlenitudeLogo from "../assets/eni-plenitude.png";
import Iren from "../assets/Iren.png";
import Esmart from "../assets/e.smart.jpg";

const Partners = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardFadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  // CONFIGURAZIONE CAROUSEL (FIX MOBILE)
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const partners = [
    { name: "Bluenergy", logo: BluenergyLogo },
    { name: "Vivigas", logo: VivigasLogo },
    { name: "Energia Corrente", logo: EnergiaCorrenteLogo },
    { name: "Alperia", logo: AlperiaLogo },
    { name: "Eni Plenitude", logo: EniPlenitudeLogo },
    { name: "ESmart", logo: Esmart },
    { name: "Iren", logo: Iren }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

      {/* sfondi animati */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* titolo */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
              I miei partner
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaboro con le migliori compagnie del settore energetico per offrirti
            <span className="font-semibold"> soluzioni affidabili, convenienti e innovative</span>.
          </p>
        </motion.div>


        {/* CAROUSEL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full max-w-6xl mx-auto"
        >

          <style>
            {`
            .slick-dots {
              bottom: -35px;
            }

            .slick-dots li button:before {
              color: transparent;
            }

            .slick-slide {
              padding: 10px;
            }
          `}
          </style>

          <Slider {...settings}>
            {partners.map((partner, index) => (

              <motion.div
                key={index}
                variants={cardFadeIn}
              >

                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-48 flex flex-col items-center justify-center"
                >

                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  <p className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-[#4A6FA5]">
                    {partner.name}
                  </p>

                </motion.div>

              </motion.div>

            ))}
          </Slider>

        </motion.div>


        {/* trust section */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >

          <p className="text-gray-600 text-lg">
            Trusted by <span className="font-bold text-[#4A6FA5]">7+ energy partners</span> in Italia
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">

            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-[#4A6FA5] to-[#357ABD] rounded-full border-2 border-white shadow"
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-gray-700">
              500+ clienti soddisfatti
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Partners;