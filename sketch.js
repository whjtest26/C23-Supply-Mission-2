var helicopterImg,packageImg,helicopter,package;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var packageB,groundB;
var box1,box2,box3;

function preload(){

	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");

}

function setup(){

	createCanvas(800,800);

	package = createSprite(410,210,20,20);
	package.addImage(packageImg);
	package.scale = 0.2;

	helicopter = createSprite(400,200,100,50);
	helicopter.addImage(helicopterImg);
	helicopter.scale = 0.7;

	ground = createSprite(400,780,800,20);

	engine = Engine.create();
	world = engine.world;

	var package_options = {

		isStatic : true,
		restitution : 0.4
	}
	packageB = Bodies.circle(410,210,20,package_options);

	World.add(world,packageB);

	var ground_options = {
		isStatic : true
	}
	groundB = Bodies.rectangle(400,780,800,20,ground_options);
    World.add(world,groundB);
    
    box1 = new Box(410,760,200,20);
    box2 = new Box(319,700,20,100);
    box3 = new Box(500,700,20,100);
	Engine.run(engine);

}

function draw(){

	background("black");

	Engine.update(engine);

	package.x = packageB.position.x;
	package.y = packageB.position.y;

	ground.x = groundB.position.x;
    ground.y = groundB.position.y;
    
    box1.display();
    box2.display();
    box3.display();
	drawSprites();
}

function keyPressed() {

	if (keyDown("down")) {

	   Matter.Body.setStatic(packageB,false);
	   
	 }
   }