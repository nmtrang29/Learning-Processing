// recreate Frank Stella's Untitled 
// http://www.tate.org.uk/art/artworks/stella-untitled-rabat-p77806

var side = 25;
var color1, color2;
var t = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
  //stroke(255);
  background(0);
  color1 = color(0, 82, 200);
  color2 = color(251, 220, 7);
}

function draw() {
  background(100);
  // rectMode(CENTER);
  for (var i = 0; i < width/side; i++) {
      if ((i%2)==0) {
        fill(color1);
      }
      else {
        fill(color2);
      }
      var a1 = side*i; 
      var b1 = side*i; 
      var a2 = side*(i+1);
      var b2 = side*(i+1);
      var a3 =  side*(i+1);
      var b3 = height-side*(i+1);
      var a4 = side*i;
      var b4 = height-side*i;

      var b5 = height-side*i;
      var b6 = height-side*i;

      //LEFT
      quad(a1, b1, a2, b2, a3, b3, a4, b4);
     // quad(a3, b3, a4, b4,);

      //quad(side*i, side*i, side*(i+1), side*(i+1), width, side*(i+1), width, side*i);   
  }


  for (var j = 0; j < width/side; j++) {
      if ((j%2)==0) {
        fill(color2);
      }
      else {
        fill(color1);
      } 

      var c1 = side*j;
      var d1 = side*j;
      var c2 = side*(j+1);
      var d2 = side*(j+1);
      var c3 = width-side*(j+1)
      var d3 = side*(j+1)
      var c4 = height-side*j;
      var d4 = side*j;

      //TOP
      quad(c1, d1, c2, d2, c3, d3, c4, d4); 

      //quad(side*j, side*j, side*(j+1), side*(j+1), width-side*(j+1), side*(j+1), width-side*j, side*j);  
  }

  //t += sin(radians(frameCount))*10;

}
