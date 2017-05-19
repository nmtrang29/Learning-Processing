int step = 20;
int ballSize = 10;

void setup() {
  size(800, 800);
  background (0);
}


void draw() {
  noStroke();
  fill(255, 25);
  while (ballSize < height) {
    ellipse(width/2, height/2, ballSize, ballSize);
    ballSize = ballSize + step;
  }



  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}