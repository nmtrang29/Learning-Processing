float c1 = 0;
float c2 = 255;

float c1Change = 1;
float c2Change = -1;

void setup() {
  size(600, 600);
  frameRate(30);
}

void draw() {
  noStroke();
  
  //Draw rectangle on left 
  fill(c1,0,c2);
  rect(0, 0, width/2, height);
  
  //Draw rectangle on right 
  fill(c2,0,c1);
  rect(width/2, 0, width/2, height);
  
  //Change colours
  c1 = c1 + c1Change;
  c2 = c2 + c2Change;
  
  //Reverse direction
  if (c1 < 0 || c1 > 255) {
    c1Change *= -1;
  }
  
  if (c2 < 0 || c2 > 255) {
    c2Change *= -1;
  }
  
  
  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}