float x = 100;
float y = 0;
int ballSize = 40;

float speed = 0; 
float gravity = 0.1;

float c1 = 0;
float c1Change = 5;
      
      
void setup() {
  size (400,400);
}


void draw(){
  background(255);
  
  //draw the ball
  fill(c1);
  noStroke();
  ellipse(x, y, ballSize, ballSize);
  
  y = y + speed;
  speed = speed + gravity;
  
  //bounce back up
  if (y > height) {
    speed = speed * -0.95;
    y = height;
  }   
  
  //change colour
    
  //Change colours
  c1 = c1 + c1Change;

  if (c1 < 0 || c1 > 200) {
    c1Change *= -1;
  }
 
  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}