import React, { useState, useEffect, useRef } from "react";
import { auth, googleProvider } from "../firebase/config.js"; 
import { signInWithPopup } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database"; 
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaSpinner, FaLock, FaUserShield, FaRegCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
    const [error, setError] = useState("");
    const [authorizedEmails, setAuthorizedEmails] = useState([]);
    const [isLoadingPermissions, setIsLoadingPermissions] = useState(true);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const navigate = useNavigate();
    
    // Otteniamo l'istanza DB
    const db = getDatabase();
    
    // Ref per il focus automatico
    const loginButtonRef = useRef(null);

    // Auto-focus e Scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        
        const timer = setTimeout(() => {
            if (loginButtonRef.current) {
                loginButtonRef.current.focus();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Caricamento dei permessi (Assicura che isLoadingPermissions sia FALSE prima dell'accesso)
    useEffect(() => {
        const loadPermissions = () => {
            setIsLoadingPermissions(true);
            const permissionsRef = ref(db, "Permessi");
            
            get(permissionsRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        const emails = Object.values(data).map((item) => item.email);
                        setAuthorizedEmails(emails);
                    } else {
                        console.warn("Il nodo 'Permessi' non esiste nel database.");
                        setAuthorizedEmails([]); 
                    }
                    setIsLoadingPermissions(false);
                })
                .catch((error) => {
                    console.error("Errore nel caricamento dei permessi:", { error, timestamp: new Date().toISOString() });
                    setError("Errore nel caricamento delle autorizzazioni.");
                    setIsLoadingPermissions(false);
                });
        };

        loadPermissions();
    }, [db]); 

    // Funzione helper per leggere lo status Admin dal DB (Utente di default)
    const getRoleStatus = async (uid) => {
        const statusRef = ref(db, `Utenti/${uid}/Role`);
        try {
            const snapshot = await get(statusRef);
            return snapshot.val() || "User"; // Se non esiste, è "User"
        } catch (error) {
            console.error("Errore lettura ruolo:", error);
            return "User"; 
        }
    };

    const handleGoogleSignIn = async () => {
        // Blocco di sicurezza per evitare la race condition iniziale
        if (isLoadingPermissions) {
            setError("Attendi il caricamento delle autorizzazioni.");
            return;
        }
        
        setError("");
        setIsLoggingIn(true);
        
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (!user.email || !authorizedEmails.includes(user.email)) {
                // Logout immediato per utente non autorizzato
                await auth.signOut(); 
                setError("Utente non autorizzato. Contattare l'amministratore per l'accesso.");
                console.warn("Tentativo di accesso non autorizzato:", user.email);
                setIsLoggingIn(false);
                return;
            }

            const userRef = ref(db, `Utenti/${user.uid}`);
            const snapshot = await get(userRef);
            
            // Ottieni il ruolo (Admin/User)
            const userRole = await getRoleStatus(user.uid);

            if (!snapshot.exists()) {
                console.log("Nuovo utente. Creazione dati utente.");
                const userData = {
                    email: user.email,
                    uid: user.uid,
                    createdAt: new Date().toISOString(),
                };
                await set(userRef, userData);
                
                // Imposta il ruolo di default se è la prima volta (se non c'è Status)
                if (userRole === "User") {
                   await set(ref(db, `Utenti/${user.uid}/Role`), "User");
                }
            } else {
                console.log("Utente già esistente nel DB.");
            }
            
            // Salva UID e Ruolo per l'uso immediato nella Dashboard
            localStorage.setItem("uidData", user.uid);
            localStorage.setItem("statusData", userRole);
            
            setIsLoggingIn(false);
            navigate("/Dashboard");
            
        } catch (error) {
            console.error("Errore durante l'accesso con Google:", error);
            setIsLoggingIn(false);
            
            switch (error.code) {
                case 'auth/popup-closed-by-user':
                case 'auth/cancelled-popup-request':
                    setError("Accesso annullato. Riprova.");
                    break;
                case 'auth/network-request-failed':
                    setError("Errore di rete. Controlla la tua connessione e riprova.");
                    break;
                default:
                    setError("Si è verificato un errore durante l'accesso. Riprova.");
            }
        }
    };

    return (
        <>
            <Header />
            <section 
                className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
            >
                
                {/* Login Card */}
                <div className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-lg p-8 sm:p-10 transition-all duration-300 transform hover:shadow-2xl">
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 shadow-lg">
                            <FaLock className="text-2xl text-white" />
                        </div>
                        
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Accesso area riservata
                        </h1>
                        
                        <p className="text-gray-500 text-md">
                            Utilizza il tuo account Google autorizzato.
                        </p>
                    </div>

                    {/* Loading State */}
                    {isLoadingPermissions && (
                        <div className="flex flex-col items-center justify-center py-6 space-y-3">
                            <FaSpinner className="text-4xl text-blue-600 animate-spin" />
                            <p className="text-gray-600 font-medium">
                                Verifica autorizzazioni in corso...
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg animate-shake">
                            <p className="text-red-700 text-sm font-medium text-center">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Success State (if authorized emails loaded) */}
                    {!isLoadingPermissions && authorizedEmails.length > 0 && !error && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3">
                            <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                            <p className="text-green-700 text-sm font-medium">
                                Autenticazione attiva e pronta.
                            </p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        ref={loginButtonRef}
                        onClick={handleGoogleSignIn}
                        disabled={isLoadingPermissions || isLoggingIn}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-transparent text-lg font-semibold rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                    >
                        {isLoggingIn ? (
                            <>
                                <FaSpinner className="text-xl animate-spin" />
                                <span>Accesso in corso...</span>
                            </>
                        ) : (
                            <>
                                <FaGoogle className="text-xl" />
                                <span>
                                    {isLoadingPermissions ? "Caricamento..." : "Accedi con Google"}
                                </span>
                            </>
                        )}
                    </button>

                    {/* Security Notice */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-start gap-3">
                            <FaUserShield className="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1 text-sm">
                                    Protocollo di sicurezza
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    L'accesso è consentito esclusivamente tramite account Google precedentemente autorizzati.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            Non sei autorizzato?{" "}
                            <a 
                                href="mailto:giosfo28@gmail.com" 
                                className="text-blue-600 hover:text-blue-700 font-semibold underline"
                            >
                                Richiedi l'accesso
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />

            {/* Animation for error shake (kept for good UX) */}
            <style jsx>{`
                @keyframes shake {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-5px);
                    }
                    75% {
                        transform: translateX(5px);
                    }
                }
                
                .animate-shake {
                    animation: shake 0.4s ease-in-out;
                }
            `}</style>
        </>
    );
};

export default LoginPage;