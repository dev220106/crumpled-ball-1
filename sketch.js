
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;

  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

	//Create the Bodies Here.


	Engine.run(engine)
  	
  box1 = new Box(900,640,300,20);
  box2 = new Box(750,600,20,100);
  box3 = new Box(1050,600,20,100)
  ball = new Ball(150,600,20);

}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ball.display();
  drawSprites();
 rect(ground.position.x,ground.position.y,width,10);
}
function keyPressed(){
if (keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
}

}


