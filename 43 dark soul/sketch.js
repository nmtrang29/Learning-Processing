
var message = "as dark as my soul";

var f;
var r = 180; //circle rad
var speed1 = 500;
var speed2 = 100;
var letterSpacing = 1;

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textFont("Helvetica");
  textSize(42);
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  noFill();
  noStroke();
  ellipse(0, 0, r*2, r*2);

  // We must keep track of our position along the curve
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
    // Polar to cartesian coordinate conversion
        var t = frameCount % speed1;
    // Polar to cartesian coordinate conversion
    // translate(r*letterSpacing*cos(theta+map(t, 0, speed1, 0, TWO_PI)), r*letterSpacing*sin(theta+map(t, 0, speed1, 0, TWO_PI)));
    translate(r*cos(theta+map(mouseX, 0, width, 0, TWO_PI)), r*sin(theta+map(mouseX, 0, width, 0, TWO_PI)));
    // Rotate the box

    var k = frameCount % speed2;
    // rotate(theta+PI/2 +map(k, 0, speed2, 0, TWO_PI)); 
    rotate(theta+PI/2 +map(mouseX, 0, width, 0, TWO_PI)); 
    // Display the character
    fill(0);
    text(currentChar,0,0);
    stroke(0);
    line(0,0, 0, r);
    pop();
    // Move halfway again
    arclength += w/2;
  }
  fill(0);
  // rectMode(CENTER);
  rect(-200,-200,100,100);
  rect(80,-200,100,100);
  // rect(80,80,100,100);
  // rect(-200,80,100,100);

  fill(255);
  rect(-100,-200,20,100);
  rect(80,-100,100,20);


  noFill();
  stroke(0);
  line(-200,-200, -80, -80);
  line(80,-200, 200, -80);
  // line(-200,-80,0,0);
  // line(-80,-80,0,0);
  // line(-80,-200,0,0);
  // line(80, -200, 0, 0);
  // line(80, -80, 0, 0);
  // line(80,80,200,200);
  // line(-200,80,-80,200);

  rect(-200,-200,120,120);
  rect(80,-200,120,120);
  // rect(80,80,120,120);
  // rect(-200,80,120,120);


}