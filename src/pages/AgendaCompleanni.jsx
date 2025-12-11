// src/pages/AgendaCompleanni.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";
import { getDatabase, ref, onValue, push, set, remove, update } from "firebase/database"; // Importiamo 'update'
import { useNavigate } from "react-router-dom";
import {
    FaBirthdayCake, FaUserPlus, FaCalendarAlt, FaSpinner, FaSignOutAlt, FaTimes,
    FaTrashAlt, FaChevronLeft, FaGift, FaWhatsapp, FaEdit, FaStar, FaClock,
    FaSortAmountDown, FaSortAlphaDown, FaRegCalendarAlt
} from "react-icons/fa";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Utility: formatta data da "2025-12-04" → "04-12-2025"
const formatDate = (dateString) => {
    if (!dateString) return "N/D";
    const [y, m, d] = dateString.split('-');
    return `${d}-${m}-${y}`;
};

// Utility: calcola età, prossimo compleanno, giorni mancanti
const getBirthdayInfo = (dateString) => {
    if (!dateString) return { age: 0, nextBirthday: "", daysRemaining: "", daysRemainingNumber: 366, isToday: false, isSoon: false };

    const [year, month, day] = dateString.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Età
    let age = today.getFullYear() - birthDate.getFullYear();
    const thisYearBirthday = new Date(today.getFullYear(), month - 1, day);
    if (thisYearBirthday > today) age--;

    // Prossimo compleanno
    const nextBirthday = thisYearBirthday > today ? thisYearBirthday : new Date(today.getFullYear() + 1, month - 1, day);
    const isToday = nextBirthday.toDateString() === today.toDateString();
    const diffMs = nextBirthday - today;
    const daysRemainingNumber = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const isSoon = daysRemainingNumber > 0 && daysRemainingNumber <= 10;

    const daysRemaining = isToday
        ? "Oggi!"
        : `Tra ${daysRemainingNumber} ${daysRemainingNumber === 1 ? 'giorno' : 'giorni'}`;

    return {
        age,
        nextBirthday: `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`,
        daysRemaining,
        daysRemainingNumber,
        isToday,
        isSoon,
    };
};

// Loading
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <FaSpinner className="text-4xl text-blue-600 animate-spin" />
    </div>
);

// Navbar
const DashboardNavbar = ({ handleLogout, navigate }) => (
    <nav className="w-full bg-white border-b border-gray-200 py-3 shadow-sm mb-6 mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex justify-between items-center">
            <button
                onClick={() => navigate("/Dashboard")}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 transition duration-150"
            >
                <FaChevronLeft className="text-xs" />
                Torna alla Dashboard
            </button>
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

// *** MODALE LOGICA AVANZATA ***
const ManageBirthdayModal = ({ isOpen, onClose, userId, initialData = {}, existingBirthdays = [] }) => {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [dataNascita, setDataNascita] = useState("");
    const [telefono, setTelefono] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const db = getDatabase();
    const isEditing = !!initialData.id;

    useEffect(() => {
        setNome(initialData.nome || "");
        setCognome(initialData.cognome || "");
        setDataNascita(initialData.dataNascita || "");
        setTelefono(initialData.telefono || "");
        setError("");
    }, [initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Pulizia input
        const cleanNome = nome.trim();
        const cleanCognome = cognome.trim();
        const cleanTelefono = telefono.trim();

        if (!cleanNome || !cleanCognome || !dataNascita || !userId) {
            setError("Compila tutti i campi obbligatori.");
            return;
        }

        // *** LOGICA DI CONTROLLO AVANZATA ***
        // Cerchiamo un contatto con stesso nome e cognome
        const duplicateNameMatch = existingBirthdays.find(item => {
            // Ignoriamo l'elemento che stiamo modificando
            if (isEditing && item.id === initialData.id) return false;

            return (
                item.nome.toLowerCase() === cleanNome.toLowerCase() &&
                item.cognome.toLowerCase() === cleanCognome.toLowerCase()
            );
        });

        if (duplicateNameMatch) {
            // CASO 1: Nome, Cognome e Telefono sono identici -> ERRORE
            if (duplicateNameMatch.telefono === cleanTelefono) {
                setError("Attenzione: esiste già un contatto identico (Nome, Cognome e Telefono).");
                return;
            }

            // CASO 2: Nome e Cognome identici, ma Telefono diverso -> PROPOSTA AGGIORNAMENTO
            if (window.confirm(`Esiste già un contatto "${cleanNome} ${cleanCognome}" ma con un numero diverso (o nessun numero).\nVuoi aggiornare il numero di telefono di quel contatto?`)) {
                
                setIsSubmitting(true);
                try {
                    // Aggiorniamo solo il contatto esistente trovato
                    const updateRef = ref(db, `Utenti/${userId}/Compleanni/${duplicateNameMatch.id}`);
                    
                    // Prepariamo i dati aggiornati (manteniamo ID originale)
                    const updatedData = {
                        ...duplicateNameMatch, // Manteniamo gli altri dati vecchi se servono
                        nome: cleanNome,
                        cognome: cleanCognome,
                        dataNascita: dataNascita, // Aggiorniamo anche la data se l'ha cambiata
                        telefono: cleanTelefono,  // Il nuovo numero
                        timestamp: new Date().toISOString()
                    };

                    // Usiamo 'update' o 'set' sull'ID esistente
                    await set(updateRef, updatedData);
                    onClose();
                } catch (err) {
                    console.error(err);
                    setError("Errore durante l'aggiornamento del contatto esistente.");
                } finally {
                    setIsSubmitting(false);
                }
                return; // Usciamo dalla funzione, abbiamo gestito l'aggiornamento
            } else {
                // Se l'utente dice "Annulla" al confirm, fermiamo tutto (non crea duplicato)
                return;
            }
        }
        // *** FINE LOGICA AVANZATA ***

        // CASO 3: Nessun duplicato trovato, procediamo con creazione/modifica standard
        setIsSubmitting(true);
        try {
            const newData = {
                nome: cleanNome,
                cognome: cleanCognome,
                dataNascita,
                telefono: cleanTelefono,
                aggiuntoDa: userId,
                timestamp: new Date().toISOString(),
            };
            let dbRef;
            if (isEditing) {
                dbRef = ref(db, `Utenti/${userId}/Compleanni/${initialData.id}`);
                await set(dbRef, newData);
            } else {
                dbRef = push(ref(db, `Utenti/${userId}/Compleanni`));
                await set(dbRef, newData);
            }
            onClose();
        } catch (err) {
            setError("Errore durante il salvataggio.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaUserPlus className="text-blue-600" />
                        {isEditing ? "Modifica" : "Aggiungi"} Compleanno
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FaTimes className="text-xl" />
                    </button>
                </div>
                {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm font-medium">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required disabled={isSubmitting} className="w-full p-2 border rounded-md" />
                    <input type="text" value={cognome} onChange={e => setCognome(e.target.value)} placeholder="Cognome" required disabled={isSubmitting} className="w-full p-2 border rounded-md" />
                    <input type="date" value={dataNascita} onChange={e => setDataNascita(e.target.value)} required disabled={isSubmitting} className="w-full p-2 border rounded-md" />
                    <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="WhatsApp" disabled={isSubmitting} className="w-full p-2 border rounded-md" />
                    <button type="submit" disabled={isSubmitting} className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
                        {isSubmitting ? <>Salvando...</> : (isEditing ? "Salva" : "Aggiungi")}
                    </button>
                </form>
            </div>
        </div>
    );
};

const AgendaCompleanni = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [birthdays, setBirthdays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBirthday, setEditingBirthday] = useState(null);
    const [sortMode, setSortMode] = useState('days'); // 'days' o 'surname'
    const navigate = useNavigate();
    const db = getDatabase();

    const currentMonth = new Date().getMonth() + 1;
    const italianMonths = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const currentMonthName = italianMonths[currentMonth - 1];

    const handleLogout = useCallback(async () => {
        await signOut(auth);
        navigate("/Login");
    }, [navigate]);

    const openAdd = () => { setEditingBirthday(null); setIsModalOpen(true); };
    const openEdit = (b) => { setEditingBirthday(b); setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); setEditingBirthday(null); };

    const toggleSort = () => {
        setSortMode(prev => prev === 'days' ? 'surname' : 'days');
    };

    const birthdaysThisMonth = useMemo(() => {
        return birthdays
            .filter(b => parseInt(b.dataNascita.split('-')[1]) === currentMonth)
            .sort((a, b) => parseInt(a.dataNascita.split('-')[2]) - parseInt(b.dataNascita.split('-')[2]));
    }, [birthdays, currentMonth]);

    // ORDINAMENTO DINAMICO
    const sortedBirthdays = useMemo(() => {
        if (sortMode === 'surname') {
            return [...birthdays].sort((a, b) =>
                a.cognome.toLowerCase().localeCompare(b.cognome.toLowerCase())
            );
        }

        return [...birthdays].sort((a, b) => {
            const infoA = getBirthdayInfo(a.dataNascita);
            const infoB = getBirthdayInfo(b.dataNascita);

            if (infoA.isToday && !infoB.isToday) return -1;
            if (!infoA.isToday && infoB.isToday) return 1;
            if (infoA.isSoon && !infoB.isSoon) return -1;
            if (!infoA.isSoon && infoB.isSoon) return 1;

            return infoA.daysRemainingNumber - infoB.daysRemainingNumber;
        });
    }, [birthdays, sortMode]);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(u => {
            if (!u) navigate("/Login");
            else { setUser(u); setLoading(false); }
        });
        return unsub;
    }, [navigate]);

    useEffect(() => {
        if (!user) return;
        const compleanniRef = ref(db, `Utenti/${user.uid}/Compleanni`);
        const unsub = onValue(compleanniRef, snap => {
            const data = snap.val();
            if (data) {
                const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
                setBirthdays(list);
            } else {
                setBirthdays([]);
            }
        });
        return unsub;
    }, [user, db]);

    const handleDelete = async (id) => {
        if (window.confirm("Eliminare?")) {
            await remove(ref(db, `Utenti/${user.uid}/Compleanni/${id}`));
        }
    };

    const openWhatsApp = (nome, tel) => {
        if (!tel) return alert("Numero non salvato");
        const num = tel.replace(/\D/g, '');
        const msg = encodeURIComponent(
            `Ciao ${nome}! 🎉\nTi mando i miei più sinceri auguri di buon compleanno!\nSpero che questa giornata ti porti sorrisi, belle sorprese e tutto ciò che desideri.\nUn abbraccio,\nMartino Bani`
        );
        window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
    };

    if (loading) return <LoadingSpinner />;

    return (
        <>
            <Header />

            <section className="min-h-screen bg-gray-50 py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <DashboardNavbar handleLogout={handleLogout} navigate={navigate} />
                    <div className="flex justify-between items-center mb-10 pb-4 border-b">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                            <FaCalendarAlt className="text-blue-600" /> Agenda Compleanni
                        </h1>
                        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                            <FaUserPlus /> Aggiungi
                        </button>
                    </div>

                    {/* RIQUADRO FESTIVO PREMIUM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-2xl p-1 mb-12 bg-gradient-to-br from-amber-400 via-yellow-300 to-pink-400 shadow-2xl"
                    >
                        <div className="bg-white rounded-xl p-6 relative z-10">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 text-yellow-200 opacity-30">
                                <FaStar className="text-9xl" />
                            </motion.div>
                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -bottom-8 -left-8 text-pink-200 opacity-30">
                                <FaBirthdayCake className="text-8xl" />
                            </motion.div>

                            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 text-amber-900">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                    <FaGift className="text-3xl text-red-600 drop-shadow-md" />
                                </motion.div>
                                <span className="bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                                    Compleanni di {currentMonthName}
                                </span>
                                <FaRegCalendarAlt className="ml-auto text-amber-500" />
                            </h2>

                            {birthdaysThisMonth.length > 0 ? (
                                <ul className="space-y-4">
                                    {birthdaysThisMonth.map((bday, i) => {
                                        const info = getBirthdayInfo(bday.dataNascita);
                                        const isToday = info.isToday;

                                        return (
                                            <motion.li
                                                key={bday.id}
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                whileHover={{ scale: 1.03, x: 5 }}
                                                className={`relative overflow-hidden rounded-lg p-4 shadow-md bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 ${isToday ? 'border-pink-500' : 'border-amber-500'} flex justify-between items-center transition-all duration-300`}
                                            >
                                                {isToday && (
                                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity }} className="absolute -top-3 -left-3">
                                                        <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-xs font-bold shadow-lg">PARTY</div>
                                                    </motion.div>
                                                )}
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-lg text-gray-800">
                                                        {bday.cognome} {bday.nome}
                                                        {isToday && <span className="ml-2 text-pink-600 font-bold"> OGGI!</span>}
                                                    </span>
                                                    <span className="text-sm text-amber-700 font-medium">
                                                        Compie <span className="text-pink-600 font-bold">{info.age + 1}</span> anni
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600">
                                                        {info.nextBirthday.split('-')[0]}
                                                    </div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                        {new Date(0, currentMonth - 1, info.nextBirthday.split('-')[0]).toLocaleString('it-IT', { weekday: 'short' })}
                                                    </div>
                                                </div>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 italic py-8 bg-gray-50 rounded-lg">
                                    <FaBirthdayCake className="inline-block text-3xl text-gray-300 mb-2" />
                                    <br />
                                    Nessun compleanno a {currentMonthName}... ma arriveranno!
                                </motion.p>
                            )}
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-400 to-amber-400 opacity-50 blur-xl -z-10 animate-pulse"></div>
                    </motion.div>

                    {/* TOGGLE ORDINAMENTO + LISTA COMPLETA */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <FaCalendarAlt className="text-blue-600" /> Tutti i compleanni
                        </h2>
                        <button
                            onClick={toggleSort}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition duration-200"
                            title="Cambia ordinamento"
                        >
                            {sortMode === 'days' ? (
                                <> <FaSortAmountDown className="text-blue-600" /> Prossimi </>
                            ) : (
                                <> <FaSortAlphaDown className="text-green-600" /> Cognome </>
                            )}
                        </button>
                    </div>

                    {birthdays.length === 0 ? (
                        <div className="text-center p-12 bg-white border rounded-xl shadow-lg">
                            <FaBirthdayCake className="text-6xl text-gray-400 mx-auto mb-4" />
                            <p className="text-xl text-gray-700 font-semibold">Nessun compleanno salvato.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {sortedBirthdays.map(b => {
                                const info = getBirthdayInfo(b.dataNascita);
                                return (
                                    <div
                                        key={b.id}
                                        className={`relative flex items-center justify-between p-4 sm:p-6 bg-white border rounded-lg shadow-sm transition-all ${info.isToday ? 'border-amber-400 bg-amber-50 shadow-lg' :
                                            info.isSoon ? 'border-orange-400 bg-orange-50 shadow-md' :
                                                'border-gray-200 hover:shadow-md'
                                            }`}
                                    >
                                        {info.isSoon && !info.isToday && (
                                            <div className="absolute -top-3 -left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                                                <FaClock className="text-xs" /> A breve
                                            </div>
                                        )}

                                        <div className="flex-1">
                                            <p className={`text-lg font-bold ${info.isToday ? 'text-amber-800' : info.isSoon ? 'text-orange-700' : 'text-gray-800'}`}>
                                                {b.cognome} {b.nome}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Nato il: <span className="font-medium">{formatDate(b.dataNascita)}</span>
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 ml-4">
                                            <div className="text-right">
                                                <p className="text-xl font-extrabold text-blue-600">{info.nextBirthday}</p>
                                                <p className={`text-sm font-semibold ${info.isToday ? 'text-red-600 animate-pulse' : info.isSoon ? 'text-orange-600' : 'text-gray-600'}`}>
                                                    {info.daysRemaining}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => openWhatsApp(b.nome, b.telefono)}
                                                    disabled={!b.telefono}
                                                    className="text-green-500 hover:text-green-600 p-2 rounded-full hover:bg-green-50 disabled:opacity-30 disabled:cursor-not-allowed"
                                                    title={!b.telefono ? "Numero non salvato" : "Invia auguri su WhatsApp"}
                                                >
                                                    <FaWhatsapp className="text-lg" />
                                                </button>
                                                <button onClick={() => openEdit(b)} className="text-blue-500 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50" title="Modifica">
                                                    <FaEdit className="text-lg" />
                                                </button>
                                                <button onClick={() => handleDelete(b.id)} className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50" title="Elimina">
                                                    <FaTrashAlt className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <ManageBirthdayModal
                isOpen={isModalOpen}
                onClose={closeModal}
                userId={user?.uid}
                initialData={editingBirthday || {}}
                existingBirthdays={birthdays}
            />
        </>
    );
};

export default AgendaCompleanni;