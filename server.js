const io = require('socket.io')();

io.on('connection', (socket) => {
    socket.on('JoinRoom', (data) => {
        console.log(`${data.name} joined with room:`, data.room);
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('ReceiveJoinRoom', { name: data.name });
    });

    socket.on('LeaveRoom', (data) => {
        console.log('client left room:', data.room);
        socket.leave(data.room);
    });

    socket.on('AddChoice', (data) => {
        const { choice, room } = data;
        console.log(`client added ${choice} to ${room}`);
        socket.broadcast.to(data.room).emit('ReceiveChoice', { choice });
    });

  });

  const port = 8000;
  io.listen(port);
  console.log('listening on port ', port);