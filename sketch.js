var player, worm, wormgroup,score=0,edges

function preload() {
spaceImage=loadImage("./img/space.jfif")
spaceship=loadImage("./img/spaceship.png")
rock=loadImage("./img/rock.png")
}


function setup() {
  createCanvas(1920,1080);
  bg=createSprite(400,400,900,900)
  player= createSprite( 700,700, 50,50)
  player.addImage(spaceship)
  player.scale=0.3
  player.shapeColor="red"
  wormgroup=new Group()
  edges=createEdgeSprites()
}

function draw() {
  background("green");
  bg.addImage(spaceImage);
  
  bg.scale=10
  stroke('white')
  noFill()
  ellipse(400,400,150,250)
  worm1()
  player.x = mouseX;
  player.y = mouseY;
  drawSprites();
  for(var i= 0 ; i< wormgroup.length; i++){
    var temp = wormgroup.get(i);
    if(player.isTouching(temp)){
      score++;
      temp.destroy();
      temp = null;
    }
  }
  noStroke();
  fill("Blue")
  textSize(30)
  text("Score="+score,400,100)
  scored()
}
  


function worm1(){
  
  if(frameCount%30==0){
    worm=createSprite(random(550,650),random(550,650),random(20,50),5)
    worm.addImage(rock)
    worm.scale=0.5
    worm.shapeColor="white"
    worm.velocityX=random(-5,5)
    worm.velocityY=random(-5,5)
    wormgroup.add(worm)
  }
}

function scored(){
  for(var i= 0 ; i< wormgroup.length; i++){
    var temp = wormgroup.get(i);
    if(temp.isTouching(edges[0]) || temp.isTouching(edges[1] || temp.isTouching(edges[2]||temp.isTouching(edges[3])))){
      score--;
      temp.destroy();
      temp = null;
    }
  }
}