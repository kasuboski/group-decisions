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

export { joinRoom, listenForReceiveJoinRoom, leaveRoom, listenForChoices, sendChoice };