
var borderWidth = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  background(0);
  noStroke();
  fill(255);

  var ellipseSize = width/2;
  var randomNum = 1;
  
  var offset = -((frameCount % 30) / 30) * borderWidth * 2;
  for (var h = offset; h < height; h += borderWidth * 2) {
    rect(0, h, width, borderWidth);
  }
  
  blendMode(DIFFERENCE);
  fill(255);
  ellipse(width/2, height / 2, ellipseSize, ellipseSize);

}