//Create the socket
let socket = io();
// public-controller

function setup() {
    frameRate(16);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    movementButton('UP', windowWidth / 2, windowHeight / 3);
    movementButton('DOWN', windowWidth / 2, windowHeight / 1.5);
    movementButton('RIGHT', windowWidth / 1.5, windowHeight / 2);
    movementButton('LEFT', windowWidth / 3, windowHeight / 2);
}

function movementButton(direction, posX, posY) {
    ellipse(posX, posY, 50, 50);
    if (dist(pmouseX, pmouseY, posX, posY) < 50) {
        //Send the direction to the server
	socket.emit('directions', direction);
    }
};
