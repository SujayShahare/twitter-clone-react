import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3dshpj52Xy4ghGMY_4dw6pv8yyAlNF88",
    authDomain: "twitter-clone-646c0.firebaseapp.com",
    projectId: "twitter-clone-646c0",
    storageBucket: "twitter-clone-646c0.appspot.com",
    messagingSenderId: "763433970304",
    appId: "1:763433970304:web:49bc68694ca60fb94c9465",
    measurementId: "G-5B0PS3FV5E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 