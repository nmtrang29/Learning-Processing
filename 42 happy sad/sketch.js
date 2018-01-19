var message = ":-)   :-)   :-)   :-)   :-)   :-)   :-)";
var f;
var r = 150;
var col1=[];
var col2=[];

var count = 0;
var speed1 = 500;
var speed2 = 100;
var speedCol = 40;
var letterSpacing = 1.2;


function setup() {
  createCanvas(800, 800);
  // The text must be centered!
  textAlign(CENTER);
  textFont("Play");
  textSize(80);

  col1 = [
      // color(255, 0, 0), 
      // color(0, 180, 30), 
      color(255, 150, 170), 
      // color(80, 60, 0), 
      // color(255, 100, 30), 
      // color(80, 10, 200),
    ];
    col2 = [
      // color(10, 10, 180), 
      // color(255, 0, 0), 
      color(240, 230, 10), 
      // color(10, 10, 180), 
      // color(255, 0, 0), 
      // color(240, 230, 10),
    ];
}

function draw() {
  background(col2[count]);

  translate(width/2, height/2 + 10);
  noFill();
  noStroke();
  ellipse(0, 0, r*2, r*2);

  var arclength = 0;

  // For every box
  for (var i = 0; i < message.length; i++)
  {
    // Instead of a constant width, we check the width of each character.
    var currentChar = message.charAt(i);
    var w = textWidth(currentChar);

    // Each box is centered so we move half the width
    arclength += w/2;
    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    var theta = PI + arclength / r;    

    push();
    var t = frameCount % speed1;
    // Polar to cartesian coordinate conversion
    translate(r*letterSpacing*cos(theta+map(t, 0, speed1, 0, TWO_PI)), r*letterSpacing*sin(theta+map(t, 0, speed1, 0, TWO_PI)));
    // Rotate the box

    var k = frameCount % speed2;
    // rotate(theta+PI/2 +map(k, 0, speed2, 0, TWO_PI)); // rotation is offset by 90 degrees
    // Display the character
    fill(0);
    for (var j = 0; j < 1; j++){
      noStroke();
      fill(col1[count]);
     text(currentChar,j*20,j*20);
    }
    pop();
    // Move halfway again
    arclength += w/2;
  }

  if (frameCount % speedCol == 0) {
    count++;
  }

  if (count>= col1.length) {
    count=0;
  }
}

