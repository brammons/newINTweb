var oi;
var original = "The deeper in debt...";
var translation = "the harder you bet.";
var col = ("#DBB261");
var rCol;
var d = [];

function preload(){
  oi = loadFont("Oi-Regular.ttf");
  img = loadImage("die.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  let bbox = oi.textBounds(original, width/2, height/2, 60);
  noFill();
  noStroke();
  rect(bbox.x, bbox.y, bbox.w, bbox.h);

  rCol = col[floor(random(col.length))];
  
  for (i = 0; i < 25; i++) {
    d[i] = new Die(windowWidth/2, windowHeight/2, random(20, 70));
  }
}

function draw() {
  textFont('arial');
  textSize(14);
  textAlign(CENTER);
  text('Move your cursor towards the top of the screen to reveal the second-half of the message', windowWidth/3, 100);

  textFont(oi);
  textSize(60);
  
  if(mouseY > 0 && mouseY < 500){
    fill(rCol);
    background(0);
    text(translation, width/2, height/2);
  } else {
     fill("#3A7236");
     background(0);
     text(original, width/2, height/2);
  }
  
  for (k = 0; k < 25; k++) {
    d[k].move();
    d[k].bounce();
    d[k].display();
  }
}

class Die {

  constructor(tempX, tempY, tempSize) {
  
    this.x = tempX;
    this.y = tempY;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
    this.size = tempSize;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }

  display() {
    noStroke();
    image(img, this.x, this.y, this.size, this.size);
  }

}
