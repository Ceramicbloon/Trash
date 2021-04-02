
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1000, 400);

	keyPressed();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);
	ball1 = new Ball(200, 350, 15)
	wall1 = new Wall(730, 380, 200, 20)
	wall2 = new Wall(620, 345, 20, 90)
	wall3 = new Wall(840, 345, 20, 90)


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:25,y:-45})
	}
}

function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine)
	wall1.display();
	ground.display();
	ball1.display();
	wall2.display();
	wall3.display();
	drawSprites();

}



