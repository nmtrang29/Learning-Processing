var rectNum = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    background(255);
    fill(0);
  } else {
    background(0);
    fill(2255);
  }

  noStroke();
  ellipse(mouseX,mouseY,width,width);
}

