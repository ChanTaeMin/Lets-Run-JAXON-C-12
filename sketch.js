var path,runner, leftBoundary,rightBoundary;
var pathImg,runnerImg;
var i;

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

runner = createSprite(180,340,30,30);
runner.scale=0.08;
runner.addAnimation("JakeRunning",runnerImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

 path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);


  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites()
}