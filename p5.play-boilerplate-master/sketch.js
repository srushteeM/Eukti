var player,ground,invi_ground,tilesGroup;

function setup() {
  createCanvas(1200,500);

  player=createSprite(70,270,10,20);

  ground=createSprite(600,470,2400,20);
  ground.velocityX=-6;
  ground.x=ground.width/2;
  invi_ground=createSprite(600,475,1200,10);
  invi_ground.visible=false;
  tilesGroup=new Group();
}

function draw(){
  background(0);

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(keyDown("space")){
    player.velocityY=-12;
  }

  player.velocityY=player.velocityY+0.5;

  player.collide(invi_ground);

  createTiles();
  
  drawSprites();
}

function createTiles(){
  if(frameCount%Math.round(random(80,120))===0){
    tiles=createSprite(1200,470,40,20);
    tiles.shapeColor="red";
    tiles.velocityX=ground.velocityX;
    tiles.lifetime=1200/-(ground.velocityX);
    console.log(tiles.lifetime);
    tilesGroup.add(tiles);
  }
}