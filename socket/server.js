module.exports = socket => {
  socket.on('led', data => {
    socket.broadcast.emit('switch-led', data);
  });
  socket.on('disconnect', () => {  });
}