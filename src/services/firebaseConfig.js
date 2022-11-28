import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCekgRAOzhpwpspY2ws07dC95tlMjiQIrI",
  authDomain: "tacosregiosapp.firebaseapp.com",
  projectId: "tacosregiosapp",
  storageBucket: "tacosregiosapp.appspot.com",
  messagingSenderId: "496835575544",
  appId: "1:496835575544:web:71cc85a9633487a174c50d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db,'tacos');