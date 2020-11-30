
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball, ground, dustBin;
var paperBallImage, dustbiniMG;

function preload(){
  paperBallImage = loadImage("PaperBall.jpg")
  dustbiniMG = loadImage("DustBinIMG.png")
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    //Create the Bodies Here.
   Ball = new Paper(200,200,70);
    ground = new Ground(600,580,1200, 20);
    dustBin = new DustBin(1000,540,130,188);
  // dustBin = new dustbin(600,550, 200, 100);
    Engine.run(engine);
}

 

function draw() {
  rectMode(CENTER);
  background("white");

//  Ball.display(); 
  dustBin.display();
  Ball.display();
 ground.display();
//jump(ball.body);
 //Ball.velocityY = Ball.velocityY+1;
  image(dustbiniMG,930,370,170,200);
 keyPressed();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(Ball.body, Ball.body.position, {x:2.5,y:-10 });
  }
}






