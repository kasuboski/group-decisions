const io = require('socket.io')();

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log('client joined with room', data.room);
        socket.join(data.room);
    });

  });

  const port = 8000;
  io.listen(port);
  console.log('listening on port ', port);