// src/pages/AgendaCompleanni.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";
import {
    FaBirthdayCake, FaUserPlus, FaCalendarAlt, FaSpinner, FaSignOutAlt, FaTimes,
    FaTrashAlt, FaChevronLeft, FaWhatsapp, FaEdit, FaClock, FaGift, FaStar,
    FaSortAmountDown, FaSortAlphaDown, FaUsers, FaEnvelope, FaSearch
} from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- Utilities ---
const formatDate = (dateString) => {
    if (!dateString) return "N/D";
    const [y, m, d] = dateString.split('-');
    return `${d}-${m}-${y}`;
};

const getBirthdayInfo = (dateString) => {
    if (!dateString) return { age: 0, nextBirthday: "", daysRemaining: "", daysRemainingNumber: 366, isToday: false, isSoon: false, turningAge: 0 };

    const [year, month, day] = dateString.split('-').map(Number);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentYear = today.getFullYear();
    const thisYearBirthday = new Date(currentYear, month - 1, day);

    let nextBirthdayDate;
    if (thisYearBirthday >= today) {
        nextBirthdayDate = thisYearBirthday;
    } else {
        nextBirthdayDate = new Date(currentYear + 1, month - 1, day);
    }

    const isToday = nextBirthdayDate.getTime() === today.getTime();
    const diffMs = nextBirthdayDate - today;
    const daysRemainingNumber = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const turningAge = nextBirthdayDate.getFullYear() - year;

    let currentAge = currentYear - year;
    if (today < thisYearBirthday) {
        currentAge--;
    }

    const isSoon = daysRemainingNumber > 0 && daysRemainingNumber <= 10;
    const daysRemaining = isToday
        ? "È oggi!"
        : `Tra ${daysRemainingNumber} ${daysRemainingNumber === 1 ? 'giorno' : 'giorni'}`;

    return {
        age: currentAge,
        turningAge: turningAge,
        nextBirthday: `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`,
        daysRemaining,
        daysRemainingNumber,
        isToday,
        isSoon,
    };
};

// --- Componenti UI ---
const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center space-y-5">
            <FaSpinner className="text-4xl text-blue-600 animate-spin" />
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sincronizzazione in corso...</p>
        </div>
    </div>
);

const ManageBirthdayModal = ({ isOpen, onClose, userId, initialData = {}, existingBirthdays = [] }) => {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [dataNascita, setDataNascita] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const db = getDatabase();
    const isEditing = !!initialData.id;

    useEffect(() => {
        setNome(initialData.nome || "");
        setCognome(initialData.cognome || "");
        setDataNascita(initialData.dataNascita || "");
        setTelefono(initialData.telefono || "");
        setEmail(initialData.email || "");
        setError("");
    }, [initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const cleanNome = nome.trim();
        const cleanCognome = cognome.trim();
        const cleanTelefono = telefono.trim();
        const cleanEmail = email.trim();

        if (!cleanNome || !cleanCognome || !dataNascita || !userId) {
            setError("Compila tutti i campi obbligatori.");
            return;
        }

        const duplicateNameMatch = existingBirthdays.find(item => {
            if (isEditing && item.id === initialData.id) return false;
            return (
                item.nome.toLowerCase() === cleanNome.toLowerCase() &&
                item.cognome.toLowerCase() === cleanCognome.toLowerCase()
            );
        });

        if (duplicateNameMatch) {
            if (duplicateNameMatch.telefono === cleanTelefono && duplicateNameMatch.email === cleanEmail) {
                setError("Esiste già un contatto identico (Nome, Cognome, Telefono ed Email).");
                return;
            }
            if (window.confirm(`Esiste già un contatto "${cleanNome} ${cleanCognome}".\nVuoi aggiornare i recapiti di quel contatto?`)) {
                setIsSubmitting(true);
                try {
                    const updateRef = ref(db, `Utenti/${userId}/Compleanni/${duplicateNameMatch.id}`);
                    const updatedData = {
                        ...duplicateNameMatch,
                        nome: cleanNome,
                        cognome: cleanCognome,
                        dataNascita: dataNascita,
                        telefono: cleanTelefono,
                        email: cleanEmail,
                        timestamp: new Date().toISOString()
                    };
                    await set(updateRef, updatedData);
                    onClose();
                } catch (err) {
                    console.error(err);
                    setError("Errore durante l'aggiornamento del contatto esistente.");
                } finally {
                    setIsSubmitting(false);
                }
                return;
            } else {
                return;
            }
        }

        setIsSubmitting(true);
        try {
            const newData = {
                nome: cleanNome,
                cognome: cleanCognome,
                dataNascita,
                telefono: cleanTelefono,
                email: cleanEmail,
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

    const inputClasses = "w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all";
    const labelClasses = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2";

    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100"
                >
                    <div className="flex justify-between items-center p-6 sm:p-8 border-b border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                {isEditing ? <FaEdit size={18} /> : <FaUserPlus size={18} />}
                            </div>
                            {isEditing ? "Modifica Contatto" : "Nuovo Contatto"}
                        </h3>
                        <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors">
                            <FaTimes size={18} />
                        </button>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-sm font-semibold flex items-center gap-2">
                                <FaTimes className="text-rose-400" /> {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Nome *</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"><FaUserPlus /></span>
                                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required disabled={isSubmitting} className={inputClasses} placeholder="Mario" />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Cognome *</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"><FaUserPlus /></span>
                                        <input type="text" value={cognome} onChange={e => setCognome(e.target.value)} required disabled={isSubmitting} className={inputClasses} placeholder="Rossi" />
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <label className={labelClasses}>Data di Nascita *</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"><FaCalendarAlt /></span>
                                    <input type="date" value={dataNascita} onChange={e => setDataNascita(e.target.value)} required disabled={isSubmitting} className={inputClasses} />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Telefono</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-emerald-500"><FaWhatsapp /></span>
                                        <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="+39 333..." disabled={isSubmitting} className={inputClasses} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Email</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-blue-500"><FaEnvelope /></span>
                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="mail@esempio.it" disabled={isSubmitting} className={inputClasses} />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button type="button" onClick={onClose} className="flex-1 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                                    Annulla
                                </button>
                                <button type="submit" disabled={isSubmitting} className="flex-1 py-3.5 bg-blue-600 text-white rounded-xl font-bold shadow-md shadow-blue-600/30 hover:bg-blue-700 hover:shadow-lg transition-all disabled:opacity-50">
                                    {isSubmitting ? "Salvataggio..." : (isEditing ? "Salva Modifiche" : "Aggiungi in rubrica")}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

// --- Main Component ---
const AgendaCompleanni = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [birthdays, setBirthdays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBirthday, setEditingBirthday] = useState(null);
    const [sortMode, setSortMode] = useState('days');
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
        const todayDay = new Date().getDate();
        return birthdays
            .filter(b => {
                const [, m, d] = b.dataNascita.split('-');
                return parseInt(m) === currentMonth && parseInt(d) >= todayDay;
            })
            .sort((a, b) => parseInt(a.dataNascita.split('-')[2]) - parseInt(b.dataNascita.split('-')[2]));
    }, [birthdays, currentMonth]);

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

    const handleDelete = async (id, nomeCompleto) => {
        if (window.confirm(`Sei sicuro di voler eliminare ${nomeCompleto} dall'agenda?`)) {
            await remove(ref(db, `Utenti/${user.uid}/Compleanni/${id}`));
        }
    };

    const openWhatsApp = (nome, tel) => {
        if (!tel) return alert("Numero non salvato");
        const num = tel.replace(/\D/g, '');
        const msg = encodeURIComponent(
            `Ciao ${nome}! 🎉\nTi mando i miei più sinceri auguri di buon compleanno!\nSpero che questa giornata ti porti sorrisi, belle sorprese e tutto ciò che desideri.\nUn abbraccio,\nGiorgio`
        );
        window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
    };

    const openEmail = (nome, email) => {
        if (!email) return alert("Email non salvata");
        const subject = encodeURIComponent("Buon Compleanno! 🎉");
        const body = encodeURIComponent(
            `Ciao ${nome}!\n\nTi mando i miei più sinceri auguri di buon compleanno!\nSpero che questa giornata ti porti sorrisi, belle sorprese e tutto ciò che desideri.\n\nUn abbraccio,\nGiorgio`
        );
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
    };

    if (loading) return <LoadingSpinner />;

    return (
        <>
            <Header />

            <main className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    
                    {/* Barra Superiore Navbar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                        <Link to="/Dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-semibold transition-colors text-sm group bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
                            <FaChevronLeft className="text-xs group-hover:-translate-x-1 transition-transform" /> Dashboard
                        </Link>
                        
                        <div className="flex gap-3">
                            <button onClick={openAdd} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-blue-600/30 transition-all text-sm">
                                <FaUserPlus size={14} /> Nuovo Contatto
                            </button>
                            <button onClick={handleLogout} className="inline-flex items-center gap-2 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 px-6 py-2.5 rounded-full font-bold shadow-sm transition-all text-sm">
                                <FaSignOutAlt size={14} /> Esci
                            </button>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                            <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl"><FaCalendarAlt /></div>
                            Agenda Compleanni
                        </h1>
                        <p className="mt-3 text-slate-500 font-medium max-w-xl leading-relaxed">
                            Gestisci la tua rubrica, tieni traccia delle date importanti e invia auguri personalizzati con un solo clic.
                        </p>
                    </div>

                    {/* Prossimi del mese */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 shadow-lg shadow-rose-100/50 border border-white"
                        >
                            <FaBirthdayCake className="absolute -bottom-10 -right-6 text-[10rem] text-rose-500/5 rotate-12" />
                            <FaStar className="absolute top-6 right-16 text-5xl text-amber-500/10" />

                            <div className="relative z-10">
                                <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3 text-slate-800">
                                    <FaGift className="text-rose-500 text-3xl" />
                                    Prossimi di {currentMonthName}
                                </h2>

                                {birthdaysThisMonth.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {birthdaysThisMonth.map((bday, i) => {
                                            const info = getBirthdayInfo(bday.dataNascita);
                                            return (
                                                <motion.div
                                                    key={bday.id}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white hover:shadow-md transition-shadow relative overflow-hidden"
                                                >
                                                    {info.isToday && (
                                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-500"></div>
                                                    )}
                                                    
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <h3 className="font-bold text-slate-800 text-lg">
                                                                {bday.nome} {bday.cognome}
                                                            </h3>
                                                            <p className="text-sm font-medium text-slate-500 mt-1">Compie {info.turningAge} anni</p>
                                                        </div>
                                                        <div className={`px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm ${info.isToday ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' : 'bg-white text-slate-500 border border-slate-100'}`}>
                                                            {info.nextBirthday.split('-')[0]} {currentMonthName.substring(0,3).toUpperCase()}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex items-center gap-2 mt-6">
                                                        <button onClick={() => openWhatsApp(bday.nome, bday.telefono)} disabled={!bday.telefono} className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-40 disabled:bg-slate-50 disabled:text-slate-400">
                                                            <FaWhatsapp size={16} />
                                                        </button>
                                                        <button onClick={() => openEmail(bday.nome, bday.email)} disabled={!bday.email} className="p-2.5 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all disabled:opacity-40 disabled:bg-slate-50 disabled:text-slate-400">
                                                            <FaEnvelope size={16} />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="bg-white/60 backdrop-blur-sm border border-white rounded-2xl p-8 text-center max-w-xl">
                                        <p className="text-slate-600 font-medium">Nessun compleanno registrato per il mese di {currentMonthName}.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Lista Completa Rubrica */}
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-slate-200 pb-4">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <div className="p-2 bg-slate-200 text-slate-600 rounded-lg"><FaUsers size={14} /></div>
                                Rubrica Completa ({birthdays.length})
                            </h2>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={toggleSort}
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                                >
                                    {sortMode === 'days' ? (
                                        <> <FaSortAmountDown className="text-blue-500" /> Ordina: Prossimi </>
                                    ) : (
                                        <> <FaSortAlphaDown className="text-emerald-500" /> Ordina: Alfabetico A-Z </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {birthdays.length === 0 ? (
                            <div className="text-center p-16 bg-white border border-slate-200 rounded-3xl shadow-sm">
                                <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaSearch className="text-2xl" />
                                </div>
                                <p className="text-lg text-slate-700 font-bold">Nessun contatto trovato.</p>
                                <p className="text-slate-500 mt-2 text-sm">Clicca su "Nuovo Contatto" in alto per iniziare a riempire la rubrica.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {sortedBirthdays.map(b => {
                                    const info = getBirthdayInfo(b.dataNascita);
                                    const isToday = info.isToday;
                                    const isSoon = info.isSoon && !isToday;

                                    return (
                                        <div
                                            key={b.id}
                                            className={`group relative bg-white rounded-[1.5rem] p-6 border shadow-sm transition-all hover:shadow-md ${
                                                isToday ? 'border-rose-300 ring-4 ring-rose-50' : 
                                                isSoon ? 'border-amber-300 ring-2 ring-amber-50' : 'border-slate-200'
                                            }`}
                                        >
                                            {/* Banner fluttuanti per OGGI e A BREVE */}
                                            {isToday && (
                                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-xs font-extrabold px-3 sm:px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce z-10">
                                                    <FaGift /> OGGI!
                                                </div>
                                            )}
                                            {isSoon && (
                                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-extrabold px-3 sm:px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-10">
                                                    <FaClock /> A BREVE
                                                </div>
                                            )}

                                            <div className="flex justify-between items-start mb-5">
                                                <div className="flex gap-4 items-center">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${
                                                        isToday ? 'bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-md shadow-rose-200' :
                                                        isSoon ? 'bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-md shadow-amber-100' : 'bg-blue-50 text-blue-600'
                                                    }`}>
                                                        {info.turningAge}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-bold text-slate-800 line-clamp-1">
                                                            {b.nome} {b.cognome}
                                                        </h3>
                                                        <p className="text-xs font-medium text-slate-500 mt-0.5">
                                                            {formatDate(b.dataNascita)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-4">
                                                <span className={`text-xs font-black uppercase tracking-wider ${isToday ? 'text-rose-600 animate-pulse' : isSoon ? 'text-amber-600' : 'text-slate-400'}`}>
                                                    {info.daysRemaining}
                                                </span>
                                                
                                                {/* Pulsanti Azione */}
                                                <div className="flex items-center gap-1.5">
                                                    <button onClick={() => openWhatsApp(b.nome, b.telefono)} disabled={!b.telefono} title="WhatsApp" className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors disabled:opacity-40 disabled:bg-slate-50 disabled:text-slate-400">
                                                        <FaWhatsapp size={15} />
                                                    </button>
                                                    <button onClick={() => openEmail(b.nome, b.email)} disabled={!b.email} title="Email" className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-colors disabled:opacity-40 disabled:bg-slate-50 disabled:text-slate-400">
                                                        <FaEnvelope size={14} />
                                                    </button>
                                                    <div className="w-px h-5 bg-slate-200 mx-1"></div>
                                                    <button onClick={() => openEdit(b)} title="Modifica" className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                                                        <FaEdit size={14} />
                                                    </button>
                                                    <button onClick={() => handleDelete(b.id, `${b.nome} ${b.cognome}`)} title="Elimina" className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors">
                                                        <FaTrashAlt size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </main>

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