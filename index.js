require('dotenv').config();
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');
const serverSocket = require('./socket/server.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

const server = http.createServer(app).listen(port, () => {
  console.log(`Listening on port http://0.0.0.0:${port}`);
});

const io = new Server(server);
io.sockets.on('connection', serverSocket);

