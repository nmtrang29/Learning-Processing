void setup() {
  size(500,500);
  frameRate(30);

}

void draw() {
  background(255);
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  translate(mouseX,mouseY);
  
  //body
  stroke(0);
  fill(175);
  rect(0,0,20,100);
  
  //head
  stroke(0);
  fill(255);
  ellipse(0,-30,60,60);
  
  //eyes
  stroke(0);
  fill(0);
  ellipse(-19,-30,16,32);
  ellipse(19,-30,16,32);
  
  //legs
  stroke(0);
  line(-10,50,-20,60);
  line(10,50,20,60);
  
  
   //Screenshot
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
  
}