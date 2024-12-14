import videoFile from "../assets/prelievo.mp4";

const Hero = () => {
  return (
    <section
      id="ChiSono"
      className="relative h-screen flex items-center justify-center text-center bg-gray-900 text-white"
    >
      {/* Video di Sfondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={videoFile} type="video/mp4" />
      </video>

      {/* Overlay per migliorare contrasto */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-70"></div>

      {/* Contenuto del Hero */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Giorgio Sforza
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-lg">
          Infermiere, sempre al tuo fianco
        </p>
        <a
          href="#Esperienze"
          className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Scopri di più
        </a>
      </div>
    </section>
  );
};

export default Hero;
