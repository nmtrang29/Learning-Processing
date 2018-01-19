let angle = 0;
let sphereSegmentNum = 24*2;
var img1, img2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img1 = loadImage("jumbo3.png");
  img2 = loadImage("jumbo2.png");
}


function draw() {
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dx, dx);
  v.normalize(100);

  background(255,204,0);

  //rectMode(CENTER);

  ambientMaterial(255,204,0);
  ambientLight(255);
 //pointLight(255,204,0, (mouseX - (windowWidth/2))/1, ((windowHeight/2) - mouseY)/1, 1);
  //directionalLight(255,204,0, v);


  push();
  // rotateY(dx*0.005);
  // rotateX(dy*0.005);

  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  //rect(0,0,150,150);

  // translate(mouseX - width / 2,mouseY - height / 2);
  texture(img1);
  // sphere(width/4, sphereSegmentNum, sphereSegmentNum);
  ellipsoid(width/4 - 10, width/4, width/4 - 10, sphereSegmentNum, sphereSegmentNum);

  translate(0, width/4 + 10);
  texture(img2);
  ambientLight(20);
  cone(20, 30);
  
  pop();

  angle += 0.1;
}