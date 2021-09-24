const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var character
var flag
var flag1
var map
function setup() 
{
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  character = createSprite(10,10,100,100)
flag = createSprite(10,windowHeight/2)
flag1 = createSprite(windowWidth-10,windowHeight/2)
maze(Math.round(random(100,700)))

}


function draw() 
{
  background("green");
  Engine.update(engine);
drawSprites()
movement()

}
function movement(){
if(keyDown("W")){
  character.y=character.y-3
}
if(keyDown("A")){
  character.x=character.x-3
}
if(keyDown("S")){
  character.y=character.y+3
}
if(keyDown("D")){
  character.x=character.x+3
}
}
function maze(y){
var x,y,width,hieght


for(var i = 300;i<windowWidth-300;i=i+120){
map = createSprite(i,y,width,hieght)
width = Math.round(random(60,200))
hieght = Math.round(random(10,30))
x = Math.round(random(300,windowWidth-300))
i = x
}
console.log(width)
console.log(hieght)

}