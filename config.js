import firebase from 'firebase';
//import 'firebase/auth'
//import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnL0cQvSsFuB9osV_E7fjp8px1CCEDpYU",
  authDomain: "transation-e-search.firebaseapp.com",
  projectId: "transation-e-search",
  storageBucket: "transation-e-search.appspot.com",
  messagingSenderId: "119873804309",
  appId: "1:119873804309:web:89bdc65b01a3cfb4da961c"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
