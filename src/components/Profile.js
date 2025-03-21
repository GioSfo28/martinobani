import React from "react";
import profileImage from "../assets/gio.jpg"; // Assicurati che il percorso dell'immagine sia corretto
import { FaUser } from "react-icons/fa"; // Nuova icona per "Chi sono"

const Profile = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            {/* Header */}
            <div id="ChiSono" className="text-center mb-12">
                <img
                    src={profileImage}
                    alt="Dott. Giorgio Sforza"
                    className="w-48 h-48 rounded-full mx-auto shadow-lg border-4 border-gray-300 object-cover transition-transform duration-500 hover:scale-105"
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-6">Dott. Giorgio Sforza</h1> {/* Nessuna sottolineatura */}
                <p className="text-lg text-gray-600 mt-2">
                    Infermiere | Studente di Medicina e Chirurgia | Appassionato di Informatica
                </p>
            </div>

            {/* Chi sono */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#4A6FA5] mb-4 flex items-center">
                    <FaUser className="inline-block text-[#4A6FA5] mr-2" /> {/* Nuova icona */}
                    Chi sono
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Sono Giorgio Sforza, un infermiere e studente di Medicina con una forte passione per la tecnologia. Mi dedico a fornire assistenza sanitaria di qualità, garantendo sempre attenzione e professionalità. Parallelamente, coltivo la mia creatività creando siti web personalizzati per privati e piccole imprese.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Il mio approccio si basa su <strong>precisione, empatia e innovazione</strong>. Mi dedico a fornire soluzioni complete, combinando competenze sanitarie e tecnologiche per rispondere alle esigenze dei miei pazienti e clienti.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Da anni mi impegno attivamente nel mondo del volontariato, in particolare con il{" "}
                    <a
                        href="https://www.cisom.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline font-semibold"
                    >
                        Corpo Italiano di Soccorso dell'Ordine di Malta (CISOM)
                    </a>, dove offro supporto sanitario e organizzativo in contesti di emergenza e attività sociali. Questa esperienza mi ha permesso di sviluppare empatia, leadership e capacità di adattamento in situazioni complesse.
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