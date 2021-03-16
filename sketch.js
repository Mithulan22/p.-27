
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1, ball2, ball3, ball4, ball5
var Chain1, Chain2, Chain3, Chain4, Chain5
var Stand



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
Stand = new stand(380, 200, 600, 30)
ball1= new ball(220, 550, 25 )
ball2= new ball(280, 550, 25 )
ball3= new ball(340, 550, 25 )
ball4= new ball(400, 550, 25 )
ball5= new ball(460, 550, 25 )

Chain1= new Chain(ball1.body, {x:220, y:215} )
Chain2= new Chain(ball2.body, {x:280, y:215} )
Chain3= new Chain(ball3.body, {x:340, y:215} )
Chain4= new Chain(ball4.body, {x:400, y:215} )
Chain5= new Chain(ball5.body, {x:460, y:215} )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

Stand.display();



}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})



}


