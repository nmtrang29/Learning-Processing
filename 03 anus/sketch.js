let segmentNum = 24*12;
let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

}


function draw() {
  let dx = (mouseX - (windowWidth/2))/2*(-1);
  let dy = ((windowHeight/2) - mouseY)/2*(-1);
  let v = createVector(dx, dy, 10);
  v.normalize(10);

  background(255);

  rectMode(CENTER);

  ambientMaterial(255,255,255);
  directionalLight(255, 255, 255, v);

 // translate(0, 0, mouseX);

  //rotateX(angle);
  //rotateY(angle * 0.3);
  rotateZ(angle * 0.2);

  //ranslate(mouseX - width / 2,mouseY - height / 2);
  torus(windowWidth/4, windowWidth/2, segmentNum);
  angle += 0.01;
  
}