
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  b1 = color(255);
  b2 = color(0);

  setGradient(0, 0, width/2, height/2, b1, b2, Y_AXIS);
  setGradient(width/2, 0, width/2, height/2, b2, b1, X_AXIS);
  setGradient(width/2, height/2, width/2, height/2, b2, b1, Y_AXIS);
  setGradient(0, height/2, width/2, height/2, b1, b2, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) { 
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}