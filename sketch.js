var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count =0;
var particle;
var turn = 0;
var gameState = "play";
var gameState = "end";
function setup() {
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;
 
 
   ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    particle1 = new Plinko(30,275,10);

    

    
}
 


function draw() {
  background("black");
  textSize(25)
  text("Score:0",30,40);
  text("300",580,520);
  text("200",660,520);
  text("300",180,520);
  text("500",420,520);
  text("150",340,520);
  text("200",100,520);
  text("100",20,520);
 
  text("100",740,520);
  text("400",260,520);
  text("400",500,520);
  particle1.display();
 //text("Score : "+score,20,30);
 
  Engine.update(engine);
 
  
  if(gameState= "play"){
    for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     if(particle!=null){
       particle.display();
       if(particle.body.position.y>760){
         if(particle.body.position.x<300){
           score = score+500;
           particle= null;
           if(count>=5){
             gameState= "end";
           }
         }
       }
     }
   }
   }
}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}