import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAJWrtpHs084XlxbFetmc-VX2rI_PPcjIM",
  authDomain: "jido-otp-f2128.firebaseapp.com",
  projectId: "jido-otp-f2128",
  storageBucket: "jido-otp-f2128.appspot.com",
  messagingSenderId: "586626218522",
  appId: "1:586626218522:web:d932d0196caa288b5cefa3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
