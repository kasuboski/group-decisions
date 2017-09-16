import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const joinRoom = (room) => {
    socket.emit('join', { room });
}

export { joinRoom };