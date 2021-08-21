var astronaut;
var background1, bath, sleep, brush, gym, eat, drink, move;
var background1Image;

function preload(){
  background1Image = loadImage("iss.png");
  bath = loadImage("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadImage("drink1.png","drink2.png");
  eat = loadImage("eat1.png","eat2.png");
  gym = loadImage("gym1.png","gym11.png","gym12.png","gym2.png");
  move = loadImage("move.png","move1.png");
  sleep = loadImage("sleep.png");
}

function setup() {
  createCanvas(600, 600);
  
 // background1=createSprite(0,0,600,600);
 // background1.addImage("bgImage",background1Image);
  
  astronaut=createSprite(300,230,10,10);
  astronaut.addAnimation("sleep",sleep);
}



function draw() {
  background(background1Image);
  drawSprites();
}