// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXvo0_ymOx0CeJ1UTwUr6kYHRdGEdAi9g",
    authDomain: "a10-art-craft.firebaseapp.com",
    projectId: "a10-art-craft",
    storageBucket: "a10-art-craft.appspot.com",
    messagingSenderId: "657568910094",
    appId: "1:657568910094:web:82e71362bbe3c162fc655f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)