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

  });

  const port = 8000;
  io.listen(port);
  console.log('listening on port ', port);