import videoFile from "../assets/prelievo.mp4";
import { FaSyringe, FaBandAid, FaLaptopCode } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="ChiSono"
        className="relative h-[70vh] flex items-center justify-center text-center bg-gray-900 text-white px-6 pt-24"
      >
        {/* Video di Sfondo */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={videoFile} type="video/mp4" />
        </video>

        {/* Overlay per migliorare contrasto */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Contenuto del Hero */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Dott. Giorgio Sforza
          </h1>
          <p className="mt-4 text-base text-gray-300">
            Infermiere & studente di Medicina
          </p>
          <p className="mt-4 text-xl italic">
            "Prendersi cura è più di un lavoro, è una missione."
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Servizi Offerti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prelievi a domicilio */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
              <FaSyringe className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold text-[#4A6FA5]">Prelievi a domicilio</h3>
              <p className="text-gray-700 mt-2">Servizio infermieristico professionale direttamente a casa tua.</p>
            </div>

            {/* Medicazioni */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
              <FaBandAid className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold text-[#4A6FA5]">Medicazioni</h3>
              <p className="text-gray-700 mt-2">Trattamenti sicuri ed efficaci per la guarigione delle ferite.</p>
            </div>

            {/* Creazione siti web */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300">
              <FaLaptopCode className="text-4xl text-[#4A6FA5] mb-3 transition duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold text-[#4A6FA5]">Creazione siti web</h3>
              <p className="text-gray-700 mt-2">Sviluppo di siti internet e portfolio per professionisti.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;