// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Import Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDft8NuCyLig3d8kxF8-oBWH_m1XYEugYo",
  authDomain: "hello2-c3171.firebaseapp.com",
  projectId: "hello2-c3171",
  storageBucket: "hello2-c3171.appspot.com",  // ✅ Fixed storage bucket URL
  messagingSenderId: "1053615640694",
  appId: "1:1053615640694:web:5522db8cc7f42a53744f57",
  measurementId: "G-K0HBSEQSV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // ✅ Initialize Firebase Authentication
const analytics = getAnalytics(app);

export { app, auth, analytics };  // ✅ Export `auth`
