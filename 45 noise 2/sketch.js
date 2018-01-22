var x = 0;
var val = 6;
var h;
var n = 0;
var r = 100;
var g = 0;
var b = 0;
var trans = 100;
var t = 4;

function setup() {
    createCanvas(600, 600);
    noStroke();

    // mic = new p5.AudioIn()
    // mic.start()
// }

// function draw() {
    background(255,0,0);
    // micLevel = mic.getLevel();
    h = height / (val * 2);
    fill(0);
    blendMode(BLEND);
    // rectMode(CENTER);
    var k = 1;

    for (var i = 0; i < val; i++) {
        fill(sin(k)*255,g, b,trans);
        // rotate(noise(n)/2);
        rect(x, h * i * 2, width, h);
        rect(h * i * 2, x, h, width);

        fill(255, g, sin(k)*255,trans);
        rect(-x, h * (i * 2 + 1), width, h);
        rect(h * i * 2, -x, h, width);
        
        fill(0, g, sin(k)*255,trans);
        rect(-x, h * (i * 2 + 1), width, h);
        // rect(h * i * 2, -x, h, width);

        // rect(x, h * (i * 2 +1), width, h);
        // rect(h * i * 2, x, h, width);
    }

    x+= 10;

    if (x > width/2 || x < -width/2) {
        x *= -1;
        val = 20;
    }

    n += 0.005;
}