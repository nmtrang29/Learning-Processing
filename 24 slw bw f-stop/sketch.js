var step = 40;
var innerWidth = 280;
var t = 0;

function setup() {
  createCanvas(600, 600);
  
  strokeWeight(2);
}

function draw() {
  background(255);
  stroke(0);
  fill(255);
  translate(width/2, height/2);
  

  var k = (width - innerWidth)/2;
  

  for (var i = 1; i <width/step; i++) {
    line(t, step*i, width, step*i);
    rotate(t*PI/(width/2));
  }

  // for (var j = 0; j < innerWidth/step; j++) {
  //   rect(t*2.79 + step*j, k, step, innerWidth);
  //   rotate(PI/frameCount);
  // }

  noFill();
  //rect(1, 1, width - 2, height - 2);

  t += sin(radians(width));
} 
