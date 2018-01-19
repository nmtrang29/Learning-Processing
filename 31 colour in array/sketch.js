var k = 0;

function optical (x, y, w, shrink, rotation, color0, color1) {
  var whichColor = true; // color0 or color1?
  
  
  // Setup how to draw
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  
  // Move the point of origin
  translate(x, y);
  
  //keep drawing rectangle while
  //the width is greater than zero
  stroke(255);
  strokeWeight(3);

  while (w > 0) {
    // Select color
    if (whichColor) {
      fill(color0);
    } else {
      fill(color0);
    }
    
    //Flip the color
    whichColor = !whichColor;

    var t = w/10;
    var h = w/2;
    var aString = 'appie';
    var sWidth = textWidth(aString);
    
    //Draw rectangle
    // beginShape();
    // vertex(0, 0);
    // vertex(w - t, 0);
    // vertex(w, t);
    // vertex(w, h -t);
    // vertex(w - t, h);
    // vertex(0, h);
    // endShape();

    //rect(0, 0, w, w);
    textAlign(CENTER); 
    textSize(w);
    textStyle(BOLD);
    // endShape(CLOSE);
   // rect(0,0,w,sWidth);
    text(aString, width/2 - 20, 20);
    //text(aString, 0, w);
    //ellipse(0, 0, w);
        
    //Rotate around the pont of origin

    rotate(rotation);
    
    //shrink the rectangle width
    w -= shrink;
  }
  
  pop();
}

function draw () {
  createCanvas(500, 500);
  var c0 = color(85,158,221);
  var c1 = color (255);
  background(85,158,221);

  // var m = sin(k)*(mouseX-width/2);
  var m = sin(k)*frameCount/10;
  
  optical(width/2, height/2, width, 20, m, c0, c1);
  //k += 0.01;
}