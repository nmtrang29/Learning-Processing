var rectNum = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(1);
  noFill();
  var rectSize = width / rectNum;

  for (var i = 0; i <= width; i += rectSize) {
    for (var j = 0; j <= height; j += rectSize) {
      
      stroke(random(255));
      rect(i, j, rectSize, rectSize);
    }
  }
}


