var spacing = 20;
var cubeSize = 200;

function setup() {
  createCanvas(windowWidth,windowHeight); 
  background(0);  
  noLoop(); 
} 


function draw() {
  background(255);
  var n = width/cubeSize;
  var m = height/cubeSize;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      push();
      translate(i*cubeSize, j*cubeSize);
      scale(1);
      sun();
      pop();
    }
  } 
}


function sun() {
  noFill();
  stroke(0);
  strokeWeight(1);
  var n = cubeSize/spacing;
  var meetingP = cubeSize - 1;

  for (var i = 0; i < n; i++) {
    line(0, i*spacing, meetingP, meetingP);
    line(i*spacing, 0, meetingP, meetingP);
    line(0, meetingP, meetingP, meetingP);
    line(meetingP, 0, meetingP, meetingP);
  } 


}

// var k = random(0,4);
// if(k < 1) { 
//   rotate(0);

// } else if (k < 2) {
//   rotate(90);

// } else if (k < 3) {
//   rotate(180);

// } else {  
//   rotate(270);
// } 