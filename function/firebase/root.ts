import { initializeApp } from "firebase/app";

// WARNING: Security
const firebaseConfig = {
  apiKey: "AIzaSyBcxPJuj3qT7-MiTd_RA-EaLZwFYxgH0sY",
  authDomain: "seratanjawi.firebaseapp.com",
  projectId: "seratanjawi",
  storageBucket: "seratanjawi.appspot.com",
  messagingSenderId: "197040451030",
  appId: "1:197040451030:web:f9b94c8fc8090b20a64877",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
