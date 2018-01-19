var eyeSize = 20;
var eyeY = -120;
var eyeDistance = 150;

var flagW = 360;
var flagH = 160;

var mouthW = 120;


var myFont;
var words = [ "sarmarle",
              "țuică",
              "ghiolban", 
              "soare",
              "cărămidă",
              "frumos",
              "ce faci?",
              "noroc",
              "no, bine!",
              "da",
              "crăciun fericit!"
            ];

var words2 = [ "stuffed cabbage rolls",
              "a traditional Romanian spirit",
              "(Transylvanian slang) a dumb, mean and ignorant person", 
              "sun",
              "brick",
              "beautiful",
              "how are you?",
              "cheers/good luck",
              "OK/fine/well",
              "yes",
              "merry christmas!"
            ];

var index = 0; 




function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Inconsolata');
}

function draw() {
  background(0);
  textAlign(CENTER);

  //EYES
  noStroke();
  fill(255);
  ellipse(width/2 - eyeDistance/2, height/2 + eyeY, eyeSize, eyeSize);
  ellipse(width/2 + eyeDistance/2, height/2 + eyeY, eyeSize, eyeSize);
  
  
  if (mouseIsPressed) {
    //MOUTH FLAG
    rectMode(CENTER);
    // rect(width/2, height/2 + flagH*2/3, flagW, flagH);
    noStroke();
    fill(255,255,0);
    rect(width/2, height*0.45 + flagH*2/3, flagW, flagH/3);
    fill(0,0,255);
    rect(width/2, height*0.45 + flagH/3, flagW, flagH/3);
    fill(255,0,0);
    rect(width/2, height*0.45 + flagH, flagW, flagH/3);

    //ROMANIAN WORDS
    fill(0);
    textSize(18); 
    textStyle(BOLD);
    text(words[index], width/2, height*0.45 + flagH*2/3 + 5);

    //ENGLISH TRANSLATION
    fill(255)
    textSize(17); 
    textStyle(NORMAL);
    text(words2[index], width/2, height - 24);
  }
  else {
    //MOUTH CLOSE
    noFill();
    stroke(255);
    line(width/2 - mouthW/2, height*0.45 + flagH*2/3, width/2 + mouthW/2, height*0.45 + flagH*2/3);
  }
}

function mousePressed() {
  index = index + 1;
  
  if (index == words.length) {
    index = 0;
  }
}



// how to change the "and" into "or"?
// how add flashing eyes? hint: use random function.
// how to change the code to check if the mouse is around the eyes?