void setup(){
  size (500,500);
  background(0);
}

void draw(){

//BODY
  stroke(255);
  fill(0);
  rectMode(CENTER);
  rect(mouseX,mouseY,50,50);
  
// save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("yourName.jpg");
  }
}