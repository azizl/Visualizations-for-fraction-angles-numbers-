let time= 0;

function setup(){
    createCanvas(720,600);
    background(204);
}
function draw(){
    
     translate(150,200);
    let radius = 50;
    stroke(255);
     noFill();
    ellipse(0,0,radius*2);
    let x = (radius)*cos(22*time);
    let y = (radius)*sin(22*time);
     fill(0);
    ellipse(x,y,8);
    line(x,y,0,0);
    
    
      translate(400,200);
    let radius1 = 50;
    stroke(255);
     noFill();
    ellipse(0,0,radius*2);
    let x1 =(radius1)*cos(7*time);
    let y1 = (radius1)*sin(7*time);
     fill(0);
    ellipse(x1,y1,8);
    line(x1,y1,0,0);
   
   
    beginShape();
     fill(0);
    stroke(0);
    point(x-200,x1,y,y1+500);
    endShape();
      
time+=-0.01
}