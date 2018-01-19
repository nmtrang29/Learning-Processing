var t = 0;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(50);
} 

function draw() {
  background(0,50);
  noFill();
  stroke(255, 80);
  strokeWeight(1);

  var circleSize = height*2/3;
  
  var w = sin(t) * circleSize;
  rectMode(CENTER);
  ellipse(width/2, height/2, w, circleSize);

  var m = map((mouseX-width/2), 0, width, 0.005, 1);
  // t += 0.005;
  t += m;
}
