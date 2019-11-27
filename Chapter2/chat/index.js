const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (req, res) => {
  console.log('a user connected');
})
app.use(express.static('client/build'));

http.listen(3000, () => {
  console.log('listening on *:3000');
});