var step = 25;
var innerWidth = 325;
var t = 25;

function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();
}

function draw() {

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

  // for (var j = 0; j < innerWidth/step; j++) {
  //   if ((j%2) == 0){
  //     fill(0);
  //   }
  //   else {
  //     fill(255);
  //   }
  //   rect(k + step*j , k - step/2, step, innerWidth);
  // }
 //fill(255,0,0);

  var offset = -((frameCount % t) / t) * step * 2;
  for (var h = offset; h < height; h += step * 2.2) {
    rect(0, h + step, width, step);
  }

} 
