var car,wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(1600, 400);
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(220);
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX = speed;
  
  if(deformation<100(car.shapeColor=green))
  
  else if(100<deformation<180(car.shapeColor=yellow))
    
  else(deformation>180(car.shapeColor=red))
}