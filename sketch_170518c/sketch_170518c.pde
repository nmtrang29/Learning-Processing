int x = 0;
int speed = 10;

void setup() {
  size(400, 400);
}

void draw() {
  background(255);
  x = x + speed;
  
  if (x > width || x < 0 ) {speed*=-1;}
  
  //Draw circle
  ellipse(x, 0, 100, 100); 
  
          // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}