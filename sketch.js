const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    stone = new Stone(200,550,100,50);
    rubber = new Rubber(450,550,70);
    iron = new Iron(700,550,150,40);
    paper = new Paper(950,550,80,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone.display();
    rubber.display();
    iron.display();
    paper.display();
 
}