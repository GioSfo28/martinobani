import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaQuoteLeft } from "react-icons/fa"; // Icon for quotes

const Reviews = () => {
  // Animation variants for smooth transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const reviewFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Sample reviews data
  const reviews = [
    {
      name: "Laura Rossi",
      role: "Privato",
      text: "Martino è stato eccezionale! Ha analizzato le mie bollette e mi ha aiutato a risparmiare oltre il 30% sulle utenze di casa. Sempre disponibile e professionale.",
    },
    {
      name: "Marco Bianchi",
      role: "Titolare di un negozio",
      text: "Grazie a Martino, ho ottimizzato i contratti di luce e gas per il mio negozio. La consulenza è stata chiara e ha portato a un risparmio significativo. Consigliatissimo!",
    },
    {
      name: "Elena Verdi",
      role: "Responsabile aziendale",
      text: "Abbiamo affidato a Martino la gestione delle utenze della nostra azienda. La sua competenza e attenzione ai dettagli ci hanno permesso di ridurre i costi energetici in modo notevole.",
    },
  ];

  return (
    <section id="Recensioni" className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#3B5D8A] text-center mb-12 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Dicono di me
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              variants={reviewFadeIn}
            >
              <FaQuoteLeft className="text-3xl text-[#4A6FA5] mb-4" />
              <p className="text-gray-700 text-base leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-[#4A6FA5]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;