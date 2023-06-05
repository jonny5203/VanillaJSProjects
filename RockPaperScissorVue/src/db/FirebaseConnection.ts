import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyD0Wrcdd6H6D8Pa83fs5BNXLPXlos6qQkU",
    authDomain: "rockpaperscissor-c8251.firebaseapp.com",
    projectId: "rockpaperscissor-c8251",
    storageBucket: "rockpaperscissor-c8251.appspot.com",
    messagingSenderId: "404103544895",
    appId: "1:404103544895:web:6dd9e9c3bbbadb53cab88a"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')
