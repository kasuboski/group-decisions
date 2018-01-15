import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_MESSAGING_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
};
firebase.initializeApp(firebaseConfig);

const signIn = () => {
  firebase.auth().signInAnonymously().catch(error => {
    console.error(error);
  });
};

const subscribeToAuthChanges = callback => {
  firebase.auth().onAuthStateChanged(callback);
}

const joinRoom = (room, name) => {
  console.log('JoinRoom', {room, name});
};

const listenForReceiveJoinRoom = (callback) => {
  // socket.on('ReceiveJoinRoom', (payload) => {
  //   const { name } = payload;
  //   console.log(`${name} just joined`);
  //   callback(name);
  // });
};

const leaveRoom = (room) => {
  console.log('LeaveRoom', { room });
};

const listenForChoices = (callback) => {
  // socket.on('ReceiveChoice', (payload) => {
  //   console.log('got new choice:', payload.choice);
  //   callback(payload.choice);
  // });
};

const sendChoice = (room, choice) => {
  console.log('AddChoice', { room, choice });
};

export { 
  signIn,
  subscribeToAuthChanges,
  joinRoom,
  listenForReceiveJoinRoom,
  leaveRoom,
  listenForChoices,
  sendChoice
};