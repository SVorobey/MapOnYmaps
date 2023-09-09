/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBz1nHxDV_SUcKQ6ZdEP5Xzs0aEoaBdifo',
  authDomain: 'modsen-80f22.firebaseapp.com',
  projectId: 'modsen-80f22',
  storageBucket: 'modsen-80f22.appspot.com',
  messagingSenderId: '278843403684',
  appId: '1:278843403684:web:623e22a1215f64dd9fa531',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
