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

const markMemberReady = async (room, uid, ready) => {
  const roomRef = getRoom(room);
  await roomRef.collection('members').doc(uid).update({
    ready
  });
}

const setAllJoined = room => {
  const roomRef = getRoom(room);
  return roomRef.update({
    allJoined: true,
  });
};

const subscribeToAllJoined = (room, cb) => {
  const roomRef = getRoom(room);
  return roomRef.onSnapshot(doc => {
    cb(doc && doc.data().allJoined);
  });
};

const subscribeToChoices = (room, cb) => {
  return getRoom(room).collection('choices').onSnapshot(snapshot => {
    const choices = [];
    snapshot.forEach(doc => choices.push({id: doc.id, ...doc.data()}));

    cb(choices);
  }, error => console.error(error));
};

const addChoice = (room, uid, choice) => {
  const roomRef = getRoom(room);
  roomRef.collection('choices').add({
    name: choice,
    added_at: new Date(),
    added_by: uid,
  })
};

const determineRank = (numChoices, index) => (numChoices - index);

const rankChoices = async (room, uid, rankedChoices) => {
  const numChoices = rankedChoices.length;
  const roomRef = getRoom(room);

  const choicesInfo = rankedChoices.map((choice, idx) => (
    { 
      id: choice.id,
      ref: roomRef.collection('ranks').doc(), 
      rank: determineRank(numChoices, idx)
    }
  ));

  const batch = firebase.firestore().batch();
  choicesInfo.forEach(choice => {
    batch.set(choice.ref, { uid, id: choice.id, value: choice.rank });
  });

  await batch.commit();
};

const getRankingsByChoice = async room => {
    const rankingsByChoice = {};
    const snapshot = await getRoom(room).collection('ranks').get();
  
    snapshot.forEach(doc => {
      if (doc && doc.data()) {
        const { id } = doc.data();

        if (rankingsByChoice[id]) {
          rankingsByChoice[id].push(doc.data());
        } else {
          rankingsByChoice[id] = [doc.data()];
        }
      } else {
        throw new Error('rankings document was empty');
      }
    });

    return rankingsByChoice;
};

const sumRankingsReducer = (accum, currValue) => {
  return accum + parseInt(currValue.value, 10);
};
const determineScore = (rankings) => rankings.reduce(sumRankingsReducer, 0);

const getResult = async (room, choices) => {
  const rankingsByChoice = await getRankingsByChoice(room);
  const scores = Object.getOwnPropertyNames(rankingsByChoice).map(choice => {
    return {
      choiceId: choice,
      score: determineScore(rankingsByChoice[choice]),
    };
  });

  return scores.sort((a, b) => b.score-a.score)[0];
};

export { 
  signIn,
  subscribeToAuthChanges,
  doesRoomExist,
  joinRoom,
  leaveRoom,
  subscribeToMembers,
  markMemberReady,
  setAllJoined,
  subscribeToAllJoined,
  subscribeToChoices,
  addChoice,
  rankChoices,
  getResult,
};