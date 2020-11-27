
var thickness , wall ;     
var bullet, speed , weight ;

function setup() {
  createCanvas(1600 , 400 );

  speed =random(233,321);
  weight=random(30,52);
  thickness=random(22,83);

  car=createSprite(50, 200, 50, 50);
  car.velocity=speed;
 
  
  wall=createSprite(1200,200,thickness,Height/2);
  wall.shapeColour(80,80,80);
}

function draw() {
  background("black");  
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
   car.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   if(deformation>180);
  }
{
  car.shapeColour=colour(255,0,0);
}

if(deformation<180 && deformation>100)
  {
    car.shapeColour=colour(230,230,0);
  }

  if(deformation<100)
  {

    car.shapeColour=colour(0,255,0);
  }

  drawSprites();
  hascollided();

}
 
 fuction hascollided(lbullet,lwall)
 {
     bulletRightEdge=lbullet.x + lbullet.width;
     wallLeftEdge=lwall.x;
     if(bulletRightEdge>=wallLeftEdge)
      {
       retrun true
      }

    return false

 }


 if(hascollided(buller,wall))
 {
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed(thickness *thickness*thickness);

 }

 if(damage>10)
 {
   wall.shapeColour=colour(225,0,0);

 }
 
 if(damage<10)
  {
    wall.shapeColour=colour(0,225,0);
  }



