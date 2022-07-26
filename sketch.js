var box;

function setup() {
  createCanvas(400, 400);
  box=createSprite(200,200,30,30);
}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    box.posititon.x = box.position.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.posititon.x = box.position.x - 5;
  }
  if(keyIsDown(UP_ARROW)){
    box.posititon.y = box.position.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.posititon.y = box.position.y + 5;
  }
  drawSprites();
}
