import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Tambahkan GoogleAuthProvider

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyD6iCA-JCVxObG3Kbz8_dYJQkBIHF-rSdk",
  authDomain: "calmmind-3c67d.firebaseapp.com",
  projectId: "calmmind-3c67d",
  storageBucket: "calmmind-3c67d.firebasestorage.app",
  messagingSenderId: "558136488035",
  appId: "1:558136488035:web:9b2bb9f7dabf5603c34856",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Pastikan ini terdefinisi dengan benar

export { auth, googleProvider };
