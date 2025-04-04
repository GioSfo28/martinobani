import React from "react";
import profileImage from "../assets/MB.jpeg"; // Assicurati di inserire l'immagine corretta
import { FaUser } from "react-icons/fa"; // Icona per "Chi sono"

const Profile = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            {/* Header */}
            <div id="ChiSono" className="text-center mb-12">
                <img
                    src={profileImage}
                    alt="Martino Bani"
                    className="w-48 h-48 rounded-full mx-auto shadow-lg border-4 border-gray-300 object-cover transition-transform duration-500 hover:scale-105"
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-6">Martino Bani</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Consulente Energetico | Esperto in Gestione Utenze | Supporto Fotovoltaico
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">
                    Opero a livello nazionale, offrendo consulenza energetica a privati, micro-imprese e aziende.
                </p>
            </div>

            {/* Chi sono */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#4A6FA5] mb-4 flex items-center">
                    <FaUser className="inline-block text-[#4A6FA5] mr-2" /> {/* Icona */}
                    Chi sono
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Sono Martino Bani, un consulente energetico specializzato nell'assistenza a privati, micro-imprese e aziende. Mi dedico a semplificare la gestione delle utenze, garantendo trasparenza e risparmio senza costi aggiuntivi.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Il mio approccio si basa su <strong>competenza, affidabilità e innovazione</strong>. Offro servizi completi, tra cui:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Analisi e confronto delle migliori offerte sul mercato.</li>
                        <li>Gestione volture, subentri e attivazioni contatori.</li>
                        <li>Consulenza gratuita per il fotovoltaico e agevolazioni fiscali.</li>
                    </ul>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Con anni di esperienza nel settore energetico, mi impegno a fornire soluzioni personalizzate per ogni cliente, garantendo sempre la massima professionalità e chiarezza.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <a
                    href="#Servizi"
                    className="inline-block px-8 py-3 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition duration-300 transform hover:scale-105"
                >
                    Scopri i miei servizi
                </a>
            </div>
        </div>
    );
};

export default Profile;