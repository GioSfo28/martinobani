import React, { useState, useEffect, useCallback, useMemo } from "react";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import {
    FaBirthdayCake, FaUserPlus, FaCalendarAlt, FaSpinner, FaSignOutAlt, FaTimes,
    FaTrashAlt, FaChevronLeft, FaGift, FaStar, FaRegCalendarAlt // Usiamo FaGift per il compleanno del mese
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Utility per aggiungere lo zero iniziale (es. 5 -> 05)
const padToTwoDigits = (num) => String(num).padStart(2, '0');

// Componente per il caricamento (sobrio)
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <FaSpinner className="text-4xl text-blue-600 animate-spin" />
    </div>
);

// ----------------------------------------------------------------------
// COMPONENTE: BARRA DI NAVIGAZIONE INTERNA (CONFERMATO)
// ----------------------------------------------------------------------
const DashboardNavbar = ({ handleLogout, navigate }) => (
    <nav className="w-full bg-white border-b border-gray-200 py-3 shadow-sm mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex justify-between items-center">

            {/* Torna alla Dashboard */}
            <button
                onClick={() => navigate("/Dashboard")}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition duration-150"
            >
                <FaChevronLeft className="text-xs" />
                Torna alla Dashboard
            </button>

            {/* Logout */}
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-red-600 rounded-lg border border-red-500 hover:bg-red-50 transition duration-150"
            >
                <FaSignOutAlt className="text-sm" />
                Logout
            </button>
        </div>
    </nav>
);
// ----------------------------------------------------------------------
// FINE COMPONENTE BARRA
// ----------------------------------------------------------------------

// Componente Modale per l'aggiunta di un compleanno (INVARIATO)
const AddBirthdayModal = ({ isOpen, onClose, userId }) => {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [dataNascita, setDataNascita] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const db = getDatabase();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!nome || !cognome || !dataNascita || !userId) {
            setError("Per favore, compila tutti i campi e assicurati di essere loggato.");
            return;
        }

        setIsSubmitting(true);

        try {
            const compleanniRef = ref(db, `Utenti/${userId}/Compleanni`);
            const newBirthdayRef = push(compleanniRef);

            const newBirthdayData = {
                nome: nome.trim(),
                cognome: cognome.trim(),
                dataNascita: dataNascita, // Formato YYYY-MM-DD
                aggiuntoDa: userId,
                timestamp: new Date().toISOString(),
            };

            await set(newBirthdayRef, newBirthdayData);

            setNome("");
            setCognome("");
            setDataNascita("");
            onClose();
        } catch (err) {
            console.error("Errore durante l'aggiunta del compleanno:", err);
            setError("Si è verificato un errore durante il salvataggio.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaUserPlus className="text-blue-600" /> Aggiungi Compleanno
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label htmlFor="cognome" className="block text-sm font-medium text-gray-700">Cognome</label>
                        <input
                            type="text"
                            id="cognome"
                            value={cognome}
                            onChange={(e) => setCognome(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label htmlFor="dataNascita" className="block text-sm font-medium text-gray-700">Data di Nascita (gg-mm-aaaa)</label>
                        <input
                            type="date"
                            id="dataNascita"
                            value={dataNascita}
                            onChange={(e) => setDataNascita(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <FaSpinner className="animate-spin" /> Salvataggio...
                            </>
                        ) : (
                            "Salva Compleanno"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};


// Funzione di utilità per formattare la data nel formato gg-mm-aaaa
const formatDate = (dateString) => {
    if (!dateString) return "N/D";
    const [year, month, day] = dateString.split('-');

    return `${padToTwoDigits(day)}-${padToTwoDigits(month)}-${year}`;
};

// Funzione per calcolare l'età e il prossimo compleanno
const getBirthdayInfo = (dateString) => {
    if (!dateString) return { nextBirthday: 'N/D', age: 'N/D', daysRemaining: 366, dobMonth: 0 };

    const today = new Date();
    const dob = new Date(`${dateString}T00:00:00`);

    const dobMonth = dob.getMonth(); // 0-11
    const dobDay = dob.getDate(); // 1-31


    // Calcolo età 
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dobMonth || (today.getMonth() === dobMonth && today.getDate() < dobDay)) {
        age--;
    }

    // Calcolo data del prossimo compleanno
    let nextBirthdayDate = new Date(today.getFullYear(), dobMonth, dobDay);

    if (nextBirthdayDate < today && nextBirthdayDate.toDateString() !== today.toDateString()) {
        nextBirthdayDate.setFullYear(today.getFullYear() + 1);
    }

    // Calcolo giorni rimanenti
    const oneDay = 1000 * 60 * 60 * 24;
    const daysRemaining = Math.ceil((nextBirthdayDate.getTime() - today.getTime()) / oneDay);

    // Formato gg-mm per la visualizzazione del compleanno (dobMonth + 1 per tornare a 1-12)
    const nextBirthdayMonthDay = `${padToTwoDigits(dobDay)}-${padToTwoDigits(dobMonth + 1)}`;

    return {
        age,
        daysRemaining: daysRemaining === 0 ? 'Oggi!' : `${daysRemaining} giorni`,
        nextBirthdayMonthDay,
        dobMonth: dobMonth + 1, // Mese in formato 1-12
    };
};


const AgendaCompleanni = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [birthdays, setBirthdays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const db = getDatabase();

    const currentMonth = new Date().getMonth() + 1;
    const italianMonths = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const currentMonthName = italianMonths[currentMonth - 1];

    // Funzione per il logout (Passata alla Navbar)
    const handleLogout = useCallback(async () => {
        try {
            await signOut(auth);
            navigate("/Login");
        } catch (error) {
            console.error("Errore durante il logout:", error);
        }
    }, [navigate]);

    // Filtro per i compleanni del mese corrente (Memoized)
    const birthdaysThisMonth = useMemo(() => {
        return birthdays.filter(bday => {
            const info = getBirthdayInfo(bday.dataNascita);
            return info.dobMonth === currentMonth;
        }).sort((a, b) => {
            const dayA = parseInt(a.dataNascita.split('-')[2]);
            const dayB = parseInt(b.dataNascita.split('-')[2]);
            return dayA - dayB;
        });
    }, [birthdays, currentMonth]);


    // ----------------------------------------------------------------------
    // 1. PROTEZIONE ACCESSO E AUTENTICAZIONE
    // ----------------------------------------------------------------------
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

    // ----------------------------------------------------------------------
    // 2. CARICAMENTO DATI DAL DATABASE (SPECIFICO PER UTENTE)
    // ----------------------------------------------------------------------
    useEffect(() => {
        if (!user) return;

        const compleanniRef = ref(db, `Utenti/${user.uid}/Compleanni`);

        const unsubscribeDb = onValue(compleanniRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                let loadedBirthdays = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));

                loadedBirthdays.sort((a, b) => {
                    const daysA = getBirthdayInfo(a.dataNascita).daysRemaining === 'Oggi!' ? 0 : parseInt(getBirthdayInfo(a.dataNascita).daysRemaining);
                    const daysB = getBirthdayInfo(b.dataNascita).daysRemaining === 'Oggi!' ? 0 : parseInt(getBirthdayInfo(b.dataNascita).daysRemaining);

                    return daysA - daysB;
                });

                setBirthdays(loadedBirthdays);
            } else {
                setBirthdays([]);
            }
        }, (error) => {
            console.error("Errore nel caricamento dei compleanni:", error);
        });

        return () => unsubscribeDb();
    }, [user, db]);

    // ----------------------------------------------------------------------
    // 3. FUNZIONALITÀ ELIMINA
    // ----------------------------------------------------------------------
    const handleDelete = async (bdayId) => {
        if (!user || !window.confirm("Sei sicuro di voler eliminare questo compleanno?")) return;

        try {
            const dbRef = ref(db, `Utenti/${user.uid}/Compleanni/${bdayId}`);
            await remove(dbRef);
            console.log(`Compleanno ${bdayId} eliminato con successo.`);
        } catch (error) {
            console.error("Errore durante l'eliminazione:", error);
            alert("Impossibile eliminare il compleanno. Riprova.");
        }
    };


    if (loading) {
        return <LoadingSpinner />;
    }

    // ----------------------------------------------------------------------
    // 4. RENDER DELLA PAGINA
    // ----------------------------------------------------------------------
    return (
        <>
            {/* ⬅️ HEADER PRINCIPALE ➡️ */}
            <Header />

            <section className="min-h-screen bg-gray-50 py-16 sm:py-20 transition-colors duration-500">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
                    {/* ⬅️ BARRA DI NAVIGAZIONE INTERNA (Logout e Dashboard) ➡️ */}
                    <DashboardNavbar handleLogout={handleLogout} navigate={navigate} />

                    {/* Intestazione */}
                    <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-200">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                            <FaCalendarAlt className="text-blue-600" /> Agenda Compleanni
                        </h1>

                        {/* Bottone Aggiungi */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            <FaUserPlus /> Aggiungi
                        </button>
                    </div>

                    {/* 🎂 Riquadro: Compleanni di {Mese} - VERSIONE PREMIUM & FESTIVA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`
    relative overflow-hidden rounded-2xl p-1 mb-12
    bg-gradient-to-br from-amber-400 via-yellow-300 to-pink-400
    shadow-2xl
  `}
                    >
                        {/* Sfondo interno bianco con padding */}
                        <div className="bg-white rounded-xl p-6 relative z-10">

                            {/* Decorazioni animate */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 text-yellow-200 opacity-30"
                            >
                                <FaStar className="text-9xl" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-8 -left-8 text-pink-200 opacity-30"
                            >
                                <FaBirthdayCake className="text-8xl" />
                            </motion.div>

                            {/* Intestazione con icona pulsante */}
                            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 text-amber-900">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FaGift className="text-3xl text-red-600 drop-shadow-md" />
                                </motion.div>
                                <span className="bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                                    Compleanni di {currentMonthName}
                                </span>
                                <FaRegCalendarAlt className="ml-auto text-amber-500" />
                            </h2>

                            {birthdaysThisMonth.length > 0 ? (
                                <ul className="space-y-4">
                                    {birthdaysThisMonth.map((bday, index) => {
                                        const info = getBirthdayInfo(bday.dataNascita);
                                        const isToday = info.nextBirthdayMonthDay === new Date().toISOString().slice(5, 10).replace('-', '/');

                                        return (
                                            <motion.li
                                                key={bday.id}
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.03, x: 5 }}
                                                className={`
                relative overflow-hidden rounded-lg p-4 shadow-md
                bg-gradient-to-r from-yellow-50 to-amber-50
                border-l-4 ${isToday ? 'border-pink-500' : 'border-amber-500'}
                flex justify-between items-center
                transition-all duration-300
              `}
                                            >
                                                {/* Palloncino decorativo se è oggi */}
                                                {isToday && (
                                                    <motion.div
                                                        animate={{ y: [0, -10, 0] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="absolute -top-3 -left-3"
                                                    >
                                                        <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                                            🎉
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <div className="flex flex-col">
                                                    <span className="font-bold text-lg text-gray-800">
                                                        {bday.nome} {bday.cognome}
                                                        {isToday && <span className="ml-2 text-pink-600 font-bold">🎂 OGGI!</span>}
                                                    </span>
                                                    <span className="text-sm text-amber-700 font-medium">
                                                        Compie <span className="text-pink-600 font-bold">{info.age + 1}</span> anni
                                                    </span>
                                                </div>

                                                <div className="text-right">
                                                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600">
                                                        {info.nextBirthdayMonthDay.split('-')[0]}
                                                    </div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                        {new Date(0, new Date().getMonth(), info.nextBirthdayMonthDay.split('-')[0]).toLocaleString('it-IT', { weekday: 'short' })}
                                                    </div>
                                                </div>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-gray-500 italic py-8 bg-gray-50 rounded-lg"
                                >
                                    <FaBirthdayCake className="inline-block text-3xl text-gray-300 mb-2" />
                                    <br />
                                    Nessun compleanno a {currentMonthName}... ma arriveranno! 🎈
                                </motion.p>
                            )}
                        </div>

                        {/* Bordo animato esterno */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-400 to-amber-400 opacity-50 blur-xl -z-10 animate-pulse"></div>
                    </motion.div>
                    {/* --- Fine Riquadro Compleanni del Mese --- */}

                    {/* 📑 Titolo Lista Compleanni Completa */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                        <FaCalendarAlt className="text-blue-600 text-lg" /> Tutti i compleanni salvati
                    </h2>

                    {/* Lista Compleanni Completa con Eliminazione */}
                    {birthdays.length === 0 ? (
                        <div className="text-center p-12 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <FaBirthdayCake className="text-6xl text-gray-400 mx-auto mb-4" />
                            <p className="text-xl text-gray-700 font-semibold">
                                Nessun compleanno trovato.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {birthdays.map((bday) => {
                                const info = getBirthdayInfo(bday.dataNascita);
                                const isToday = info.daysRemaining === 'Oggi!';

                                return (
                                    <div
                                        key={bday.id}
                                        className={`flex items-center justify-between p-4 sm:p-6 bg-white border rounded-lg shadow-sm transition-all duration-300 ${isToday ? 'border-amber-400 bg-amber-50 shadow-lg' : 'border-gray-200 hover:shadow-md'}`}
                                    >
                                        {/* Nome e Data */}
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-lg font-bold ${isToday ? 'text-amber-800' : 'text-gray-800'}`}>
                                                {bday.nome} {bday.cognome}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Nato il: <span className="font-medium text-gray-600">{formatDate(bday.dataNascita)}</span>
                                            </p>
                                        </div>

                                        {/* Dettagli e Pulsanti Azioni */}
                                        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                                            {/* Dettagli Prossimo Compleanno */}
                                            <div className="text-right">
                                                <p className="text-xl font-extrabold text-blue-600">
                                                    {info.nextBirthdayMonthDay}
                                                </p>
                                                <p className={`text-sm font-semibold ${isToday ? 'text-red-600 animate-pulse' : 'text-gray-600'}`}>
                                                    {info.daysRemaining}
                                                </p>
                                            </div>

                                            {/* Pulsante Elimina */}
                                            <button
                                                onClick={() => handleDelete(bday.id)}
                                                title="Elimina compleanno"
                                                className="text-red-400 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-red-50"
                                            >
                                                <FaTrashAlt className="text-lg" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
            <Footer />

            {/* Modale */}
            <AddBirthdayModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                userId={user?.uid}
            />
        </>
    );
};

export default AgendaCompleanni;