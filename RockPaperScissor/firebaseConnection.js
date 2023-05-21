
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Wrcdd6H6D8Pa83fs5BNXLPXlos6qQkU",
    authDomain: "rockpaperscissor-c8251.firebaseapp.com",
    projectId: "rockpaperscissor-c8251",
    storageBucket: "rockpaperscissor-c8251.appspot.com",
    messagingSenderId: "404103544895",
    appId: "1:404103544895:web:6dd9e9c3bbbadb53cab88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};