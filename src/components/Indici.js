import React from "react";
import { FaBolt, FaGasPump, FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Indici = () => {
  const indici = [
    {
      title: "PUN (Prezzo Unico Nazionale)",
      description:
        "Sta per PREZZO UNICO NAZIONALE, ed è l'indicatore del costo all'ingrosso dell'energia elettrica che viene scambiata tra i produttori e i fornitori sul mercato della borsa elettrica italiana. Sulla base della quantità di energia prodotta nelle diverse zone d'Italia e dei prezzi locali, il mercato determina un costo medio nazionale (Prezzo Unico appunto) che varia di giorno in giorno e anche di ora in ora. L'andamento si autoregola tenendo conto anche dell'energia derivante da fonti rinnovabili che quella da fonti fossili come petrolio e gas.",
      icon: <FaBolt className="text-yellow-500" />,
      color: "border-yellow-500/20",
    },
    {
      title: "Dispacciamento",
      description:
        "È una di quelle voci presenti nella nostra bolletta della luce ed è stabilita dalle autorità. Uguale per tutti sul territorio nazionale e non dipesa dal fornitore. È una quota che viene pagata per riconoscere a Terna il lavoro estremamente complesso, che in ogni momento della giornata svolge per mantenere costante la quantità di energia prodotta e quella consumata da famiglie imprese. Viene accorpata nel totale al kWh nella voce 'spesa per la vendita materia energia'.",
      icon: <FaExchangeAlt className="text-blue-600" />,
      color: "border-blue-600/20",
    },
    {
      title: "PSV (Punto di Scambio Virtuale)",
      description:
        "Sta per PUNTO DI SCAMBIO VIRTUALE, tra i punti in entrata ed i punti in uscita della rete Nazionale di Gasdotti; presso il quale gli utenti abilitati e soggetti del settore, possono effettuare su base giornaliera, scambi e cessioni di gas. È quindi il punto principale di incontro tra domanda e offerta del mercato di gas in Italia. Qui si definisce il prezzo all'ingrosso e di conseguenza in base a questo valore, i vari fornitori valutano il prezzo della materia prima; sia per l'acquisto, che per la rivendita al cliente finale con le varie offerte nel mercato libero.",
      icon: <FaGasPump className="text-red-600" />,
      color: "border-red-600/20",
    },
  ];

  return (
    <section id="Indici" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header della sezione */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Glossario <span className="text-[#4A6FA5]">indici energetici</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-[#4A6FA5] mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            Comprendere le voci principali della tua bolletta è il primo passo per ottimizzare i tuoi consumi e scegliere l'offerta più adatta a te.
          </motion.p>
        </div>

        {/* Grid degli Indici */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {indici.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border ${item.color} transition-all duration-300 flex flex-col h-full`}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify italic">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer informativo opzionale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center"
        >
          <p className="text-blue-800 text-sm font-medium">
            💡 Ricorda: questi indici sono regolati dal mercato e dalle autorità competenti (GME, ARERA, SNAM).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Indici;