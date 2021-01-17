//Starting the project
var movingMan;
var hulk, pinkGuy, moistCritikal, boris;
var canvas;
var music;


function preload(){
//Loading sound
    music = loadSound("music.mp3");
}


function setup(){
//Creating canvas    
   canvas = createCanvas(485,600);

//Creating moving man
movingMan = createSprite(random(20,750));
movingMan.scale=0.2;
movingMan.shapeColor = "white";
movingMan.velocityY=3;


//Creating hulk
hulk = createSprite(60,580,100,30);
hulk.shapeColor ="lime";
  
//Creating pink guy
pinkGuy = createSprite(180,580,100,30);
pinkGuy.shapeColor = "magenta";

//Creating moistCritikal
moistCritikal = createSprite(300,580,100,30);
moistCritikal.shapeColor = "blue";

//Creating boris super slav
boris = createSprite(420,580,100,30);
boris.shapeColor = "yellow";


}

function draw() {
    background(rgb(169,169,169));
edges = createEdgeSprites();

//bounceoff
movingMan.bounceOff(hulk);
movingMan.bounceOff(pinkGuy);
movingMan.bounceOff(moistCritikal);
movingMan.bounceOff(boris);
//movingMan.collide(edge1[3]);
//movingMan.collide(edge2[3]);
movingMan.bounceOff(edges);

//Change color boiiiiiiiiiii
if(isTouchin(movingMan,hulk)){
    movingMan.shapeColor = "lime";
    console.log("error");
    movingMan.velocityX=3;
    music.play();
}

    
    if(isTouchin(movingMan,pinkGuy)){
    movingMan.shapeColor = "magenta";
    movingMan.velocityX = -2;
    music.play();
    }
    
    if(isTouchin(movingMan,moistCritikal)){
    movingMan.shapeColor = "blue";
    movingMan.velocityX=3;
    music.play();
    }
    
    if(isTouchin(movingMan,boris)){
    movingMan.shapeColor = "yellow";
    movingMan.velocityX=4;
    music.play();
    }

    //Controlling the moving man
//movingMan.x=World.mouseX


    drawSprites();
   
}
function isTouchin(object1,object2){ if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2){ return true; } else{ return false; } }