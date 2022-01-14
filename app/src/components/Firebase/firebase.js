import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'bookface-cb9b1.firebaseapp.com',
  projectId: 'bookface-cb9b1',
  storageBucket: 'bookface-cb9b1.appspot.com',
  messagingSenderId: '766065465845',
  appId: '1:766065465845:web:a60aed70beea36b5fca8bc',
  measurementId: 'G-H9CBSVDRJB',
}

const app = initializeApp(firebaseConfig)
// db google
const db = getFirestore(app)

export const authentification = getAuth(app)

export default db
