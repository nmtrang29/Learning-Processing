let angle = 0;
let sphereSegmentNum = 24*2;
var img1, img2;
var spacing = 30;

function setup() {
  createCanvas(600, 600, WEBGL);
  img1 = loadImage("bg.png");
}


function draw() {
  translate(-300,0,-240);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dx, dx);
  v.normalize(100);

  background(255,0,0);

  //rectMode(CENTER);

  ambientMaterial(255,204,0);
  ambientLight(255);


    push();
    texture(img1);
    rotateY(-angle * 0.3);
    rotateX(20);;
    cylinder(180, 2000, sphereSegmentNum, sphereSegmentNum);
    pop();

    push();
    translate(150,0,0);
    rotateY(angle * 0.3);
    rotateX(20);
    cylinder(200, 2000, sphereSegmentNum, sphereSegmentNum);
    pop();

    push();
    translate(250,0,0);
    rotateY(3);
    rotateY(angle * 0.2);
    rotateX(40);
    cylinder(200, 2000, sphereSegmentNum, sphereSegmentNum)
    pop();

    push();
    translate(450,0,0);
    rotateY(3);
    rotateX(60);
    rotateY(angle * 0.2);
    cylinder(200, 2000, sphereSegmentNum, sphereSegmentNum);
    pop();

    push();
    translate(350,0,0);
    rotateY(3);
    rotateX(80);
    rotateY(angle * 0.2);
    rotateZ(angle * 0.05);
    cylinder(200, 2000, sphereSegmentNum, sphereSegmentNum);
    pop();


  angle += 0.1;

  
}