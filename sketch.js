const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
var  engine, world;

function setup() {
	createCanvas(800, 700);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  engine = Engine.create();
  world = engine.world;
  
	Engine.run(engine);
zone1 = new redZone (560,560,150,200);
 
paper = new Paper (200,640,40);
}

function draw() {
  rectMode(CENTER);
  background("white");

zone1.display();
paper.display();
 drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
   }
 }
 

