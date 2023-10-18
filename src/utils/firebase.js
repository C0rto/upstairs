// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: 'blog-641cc.firebaseapp.com',
  projectId: 'blog-641cc',
  storageBucket: 'blog-641cc.appspot.com',
  messagingSenderId: '841206482823',
  appId: '1:841206482823:web:88e5055d8a6c575047f522',
  measurementId: 'G-Q31VH83C83',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
