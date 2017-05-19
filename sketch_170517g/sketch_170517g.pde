void setup() {
  size(500,500);
  frameRate(30);
  background(255);
}

void draw() {

 

  //legs
  stroke(mouseX/2,0,mouseY/2);
  line(mouseX-10, mouseY, pmouseX-10, pmouseY+10);
  line(mouseX+10, mouseY, pmouseX+10, pmouseY+10);
  
  
        // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
  
}