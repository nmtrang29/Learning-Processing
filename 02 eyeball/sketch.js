let angle = 0;
let sphereSegmentNum = 24*2;

function setup() {
	createCanvas(windowWidth, windowHeight-10, WEBGL);

}


function draw() {
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dx, dx);
  v.normalize(100);

  background(0);

  rectMode(CENTER);

  ambientMaterial(0,0,0);
  pointLight(245,245,245, (mouseX - (windowWidth/2))/1, ((windowHeight/2) - mouseY)/1, 0);
  directionalLight(10, 10, 10, v);



  // translate(0, 0, mouseX);

  // rotateX(angle);
  // rotateY(angle * 0.3);
  // rotateZ(angle * 0.2);
  //rect(0,0,150,150);

  // translate(mouseX - width / 2,mouseY - height / 2);
  sphere(windowWidth/4, sphereSegmentNum, sphereSegmentNum);

  //angle += 0.02;
}