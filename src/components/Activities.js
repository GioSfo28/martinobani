import React from "react";
import prelievoImage from "../assets/Prelievo.png";
import medicazioneImage from "../assets/Medicazione.jpg";
import anzianiImage from "../assets/Anziani.jpg";

const Activities = () => {
    return (
        <>
            {/* Divisore tra le sezioni */}
            <div className="h-16 bg-gradient-to-b from-transparent to-gray-100"></div>

            <section id="Servizi" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    {/* Titolo */}
                    <h2 className="text-4xl font-bold text-center text-[#3B5D8A] mb-12 tracking-wider drop-shadow-md">
                        Di cosa mi occupo
                    </h2>

                    {/* Griglia Servizi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        
                        {/* Prelievi a domicilio */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={prelievoImage}
                                alt="Prelievi a domicilio"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-2xl font-bold text-[#4A6FA5] mt-4">Prelievi a domicilio</h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Eseguo a domicilio i prelievi ematici (anche attraverso PICC) e la raccolta di
                                campioni biologici:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>Esame della coagulazione e assetto coagulativo (INR)</li>
                                <li>Misurazione della glicemia da dito</li>
                                <li>Check up Uomo</li>
                                <li>Check up Donna</li>
                                <li>Sierologico Covid-19 quantitativo e rapido</li>
                                <li>Esame urine</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                Evito spostamenti stressanti: l’esito ti arriverà comodamente via mail in tempi brevi.
                            </p>
                        </div>

                        {/* Medicazioni */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={medicazioneImage}
                                alt="Medicazioni"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-2xl font-bold text-[#3B5D8A] mt-4">Medicazioni</h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Offro sia medicazioni semplici (abrasioni, lievi tagli o escoriazioni) che medicazioni avanzate,
                                garantendo sempre il massimo livello di sterilità per prevenire infezioni e favorire una rapida guarigione.
                            </p>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Le medicazioni avanzate comprendono la gestione di ferite chirurgiche, ulcere da pressione, lesioni croniche
                                e la cura di ferite complesse che richiedono materiali specifici e competenze avanzate.
                            </p>
                        </div>

                        {/* Assistenza anziani */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={anzianiImage}
                                alt="Assistenza anziani"
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h3 className="text-2xl font-bold text-orange-500 mt-4">Assistenza anziani</h3>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Servizi dedicati agli anziani, per garantire supporto nelle necessità quotidiane e
                                sanitarie.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>Misurazione parametri vitali</li>
                                <li>Prelievo di sangue venoso e capillare</li>
                                <li>Preparazione e somministrazione farmaci</li>
                                <li>Medicazione semplice</li>
                                <li>Aiuto nella mobilizzazione</li>
                                <li>Infusione di farmaci prescritti per via parenterale</li>
                                <li>Gestione catetere vescicale</li>
                                <li>Elettrocardiogramma a domicilio</li>
                            </ul>
                        </div>
                    </div>

                    {/* Pulsante Contatti */}
                    <div className="text-center mt-12">
                        <a
                            href="#Contatti"
                            className="inline-block px-8 py-3 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition-colors duration-300"
                        >
                            Contattami
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activities;
