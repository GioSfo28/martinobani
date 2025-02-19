import React from "react";
import profileImage from "../assets/gio.jpg"; // Immagine profilo
import { FaGraduationCap, FaStar, FaBriefcase } from "react-icons/fa";

const Profile = () => {
    return (
        <>
            {/* Divisore tra Hero e Esperienze */}
            <div className="h-16 bg-gradient-to-b from-gray-100 to-transparent"></div>

            <section id="Esperienze" className="py-20 bg-white">
                <div className="container mx-auto px-6">

                    {/* Profilo */}
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
                        <div className="flex-shrink-0">
                            <img
                                src={profileImage}
                                alt="Dott. Giorgio Sforza"
                                className="w-48 h-48 rounded-full shadow-lg border-4 border-gray-300 object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Dott. Giorgio Sforza
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
                                className="inline-block px-6 py-3 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition duration-300"
                            >
                                Scarica il CV completo
                            </a>
                        </div>
                    </div>

                    {/* Separatore */}
                    <div className="mt-12 border-b border-gray-300"></div>

                    {/* Esperienze Lavorative */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            <FaBriefcase className="inline-block text-[#4A6FA5] mr-2" />
                            Esperienze Lavorative
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                            {/* Infermiere presso punto infermieristico BTicino */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                                <h4 className="text-xl font-bold text-[#4A6FA5] mb-2">
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
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                                <h4 className="text-xl font-bold text-yellow-600 mb-2">
                                    Infermiere Medicina del Lavoro
                                </h4>
                                <p className="text-gray-700 font-medium">
                                    <strong>20/01/2020 – 31/01/2023</strong> <span className="text-sm text-gray-600 ml-2">(Durata: 3 anni)</span>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Diagnosi Analisi e Terapie Pasteur S.r.l., Guidonia → Cerba Health Care Lombardia SRL, Tradate
                                </p>
                                <p className="text-gray-600 mt-2">
                                    <strong>Attività principali:</strong>
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                                    <li>Prelievi venosi</li>
                                    <li>ECG</li>
                                    <li>Spirometrie</li>
                                    <li>Audiometrie</li>
                                    <li>Esami tossicologici</li>
                                </ul>
                            </div>

                            {/* Assistenza domiciliare ospedalizzata pediatrica (ADO) */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                                <h4 className="text-xl font-bold text-green-600 mb-2">
                                    Assistenza domiciliare ospedalizzata pediatrica (ADO)
                                </h4>
                                <p className="text-gray-700 font-medium">
                                    <strong>21/04/2021 – 31/10/2021</strong> <span className="text-sm text-gray-600 ml-2">(Durata: 6 mesi)</span>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Medicasa S.p.A, Roma
                                </p>
                            </div>

                            {/* Infermiere di terapia intensiva COVID e Stroke Unit */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                                <h4 className="text-xl font-bold text-red-600 mb-2">
                                    Infermiere di terapia intensiva COVID e Stroke Unit
                                </h4>
                                <p className="text-gray-700 font-medium">
                                    <strong>09/04/2020 – 31/07/2020</strong> <span className="text-sm text-gray-600 ml-2">(Durata: 4 mesi)</span>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Fondazione IRCCS Ca' Granda Ospedale Maggiore Policlinico, Milano
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Riconoscimenti e Istruzione */}
                    {/* Istruzione */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            <FaGraduationCap className="inline-block text-orange-500 mr-2" />
                            Istruzione
                        </h3>

                        {/* Medicina e Chirurgia */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Medicina e Chirurgia - Università dell'Insubria (Varese)
                            </h4>
                            <p className="text-lg text-gray-700">
                                Attualmente iscritto al corso di laurea in <strong>Medicina e Chirurgia</strong>.
                            </p>
                        </div>

                        {/* Master di I Livello */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Master in "Gestione infermieristica dell'emergenza sul territorio"
                            </h4>
                            <p className="text-lg text-gray-700">
                                Master di I° livello presso <strong>La Sapienza - Università di Roma</strong>.
                            </p>
                        </div>

                        {/* Laurea in Infermieristica */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Laurea in Infermieristica - La Sapienza, Università di Roma
                            </h4>
                            <p className="text-lg text-gray-700">
                                Conseguita con una tesi in area critica dal titolo:
                                <strong> "Incidenti in montagna: gestione e trattamento dell'ipotermia"</strong>.
                            </p>
                        </div>

                        {/* Maturità Classica */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Diploma di Maturità Classica
                            </h4>
                            <p className="text-lg text-gray-700">
                                Conseguito presso il <strong>Liceo Classico "Amedeo di Savoia" di Tivoli</strong>.
                            </p>
                        </div>
                    </div>


                    {/* Volontariato e Riconoscimenti */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            <FaStar className="inline-block text-yellow-500 mr-2" />
                            Volontariato e Riconoscimenti
                        </h3>

                        {/* Servizi di Volontariato */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Servizi di Volontariato
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Dal <strong>2014</strong> sono stato dapprima un <strong>soccorritore</strong> ed ora un
                                <strong> infermiere volontario</strong> con il
                                <a
                                    href="https://www.cisom.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-600 font-semibold hover:underline ml-1"
                                >
                                    Corpo Italiano di Soccorso dell'Ordine di Malta (C.I.S.O.M.)
                                </a>.
                                Questo ruolo mi ha permesso di partecipare a numerose iniziative, offrendo supporto sanitario
                                e organizzativo in contesti di emergenza e attività di volontariato sociale.
                            </p>

                            <h5 className="text-lg font-semibold text-gray-800 mt-4">Attività svolte:</h5>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                                <li>
                                    <strong>Maxi-emergenze:</strong> Partecipazione alle operazioni di soccorso per il
                                    <strong> Terremoto Centro Italia</strong> (ottobre 2016) e
                                    <strong> l'emergenza Emilia Romagna</strong> (maggio 2023).
                                </li>
                                <li>
                                    <strong>Campi estivi con ragazzi disabili:</strong> Organizzazione e assistenza nei campi
                                    estivi nazionali e internazionali, tra cui il
                                    <strong> International Malta Camp 2022</strong> e le edizioni italiane dal <strong>2014 al 2024</strong>.
                                </li>
                                <li>
                                    <strong>Eventi sportivi:</strong> Assistenza sanitaria durante manifestazioni sportive di rilievo.
                                </li>
                                <li>
                                    <strong>Supporto a persone vulnerabili:</strong> Fornitura di servizi di prima necessità e assistenza sanitaria attraverso:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>
                                            <strong>Unità di strada (Milano):</strong> Distribuzione notturna di pasti caldi,
                                            coperte e assistenza sanitaria a persone senza fissa dimora.
                                        </li>
                                        <li>
                                            <strong>Servizio AMM (Ambulatorio Medico Mobile):</strong> Supporto sanitario itinerante per
                                            offrire cure e servizi medici di base a persone in difficoltà.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <p className="text-lg text-gray-700 leading-relaxed mt-6">
                                Questa esperienza di volontariato ha contribuito in maniera significativa alla mia
                                formazione personale e professionale, permettendomi di sviluppare <strong>competenze tecniche,
                                    empatia e capacità di adattamento</strong> in contesti di crisi.
                            </p>
                        </div>

                        {/* Riconoscimenti e Attività Accademiche */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Riconoscimenti e Attività Accademiche
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ho ricoperto il ruolo di <strong>Rappresentante e Consigliere di Facoltà</strong> presso
                                <strong> "La Sapienza - Università di Roma"</strong>, organizzando eventi dedicati al tema
                                della disabilità che hanno coinvolto oltre <strong>500 studenti</strong>.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                Questa esperienza mi ha permesso di sviluppare capacità di
                                <strong> leadership, coordinamento e sensibilizzazione sociale</strong>, contribuendo a progetti
                                volti all'inclusione e all'abbattimento delle barriere culturali.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Profile;
