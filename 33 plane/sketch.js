let angle = 0;
var img1;
var spacing = 120;

function setup() {
  createCanvas(600, 600, WEBGL);
  img1 = loadImage("img1.jpg");
}


function draw() {
  // let dx = mouseX - width / 2;
  // let dy = mouseY - height / 2;
  // let v = createVector(dx, dx, dx);
  // v.normalize(100);

  background(0);

  //rectMode(CENTER);

  ambientMaterial(255);
  ambientLight(255);

  var n = 600/spacing;
  var m = 600/spacing;
  



  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      push();
      translate(i*spacing - 240, j*spacing - 240, 0);
      rotateX(angle * 0.01);
      // rotateY(angle * 0.02);
      rotateZ((angle-i*6) * 0.05);
      // var k = map(mouseX, 0, width, 0, 360);
      // rotateX((k-i*6) * 0.05);

      //rotateX(180);
      scale(1);
      pole(240,240);
      pop();
      angle += 0.1; 
    }
  }


  // push();
  
  // rotateY(angle * 0.3);
  // pole();
  // pop();
  // angle += 0.1;
}

function pole(cyX, cyY) {
  texture(img1);
  plane(cyX, cyY);
}
