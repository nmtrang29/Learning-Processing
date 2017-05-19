int x = 0; 
int y = 0;
int speed = 10;
int squareSize = 20;

int state = 0;

void setup() {
  size(400, 400);
}

void draw() {
  background(255);
  
  //display square
   noStroke();
   fill(0);
   rect(x, y, squareSize, squareSize);
   
   if (state == 0) {
     x = x + speed;
     if (x > width - squareSize) {
       x = width - squareSize;
       state = 1;
     }
   } else if (state == 1) { 
     y = y + speed;
     if (y > height - squareSize) {
       y = height - squareSize;
       state = 2;
     }
   } else if (state == 2) { 
     x = x - speed;
     if (x < 0) {
       x = 0;
       state = 3;
     }
     } else if (state == 3) { 
     y = y - speed;
     if (y < 0) {
       y = 0;
       state = 0;
     }
     }
     
       //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
     
}