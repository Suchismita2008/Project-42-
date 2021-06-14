var iss, spacecraft;
var hasDocked = false;
var issImg, spacecraftAni, backgroundImg, leftimg, rightimg, bothimg;

function preload()
{
issImg = loadImage("Docking-undocking/iss.png");
spacecraftAni = loadImage("Docking-undocking/spacecraft1.png");
backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
leftimg = loadImage("Docking-undocking/spacecraft3.png");
rightimg = loadImage("Docking-undocking/spacecraft4.png");
bothimg = loadImage("Docking-undocking/spacecraft2.png");
}

function setup() {
  createCanvas(800,600);

  spacecraft = createSprite(350, 400, 50, 50);
  spacecraft.addImage(spacecraftAni);
  spacecraft.scale = 0.18;
 
  iss = createSprite(400, 250, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.7;

  
}


function draw() {
  background(backgroundImg);

  if(!hasDocked){

    spacecraft.x = spacecraft.x + random(-1,1);
  if(keyDown(LEFT_ARROW))
  {
    spacecraft.addImage(leftimg);
    spacecraft.x -= 1;
  }
  if(keyDown(RIGHT_ARROW))
  {
    spacecraft.addImage(rightimg);
    spacecraft.x += 1;
  }
  if(keyDown(DOWN_ARROW))
  {
    spacecraft.addImage(bothimg);
    spacecraft.y += 1;
  }
  if(keyDown(UP_ARROW)){
    spacecraft.addImage(bothimg);
    spacecraft.y -= 1;
  }
  }
  if(spacecraft.x <= 350 && spacecraft.y <= 340){
    hasDocked = true;
    
    textSize(25);
    fill("White");
    text("Docking succeccful", x = 200, y = 400);
    
  }
  
   
  drawSprites();
}