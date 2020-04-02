let spacing = 25;
let trails = [];
let colorScheme = 1;
let backScheme = 0;

function setup(){
	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	textSize(32);
	frameRate(35);
	createTrails();
}

function createTrails(){
	for(let i = 0; i < width; i += spacing){
		trails.push(Trail.random(i))
	}
}

function draw(){
	let c = 0;
	if(backScheme == 0){
		c = 0
	}else if(backScheme == 1){
		c = 255
	}
	background(c);
	for(let i = 0; i < trails.length; i++){
		trails[i].draw();
		trails[i].update();
		if(trails[i].dead){
			trails[i] = Trail.random(trails[i].pos.x);
		}
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth - 20, window.innerHeight - 20);
	trails = [];
	createTrails();
}

function keyPressed(){
	if(keyCode > 48 && keyCode <= 57){
		console.log(int(key));
		colorScheme = int(key);
	}
	if(key == 'b'){
		backScheme += 1;
		backScheme = backScheme % 2;
	}
}
