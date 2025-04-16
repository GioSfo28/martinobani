import React from "react";
import { FaHome, FaPhone, FaVideo, FaLightbulb, FaFire } from "react-icons/fa"; // Icone per domicilio, telefono e videocall

import Italy from "../assets/italy.png"


const Activities = () => {
    return (
        <>
            {/* Divisore tra le sezioni */}
            <div className="h-16 bg-gradient-to-b from-transparent to-gray-100"></div>

            {/* Sezione Servizi */}
            <section id="Servizi" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    {/* Titolo Principale */}
                    <h2 className="text-4xl font-bold text-center text-[#3B5D8A] mb-12 tracking-wider drop-shadow-md">
                        Scopri tutti i miei servizi
                    </h2>
                    {/* Sottotitolo */}
                    <p className="text-4xl font-bold text-center text-[#3B5D8A]  mb-12">
                        Luce e Gas
                    </p>
                    {/* Lista dei Servizi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Nuove Attivazioni */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" /> {/* Lampadina Gialla */}
                                <FaFire className="text-2xl text-red-600" /> {/* Fiammetta Rossa */}
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Nuove Attivazioni</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Offro assistenza completa nella gestione delle nuove attivazioni energetiche.
                            </p>
                        </div>
                        {/* Cambi Fornitore */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Cambio fornitore</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Analisi approfondita e proposte convenienti verso compagnie più competitive.
                            </p>
                        </div>
                        {/* Volture */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Volture</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Supporto e genstione pratiche per cambio intestatario utenze (voltura ordinaria / mortis causa).
                            </p>
                        </div>
                        {/* Subentri */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Subentri</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Assistenza e compilazione pratiche per attivazione forniture cessate o sospese per morosità.
                            </p>
                        </div>
                        {/* Posa Contatori Definitivi e Temporanei */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Posa Contatori Definitivi e Temporanei</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Aiuto pratico nell'attività di contrattualistica ed iter per Posa Contatori.
                            </p>
                        </div>
                        {/* Aumento/Diminuzione Potenza (Luce) */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-bold text-[#4A6FA5] flex items-center space-x-2">
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <span>Aumento/Diminuzione Potenza (Luce)</span>
                            </h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Supporto e valutazione per adeguamento potenza su contatori elettrici.
                            </p>
                        </div>
                        {/* Aumento/Diminuzione Portata Termica (Gas) */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-bold text-[#4A6FA5] flex items-center space-x-2">
                                <FaFire className="text-2xl text-red-600" />
                                <span>Aumento/Diminuzione Portata Termica (Gas)</span>
                            </h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Regolazione della portata termica del gas secondo le tue necessità.
                            </p>
                        </div>
                        {/* Modifica Tensione (Luce) */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-bold text-[#4A6FA5] flex items-center space-x-2">
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <span>Modifica Tensione (Luce)</span>
                            </h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Adatta la tensione elettrica ai tuoi bisogni specifici.
                            </p>
                        </div>
                        {/* Cambio Fornitore + Voltura Contestuale */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Cambio Fornitore + Voltura Contestuale</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Gestione switch con tariffa ottimale, assegnando contemporaneamente nuova intestazione.
                            </p>
                        </div>
                        {/* Agevolazione Accise Gas */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-bold text-[#4A6FA5] flex items-center space-x-2">
                                <FaFire className="text-2xl text-red-600" />
                                <span>Agevolazione Accise Gas</span>
                            </h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Per aziende: agevolazione imposte erariali in base al codice ateco dell'attività.
                            </p>
                        </div>
                        {/* Agevolazione IVA Luce e Gas */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="flex items-center space-x-2">
                                {/* Icone Luce e Gas */}
                                <FaLightbulb className="text-2xl text-yellow-500" />
                                <FaFire className="text-2xl text-red-600" />
                                {/* Titolo del Servizio */}
                                <h3 className="text-xl font-bold text-[#4A6FA5]">Agevolazione IVA Luce e Gas</h3>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Per aziende: valutazione fattibilità per aventi diritto ad iva ridotta.
                            </p>
                        </div>
                    </div>

                    {/* Sezione "Come lo facciamo" */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-[#3B5D8A] text-center my-8">Come lo faccio</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Offro una consulenza energetica gratuita e personalizzata, durante la quale ti farò alcune domande per capire esattamente come posso aiutarti.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                            {/* Mappa d'Italia */}
                            <img
                                src={Italy}
                                alt="Mappa d'Italia"
                                className="w-48 h-48 object-cover rounded-md"
                            />
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Mi trovo ad Ancona (Marche), ma offro i miei servizi in tutta Italia.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    A seconda delle tue esigenze, la consulenza può essere svolta:
                                </p>
                                <ul className="flex flex-col space-y-2 mt-2">
                                    <li className="flex items-center space-x-2">
                                        <FaHome className="text-2xl text-[#4A6FA5]" />
                                        <span className="text-gray-700"><strong>a domicilio</strong></span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <FaPhone className="text-2xl text-[#4A6FA5]" />
                                        <span className="text-gray-700"><strong>telefonicamente</strong></span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <FaVideo className="text-2xl text-[#4A6FA5]" />
                                        <span className="text-gray-700"><strong>in videocall</strong></span>
                                    </li>
                                </ul>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    Grazie alla mia esperienza nei settori di luce e gas, conosco perfettamente tutti gli aspetti tecnici, le dinamiche e le procedure necessarie per muoversi con sicurezza nel mercato libero.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    Mi aggiorno costantemente per garantire ai miei clienti un supporto professionale e affidabile, semplificando la gestione delle loro utenze.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pulsante Contatti - Visibile solo su desktop */}
                    <div className="text-center mt-12 hidden md:block">
                        <a
                            href="#Contatti"
                            className="inline-block px-8 py-3 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition-colors duration-300"
                        >
                            Contattami ora
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activities;