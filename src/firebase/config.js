import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  // NUOVI DATI DI CONFIGURAZIONE
  apiKey: "AIzaSyAQNw-DuCLAYd28XgpkUxkQBPrz5Epwl7c",
  authDomain: "martinobani-b1130.firebaseapp.com",
  databaseURL: "https://martinobani-b1130-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "martinobani-b1130",
  storageBucket: "martinobani-b1130.firebasestorage.app",
  messagingSenderId: "224073362194",
  appId: "1:224073362194:web:d3a06e1c21721939a8a1cb",
  measurementId: "G-JEPJHN20YK"
};


// Initialize Firebase (Inizializzazioni lasciate inalterate)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configura il provider di autenticazione Google (Lasciato inalterato)
const googleProvider = new GoogleAuthProvider();

export { googleProvider };