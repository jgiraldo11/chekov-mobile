import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = { // *** PEPLACE WITH YOUR OWN CONFIG ***
    apiKey: "AIzaSyBlwXgOqIho-W7AjS55POaYp_iiNgmdaxE",
    authDomain: "chekov-jg.firebaseapp.com",
    projectId: "chekov-jg",
    storageBucket: "chekov-jg.appspot.com",
    messagingSenderId: "995302319781",
    appId: "1:995302319781:web:c7c8b5a63679cb1cf50f4c"
  }; // *** REPLACE WITH YOUR OWN CONGIF ***

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app); // *** need app inside for react-native