import { app } from "./firebaseConnection";

// Import the functions you need from the SDK
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function getCollection(collectionName){
    const db = getFirestore(app);
    const collectionRef = collection(db, collectionName);
    return collectionRef;
}

// gets all documents from a collection
function getDocuments(collectionName){
    const collectionRef = getCollection(collectionName);
    const querySnapshot = getDocs(collectionRef);
    return querySnapshot;
}

// adds a document to a collection
function addDocument(collectionName, data){
    const collectionRef = getCollection(collectionName);
    const docRef = addDoc(collectionRef, data);
    return docRef;
}

// gets a document from a collection
function getDocument(collectionName, docId){
    const db = getFirestore(app);
    const docRef = doc(db, collectionName, docId);
    return docRef;
}

// updates a document from a collection
function updateDocument(collectionName, docId, data){
    const docRef = getDocument(collectionName, docId);
    const docSnap = updateDoc(docRef, data);
    return docSnap;
}

// deletes a document from a collection
function deleteDocument(collectionName, docId){
    const docRef = getDocument(collectionName, docId);
    const docSnap = deleteDoc(docRef);
    return docSnap;
}

// handles login with email and password through firebase
function login(email, password){
    const auth = getAuth();
    const user = signInWithEmailAndPassword(auth, email, password);
    return user;
}

// handles logout through firebase
function logout(){
    const auth = getAuth();
    const user = signOut(auth);
    return user;
}


export { getCollection, getDocuments, addDocument, getDocument, updateDocument, deleteDocument, login };