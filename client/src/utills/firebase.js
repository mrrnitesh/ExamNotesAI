import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotesai-7c3ad.firebaseapp.com",
  projectId: "authexamnotesai-7c3ad",
  storageBucket: "authexamnotesai-7c3ad.firebasestorage.app",
  messagingSenderId: "907607304935",
  appId: "1:907607304935:web:0fbe733dc2aeee29635042"
};
// const firebaseConfig = {
//    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "examnotesproject.firebaseapp.com",
//   projectId: "examnotesproject",
//   storageBucket: "examnotesproject.firebasestorage.app",
//   messagingSenderId: "559628325387",
//   appId: "1:559628325387:web:101751ab85f0d4adf1ed0e"
// };
// Initialize Firebase


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}