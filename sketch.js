var quadrado;


function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200,30,30);
}



function draw() 
{
  background(200);
  if(keyIsDown(RIGHT_ARROW)){
quadrado.position.x = quadrado.position.x + 3
  }

  if(keyIsDown(LEFT_ARROW)){
 quadrado.position.x = quadrado.position.x - 3
  }

  if(keyIsDown(UP_ARROW)){
 quadrado.position.y = quadrado.position.y - 3
  }

  if(keyIsDown(DOWN_ARROW)){
  quadrado.position.y = quadrado.position.y + 3
  }

 drawSprites();

}




