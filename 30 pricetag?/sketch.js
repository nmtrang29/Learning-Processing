
var w = 200;
var h = 120;
var t = 20;

var spacing = 100;
var r, b, b, col

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);  
  noLoop(); 
} 


function draw() {
  background(255,0,0);
  var n = width/spacing;
  var m = height/spacing;
  



  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      push();
      translate(i*spacing, j*spacing);
      rotate(random(-PI/4, PI/4));
      scale(1);


      r = random(200,255); 
      g = random(10,24);
      b = random(10,24);

      col = color(r, g, b);

      priceTag(col);
      pop();
    }
  } 
}

function priceTag(col) {
	fill(col);
  stroke(255);
	strokeWeight(2);
    beginShape();
    vertex(0, 0);
    vertex(w - t, 0);
    vertex(w, t);
    vertex(w, h -t);
    vertex(w - t, h);
    vertex(0, h);
    endShape(CLOSE);

    
    fill(255);
    textSize(54);
    textAlign(CENTER);
    text('-50%', w/2, h*.65);
}