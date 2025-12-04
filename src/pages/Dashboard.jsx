// src/pages/Dashboard.jsx
import React, { useState, useEffect, useMemo } from "react";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaUser,
  FaChevronRight,
  FaCrown,
  FaBirthdayCake, // Nuova icona per i compleanni
  FaLock, // Icona per l'accesso riservato
  FaSpinner,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Constants
const ADMIN_EMAIL = "giosfo28@gmail.com";

// Componente di caricamento semplificato e professionale
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="flex flex-col items-center space-y-4 p-8 bg-white shadow-xl rounded-lg">
      <FaSpinner className="text-4xl text-blue-600 animate-spin" />
      <p className="text-xl font-semibold text-gray-700">Caricamento in corso...</p>
    </div>
  </div>
);

// Componente Card sobrio e professionale
const DashboardCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  isPrivate = false,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-full bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/50"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-5">
          {/* Icona chiara e istituzionale */}
          <div className="w-14 h-14 flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-600 rounded-lg flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700">
            <Icon className="text-2xl" />
          </div>

          {/* Contenuto */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                {title}
              </h3>
              {isPrivate && (
                <FaLock className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors" title="Area Riservata" />
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Pulsante di azione più sobrio */}
            <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              Accedi <FaChevronRight className="ml-1 text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente User Info sobrio e professionale
const UserInfo = ({ user, isAdmin }) => (
  <div className="w-full max-w-4xl mx-auto mb-12 bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Avatar statico */}
      <div className="relative w-16 h-16 rounded-full bg-gray-100 border-2 border-blue-500 flex items-center justify-center text-blue-600 flex-shrink-0">
        <FaUser className="text-2xl" />
      </div>

      {/* Dettagli Utente */}
      <div className="flex-1 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center sm:justify-start mb-1">
          <h2 className="text-2xl font-bold text-gray-800">
            Benvenuto, {user.displayName || "Utente"}
          </h2>
          {isAdmin && (
            <FaCrown className="text-xl text-amber-500" title="Amministratore" />
          )}
        </div>

        <p className="text-gray-500 text-sm mb-3">
          {user.email}
        </p>

        {/* Badge Ruolo */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full ${isAdmin ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
          <FaUser className="text-xs" />
          <span>{isAdmin ? "Amministratore" : "Area Riservata"}</span>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const isAdmin = useMemo(() => user?.email === ADMIN_EMAIL, [user?.email]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/Login");
        return;
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/Login");
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Logica per mostrare SOLO la card "Agenda compleanni"
  const dashboardCards = useMemo(() => {
    // Definizione dell'unica card necessaria
    const singleCard = {
      id: 1,
      title: "Agenda compleanni",
      description:
        "Visualizza e gestisci le date importanti, compleanni e ricorrenze della tua agenda personale.",
      icon: FaBirthdayCake,
      path: "/Agenda-compleanni",
      isPrivate: true,
    };

    // La dashboard per Martino ha SOLO questa card, indipendentemente dal fatto che sia Admin o meno.
    return [singleCard];
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 sm:py-20 mt-16 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          
          {/* Titolo Principale Sobrio */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              Area riservata
            </h1>
          </div>

          {/* User Info (Sempre visibile per contesto) */}
          {user && <UserInfo user={user} isAdmin={isAdmin} />}

          {/* Contenitore delle Card (Ridotto a 1 colonna per enfasi) */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-1 gap-8 w-full max-w-md">
              {dashboardCards.map((card, index) => (
                <DashboardCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  onClick={() => handleNavigate(card.path)}
                  isPrivate={card.isPrivate}
                />
              ))}
            </div>
          </div>

          {/* Logout Button (Sobrio) */}
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-all duration-300 hover:shadow-md"
            >
              <FaSignOutAlt className="text-lg transform group-hover:-translate-x-0.5 transition-transform duration-300" />
              <span>Disconnetti</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      
      {/* Rimosse tutte le animazioni complesse (animate-float, animate-gradient-x, etc.) */}
    </>
  );
};

export default Dashboard;