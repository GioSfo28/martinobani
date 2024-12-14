import React from "react";
import profileImage from "../assets/gio.jpg"; // Collegamento all'immagine del profilo
import { FaMedkit, FaGraduationCap, FaStar, FaBriefcase } from "react-icons/fa";

const Profile = () => {
    return (
        <section id="Esperienze" className="py-16 bg-gradient-to-r from-gray-50 to-blue-100">
            <div className="container mx-auto px-6">
                {/* Profilo */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
                    <div className="flex-shrink-0">
                        <img
                            src={profileImage}
                            alt="Giorgio Sforza"
                            className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Giorgio Sforza
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Mi chiamo Giorgio Sforza, sono nato a Roma il 28 marzo del 1995. Ho conseguito
                            la laurea in Infermieristica presso l’Università “La Sapienza” di Roma con una tesi
                            in area critica dal titolo{" "}
                            <strong>"Incidenti in montagna: gestione e trattamento dell'ipotermia".</strong>
                        </p>
                        <a
                            href="/CV-GiorgioSforza.pdf"
                            download
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                        >
                            Scarica il CV completo
                        </a>
                    </div>
                </div>

                {/* Esperienze Lavorative */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        <FaBriefcase className="inline-block text-blue-500 mr-2" />
                        Esperienze Lavorative
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        {/* Infermiere presso punto infermieristico BTicino */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <h4 className="text-xl font-bold text-blue-600 mb-2">
                                Infermiere presso punto infermieristico BTicino
                            </h4>
                            <p className="text-gray-700 font-medium">
                                <strong>01/01/2023 – Attuale</strong>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Centro Polispecialistico Beccaria, Varese
                            </p>
                        </div>

                        {/* Infermiere Medicina del Lavoro */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <h4 className="text-xl font-bold text-yellow-600 mb-2">
                                Infermiere Medicina del Lavoro
                            </h4>
                            <p className="text-gray-700 font-medium">
                                <strong>20/01/2020 – 31/01/2023</strong>
                                <span className="text-sm text-gray-600 ml-2">(Durata: 3 anni)</span>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Inizialmente presso Diagnosi Analisi e Terapie Pasteur S.r.l., Guidonia, e successivamente a Cerba Health Care Lombardia SRL, Tradate.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Attività principali:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                                <li>Prelievi venosi</li>
                                <li>ECG</li>
                                <li>Spirometrie</li>
                                <li>Audiometrie</li>
                                <li>Esami tossicologici</li>
                            </ul>
                        </div>


                        {/* Assistenza domiciliare ospedalizzata pediatrica (ADO) */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <h4 className="text-xl font-bold text-green-600 mb-2">
                                Assistenza domiciliare ospedalizzata pediatrica (ADO)
                            </h4>
                            <p className="text-gray-700 font-medium">
                                <strong>21/04/2021 – 31/10/2021</strong>
                                <span className="text-sm text-gray-600 ml-2">(Durata: 6 mesi)</span>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Medicasa S.p.A, Roma
                            </p>
                        </div>

                        {/* Infermiere di terapia intensiva COVID e Stroke Unit */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <h4 className="text-xl font-bold text-red-600 mb-2">
                                Infermiere di terapia intensiva COVID e Stroke Unit
                            </h4>
                            <p className="text-gray-700 font-medium">
                                <strong>09/04/2020 – 31/07/2020</strong>
                                <span className="text-sm text-gray-600 ml-2">(Durata: 4 mesi)</span>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Fondazione IRCCS Ca' Granda Ospedale Maggiore Policlinico, Milano
                            </p>
                        </div>
                    </div>
                </div>



                {/* Esperienze Cliniche */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        <FaMedkit className="inline-block text-green-500 mr-2" />
                        Esperienze Cliniche
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Ortopedia</li>
                            <li>Medicina interna</li>
                            <li>Chirurgia d'urgenza</li>
                            <li>Sala operatoria ematologia</li>
                            <li>Malattie infettive pediatriche</li>
                            <li>Chirurgia toracica</li>
                        </ul>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>UTIPO Neurochirurgia</li>
                            <li>Terapia intensiva neonatale (TIN)</li>
                            <li>Pronto soccorso chirurgico</li>
                            <li>Emodinamica</li>
                            <li>Pronto soccorso medico</li>
                        </ul>
                    </div>
                </div>

                {/* Riconoscimenti */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        <FaGraduationCap className="inline-block text-orange-500 mr-2" />
                        Riconoscimenti e Istruzione
                    </h3>

                    {/* Maturità Classica */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Diploma di <strong>Maturità Classica</strong>, conseguito presso il Liceo Classico
                        <strong> "Amedeo di Savoia" di Tivoli</strong>.
                    </p>

                    {/* Laurea in Infermieristica */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Laurea in <strong>Infermieristica</strong> presso "La Sapienza - Università di Roma",
                        con una tesi in area critica dal titolo{" "}
                        <strong>"Incidenti in montagna: gestione e trattamento dell'ipotermia".</strong>
                    </p>

                    {/* Master di I Livello */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Master di I° livello in <strong>"Gestione infermieristica dell'emergenza sul territorio"</strong>{" "}
                        presso "La Sapienza - Università di Roma".
                    </p>

                    {/* Medicina e Chirurgia */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Attualmente iscritto al corso di laurea in <strong>Medicina e Chirurgia</strong> presso l'Università dell'Insubria a Varese, dal 2021.
                    </p>

                    {/* Esperienze come rappresentante */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Rappresentante e Consigliere di Facoltà presso "La Sapienza",
                        organizzando eventi sul tema della disabilità che hanno coinvolto oltre 500 studenti.
                    </p>
                </div>


                {/* Servizio Volontario */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        <FaStar className="inline-block text-yellow-500 mr-2" />
                        Servizio Volontario
                    </h3>

                    {/* Introduzione */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Dal 2014 sono stato dapprima un soccorritore ed ora un infermiere volontario con il{" "}
                        <a
                            href="https://www.cisom.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 font-semibold hover:underline"
                        >
                            Corpo Italiano di Soccorso dell'Ordine di Malta (C.I.S.O.M.)
                        </a>.
                        Questo ruolo mi ha permesso di partecipare a numerose iniziative, offrendo supporto sanitario e organizzativo in contesti di emergenza e attività di volontariato sociale.
                    </p>

                    {/* Attività */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                            Attività Svolte
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong>Maxi-emergenze:</strong> Partecipazione ad attività di soccorso per il "Terremoto Centro Italia" (ottobre 2016) e
                                l'emergenza Emilia Romagna (maggio 2023).
                            </li>
                            <li>
                                <strong>Campi estivi con ragazzi disabili:</strong> Organizzazione e assistenza in campi estivi nazionali
                                e internazionali, come il{" "}
                                <strong>International Malta Camp 2022</strong> e le edizioni italiane dal 2014 al 2024.
                            </li>
                            <li>
                                <strong>Eventi sportivi:</strong> Assistenza sanitaria durante manifestazioni sportive di rilievo.
                            </li>
                            <li>
                                <strong>Supporto a persone vulnerabili:</strong> Fornitura di servizi di prima necessità e assistenza
                                sanitaria attraverso:
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                        <strong>Unità di strada (Milano):</strong> Interventi notturni per la distribuzione di pasti caldi,
                                        coperte e assistenza sanitaria a persone senza fissa dimora.
                                    </li>
                                    <li>
                                        <strong>Servizio AMM (Ambulatorio Medico Mobile):</strong> Supporto sanitario itinerante per
                                        offrire cure e servizi medici di base a persone in difficoltà.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Riflessione personale */}
                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                        Questa esperienza di volontariato ha contribuito in maniera significativa alla mia formazione personale
                        e professionale, permettendomi di sviluppare competenze tecniche, empatia e una profonda capacità di
                        adattamento in contesti di crisi.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Profile;
