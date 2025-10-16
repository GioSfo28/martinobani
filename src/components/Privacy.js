import { useEffect } from 'react';

import Footer from '../components/Footer.js';

function Privacy() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-white grid grid-cols-1 p-20 text-justify text-black">
                <h1 className="text-4xl font-bold mx-2 my-5">Informativa sulla Privacy di Martinobani.it</h1>
                <p className="text-xl mx-4">
                    <strong>Ultimo Aggiornamento:</strong> 16-10-2025
                </p>
                <p className="text-xl mx-4">
                    Benvenuto su Martinobani.it! La tua privacy è importante per noi e ci
                    impegniamo a proteggere i tuoi dati. Questa informativa descrive le modalità con cui
                    raccogliamo, utilizziamo e proteggiamo le informazioni durante l'uso del nostro sito.
                    Martinobani.it è un sito di consulenza energetica che non raccoglie dati personali
                    tramite moduli, login o altri mezzi, ma utilizza Google Analytics per analisi aggregate
                    e anonime. Ti invitiamo a leggere attentamente questa informativa per comprendere le
                    nostre pratiche.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">1. Tipologie di dati raccolti</h2>
                <p className="text-xl mx-4">
                    Martinobani.it non raccoglie dati personali o sensibili direttamente dagli utenti,
                    poiché non sono presenti moduli di contatto, aree di login o altre funzionalità che
                    richiedono l'inserimento di informazioni personali. Raccogliamo esclusivamente dati
                    tecnici e anonimi tramite strumenti di analisi.
                </p>

                <h3 className="text-2xl font-bold mx-2 my-5">1.1 Informazioni raccolte automaticamente</h3>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>
                        <strong>Dati tecnici:</strong> Raccogliamo informazioni aggregate come il tipo di
                        browser, il sistema operativo, l'indirizzo IP (in forma anonima) e altre informazioni
                        che non consentono l'identificazione personale.
                    </li>
                    <li>
                        <strong>Google Analytics:</strong> Utilizziamo Google Analytics per raccogliere dati
                        anonimi sull'utilizzo del sito, come il numero di visite, le pagine visualizzate e il
                        tempo trascorso sul sito. Questi dati sono utilizzati esclusivamente per migliorare i
                        nostri servizi e non includono informazioni personali identificabili.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">2. Utilizzo dei dati raccolti</h2>
                <p className="text-xl mx-4">
                    I dati raccolti automaticamente vengono utilizzati esclusivamente per:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>Analizzare il traffico del sito per migliorare l'esperienza utente;</li>
                    <li>Monitorare le prestazioni del sito tramite Google Analytics;</li>
                    <li>Garantire la sicurezza e il corretto funzionamento della piattaforma.</li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">3. Condivisione dei dati</h2>
                <p className="text-xl mx-4">
                    Non condividiamo, vendiamo o affittiamo dati personali con terze parti, poiché non
                    raccogliamo dati personali. I dati anonimi raccolti tramite Google Analytics possono
                    essere condivisi con Google per scopi analitici, come previsto dai termini di servizio
                    di Google Analytics. Inoltre, potremmo condividere dati aggregati in caso di:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>Rispetto di obblighi legali;</li>
                    <li>Protezione della sicurezza del sito o dei suoi utenti.</li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">4. Uso dei cookie</h2>
                <p className="text-xl mx-4">
                    Utilizziamo cookie tecnici e analitici (tramite Google Analytics) per migliorare
                    l'esperienza di navigazione e analizzare l'utilizzo del sito. I cookie non raccolgono
                    dati personali. Puoi gestire le impostazioni dei cookie tramite il tuo browser o
                    rifiutare i cookie analitici, se previsto dalla configurazione del sito.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">5. Sicurezza dei dati</h2>
                <p className="text-xl mx-4">
                    Adottiamo misure di sicurezza tecniche e organizzative per proteggere i dati raccolti
                    automaticamente da accessi non autorizzati o alterazioni. Tuttavia, non possiamo
                    garantire la sicurezza assoluta dei dati trasmessi tramite internet.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">6. Modifiche alla privacy policy</h2>
                <p className="text-xl mx-4">
                    Potremmo aggiornare questa informativa in futuro per riflettere modifiche normative o
                    cambiamenti nelle nostre pratiche. In caso di modifiche sostanziali, pubblicheremo
                    un avviso sul sito.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">7. Uso dei loghi di società partner</h2>
                <p className="text-xl mx-4">
                    Sul nostro sito sono presenti loghi di società operanti nel settore dell'energia con cui
                    collaboriamo. Questi loghi sono utilizzati esclusivamente a scopo informativo per
                    indicare le nostre collaborazioni professionali. Martinobani.it non rivendica alcun
                    diritto di proprietà su tali loghi e si impegna a rimuoverli su richiesta dei titolari
                    dei marchi.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">8. Contatti</h2>
                <p className="text-xl mx-4">
                    Per qualsiasi domanda o richiesta relativa alla privacy, puoi contattarci
                    all'indirizzo{" "}
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
    )
}

export default Privacy;