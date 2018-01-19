let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(175);

  rectMode(CENTER);
  noStroke();
  fill(0,0,255);

  // translate(0, 0, mouseX);

  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  //rect(0,0,150,150);

  // translate(mouseX - width / 2,mouseY - height / 2);
  torus(200,80);

  angle += 0.07;
}