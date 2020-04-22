var fixedrectangle,movingrectangle;
var ball;

function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  movingrectangle = createSprite(400,200,50,50);
  

  movingrectangle.shapeColor = "green"
  fixedrectangle.shapeColor = "green"


}
function draw() {
  background(255,255,255);  

  console.log("mr--> " + movingrectangle.x);
  console.log("fr--> "+ fixedrectangle.x);
  console.log(fixedrectangle.width/2 + movingrectangle.width/2 );


  movingrectangle.x =  World.mouseX;
  movingrectangle.y = World.mouseY;
  //distance between 2 rectangle is calculated as 1rectangle.x-2rectangle.x 
  //this is also = horizontal distance between the two rectangles 
  //when both are touching each other that is 1rec.width/2 + 2rec.width/2

 
 if (istouching()) {
   ball = createSprite(200,100,30,20);
 // movingrectangle.shapeColor =" red";
  //fixedrectangle.shapeColor = "red";
  
 }else{
     movingrectangle.shapeColor =" green";
     fixedrectangle.shapeColor = "green";
 }
  
  drawSprites();

}

function istouching () {
  if (movingrectangle.x-fixedrectangle.x <= fixedrectangle.width/2 + movingrectangle.width/2 
    && fixedrectangle.x- movingrectangle.x <= fixedrectangle.width/2 + movingrectangle.width/2 
    && movingrectangle.y-fixedrectangle.y<= fixedrectangle.height/2+movingrectangle.height/2
    && fixedrectangle.y-movingrectangle.y <= fixedrectangle.height/2 + movingrectangle.height/2) {

   return true;
  } else {
    return false;
    

  }
}