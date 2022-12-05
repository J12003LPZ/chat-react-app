import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuzWeIlcCZopOFdkrrOl-wo_wBdDDpIkM",
  authDomain: "chat-324aa.firebaseapp.com",
  databaseURL: "https://chat-324aa-default-rtdb.firebaseio.com",
  projectId: "chat-324aa",
  storageBucket: "chat-324aa.appspot.com",
  messagingSenderId: "334837798980",
  appId: "1:334837798980:web:3e85d15a491a93ab220411",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
