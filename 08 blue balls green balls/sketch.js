var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 50, 
  b: 50
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  frameRate(20);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  ellipseX = random(width/4,height/4);
  ellipseY = random(width/4,height/4);
  // fill(0);
  // stroke(255)
  // arc(spot.x, spot.y, spot.y , spot.x, spot.y, PI + QUARTER_PI, CHORD);
  // ellipse(spot.x, spot.y, ellipseX, ellipseY);
  
  stroke(255);
  fill(0,255,0);

  var i = random(0,10);
  if (i > 5) {
  fill(0,0,255);
  }

  ellipse(spot.x, spot.y, ellipseX, ellipseY);
  ellipse(mouseX, mouseY, ellipseY);
}

