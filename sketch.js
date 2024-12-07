var box;

function setup(){
  createCanvas (windowWidth,windowHeight);
  box= createSprite(windowWidth/2,windowHeight/2);
}

function draw(){
  background ("blue");

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }

  if(keyIsDown(LEFT_ARROW)){
    background("green");
  }

  if(keyIsDown(UP_ARROW)){
    box.y= box.y+5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y= box.y-5
  }
  
  drawSprites();
}