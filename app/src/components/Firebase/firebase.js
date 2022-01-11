import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJID,
  storageBucket: process.env.REACT_APP_STORBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE,
}

const app = initializeApp(firebaseConfig)
// db google
const db = getFirestore(app)

export const authentification = getAuth(app)

export default db
