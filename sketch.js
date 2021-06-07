var astronaut;
var edges;
var bg, sleep, brush, bath, drink, eat, move, gym;

function preload() {
  
  //loading image for background
  bg = loadImage("images/iss.png");
  
  //loading various animations for the astronaut
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
}

function setup() {
  createCanvas(400, 400);
  
  edges = createEdgeSprites();
  
  astronaut = createSprite(200,200,40,40);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.05;
  astronaut.setCollider("rectangle", 0, 0, 1200, 2300);
  
}

function draw() {
  background(bg);
  
  //displaying the instructions
  fill("white");
  textSize(20);
  text("Instructions:", 20, 100);  
  textSize(15);
  text("Up Arrow = Brushing", 20, 120);  
  text("Down Arrow = Gymming", 20, 140); 
  text("Right Arrow = Bathing", 20, 160); 
  text("Left Arrow = Eating", 20, 180); 
  text("m key = Moving", 20, 200); 
  
  //to make astronaut stop when 'm' key is not pressed
  
  
  //conditions to change astronaut's action based on the key pressed.
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("sleeping", brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } else if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("sleeping", gym);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } else if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("sleeping", eat); 
    astronaut.y = 350;
    astronaut.x = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } else if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("sleeping", bath); 
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } else if(keyDown("m")) {
    astronaut.addAnimation("sleeping", move);
    astronaut.velocityX = 3;
    astronaut.velocityY = -2;
  }
  
  //bouncing the astronaut with edges when it moves
  astronaut.bounceOff(edges);
  
  drawSprites();
}