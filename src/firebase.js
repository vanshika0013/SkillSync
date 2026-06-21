import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPBVYWl_O9ReGkBcBf5EmUchFMienHJks",
  authDomain: "skillsync-4a878.firebaseapp.com",
  projectId: "skillsync-4a878",
  storageBucket: "skillsync-4a878.firebasestorage.app",
  messagingSenderId: "25729730562",
  appId: "1:25729730562:web:68c180b9d5ad27ee16ff1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);