import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_API_MESSAGINGSENDER_ID,
    appId: process.env.NEXT_PUBLIC_API_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_API_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);