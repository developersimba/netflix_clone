import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA8J49xCvqoNr6bq-kMH10IknFGBELb5og",
  authDomain: "sample-app-3a98b.firebaseapp.com",
  projectId: "sample-app-3a98b",
  storageBucket: "sample-app-3a98b.appspot.com",
  messagingSenderId: "136889459862",
  appId: "1:136889459862:web:2d296d608e92ad47d8ceb7"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)