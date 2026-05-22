function preload(){
  img = loadImage('sarah.png');
  oi = loadFont('Oi-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw(){
  image(img, 455, 275);

}

function mousePressed() {
  fill(random(255), random(255), random(255));
  textSize(72);
  textFont(oi);
  text("HA!", mouseX, mouseY);
}