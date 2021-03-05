
var bullet,wall,dar,dal
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,20,20);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 1, 1);
  fixedRect.shapeColor = "green";
  bullet = createSprite(100,300,50,10)
  bullet.shapeColor="yellow"
  wall=createSprite(1000,300,30,100)
  wall.shapeColor="red"
  dar=createSprite(500,150,1,1)
  dar.shapeColor="grey"
  dal=createSprite(500,300,1,1)
  dal.shapeColor="purple"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bullet.velocityX=10
  if(isTouching(bullet,wall,dar,dal)){
    bullet.shapeColor="pink"
    bullet.velocityX=0
wall.shapeColor="white"
wall.velocityY=0
dar.velocityY=0
dal.velocityX=0
if(isTouching(bullet,wall,dar,dal)){
  bullet.shapeColor="pink"
  bullet.velocityX=0
wall.shapeColor="white"
wall.velocityY=0
dar.velocityY=0
dal.velocityX=0
}}
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    &&o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o2.y < o2.height/2 + o1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


