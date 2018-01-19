var step = 25;
var innerWidth = 325;
var t = 30;

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function draw() {
  background(0);
  noStroke();
  fill(255);

  var k = (width - innerWidth)/2;
  

  for (var i = 0; i < width/step; i++) {
    if ((i%2) == 0){
      fill(0);
    }
    else {
      fill(255);
    }
    rect(0, step*i, width, step*(i+1));
  }

  //blendMode(DIFFERENCE);

  for (var j = 0; j < innerWidth/step; j++) {
    if ((j%2) == 0){
      fill(0);
    }
    else {
      fill(255);
    }
    rect(k + step*j , k - step/2, step, innerWidth);
  }
} 
