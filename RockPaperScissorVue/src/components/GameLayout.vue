<script setup lang="ts">
import { ref } from 'vue'

const imageSourceList = [
  '/src/images/empty.png',
  '/src/images/paper.png',
  '/src/images/rock.png',
  '/src/images/scissor.png'
]

const imageSource = ref(imageSourceList[0])

function changeImage(imageNum: number) {
  imageSource.value = imageSourceList[imageNum]
}

function resetImage() {
  imageSource.value = imageSourceList[0]
}
</script>

<script lang="ts">
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD0Wrcdd6H6D8Pa83fs5BNXLPXlos6qQkU',
  authDomain: 'rockpaperscissor-c8251.firebaseapp.com',
  projectId: 'rockpaperscissor-c8251',
  storageBucket: 'rockpaperscissor-c8251.appspot.com',
  messagingSenderId: '404103544895',
  appId: '1:404103544895:web:6dd9e9c3bbbadb53cab88a'
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

console.log(db)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')

import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  increment,
  onSnapshot
} from 'firebase/firestore'

import User from '../model/userModel'

// listen to changes on a document
function listenToDocument(collectionName: string, docId: string) {
  const docRef = doc(db, collectionName, docId)
  const unsubscribe = onSnapshot(docRef, (doc) => {
    console.log('Current data: ', doc.data())
  })
  return unsubscribe
}

function getCollection(collectionName: string) {
  const collectionRef = collection(db, collectionName)
  return collectionRef
}

// gets all documents from a collection
function getDocuments(collectionName: string) {
  const collectionRef = getCollection(collectionName)
  const querySnapshot = getDocs(collectionRef)
  return querySnapshot
}

// adds a User to the collection of Users
function addUserDocument(collectionName: string, data: User) {
  const collectionRef = getCollection(collectionName)
  const docRef = addDoc(collectionRef, data)
  return docRef
}

// adds a Session to the collection of Sessions
function addSessionDocument(collectionName: string, data: User) {
  const collectionRef = getCollection(collectionName)
  const docRef = addDoc(collectionRef, data)
  return docRef
}

// gets a document from a collection
function getDocument(collectionName: string, docId: string) {
  const docRef = doc(db, collectionName, docId)
  return docRef
}

// increment wins and gamesPlayed by 1
function incrementWins(collectionName: string, docId: string) {
  const docRef = getDocument(collectionName, docId)
  const docSnap = updateDoc(docRef, {
    wins: increment(1),
    gamesPlayed: increment(1)
  })
  return docSnap
}

// increment losts and gamesPlayed by 1
function incrementLosts(collectionName: string, docId: string) {
  const docRef = getDocument(collectionName, docId)
  const docSnap = updateDoc(docRef, {
    losts: increment(1),
    gamesPlayed: increment(1)
  })
  return docSnap
}

// deletes a document from a collection
function deleteDocument(collectionName: string, docId: string) {
  const docRef = getDocument(collectionName, docId)
  const docSnap = deleteDoc(docRef)
  return docSnap
}

export {
  getCollection,
  getDocuments,
  addUserDocument,
  addSessionDocument,
  getDocument,
  deleteDocument,
  incrementWins,
  incrementLosts,
  listenToDocument
}
</script>

<template>
  <div class="container">
    <h3 id="win-text">Vinn:</h3>
    <h3 id="lost-text">Tap:</h3>
    <h3 id="draw-text">Uavgjort:</h3>
    <h3 id="announcement-text"></h3>
    <img v-bind:src="imageSource" alt="Main Image" class="main-image" id="main-image" />
    <div class="sub-images">
      <button class="invisible-button" @click="changeImage(1)">
        <img :src="imageSourceList[1]" alt="Papir" class="sub-image" />
      </button>
      <button class="invisible-button" @click="changeImage(2)">
        <img :src="imageSourceList[2]" alt="Stein" class="sub-image" />
      </button>
      <button class="invisible-button" @click="changeImage(3)">
        <img :src="imageSourceList[3]" alt="Saks" class="sub-image" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.main-image {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
.sub-images {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.sub-image {
  width: 130px;
  height: 130px;
  margin: 0 0px;
}
</style>
