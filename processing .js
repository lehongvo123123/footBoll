var context = document.getElementById("canvas").getContext("2d");
var Obatacble ={
     x:280,
     y:150,
     width:30,
     height:60,
     step:5,  
     
}
var car={
    x:290,
    y:500,
    radius:15,
    step:10,
}
var isMoveRight = false;
var isMoveLeft = false;
var isMoveUp = false;
var isMoveDown=false;
function setCar(){
    context.beginPath();
    context.arc(car.x,car.y,car.radius,0,2*Math.PI)
    context.fillStyle="black"
    context.fill();
    context.closePath();
};
function setGoal(){
    context.beginPath();
    context.lineTo(150,200);
    context.lineTo(150,100);
    context.moveTo(150,100);
    context.lineTo(450,100);
    context.moveTo(450,100);
    context.lineTo(450,200);
    context.moveTo(150,100);
    context.lineTo(180,180);
    context.moveTo(180,180);
    context.lineTo(150,200);
    context.moveTo(450,100);
    context.lineTo(420,180);
    context.moveTo(420,180);
    context.lineTo(450,200);
    context.moveTo(420,180);
    context.lineTo(180,180);

    context.stroke();
    context.fill()
    context.closePath();
}
function setObtacble(){
   context.beginPath();
   context.rect(Obatacble.x,Obatacble.y,Obatacble.width,Obatacble.height);
   context.fillStyle="pink";
   context.fill();
   context.closePath();
}
function moveObstacle(){
    Obatacble.x+=Obatacble.step;
    if(Obatacble.x>canvas.clientWidth-180){
       Obatacble.step=-Obatacble.step
    }
    if(Obatacble.x<canvas.clientWidth-180-260){
        Obatacble.step=-Obatacble.step
     }
}
document.addEventListener("keydown",function(event){
     if(event.keyCode=== 39){
         isMoveRight=true;
     }
     if(event.keyCode=== 37){
        isMoveLeft=true;
     }
     if(event.keyCode=== 38){
        isMoveUp=true;
     }
     if(event.keyCode=== 40){
        isMoveDown=true;
     }
})
document.addEventListener("keyup",function(event){
    if(event.keyCode=== 39){
        isMoveRight=false;
    }
    if(event.keyCode=== 37){
       isMoveLeft=false;
    }
    if(event.keyCode=== 38){
       isMoveUp=false;
    }
    if(event.keyCode=== 40){
       isMoveDown=false;
    }
})
function moveCar(){
     if( isMoveRight){
          car.x+=car.step;
     }
     if(isMoveLeft){
         car.x-=car.step;
     }
     if(isMoveUp){
        car.y-=car.step;
    }
    if(isMoveDown){
        car.y+=car.step
    }
  
}
function carTouch(){
    if(car.x>=Obatacble.x && car.x<=Obatacble.x+10 && car.y>=Obatacble.y && car.y <=Obatacble.y+60){
        alert("Game Over");
        car.x=290;
        car.y=500;
    }
     if( car.x>=150 && car.x<=450 && car.y>=100 && car.y<150){
         alert("win");
         car.x=290;
        car.y=500;
     }

      setUpPosition();
}
function setUpPosition(){
    isMoveLeft = false;
    isMoveRight=false;
    isMoveUp=false;
    isMoveDown=false;
    isMoveFast=false;
}


function runCanvas(){
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    setCar(); 
    setGoal();
    setObtacble();
    moveObstacle();
    moveCar();
    carTouch();
    setUpPosition();
    requestAnimationFrame(runCanvas);
}
runCanvas();

