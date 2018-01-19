let angle = 0;
var spacing = 100;
var sphereSize = 60;

function setup() {
  createCanvas(800, 800, WEBGL);
  img1 = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("semicolon.png");
  img4 = loadImage("5.png");
  img5 = loadImage("9.png");
}


function draw() {
  translate(-195,0,0);
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  background(0);

  ambientMaterial(255);
  ambientLight(225);
  pointLight(25, 25, 25, locX, locY, 0);


    push();

    texture(img1);
    rotateZ(PI/2);
    rotateY(PI);
    sphere(sphereSize);
    
    pop();
    push();
    
    texture(img2);
    translate(spacing,0,0);
    rotateZ(PI/2);
    rotateY(PI);
    sphere(sphereSize);
   
    pop();
    push();
    
    texture(img3);
    translate(spacing*2-8,0,0);
    rotateZ(PI/2);
    rotateY(PI);
    sphere(sphereSize*0.6);
    
    pop();
    push();
    
    texture(img4);
    translate(spacing*3-22,0,0);
    rotateZ(PI/2);
    rotateY(PI);
    sphere(sphereSize);
    
    pop();
    push();
    
    texture(img5);
    translate(spacing*4-22,0,0);
    rotateX(angle * 0.3);
    rotateZ(PI/2);
    sphere(sphereSize);
    // sphereSize += 1;
    
    pop();
  


  angle += 0.3;
  
  

  
}