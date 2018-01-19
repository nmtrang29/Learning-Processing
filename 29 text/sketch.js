//recreate "Binocular interference" from Geometric daily
// http:geometrydaily.tumblr.com/post/44861153655/392-binocular-interference-a-new-minimal
var t = 120;

var circleSize = 120;
var step = 10;

function setup() {
  createCanvas(600, 600); 
  strokeWeight(1);
  stroke(200);
} 

function draw(){
  background(0,0,255); 
  translate(width/2, height*0.40);

  var offset = ((frameCount % t) / t) * 180 ;

  for(var i = 0; i < 360; i+= step){
    let x = sin(radians(i + offset));
    let y = cos(radians(i - offset));

   // rotate(radians(frameCount));

    rect(x*circleSize, y*circleSize, 0, circleSize);
  }

}