boolean moving = false; 

int circleX = 0;
int circleY = 100;

void setup() {
  size(500, 500);
}

void draw() {
  background(100);
  stroke(255);
  fill(0);
  ellipse(circleX, circleY, 100,100);
  
  if (moving) {
    circleX+=10;
    circleY+=10;
  }
  
  if (mousePressed) {
    moving = !moving;
  } 
  
          // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}