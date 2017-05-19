void setup(){
  size (500,500);
  background(0);
}

void draw(){
      // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("screenshot.jpg");
    println("Saved Screenshot");
  }
  
  
  if (mousePressed) {
  stroke(255);
  fill(100);
  rectMode(CENTER);
  rect(mouseX,mouseY,20,20);
  }
  
}