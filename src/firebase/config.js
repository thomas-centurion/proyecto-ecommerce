import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE71MfxCqnY-Udai--y3b804TgU5ImYe8",
  authDomain: "proyecto-react-c50f6.firebaseapp.com",
  projectId: "proyecto-react-c50f6",
  storageBucket: "proyecto-react-c50f6.firebasestorage.app",
  messagingSenderId: "892108983679",
  appId: "1:892108983679:web:3185c9f598b142627cde4a",
  measurementId: "G-95WH65MP2S",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);