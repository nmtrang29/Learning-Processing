
var step = 25;
var t = 60;
var innerShape;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  blendMode(BLEND);
  background(0);
  noStroke();
  fill(255);
  rectMode(CENTER);

  innerShape = width/2;

  var offset = -((frameCount % t) / t) * step * 2;
  for (var h = offset; h < height; h += step * 2) {
    rect(width/2, h, width, step);
  }
  
  blendMode(DIFFERENCE);
  fill(255);
  // rect(width/2, height/2, innerShape + step/2, innerShape + step/2);
  quad(width*0.5, width*0.15, width*0.85, width*0.5, width*0.5, width*0.85, width*0.15, width*0.5);
}