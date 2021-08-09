import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDOmjUSFCgcQsbqeH1m9dvWl5SFAuxZQRw",
  authDomain: "npcapp-ff5e4.firebaseapp.com",
  databaseURL: "https://npcapp-ff5e4.firebaseio.com",
  projectId: "npcapp-ff5e4",
  storageBucket: "npcapp-ff5e4.appspot.com",
  messagingSenderId: "266309911132",
  appId: "1:266309911132:web:e0d1f7043f4e5383cbdc99",
  measurementId: "G-6PEKY62QHD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;