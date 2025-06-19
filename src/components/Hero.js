import React, { useEffect } from "react";
import { FaLightbulb, FaBriefcase, FaSolarPanel } from "react-icons/fa"; // Icons for services
import { motion } from "framer-motion"; // For animations

const Hero = () => {
  // Animation variants for smooth transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Function to handle smooth scrolling to an element
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Header height
      const offset = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  // Handle hashchange event
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      if (id) {
        scrollToElement(id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center bg-green-900 text-white px-4 sm:px-6 lg:px-8 py-16"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1537486336219-a3dd8e2dc6b5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for improved readability */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl leading-tight"
            variants={fadeIn}
          >
            Martino Bani<br />
            Il tuo consulente energetico di fiducia
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-200 font-medium leading-relaxed"
            variants={fadeIn}
          >
            Specializzato nella gestione delle utenze di luce e gas
          </motion.p>
          <motion.p
            className="mt-4 text-xl sm:text-2xl font-bold uppercase text-yellow-400 leading-relaxed"
            variants={fadeIn}
          >
            Semplifico la tua vita energetica, facendoti risparmiare tempo e denaro!
          </motion.p>
          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-200 italic font-medium leading-relaxed"
            variants={fadeIn}
          >
            Che tu sia un privato, un'azienda o un libero professionista.
          </motion.p>
          <motion.p
            className="mt-4 text-base sm:text-lg italic font-semibold text-gray-100 leading-relaxed"
            variants={fadeIn}
          >
            Affida a me le tue utenze, goditi il risparmio!
          </motion.p>
          <motion.a
            href="#ChiSono"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("ChiSono");
            }}
            className="mt-8 inline-block px-10 py-4 bg-[#4A6FA5] text-white font-semibold rounded-full shadow-xl hover:bg-[#3B5D8A] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/50"
            variants={fadeIn}
          >
            Scopri di più
          </motion.a>
        </motion.div>
      </section>

      {/* Servizi Offerti */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-[#3B5D8A] text-center mb-12 tracking-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Servizi Offerti
          </motion.h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLightbulb className="text-4xl text-[#4A6FA5] mb-4 transition-transform duration-300 hover:scale-110" />,
                title: "Gestione Utenze",
                description: "Consulenza energetica professionale per contatori domestici e business.",
              },
              {
                icon: <FaSolarPanel className="text-4xl text-[#4A6FA5] mb-4 transition-transform duration-300 hover:scale-110" />,
                title: "Consulenza Fotovoltaico",
                description: "Analisi dettagliata e valutazione ad hoc per installazione pannelli fotovoltaici.",
              },
              {
                icon: <FaBriefcase className="text-4xl text-[#4A6FA5] mb-4 transition-transform duration-300 hover:scale-110" />,
                title: "Supporto Tecnico Energetico",
                description: "Assistenza completa per tutte le tue esigenze nel mondo dell'energia.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
                variants={cardFadeIn}
              >
                {service.icon}
                <h3 className="text-lg sm:text-xl font-bold text-[#4A6FA5] mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;