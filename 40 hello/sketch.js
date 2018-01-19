var img;
var m = 0.001;
function setup() {
createCanvas(600, 600, WEBGL);
  //img = loadImage("2015-01-08_16_03_08.jpg");
  img = loadImage("h12.png");
  //ortho();
}
function draw(){
  background(0);
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  ambientLight(10);
  pointLight(255, 255, 255, locX, locY, 0);
  // pointLight(245,245,245, (mouseX - (windowWidth/2))/1, ((windowHeight/2) - mouseY)/1, 0);
  push();
  // rotateZ(frameCount * 0.02);
  rotateX(30);

  rotateZ(7.85);
  var k = map(mouseY, 0, height, 6, 15);
  rotateY(-k);
  // rotateY(frameCount * m);
  m+= 0.0005;

  texture(img);
  // var n = map(sin(frameCount/10), -1, 1, 60, 220);
  cylinder(120, 120);
  pop();
  
  // translate(-100, -150, 50);
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // fill(250, 0, 0);
  // texture(img);
  // torus(120, 80, 32, 32);
  // pop();
  
}