import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACR_APP_FB_API_KEY,
  authDomain: "eshop-210ed.firebaseapp.com",
  projectId: "eshop-210ed",
  storageBucket: "eshop-210ed.appspot.com",
  messagingSenderId: "478595368339",
  appId: "1:478595368339:web:ed64d93a63a5986c8a1466",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
