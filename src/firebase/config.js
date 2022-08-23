import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyj-VdRGefMbSsAV4gMPzyR1Txq_0JznA",
    authDomain: "fir-8d7ff.firebaseapp.com",
    projectId: "fir-8d7ff",
    storageBucket: "fir-8d7ff.appspot.com",
    messagingSenderId: "33106624123",
    appId: "1:33106624123:web:4d9132b609ada3662e6cde",
    measurementId: "G-61JPLV8KND"
  };
 export default firebase.initializeApp(firebaseConfig)