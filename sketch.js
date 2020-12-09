
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper1,bin1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(1600,50);
paper1=new paper(200,450,40);
bin1=new bin(1200,600,50,50);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
bin1.display();
  
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    }
}
