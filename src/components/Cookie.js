import { useEffect } from 'react';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';

function Cookie() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-white grid grid-cols-1 p-20 text-justify text-black">
                <h1 className="text-4xl font-bold mx-2 my-5">Informativa sui Cookie di Martinobani.it</h1>
                <p className="text-xl mx-4">
                    <strong>Ultimo Aggiornamento:</strong> 16-10-2025
                </p>
                <p className="text-xl mx-4">
                    Benvenuto su Martinobani.it! Questa informativa spiega come utilizziamo i cookie
                    per migliorare la tua esperienza di navigazione sul nostro sito. Continuando a
                    navigare, acconsenti all'uso dei cookie in conformità con questa informativa e la
                    nostra{" "}
                    <Link to="/privacy" className="text-blue-500">
                        Informativa sulla Privacy
                    </Link>.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">1. Cosa sono i cookie?</h2>
                <p className="text-xl mx-4">
                    I cookie sono piccoli file di testo memorizzati sul tuo dispositivo (computer,
                    smartphone o tablet) quando visiti un sito web. Questi file contengono informazioni
                    che ci aiutano a migliorare il funzionamento del sito e a comprendere come gli
                    utenti interagiscono con esso.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">2. Tipologie di cookie utilizzati</h2>
                <p className="text-xl mx-4">
                    Sul nostro sito utilizziamo esclusivamente le seguenti categorie di cookie:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>
                        <strong>Cookie tecnici:</strong> Essenziali per il corretto funzionamento del
                        sito, come la gestione della navigazione e delle funzionalità di base. Questi
                        cookie non richiedono il tuo consenso.
                    </li>
                    <li>
                        <strong>Cookie analitici (Google Analytics):</strong> Utilizziamo Google
                        Analytics per raccogliere dati anonimi sull'utilizzo del sito, come il numero
                        di visite, le pagine visualizzate e il tempo trascorso sul sito. Questi dati ci
                        aiutano a migliorare i nostri servizi e non includono informazioni personali
                        identificabili. Puoi rifiutare questi cookie tramite il banner di consenso o le
                        impostazioni del tuo browser.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">3. Come gestire i cookie</h2>
                <p className="text-xl mx-4">
                    Puoi controllare o disabilitare i cookie tramite le impostazioni del tuo browser.
                    La maggior parte dei browser consente di accettare, rifiutare o eliminare i cookie.
                    Tieni presente che disabilitare i cookie tecnici potrebbe influire sulla tua
                    esperienza di navigazione. Di seguito trovi i link alle guide per i principali
                    browser:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>
                        <a
                            href="https://support.google.com/chrome/answer/95647"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Google Chrome
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Mozilla Firefox
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Safari
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Microsoft Edge
                        </a>
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">4. Consenso ai cookie</h2>
                <p className="text-xl mx-4">
                    Al tuo primo accesso al sito, un banner ti informa sull'uso dei cookie e ti
                    consente di accettare i cookie analitici. Il consenso viene memorizzato nel tuo
                    browser tramite localStorage. Puoi revocare il consenso in qualsiasi momento
                    eliminando i cookie tramite le impostazioni del browser.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">5. Modifiche all'informativa sui cookie</h2>
                <p className="text-xl mx-4">
                    Potremmo aggiornare questa informativa per riflettere cambiamenti normativi o
                    modifiche nelle nostre pratiche. In caso di modifiche sostanziali, pubblicheremo
                    un avviso sul sito.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">6. Contatti</h2>
                <p className="text-xl mx-4">
                    Per qualsiasi domanda o richiesta relativa ai cookie, contattaci all'indirizzo{" "}
                    <a href="mailto:martinobani@gmail.com" className="text-blue-500">
                        martinobani@gmail.com
                    </a>.
                </p>

                <p className="text-xl mx-4">Grazie per la tua fiducia in Martinobani.it.</p>
                <p className="text-xl mx-4">Cordiali saluti,</p>
                <p className="text-xl mx-4">Martino Bani</p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Cookie;