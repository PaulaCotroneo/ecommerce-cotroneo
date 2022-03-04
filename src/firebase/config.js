import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuXHZ4nTx6AmyDxG3FKDTzPWn5ELe1oAk",
  authDomain: "ecommerce-cotroneo.firebaseapp.com",
  projectId: "ecommerce-cotroneo",
  storageBucket: "ecommerce-cotroneo.appspot.com",
  messagingSenderId: "358056914781",
  appId: "1:358056914781:web:0d31f38ff35d16afcc42b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoneApp() {
  return app
};