import React from "react";
import prelievoImage from "../assets/Prelievo.png";
import medicazioneImage from "../assets/Medicazione.jpg";
import anzianiImage from "../assets/Anziani.jpg";
import webImage from "../assets/WebDevelopment.jpg"; // Immagine rappresentativa per lo sviluppo web

const Activities = () => {
    return (
        <>
            {/* Divisore tra le sezioni */}
            <div className="h-16 bg-gradient-to-b from-transparent to-gray-100"></div>

            <section id="Servizi" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    {/* Titolo Principale */}
                    <h2 className="text-4xl font-bold text-center text-[#3B5D8A] mb-12 tracking-wider drop-shadow-md">
                        Di cosa mi occupo
                    </h2>

                    {/* Servizi Infermieristici */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-[#4A6FA5] text-center mb-8">Servizi Infermieristici</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {/* Prelievi a domicilio */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <img
                                    src={prelievoImage}
                                    alt="Prelievi a domicilio"
                                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="text-xl font-bold text-[#4A6FA5] mt-4">Prelievi a domicilio</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Eseguo prelievi ematici e raccolta di campioni biologici a domicilio, garantendo precisione e comfort.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Prelievi venosi e capillari</li>
                                    <li>Gestione PICC</li>
                                    <li>Esami tossicologici</li>
                                </ul>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-md hover:bg-[#3B5D8A] transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
                            </div>

                            {/* Medicazioni */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <img
                                    src={medicazioneImage}
                                    alt="Medicazioni"
                                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="text-xl font-bold text-[#3B5D8A] mt-4">Medicazioni</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Offro medicazioni semplici e avanzate, garantendo sterilità e rapidità di guarigione.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Ferite chirurgiche</li>
                                    <li>Ulcere da pressione</li>
                                    <li>Lesioni croniche</li>
                                </ul>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-[#3B5D8A] text-white font-semibold rounded-lg shadow-md hover:bg-[#2C4A70] transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
                            </div>

                            {/* Assistenza anziani */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <img
                                    src={anzianiImage}
                                    alt="Assistenza anziani"
                                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="text-xl font-bold text-orange-500 mt-4">Assistenza anziani</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Servizi personalizzati per supportare gli anziani nelle necessità quotidiane e sanitarie.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Misurazione parametri vitali</li>
                                    <li>Preparazione e somministrazione farmaci</li>
                                    <li>Prelievo di sangue venoso e capillare</li>
                                    <li>Medicazioni</li>
                                </ul>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Servizi Informatici */}
                    <div>
                        <h3 className="text-3xl font-bold text-green-600 text-center mb-8">Servizi Informatici</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                            {/* Creazione di siti web */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <img
                                    src={webImage}
                                    alt="Creazione siti web"
                                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="text-xl font-bold text-green-600 mt-4">Creazione siti web</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Progetto e sviluppo siti web moderni e funzionali per privati e aziende:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Siti vetrina</li>
                                    <li>Portfolio personalizzati</li>
                                    <li>Landing page</li>
                                    <li>Ottimizzazione SEO</li>
                                </ul>
                                <p className="text-gray-700 mt-4 leading-relaxed">
                                    Combino design accattivante e funzionalità per portare online la tua attività.
                                </p>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
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