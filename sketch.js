var bg,bgimage

function preload() {
  bgimage = loadImage("images/bg78.jpg")
}


function setup() {
  createCanvas(800,400);
  bg=  createSprite(400, 200, 800,400 ); 
  bg.addImage(bgimage) 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}