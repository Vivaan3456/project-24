
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,rubber,hammer,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	hammer=new Hammer(100,100)
	ground=new Ground(400,700,800,30)
  
	stone=new Stone(400,640,100,100)
	rubber=new Rubber(200,200,40)
  
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
 
}



