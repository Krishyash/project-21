
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball
let floor	
let leftBin
let rightBin 


function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={

		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,10,20,ball_options);
    World.add(world,ball);

	floor = new Ground (width/2,470,width,20)
	rightBin = new Ground (900,420,20,120)
	leftBin = new Ground (1100,420,20,120)
  

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  Engine.run(engine);

ellipse(ball.position.x,ball.position.y,20)


floor.show()
leftBin.show()
rightBin.show()

}




function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:30,y:-72})
		
	}

}