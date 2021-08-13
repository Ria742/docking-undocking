var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload() {
  //load images in preload()
    issImg = loadImage("iss.png");
    spacebgImg = loadImage("spacebg.jpg");
    spacecraft1Image = loadImage("spacecraft1.png");
    spacecraft2Image = loadImage("spacecraft2.png");
    spacecraft3Image = loadImage("spacecraft3.png");
    spacecraft4Image = loadImage("spacecraft4.png");
    
  }
  


function setup() {
  createCanvas(800,400);
  spacecraft= createSprite(400, 200, 50, 50);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
  
}

function draw() {
  background(255,255,255); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}
if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill(white)
  text("Docking Successful!", 200, 300);

  if(spacecradt.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)) {
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200, 300);
    
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white");
      text("Docking Successful", 200, 300);

      if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
       hasDocked = true;
       textSize(25);
       fill("white");
       text("Docking Successful", 200, 300);

       
    }
  }
}
 
}
  
  drawSprites();
}



  
 