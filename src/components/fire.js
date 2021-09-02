import firebase from 'firebase';
import "../style/firebase.css";

const firebaseConfig = {
  apiKey: "AIzaSyDbj1O066xvqvpDlXNZLQNpMRTHGe50c2Q",
  authDomain: "ecommerce-9763f.firebaseapp.com",
  projectId: "ecommerce-9763f",
  storageBucket: "ecommerce-9763f.appspot.com",
  messagingSenderId: "810353559131",
  appId: "1:810353559131:web:8788e9c0164ac59c8f617e",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
