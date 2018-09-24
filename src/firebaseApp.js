import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAQ-6rICM1ra9gkbpEmzh5xH7p9GCmEobg',
  authDomain: 'techfest-1bd5a.firebaseapp.com',
  databaseURL: 'https://techfest-1bd5a.firebaseio.com',
  projectId: 'techfest-1bd5a',
  storageBucket: 'techfest-1bd5a.appspot.com',
  messagingSenderId: '651885289629',
};

/* eslint-disable */
export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')