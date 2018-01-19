var step = 20;
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

  for (var i = 0; i < width/step/2; i++) {
    //rect(0, step*i, width/2, step);

    rect(step*i, 0, step, width/2);
    quad(step*i, width/2, step*(i+1), width/2, 0, step*(i+1) + width/2, 0, step*i + width/2);
  }

  noFill();
  rect(1,1, width - 2, height - 2);

} 
