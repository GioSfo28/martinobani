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
import Iren from "../assets/Iren.png";
import Esmart from "../assets/e.smart.jpg";

const Partners = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Configurazione avanzata del carosello
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
    customPaging: (i) => (
      <button className="w-2 h-2 rounded-full bg-[#4A6FA5]/30 hover:bg-[#4A6FA5] transition-all duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const partners = [
    { name: "Bluenergy", logo: BluenergyLogo },
    { name: "Vivigas", logo: VivigasLogo },
    { name: "Energia Corrente", logo: EnergiaCorrenteLogo },
    { name: "Alperia", logo: AlperiaLogo },
    { name: "Eni Plenitude", logo: EniPlenitudeLogo },
    { name: "ESmart", logo: Esmart },
    { name: "Iren", logo: Iren },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
              I miei partner
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Collaboro con le migliori compagnie del settore energetico per offrirti soluzioni
            <span className="font-semibold"> affidabili, convenienti e innovative</span>.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-6xl mx-auto"
        >
          <style>{`
            .slick-dots {
              bottom: -40px !important;
            }
            .slick-dots li button:before {
              color: transparent !important;
            }
            .slick-dots li {
              margin: 0 6px !important;
            }
            .slick-slide {
              outline: none;
            }
            .slick-slide div {
              outline: none;
            }
          `}</style>

          <Slider {...settings}>
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="px-4"
                variants={cardFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#4A6FA5]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 h-48 flex items-center justify-center overflow-hidden"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(74, 111, 165, 0.2)",
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4A6FA5]/0 via-[#4A6FA5]/10 to-[#4A6FA5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Logo Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-24 w-auto max-w-[160px] object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                    />
                    <p className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-[#4A6FA5] transition-colors duration-300 text-center">
                      {partner.name}
                    </p>
                  </div>

                  {/* Hover border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-padding"
                    animate={{
                      borderColor: [
                        "rgba(74, 111, 165, 0)",
                        "rgba(74, 111, 165, 0.3)",
                        "rgba(74, 111, 165, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="text-gray-600 text-lg">
            Trusted by <span className="font-bold text-[#4A6FA5]">7+ energy partners</span> across Italy
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-[#4A6FA5] to-[#357ABD] rounded-full border-2 border-white shadow-md"
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
