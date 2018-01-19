// recreate Frank Stella's Untitled 
// http://www.tate.org.uk/art/artworks/stella-untitled-rabat-p77806

var side = 25;
var color1, color2;
var t = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
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
      quad(side*i, side*i, side*(i+1), side*(i+1), side*(i+1), height, side*i, height);
      //quad(side*i, side*i, side*(i+1), side*(i+1), width, side*(i+1), width, side*i);   
  }

  for (var j = 0; j < width/side; j++) {
      if ((j%2)==0) {
        fill(color2);
      }
      else {
        fill(color1);
      }  
      quad(side*j, side*j, side*(j+1), side*(j+1), width, side*(j+1), width, side*j);  
      //quad(side*j+t, side*j+t, side*(j+1)+t, side*(j+1)+t, width+t, side*(j+1)+t, width, side*j);
      //quad(side*j+t, side*j+t, side*(j+1)+t, side*(j+1)+t, side*(j+1)+t, height+t, side*j, height);
  }

  //t += sin(radians(frameCount))*10;

}

// function draw() {
//   background(100);
//   // rectMode(CENTER);
//   for (var i = 0; i < width/side; i++) {
//       if ((i%2)==0) {
//         fill(color1);
//       }
//       else {
//         fill(color2);
//       }   
//       quad(side*i, side*i, side*(i+1), side*(i+1), side*(i+1), 0, side*i, 0);
//   }

//   for (var j = 0; j < width/side; j++) {
//       if ((j%2)==0) {
//         fill(color2);
//       }
//       else {
//         fill(color1);
//       }   
//       quad(side*j, side*j, side*(j+1), side*(j+1), 0, side*(j+1), 0, side*j);
//   }

// }


// function draw() {
//   background(100);
//   rectMode(CENTER);
//   for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//       if ((i+j)%2==0) {
//         fill(0);
//       }
//       else {
//         fill(255);
//       }   
//       rect(side*i+(side/2), side*j+(side/2), side, side);
//     }
//   }
// }
