let angle = 0;
let sphereSegmentNum = 24*2;
var img1, img2;
var spacing = 30;

function setup() {
  createCanvas(600, 600, WEBGL);
  img1 = loadImage("ah2.png");
  img2 = loadImage("jumbo2.png");
}


function draw() {
  translate(-300,0,-240);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dx, dx);
  v.normalize(100);

  background(243,169,67);

  //rectMode(CENTER);

  ambientMaterial(255,204,0);
  ambientLight(255);


  push();
  // rotateY(dx*0.005);
  // rotateX(dy*0.005);

  // rotateX(angle);
  
  // rotateZ(angle * 0.2);
  //rect(0,0,150,150);

  // translate(mouseX - width / 2,mouseY - height / 2);
  texture(img1);
    rotateY(angle * 0.3);
    // rotateY(angle * 0.1);
    cylinder(160, 820, sphereSegmentNum, sphereSegmentNum);
    pop();
    push();
    
    translate(300,0,0);
    rotateY(3);
    rotateY(angle * 0.3);
    cylinder(160, 820, sphereSegmentNum, sphereSegmentNum);
    pop();

    push();
    
    translate(600,0,0);
    rotateY(3);
    rotateY(angle * 0.3);
    cylinder(160, 820, sphereSegmentNum, sphereSegmentNum);
    pop();
  


  angle += 0.1;
  
  

  
}