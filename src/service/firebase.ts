import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgw2--UFRZhF8nVghpgsJ6w34K4bttLzY",
    authDomain: "delliv-a2ee9.firebaseapp.com",
    projectId: "delliv-a2ee9",
    storageBucket: "delliv-a2ee9.appspot.com",
    messagingSenderId: "342940956273",
    appId: "1:342940956273:web:653f83a77b8a73185b4dd0",
    measurementId: "G-S8GGZV20YS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);