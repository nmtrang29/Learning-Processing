//recreate "Binocular interference" from Geometric daily
//geometrydaily.tumblr.com/post/44861153655/392-binocular-interference-a-new-minimal


var circleSize = 220;
var step = 7;

function setup() {
  createCanvas(windowWidth,windowHeight); 
  background(0);  
  noLoop(); 
  strokeWeight(1);
  stroke(150);
} 

function draw(){
  translate(width/2 - circleSize/2, height/2);
  for(var i = 0; i < 360; i+= step){
    let x = sin(radians(i));
    let y = cos(radians(i));

    line(x*circleSize, y*circleSize, 0, circleSize);
    
  }

  translate(circleSize, 0);
  for(var i = 0; i < 360; i+= step){
    let x = sin(radians(i));
    let y = cos(radians(i));

    line(x*circleSize, y*circleSize, -circleSize, 0);   
  }
}