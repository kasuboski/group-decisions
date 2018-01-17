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

const getRoom = roomName => firebase.firestore().collection('rooms').doc(roomName);

const doesRoomExist = async roomId => {
  const roomRef = getRoom(roomId);
  const room = await roomRef.get();
  return room.exists;
}

const joinRoom = async (roomName, member, isCreator) => {
  const room = getRoom(roomName);
  if (isCreator) {
    await room.set({
      allJoined: false,
    });
  }

  await room.collection('members').doc(member.uid).set({
    isCreator,
    name: member.name,
  });
};

const leaveRoom = (room) => {
  console.log('LeaveRoom', { room });
};

const subscribeToMembers = (room, cb) => {
  return getRoom(room).collection('members').onSnapshot(snapshot => {
    const members = [];
    snapshot.forEach(doc => members.push(doc.data()));

    cb(members);
  }, error => console.error(error));
};

const setAllJoined = room => {
  const roomRef = getRoom(room);
  return roomRef.update({
    allJoined: true,
  });
}

const subscribeToChoices = (room, cb) => {
  return getRoom(room).collection('choices').onSnapshot(snapshot => {
    const choices = [];
    snapshot.forEach(doc => choices.push(doc.data()));

    cb(choices);
  }, error => console.error(error));
};

const addChoice = (room, choice) => {
  console.log('AddChoice', { room, choice });
};

export { 
  signIn,
  subscribeToAuthChanges,
  doesRoomExist,
  joinRoom,
  leaveRoom,
  subscribeToMembers,
  setAllJoined,
  subscribeToChoices,
  addChoice,
};