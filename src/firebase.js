// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
        apiKey: "AIzaSyBWTD0aKfCgTTvEKwzxx_LZtxediWVaKDE",
        authDomain: "groceries-19c3a.firebaseapp.com",
        projectId: "groceries-19c3a",
        storageBucket: "groceries-19c3a.appspot.com",
        messagingSenderId: "56393921808",
        appId: "1:56393921808:web:40bba6eab49108ad6ca195",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);