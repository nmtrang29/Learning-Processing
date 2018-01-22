var n = 0;
var t = 1;
var r = 250;
var g = 180;
var b = 10;
var trans = 25;

function setup() {
  createCanvas(600, 600);
  // colorMode(HSB, 100);
  
}

function draw() {
  // noFill();
  rectMode(CENTER);
  background(r, 30, 10);
  // stroke(200)

  // BLEND
  // DARKEST
  // LIGHTEST
  // DIFFERENCE
  // MULTIPLY
  // EXCLUSION
  // SCREEN
  // REPLACE
  // OVERLAY
  // HARD_LIGHT
  // SOFT_LIGHT
  // DODGE
  // BURN
  // ADD
  blendMode(BLEND);
  
  noStroke();

  var enlarge = 1.2;

  var k = (frameCount % 30)/30;
  // translate(width*0.5, width*-0.25);
  // rotate(PI/4);

  a = noise(n + 0)*width*enlarge;
  b = 600;
  c = noise(n + 1)*width*enlarge;
  d = noise(n + 2)*width*enlarge;

  fill(r+sin(k)*n,g, b, trans);
  rect(width/2, height/2, d, d);
  rect(width/2, height/2, c, c);
  rect(width/2, height/2, b, b);
  rect(width/2, height/2, a, a);

  fill(r+sin(k)*n*2,g, b,trans);
  rect(width/2, height/2, a, b);
  rect(width/2, height/2, b, a);
  rect(width/2, height/2, a, c);
  rect(width/2, height/2, c, a);
  rect(width/2, height/2, a, d);
  rect(width/2, height/2, d, a);
  fill(255);
  fill(r+sin(k)*n*3,g, b,trans);
  rect(width/2, height/2, a/2, b);
  rect(width/2, height/2, b, a/2);
  rect(width/2, height/2, a/2, c);
  rect(width/2, height/2, c, a/2);
  rect(width/2, height/2, a/2, d);
  rect(width/2, height/2, d, a/2);

  fill(r+sin(k)*n*4,g, b,trans);
  rect(width/2, height/2, a/4, b);
  rect(width/2, height/2, b, a/4);
  rect(width/2, height/2, a/4, c);
  rect(width/2, height/2, c, a/4);
  rect(width/2, height/2, a/4, d);
  rect(width/2, height/2, d, a/4);



  // fill(r+sin(k)*n*5,g, b,20);
  // rect(width/2, height/2, a/8, b);
  // rect(width/2, height/2, b, a/8);
  // rect(width/2, height/2, a/8, c);
  // rect(width/2, height/2, c, a/8);
  // rect(width/2, height/2, a/8, d);
  // rect(width/2, height/2, d, a/8);

  n += 0.001;
}