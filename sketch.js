var fixedRect, movingRect;
var gameObject;




function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -3;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  gameObject = createSprite(100, 200, 10, 50);
  gameObject.shapeColor = "green";
  gameObject.velocityX = 3;

}

function draw() 
{
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, gameObject))
 {
movingRect.shapeColor = "red";
 }
 else{movingRect.shapeColor = "green"}

 bounceOff(fixedRect, gameObject);

 // console.log(movingRect.x-fixedRect.x);  
  drawSprites();
}

function bounceOff(obj1, obj2)
{
  
    
          if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
          && obj2.x-obj1.x<obj2.width/2+obj1.width/2)
          {
            obj1.velocityX = obj1.velocityX *(-1);
            obj2.velocityX = obj2.velocityX *(-1);

          }

              if( obj1.y-obj2.y<obj2.height/2+obj1.height/2
              && obj2.y-obj1.y<obj2.height/2+obj1.height/2)
              {
                obj1.velocityY = obj1.velocityY *(-1);
            obj2.velocityY = obj2.velocityY *(-1);

              }
         
      


}
