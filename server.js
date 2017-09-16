const io = require('socket.io')();

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log('client joined with room:', data.room);
        socket.join(data.room);
    });

    socket.on('leave', (data) => {
        console.log('client left room:', data.room);
        socket.leave(data.room);
    });

    socket.on('addChoice', (data) => {
        console.log('client added choice to room:', data.choice, data.room);
        socket.broadcast.to(data.room).emit('choiceAdded', { choice: data.choice });
    });

  });

  const port = 8000;
  io.listen(port);
  console.log('listening on port ', port);