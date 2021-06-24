
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var dust1
var ball1 
var engine,world 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground1 = new Ground(400,650,800,50);
	
	paper1 = new Paper(100,350,15)
	dust1 = new Dustbin(600,600,20,200)
	dust2 = new Dustbin(650,600,200,20)
	dust3 = new Dustbin(750,550,20,200)
	


	
  
}


function draw(){
  background(0);
  Engine.update(engine);

  ground1.display();
  dust1.display();
  paper1.display();
  dust2.display();
  dust3.display();
  
  
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}