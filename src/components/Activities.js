import React from "react";

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

                    {/* Servizi Energetici */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-[#4A6FA5] text-center mb-8">Consulenza Energetica</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {/* Gestione Utenze */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <h3 className="text-xl font-bold text-[#4A6FA5] mt-4">Gestione Utenze</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Offro assistenza completa nella gestione delle utenze energetiche, garantendo trasparenza e risparmio.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Volture, subentri e attivazioni contatori</li>
                                    <li>Analisi delle bollette e riduzione dei costi</li>
                                    <li>Gestione pratiche burocratiche</li>
                                </ul>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-md hover:bg-[#3B5D8A] transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
                            </div>

                            {/* Consulenza Fotovoltaico */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <h3 className="text-xl font-bold text-[#3B5D8A] mt-4">Consulenza Fotovoltaico</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Analisi dettagliata e proposte ottimali per l'installazione di impianti fotovoltaici.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Valutazione della convenienza economica</li>
                                    <li>Agevolazioni fiscali e incentivi statali</li>
                                    <li>Supporto nella scelta dell'impianto</li>
                                </ul>
                                {/* Pulsante "Scopri di più" visibile solo su mobile */}
                                <a
                                    href="#Contatti"
                                    className="inline-block mt-4 px-6 py-2 bg-[#3B5D8A] text-white font-semibold rounded-lg shadow-md hover:bg-[#2C4A70] transition duration-300 md:hidden"
                                >
                                    Scopri di più
                                </a>
                            </div>

                            {/* Efficientamento Energetico */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <h3 className="text-xl font-bold text-orange-500 mt-4">Efficientamento Energetico</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Soluzioni personalizzate per ridurre i consumi energetici e migliorare l'efficienza.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Audit energetici completi</li>
                                    <li>Ottimizzazione degli impianti esistenti</li>
                                    <li>Installazione di tecnologie innovative</li>
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

                    {/* Supporto Tecnico Energetico */}
                    <div>
                        <h3 className="text-3xl font-bold text-green-600 text-center mb-8">Supporto Tecnico Energetico</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                            {/* Assistenza Completa */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                                <h3 className="text-xl font-bold text-green-600 mt-4">Assistenza Completa</h3>
                                <p className="text-gray-700 mt-2 leading-relaxed">
                                    Fornisco supporto continuativo per tutte le tue esigenze energetiche:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                    <li>Confronto delle migliori offerte sul mercato</li>
                                    <li>Risoluzione problemi tecnici</li>
                                    <li>Formazione sull'uso efficiente dell'energia</li>
                                </ul>
                                <p className="text-gray-700 mt-4 leading-relaxed">
                                    Il mio obiettivo è semplificare la tua vita energetica, garantendo professionalità e chiarezza.
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