  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyADZ4vakVFfLyWdvHYuUTptb7h4k2Oqb4c",
    authDomain: "ecom-db-7f949.firebaseapp.com",
    databaseURL: "https://ecom-db-7f949.firebaseio.com",
    projectId: "ecom-db-7f949",
    storageBucket: "ecom-db-7f949.appspot.com",
    messagingSenderId: "1007877401415",
    appId: "1:1007877401415:web:b828c526d663f53a98ba62"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  