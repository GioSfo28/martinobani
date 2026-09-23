import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

// Import loghi
import BluenergyLogo from "../assets/bluenergy.jpg";
import VivigasLogo from "../assets/vivigas.jpg";
import EnergiaCorrenteLogo from "../assets/energia-corrente.jpg";
import AlperiaLogo from "../assets/alperia.png";
import EniPlenitudeLogo from "../assets/eni-plenitude.png";
import Iren from "../assets/Iren.png";
import Esmart from "../assets/e.smart.jpg";

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ============================================================
   DATA
   ============================================================ */
const PARTNERS = [
  { name: "Bluenergy", logo: BluenergyLogo },
  { name: "Vivigas", logo: VivigasLogo },
  { name: "Energia Corrente", logo: EnergiaCorrenteLogo },
  { name: "Alperia", logo: AlperiaLogo },
  { name: "Eni Plenitude", logo: EniPlenitudeLogo },
  { name: "ESmart", logo: Esmart },
  { name: "Iren", logo: Iren },
];

/* ============================================================
   PARTNERS COMPONENT
   ============================================================ */
const Partners = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* -------- Glow decorativi (pointer-events-none, non interferiscono) -------- */}
      <motion.div
        className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-[#4A6FA5]/5 rounded-full blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-[#357ABD]/5 rounded-full blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===================== HEADER SEZIONE ===================== */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="mb-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5
                         rounded-full bg-[#4A6FA5]/8 ring-1 ring-[#4A6FA5]/15
                         text-[#4A6FA5] text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#4A6FA5] opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#4A6FA5]" />
              </span>
              Network di partner
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
          >
            <span className="inline-block py-1 bg-gradient-to-r from-[#4A6FA5] to-[#357ABD] bg-clip-text text-transparent">
              I miei partner
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Collaboro con le migliori compagnie del settore energetico per
            offrirti{" "}
            <span className="font-semibold text-gray-900">
              soluzioni affidabili, convenienti e innovative
            </span>
            .
          </motion.p>
        </motion.div>

        {/* ===================== SWIPER ===================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop={PARTNERS.length > 3}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!pb-14"
          >
            {PARTNERS.map((partner, index) => (
              <SwiperSlide key={index} className="!h-auto py-2">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 h-full min-h-[200px]
                             ring-1 ring-gray-100 hover:ring-[#4A6FA5]/25
                             shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_8px_rgba(16,24,40,0.04)]
                             hover:shadow-[0_4px_12px_rgba(16,24,40,0.06),0_16px_40px_rgba(74,111,165,0.15)]
                             transition-all duration-500 overflow-hidden
                             flex flex-col items-center justify-center"
                >
                  {/* Glow interno al hover */}
                  <span className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                                   rounded-full bg-[#4A6FA5]/10 blur-3xl
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Logo container — loghi sempre a colori */}
                  <div className="relative flex items-center justify-center h-24 w-full mb-4">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      loading="lazy"
                      className="max-h-20 max-w-[160px] object-contain
                                 transition-transform duration-500
                                 group-hover:scale-105"
                    />
                  </div>

                  {/* Divider */}
                  <span className="w-8 h-px bg-gray-200 group-hover:w-12 group-hover:bg-[#4A6FA5]/40
                                   transition-all duration-500" />

                  {/* Nome */}
                  <p className="mt-3 text-sm font-bold text-gray-700 tracking-wide
                                group-hover:text-[#4A6FA5] transition-colors duration-300">
                    {partner.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* ===================== TRUST SECTION ===================== */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Trust card glass */}
          <motion.div
            variants={fadeIn}
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6
                       px-6 sm:px-8 py-5 rounded-2xl
                       bg-white/70 backdrop-blur-md
                       ring-1 ring-gray-200/70
                       shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5" aria-hidden="true">
              {[
                "from-[#4A6FA5] to-[#357ABD]",
                "from-[#357ABD] to-[#2C4A7C]",
                "from-[#E8A44D] to-[#D18B2E]",
                "from-[#2C4A7C] to-[#1E3557]",
                "from-[#4A6FA5] to-[#2C4A7C]",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full border-2 border-white shadow-sm
                              bg-gradient-to-br ${gradient}
                              ring-1 ring-black/5`}
                />
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-1.5 text-[#E8A44D] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaCheckCircle key={i} className="text-xs" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700">
                <span className="text-[#4A6FA5] font-bold">7+ partner energetici</span>{" "}
                in tutta Italia
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                500+ clienti soddisfatti
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================
          STILI LOCALI per Swiper (pagination brandizzata)
         ============================================================ */}
      <style>{`
        .swiper-pagination-bullet {
          background: #CBD5E1;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all .3s ease;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #4A6FA5, #357ABD);
          width: 24px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
};

export default Partners;