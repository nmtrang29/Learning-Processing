var step = 10;
var innerWidth = 360;
var t = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  strokeWeight(2);
}

function draw() {
  stroke(0);
  fill(255);

  var k = (width - innerWidth)/2;
  

  for (var i = 0; i < width/step; i++) {
    rect(0, step*i, width, step*i);
  }

  for (var j = 0; j < innerWidth/step; j++) {
    //rect(t*2.17 + step*j, k, step - t/5.5, innerWidth);
    rect(k + step*j, k, step, innerWidth);
  }

  noFill();
  rect(1, 1, width - 2, height - 2);

  t += sin(radians(frameCount));
} 
