import React from "react";
import { FaLightbulb, FaBriefcase, FaSolarPanel } from "react-icons/fa"; // Nuove icone per i servizi

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-auto min-h-[70vh] flex flex-col justify-center text-center bg-green-900 text-white px-6 py-12"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1537486336219-a3dd8e2dc6b5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay più scuro per migliorare la leggibilità */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Contenuto del Hero */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                        Martino Bani: Il tuo consulente energetico di fiducia
                    </h1>
                    <p className="mt-4 text-base md:text-xl text-gray-300 font-semibold">
                        Specializzato nella gestione delle utenze di luce e gas
                    </p>
                    <p className="mt-4 text-lg md:text-2xl font-bold uppercase text-yellow-400">
                        Semplifico la tua vita energetica, facendoti risparmiare tempo e denaro!
                    </p>
                    <p className="mt-4 text-sm md:text-lg text-gray-300">
                        Che tu sia un privato, un'azienda o un libero professionista
                    </p>
                    <p className="mt-4 text-base md:text-xl italic font-semibold text-gray-300">
                        Affida a me le tue utenze, goditi il risparmio!
                    </p>
                    <a
                        href="#ChiSono"
                        className="mt-6 inline-block px-8 py-3 bg-[#4A6FA5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3B5D8A] transition-colors duration-300"
                    >
                        Scopri di più
                    </a>
                </div>
            </section>

            {/* Servizi Offerti */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Servizi Offerti</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Gestione Utenze */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
                            <FaLightbulb className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
                            <h3 className="text-lg md:text-xl font-bold text-[#4A6FA5]">Gestione Utenze</h3>
                            <p className="text-gray-700 mt-2 text-sm md:text-base">
                                Consulenza energetica professionale per privati e aziende.
                            </p>
                        </div>

                        {/* Consulenza Fotovoltaico */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
                            <FaSolarPanel className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
                            <h3 className="text-lg md:text-xl font-bold text-[#4A6FA5]">Consulenza Fotovoltaico</h3>
                            <p className="text-gray-700 mt-2 text-sm md:text-base">
                                Analisi dettagliata e proposte ottimali per fotovoltaico.
                            </p>
                        </div>

                        {/* Supporto Tecnico Energetico */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
                            <FaBriefcase className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
                            <h3 className="text-lg md:text-xl font-bold text-[#4A6FA5]">Supporto Tecnico Energetico</h3>
                            <p className="text-gray-700 mt-2 text-sm md:text-base">
                                Assistenza completa per tutte le tue esigenze nel mondo dell'energia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;