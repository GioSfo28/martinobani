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
                    raccogliamo, utilizziamo e proteggiamo le informazioni durante l'uso del nostro sito
                    e in caso di comunicazioni tramite email o telefono. Martinobani.it è un sito di
                    consulenza energetica che non raccoglie dati personali tramite moduli, login o altri
                    mezzi sul sito, ma utilizza Google Analytics per analisi aggregate e anonime. Ti
                    invitiamo a leggere attentamente questa informativa per comprendere le nostre pratiche.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">1. Tipologie di dati raccolti</h2>
                <p className="text-xl mx-4">
                    Martinobani.it non raccoglie dati personali o sensibili direttamente dagli utenti
                    tramite il sito, poiché non sono presenti moduli di contatto, aree di login o altre
                    funzionalità che richiedono l'inserimento di informazioni personali. Raccogliamo
                    esclusivamente dati tecnici e anonimi tramite strumenti di analisi. Tuttavia, potresti
                    fornirci dati personali contattandoci tramite email o telefono.
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

                <h3 className="text-2xl font-bold mx-2 my-5">1.2 Dati forniti volontariamente tramite email o telefono</h3>
                <p className="text-xl mx-4">
                    Se ci contatti tramite email (martinobani@gmail.com) o telefono (+39 333 8401484),
                    potresti fornirci dati personali, come il tuo nome, indirizzo email, numero di telefono
                    o altre informazioni incluse nella tua comunicazione (ad esempio, dati presenti nelle
                    bollette inviate). Questi dati saranno trattati esclusivamente per rispondere alla tua
                    richiesta o fornirti la consulenza richiesta, in conformità al GDPR. Non utilizziamo
                    questi dati per altri scopi né li condividiamo con terze parti, salvo quanto necessario
                    per adempiere a obblighi legali o per fornire il servizio richiesto (ad esempio, con un
                    fornitore energetico, previa tua autorizzazione).
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">2. Utilizzo dei dati raccolti</h2>
                <p className="text-xl mx-4">
                    I dati raccolti vengono utilizzati esclusivamente per:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>Analizzare il traffico del sito per migliorare l'esperienza utente;</li>
                    <li>Monitorare le prestazioni del sito tramite Google Analytics;</li>
                    <li>Garantire la sicurezza e il corretto funzionamento della piattaforma;</li>
                    <li>Rispondere alle richieste di consulenza o informazioni ricevute tramite email o telefono.</li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">3. Condivisione dei dati</h2>
                <p className="text-xl mx-4">
                    Non condividiamo, vendiamo o affittiamo dati personali con terze parti, poiché non
                    raccogliamo dati personali tramite il sito. I dati anonimi raccolti tramite Google
                    Analytics possono essere condivisi con Google per scopi analitici, come previsto dai
                    termini di servizio di Google Analytics. I dati personali forniti tramite email o
                    telefono saranno condivisi solo in caso di:
                </p>
                <ul className="list-disc list-inside mx-4 text-xl">
                    <li>Rispetto di obblighi legali;</li>
                    <li>Protezione della sicurezza del sito o dei suoi utenti;</li>
                    <li>Necessità di fornire il servizio richiesto (ad esempio, condivisione con un fornitore
                        energetico, previa tua autorizzazione esplicita).</li>
                </ul>

                <h2 className="text-3xl font-bold mx-2 my-5">4. Base giuridica del trattamento</h2>
                <p className="text-xl mx-4">
                    I dati raccolti automaticamente (cookie tecnici e analitici) sono trattati sulla base
                    del nostro legittimo interesse a migliorare il sito e garantire la sua sicurezza, in
                    conformità all'art. 6(1)(f) del GDPR. I dati personali forniti tramite email o telefono
                    sono trattati sulla base del tuo consenso (art. 6(1)(a) GDPR) o per l'esecuzione di un
                    contratto o misure precontrattuali (art. 6(1)(b) GDPR), come rispondere alla tua richiesta
                    di consulenza.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">5. Uso dei cookie</h2>
                <p className="text-xl mx-4">
                    Utilizziamo cookie tecnici e analitici (tramite Google Analytics) per migliorare
                    l'esperienza di navigazione e analizzare l'utilizzo del sito. I cookie non raccolgono
                    dati personali. Puoi gestire le impostazioni dei cookie tramite il tuo browser o
                    rifiutare i cookie analitici, come descritto nella nostra{" "}
                    <a href="/cookie" className="text-blue-500">
                        Informativa sui Cookie
                    </a>.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">6. Sicurezza dei dati</h2>
                <p className="text-xl mx-4">
                    Adottiamo misure di sicurezza tecniche e organizzative per proteggere i dati raccolti
                    automaticamente e i dati personali forniti tramite email o telefono da accessi non
                    autorizzati, alterazioni o divulgazioni. Tuttavia, non possiamo garantire la sicurezza
                    assoluta dei dati trasmessi tramite internet o comunicazioni telefoniche.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">7. Conservazione dei dati</h2>
                <p className="text-xl mx-4">
                    I dati raccolti automaticamente tramite Google Analytics sono conservati per il periodo
                    indicato nei termini di servizio di Google Analytics. I dati personali forniti tramite
                    email o telefono saranno conservati solo per il tempo necessario a rispondere alla tua
                    richiesta o a fornire il servizio richiesto, salvo obblighi legali che richiedano una
                    conservazione più lunga.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">8. Diritti dell'utente</h2>
                <p className="text-xl mx-4">
                    In conformità al GDPR, hai il diritto di accedere, rettificare, cancellare, limitare il
                    trattamento, opporti al trattamento o richiedere la portabilità dei tuoi dati personali
                    forniti tramite email o telefono. Per esercitare questi diritti, contattaci all'indirizzo{" "}
                    <a href="mailto:martinobani@gmail.com" className="text-blue-500">
                        martinobani@gmail.com
                    </a>.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">9. Uso dei loghi di società partner</h2>
                <p className="text-xl mx-4">
                    Sul nostro sito sono presenti loghi di società operanti nel settore dell'energia con cui
                    collaboriamo. Questi loghi sono utilizzati esclusivamente a scopo informativo per
                    indicare le nostre collaborazioni professionali. Martinobani.it non rivendica alcun
                    diritto di proprietà su tali loghi e si impegna a rimuoverli su richiesta dei titolari
                    dei marchi.
                </p>

                <h2 className="text-3xl font-bold mx-2 my-5">10. Contatti</h2>
                <p className="text-xl mx-4">
                    Per qualsiasi domanda o richiesta relativa alla privacy, inclusi i dati forniti tramite
                    email o telefono, puoi contattarci all'indirizzo{" "}
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