const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 9090;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat-message', (msg) => {
    console.log(msg);
  })
})
app.use(express.static('client/build'));

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});