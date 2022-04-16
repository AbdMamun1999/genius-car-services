import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKElJD-ApuEQOEg5LZ8uzXxpJJuyBoofE",
  authDomain: "genius-car-services-2d7fd.firebaseapp.com",
  projectId: "genius-car-services-2d7fd",
  storageBucket: "genius-car-services-2d7fd.appspot.com",
  messagingSenderId: "949915704202",
  appId: "1:949915704202:web:a51c58e87ad133486d0673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;