const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var mygameEngine,mygameWorld;
var Ground,Ball;

function setup() {

  createCanvas(400,400);
  mygameEngine=Engine .create();
mygameWorld=mygameEngine.world;


Ground=Bodies.rectangle(200,300,400,10,{isStatic:true});
World.add(mygameWorld,Ground);
Ball=Bodies.circle(200,200,25,{restitution:1.5});
World.add(mygameWorld,Ball);
}

function draw() {
  background("black");
  Engine.update(mygameEngine) ; 
rectMode(CENTER);
rect(Ground.position.x,Ground.position.y,400,10);
ellipseMode(RADIUS);
ellipse(Ball.position.x,Ball.position.y,25,25);

























  
}