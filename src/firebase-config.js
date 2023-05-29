import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; //para el chat

const firebaseConfig = {
  apiKey: "AIzaSyAgrD1bRDvyCVJgtCbGpduubxz5HuQ0PMA",
  authDomain: "chat-ef2d5.firebaseapp.com",
  projectId: "chat-ef2d5",
  storageBucket: "chat-ef2d5.appspot.com",
  messagingSenderId: "420725299284",
  appId: "1:420725299284:web:db22d70e2a64516c1c35c1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); //para la base de datos de los mensajes del chat
