//Create the socket
let socket = io();
let character = {
    x: 0,
    y: 0
};
let speed = 10;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;
}

function draw() {
    background(0, 10);
    fill(255);
    noStroke();
    ellipse(character.x, character.y, 50, 50);
}

/*
Listen to the event and use the directions
You may want to use switch-case structure
*/

socket.on('directions', (direction) => {
	switch (direction){
		case 'UP':
			character.y -= 10;
			break;
		case 'DOWN':
			character.y += 10;
			break;
		case 'LEFT':
			character.x -= 10;
			break;
		case 'RIGHT':
			character.x += 10;
			break;
		default:
			console.log("not valid direction");
			break;
	}
});
