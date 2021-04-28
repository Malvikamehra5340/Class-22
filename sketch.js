const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400, 380, 810, 20, options);
  World.add(world,ground);

  var Ball_options = {
    restitution : 0.5,
    density : 0.5,
    friction : 0.5
  }
  ball = Bodies.circle(400, 200, 50, Ball_options)
  World.add(world, ball)

}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 810,20);

  circle(ball.position.x , ball.position.y,50)
  drawSprites();
}