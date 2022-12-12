import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGzrbdZhFknIozj6cINhFHm3d90fXzRro',
  authDomain: 'dash-db-d4165.firebaseapp.com',
  projectId: 'dash-db-d4165',
  storageBucket: 'dash-db-d4165.appspot.com',
  messagingSenderId: '900630604286',
  appId: '1:900630604286:web:2288bc85b5c4ec764738af',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
