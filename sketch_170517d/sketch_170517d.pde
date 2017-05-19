void setup(){
  size (500,500);
  background(0);
}

void draw(){

  stroke(255);
  float mouseSpeed = abs(mouseX-pmouseX);
  strokeWeight(mouseSpeed);
  line(pmouseX,pmouseY,mouseX,mouseY);
  
  // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
  
}