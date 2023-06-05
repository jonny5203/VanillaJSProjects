import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, increment } from 'firebase/firestore'

import { db } from "./FirebaseConnection";
import User from "../model/userModel";

function getCollection(collectionName: string){
    const collectionRef = collection(db, collectionName);
    return collectionRef;
}

// gets all documents from a collection
function getDocuments(collectionName: string){
    const collectionRef = getCollection(collectionName);
    const querySnapshot = getDocs(collectionRef);
    return querySnapshot;
}

// adds a User to the collection of Users
function addUserDocument(collectionName: string, data: User){
    const collectionRef = getCollection(collectionName);
    const docRef = addDoc(collectionRef, data);
    return docRef;
}

// adds a Session to the collection of Sessions
function addSessionDocument(collectionName: string, data: User){
    const collectionRef = getCollection(collectionName);
    const docRef = addDoc(collectionRef, data);
    return docRef;
}

// gets a document from a collection
function getDocument(collectionName: string, docId: string){
    const docRef = doc(db, collectionName, docId);
    return docRef;
}

// increment wins and gamesPlayed by 1
function incrementWins(collectionName: string, docId: string){
    const docRef = getDocument(collectionName, docId);
    const docSnap = updateDoc(docRef, {
        wins: increment(1),
        gamesPlayed: increment(1)
    });
    return docSnap;
}

// increment losts and gamesPlayed by 1
function incrementLosts(collectionName: string, docId: string){
    const docRef = getDocument(collectionName, docId);
    const docSnap = updateDoc(docRef, {
        losts: increment(1),
        gamesPlayed: increment(1)
    });
    return docSnap;
}

// deletes a document from a collection
function deleteDocument(collectionName: string, docId: string){
    const docRef = getDocument(collectionName, docId);
    const docSnap = deleteDoc(docRef);
    return docSnap;
}

export { getCollection, getDocuments, addUserDocument, addSessionDocument, getDocument, deleteDocument, incrementWins, incrementLosts };