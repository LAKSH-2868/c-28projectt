const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,maongo11,mango12,mango1300;
var world,boy;
var chain;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1025,100,30);
	mango3 = new mango(1175,110,30);  
	mango4 = new mango(1100,30,30);
	mango5 = new mango(1140,160,30);
	mango6 = new mango(1060,160,30);
	mango7 = new mango(980,170,30);
	mango8 = new mango(900,180,30);
	mango9 = new mango(1225,180,30);
	mango10 = new mango(950,220,30);
	mango11 = new mango(1025,220,30);
	mango12 = new mango(1100,220,30);
	mango1300 = new mango(1175,230,30);
	treeObj = new tree(1050,580);
	stoneObj = new Stone(230,425,60)
	groundObject=new ground(width/2,600,width,20);
	chain = new Chain(stoneObj.body,{x:235,y:425})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango1300.display();
  stoneObj.display();
  chain.display();

  detectollision(mango1,stoneObj);
  detectollision(mango2,stoneObj);
  detectollision(mango3,stoneObj);
  detectollision(mango4,stoneObj);
  detectollision(mango5,stoneObj);
  detectollision(mango6,stoneObj); 
  detectollision(mango7,stoneObj);
  detectollision(mango8,stoneObj);
  detectollision(mango9,stoneObj);
  detectollision(mango10,stoneObj);
  detectollision(mango11,stoneObj);
  detectollision(mango12,stoneObj);
  detectollision(mango1300,stoneObj);

  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly();
}

function detectollision(mango,stone){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position
	
	var distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420});
		launcherObject.attach(stoneObj.body);
	}
}