int x = 50;
int y = 50;
int spacing = 20;
int len = 200;

void setup() {
  size(400, 400);
  background (0);
}


void draw(){
  stroke(255);
  strokeWeight(3);
  while (y < height) {
    line(x, y, x+len, y);
    y = y + spacing;
  }


 
  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}