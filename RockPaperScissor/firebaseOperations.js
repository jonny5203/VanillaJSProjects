import { app } from "./firebaseConnection";

// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function getCollection(collectionName){
    const db = getFirestore(app);
    const collectionRef = collection(db, collectionName);
    return collectionRef;
}

function getDocuments(collectionName){
    const collectionRef = getCollection(collectionName);
    const querySnapshot = getDocs(collectionRef);
    return querySnapshot;
}

function addDocument(collectionName, data){
    const collectionRef = getCollection(collectionName);
    const docRef = addDoc(collectionRef, data);
    return docRef;
}

function getDocument(collectionName, docId){
    const db = getFirestore(app);
    const docRef = doc(db, collectionName, docId);
    return docRef;
}

function updateDocument(collectionName, docId, data){
    const docRef = getDocument(collectionName, docId);
    const docSnap = updateDoc(docRef, data);
    return docSnap;
}

function deleteDocument(collectionName, docId){
    const docRef = getDocument(collectionName, docId);
    const docSnap = deleteDoc(docRef);
    return docSnap;
}