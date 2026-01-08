import React, { useState, useEffect } from "react";
import { FaBolt, FaGasPump, FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Indici = () => {
  const [data, setData] = useState({
    pun: { val: "Caricamento...", date: "" },
    psv: { val: "Caricamento...", date: "" },
    disp: { val: "Caricamento...", date: "" },
  });

  useEffect(() => {
    const fetchData = async (endpoint, key) => {
      try {
        const res = await fetch(`http://localhost:3001/${endpoint}`);
        const json = await res.json();
        setData(prev => ({ ...prev, [key]: { val: json.value, date: json.date || json.period } }));
      } catch (e) {
        setData(prev => ({ ...prev, [key]: { val: "N/D", date: "Errore" } }));
      }
    };

    fetchData('pun', 'pun');
    fetchData('psv', 'psv');
    fetchData('dispacciamento', 'disp');
  }, []);

  const indici = [
    {
      title: "PUN (Prezzo Unico Nazionale)",
      description: "Sta per PREZZO UNICO NAZIONALE, ed è l'indicatore del costo all'ingrosso dell'energia elettrica che viene scambiata tra i produttori e i fornitori sul mercato della borsa elettrica italiana. Sulla base della quantità di energia prodotta nelle diverse zone d'Italia e dei prezzi locali, il mercato determina un costo medio nazionale (Prezzo Unico appunto) che varia di giorno in giorno e anche di ora in ora. L'andamento si autoregola tenendo conto anche dell'energia derivante da fonti rinnovabili che quella da fonti fossili come petrolio e gas.",
      icon: <FaBolt className="text-yellow-500" />,
      value: data.pun.val,
      sub: data.pun.date
    },
    {
      title: "PSV (Punto di Scambio Virtuale)",
      description: "Sta per PUNTO DI SCAMBIO VIRTUALE, tra i punti in entrata ed i punti in uscita della rete Nazionale di Gasdotti; presso il quale gli utenti abilitati e soggetti del settore, possono effettuare su base giornaliera, scambi e cessioni di gas. È quindi il punto principale di incontro tra domanda e offerta del mercato di gas in Italia. Qui si definisce il prezzo all'ingrosso e di conseguenza in base a questo valore, i vari fornitori valutano il prezzo della materia prima; sia per l'acquisto, che per la rivendita al cliente finale con le varie offerte nel mercato libero.",
      icon: <FaGasPump className="text-red-600" />,
      value: data.psv.val,
      sub: data.psv.date
    },
    {
      title: "Dispacciamento",
      description: "È una di quelle voci presenti nella nostra bolletta della luce ed è stabilita dalle autorità. Uguale per tutti sul territorio nazionale e non dipesa dal fornitore. È una quota che viene pagata per riconoscere a Terna il lavoro estremamente complesso, che in ogni momento della giornata svolge per mantenere costante la quantità di energia prodotta e quella consumata da famiglie imprese. Viene accorpata nel totale al kWh nella voce 'spesa per la vendita materia energia'.",
      icon: <FaExchangeAlt className="text-blue-600" />,
      value: data.disp.val,
      sub: data.disp.date
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#4A6FA5]">Indici Energetici</h2>
          <p className="text-gray-600 mt-2">Valori aggiornati del mercato energetico italiano</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indici.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6 text-justify">
                {item.description}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-400 block uppercase tracking-wider">Valore Corrente</span>
                <span className="text-2xl font-black text-[#357ABD]">{item.value}</span>
                <span className="text-xs text-gray-500 block mt-1">{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Indici;