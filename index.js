const express = require('express');
//Bring the socket.io module
const app = express();
//Create a httpServer
const httpServer = app.listen(5050);
//Create a new instance of Socket.io Server
const { Server } = require ('socket.io');
const ioServer = new Server (httpServer);
//
const staticController = express.static('public-controller');
const staticDisplay = express.static('public-display');

app.use('/controller', staticController);
app.use('/display', staticDisplay);

/*
Set the ioServer to listen to new connections
Set the socket to listen to an event and the message from controller
Broadcast the message to the display
*/
ioServer.on('connection', (socket) => {
	socket.on('directions', (direction) => {
		socket.broadcast.emit('directions', direction);
	}
	);
}
);

