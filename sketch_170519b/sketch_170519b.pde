float x = 100;
float y = 0;
int ballSize = 10;

float speed = 0; 
float gravity = 0.1;
      
      
void setup() {
  size (400,400);
}


void draw(){
  background(255);
  
  //draw the ball
  fill(0);
  noStroke();
  ellipse(x, y, ballSize, ballSize);
  
  y = y + speed;
  speed = speed + gravity;
  
  //bounce back up
  if (y > height){
    speed = speed * -0.9;
    y = height;
  }    
       
  //Save Screenshort
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
}