var spacing = 200;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);  
  noLoop(); 
  textFont('Work Sans');
} 


function draw() {
  background(255);
  var n = width/spacing;
  var m = height/spacing;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      push();
      translate(i*spacing, j*spacing);
      rotate(random(-PI/2, PI/2));
      scale(1);
      card();
      pop();
    }
  } 

}
function card() {
    fill(255);
    rect(0, 0, 380, 260);
    fill(0);
    textSize(32);
    text('Trang', 25, 50);
    text('hello@nmtrang.com', 25, 90);
    text('+49 170 611 9183', 25, 130);
}