import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA9WJ9sWipEDFXslcXq9_dKYuqUrxhkY3w",
    authDomain: "react-clone-slack-c1057.firebaseapp.com",
    databaseURL: "https://react-clone-slack-c1057.firebaseio.com",
    projectId: "react-clone-slack-c1057",
    storageBucket: "react-clone-slack-c1057.appspot.com",
    messagingSenderId: "830481974200",
    appId: "1:830481974200:web:0eeb564f496471122e854d",
    measurementId: "G-BM2DDJ6E6S"
  };

  firebase.initializeApp(config);
  export default firebase;