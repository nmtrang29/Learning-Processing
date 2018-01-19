function setup() {
  var canvas = createCanvas((windowHeight-80)*0.75, windowHeight-80);
 
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(0);
}

function draw() {
  noFill();
  stroke(255);
  rect(width/4, 0, width*3/4, height*3/4);

  rect(0, height/2, width/2, height/2);

  line(width/4, 0, 0, height/2);
  line(width, 0, width/2, height/2);
  line(0, height, width/4, height*3/4);
  line(width, height*3/4, width/2, height);
}
