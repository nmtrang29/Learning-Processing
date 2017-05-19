int x = 50;
int y = 80;
int spacing = 20;
int len = 200;
int endLegs = 350;

void setup() {
  size(400, 400);
  background (0);
}


void draw(){
  stroke(255);
  strokeWeight(3);
  while (x <= endLegs) {
    line(x, y, x, y+len);
    x = x + spacing;
  }


 
  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}