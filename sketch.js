var sun,p1,p2,p3,p4,p5,p6,p7,p8,
function setup() {
  createCanvas(800,800);
  sun =  createSprite(400, 400, 50, 50);
  p1 = createSprite(450,400,25,25);
  p2 = createSprite(500,400,25,25);
  p3 = createSprite(550,400,25,25);
  p4 = createSprite(600,400,25,25);
  p5 = createSprite(650,400,25,25);
  p6 = createSprite(700,400,25,25);
  p7 = createSprite(750,400,25,25);
  p8 = createSprite(775,400,25,25);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}