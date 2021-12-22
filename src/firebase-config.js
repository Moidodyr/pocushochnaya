import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB2g7zGflrcUAkWkxsYQVqr59u7Oy3cVuY",
    authDomain: "pocushochnaya-b3bf9.firebaseapp.com",
    databaseURL: "https://pocushochnaya-b3bf9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pocushochnaya-b3bf9",
    storageBucket: "pocushochnaya-b3bf9.appspot.com",
    messagingSenderId: "783163927758",
    appId: "1:783163927758:web:fa8ef2a7418694c581749f",
    measurementId: "G-728H10HKL1"
  }
  
const app = initializeApp(firebaseConfig)
  
export const authentication = getAuth(app)