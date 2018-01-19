

var side = 25;
var color1, color2;
var t = 0;

function setup() {
  createCanvas(600, 600);
  // noStroke();
  stroke(255);
  color1 = color(0);
  color2 = color(0);
}

function draw() {
  background(0);
  fill(color1);

  for (var i = 0; i < width/side/2; i++) {
      if ((i%2)==0) {
        fill(color1);
      }
      else {
        fill(color2);
      }
      var a1 = side*i; 
      var b1 = side*i + t; 
      var a2 = side*(i+1);
      var b2 = side*(i+1);
      var a3 =  side*(i+1);
      var b3 = height-side*(i+1);
      var a4 = side*i + t;
      var b4 = height-side*i;


      //LEFT
      quad(a1, b1, a2, b2, a3, b3, a4, b4);
      quad(width - a1, width - b1, width - a2, width - b2, width - a3, width - b3, width - a4, width - b4);

      t += cos(radians(frameCount))*0.05;

  }


  for (var j = 0; j < width/side/2; j++) {
     if ((j%2)==0) {
        fill(color2);
      }
      else {
        fill(color1);
      }
      var c1 = side*j;
      var d1 = side*j + t;
      var c2 = side*(j+1);
      var d2 = side*(j+1);
      var c3 = width-side*(j+1);
      var d3 = side*(j+1);
      var c4 = height-side*j + t;
      var d4 = side*j;

      //TOP
      quad(c1, d1, c2, d2, c3, d3, c4, d4); 
      quad(width - c1, width - d1, width - c2, width - d2, width - c3, width - d3, width - c4, width - d4); 

      t += cos(radians(frameCount))*0.05;
  }


}
