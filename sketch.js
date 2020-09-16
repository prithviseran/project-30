const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var sling, polygon, box;


function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20)
  

  ground = new Ground(400,height,800,20);

  stand = new Ground(500,220,150,20);

  box1 = new Box(520,185,30,40);
  box2 = new Box(520,215,30,40);
  box3 = new Box(520,245,30,40);
  box4 = new Box(520,275,30,40);
  box5 = new Box(520,305,30,40);

  sling = new Sling(polygon.body,{x:200, y:50});
}
  
  

function draw() {
  background(255,255,255); 
  ground.display(); 
  stand.display(); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 


  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(bird.body);
  }
}
