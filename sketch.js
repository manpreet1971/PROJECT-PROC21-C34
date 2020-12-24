const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var boxes=[];
var myengine,myworld,bob,grnd,chain;
function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  bob=new Bob(400,200,30);
  grnd=new Ground(width-400,height-10,width,20);
  chain=new Chain(bob.body,{x:250,y:50});

  for(var i=450;i<=720;i=i+50)
  {
    for(var j=50;j<=300;j=j+50)
    {
      boxes.push(new Box(i,j,50,50));
   }
  }
}
  
function draw()
{
  background("yellow");
  Engine.update(myengine);
  bob.display();
  grnd.display();  
  chain.display();

  for(var i=0;i<boxes.length;i++)
 {
   
   boxes[i].display();
 }
}
function mouseDragged()
{
   Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}