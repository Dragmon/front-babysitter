import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'babysitter-storage.firebaseapp.com',
  databaseURL: 'https://babysitter-storage.firebaseio.com',
  projectId: 'babysitter-storage',
  storageBucket: 'babysitter-storage.appspot.com',
  messagingSenderId: '106103159049',
  appId: '1:106103159049:web:a64cc6210321e8b816bbd8',
};

firebase.initializeApp(config);
export default firebase;
