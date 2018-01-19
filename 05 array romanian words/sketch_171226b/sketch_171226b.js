var words = ["sarmarle", "țuică", "mitică", "ghiolban"];
var index = 0; 
var fr = 30;// frameRate
var myFont;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
}

function draw() {
  noStroke()
  fill(0,0,255);
  rect(0, 0, width, height/3);
  fill(255,255,0);
  rect(0, height/3, width, height/3);
  fill(255,0,0);
  rect(0, height*2/3, width, height/3);
  
  //textFont(myFont);
  fill(0);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Work Sans');

  text(words[index], width*0.5, height*0.51);

}  

function mousePressed() {
  index = index + 1;
  
  if (index == words.length) {
    index = 0;
  }
}




