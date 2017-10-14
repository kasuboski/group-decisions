import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const joinRoom = (room) => {
    socket.emit('JoinRoom', { room, name: 'Test' });
};

const leaveRoom = (room) => {
    socket.emit('leave', { room });
};

const listenForChoices = (callback) => {
    socket.on('ReceiveChoice', (payload) => {
        console.log('got new choice:', payload.choice);
        callback(payload.choice);
    });
};

const sendChoice = (room, choice) => {
    socket.emit('AddChoice', { room, choice });
};

export { joinRoom, leaveRoom, listenForChoices, sendChoice };