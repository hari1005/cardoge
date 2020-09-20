function preload(){
 carimg=loadImage("player.png")
 gob=loadImage("enemy.png")
  
}
function setup(){
  createCanvas(400,650)
  car=createSprite(200,500,30,30)
  car.addImage(carimg)
  car.scale=0.25
  goblin=createSprite(Math.round(random(20,470)),-100,30,30);
  goblin.addImage("balst",gob);
  goblin.velocityY=5;
  goblin.scale=0.5;
  goblin2=createSprite(Math.round(random(20,470)),-100,30,30);
  goblin2.addImage("balst",gob);
  goblin2.velocityY=5;
  goblin2.scale=0.5;
  goblin3=createSprite(Math.round(random(20,470)),-100,30,30);
  goblin3.addImage("balst",gob);
  goblin3.velocityY=5;
  goblin3.scale=0.5;
  goblin4=createSprite(Math.round(random(20,470)),-100,30,30);
  goblin4.addImage("balst",gob);
  goblin4.velocityY=5;
  goblin4.scale=0.5;
 
}
function draw(){
    background("green")
    car.x=mouseX
    
    if(goblin.y===700){
        goblin.y=-100
        goblin.x=Math.round(random(20,470))
    }
    if(goblin3.y===700){
      goblin3.y=-100
      goblin3.x=Math.round(random(20,470))
    }
  if(goblin2.y===700){
    goblin2.y=-100
    goblin2.x=Math.round(random(20,470))
  }
  if(goblin4.y===700){
    goblin4.y=-100
    goblin4.x=Math.round(random(20,470))
    }

    drawSprites();
}
