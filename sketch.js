const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,roof;
var rope,rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	roof=new Ground(width/6,height/50,width/7,20);

	ballDiameter=10;

	startBallPositionX=width/2;
	startBallPositionY=height/2+500;

	//Create the Bodies Here.
	ball1=new Ball(200,400,40);
	ball2=new Ball(240,400,40);
	ball3=new Ball(280,400,40);
	ball4=new Ball(320,400,40)
	ball5=new Ball(360,400,40)

	rope1=new Rope(ball1.body,roof.body,-ballDiameter*2, 0);
	rope2=new Rope(ball2.body,roof.body,-ballDiameter*1, 0);
	rope3=new Rope(ball3.body,roof.body,0, 0);
	rope4=new Rope(ball4.body,roof.body,ballDiameter*1, 0);
	rope5=new Rope(ball5.body,roof.body,ballDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

 ball1.display();
 ball5.display();
 ball2.display();
 ball3.display();
 ball4.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}





