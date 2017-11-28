import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseSdk = firebase;
export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseDb = firebaseApp.database();
