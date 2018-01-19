var spacing = 30;

function setup() {
  createCanvas(windowWidth,windowHeight); 
  background(0);  
  noLoop(); 
} 


function draw() {
  background(0);

  noFill();
  stroke(80);
  strokeWeight(1);
  var n = width/spacing/2;

  for (var i = 0; i <= n; i++) {
    line(0, i*spacing, width/2, height);
    line(i*spacing, 0, width/2, height);
  } 

}
