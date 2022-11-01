// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz-r7m5o3ndgO65AaBn6rcjfO0992BTgg",
  authDomain: "reels-clone-786.firebaseapp.com",
  projectId: "reels-clone-786",
  storageBucket: "reels-clone-786.appspot.com",
  messagingSenderId: "526925960653",
  appId: "1:526925960653:web:5a7b60e01c3e2591de6084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();

export { auth,storage }
export default app;