let romanji;
let table;
let value = 0;
let target;
let shot;
let rows;
let katakana;
let hiragana;
let kx;
let ky;
let c1, c2;
let checkbox;
//*
let blossoms = [];

function preload() {
  romanji = loadTable("romanji.csv", "csv");
  katakana = loadImage('KATAKANA-TABLE.png');
  hiragana = loadImage('HIRAGANA-TABLE.png');
}

//https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2) {
  for (var i = 0; i <= height; i++) {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + width, i);
  }
}

function createblossom() {

  for (let i = 0; i < 10; i++) {
    mysakura = new sakura(0, 0);
    mysakura.x = random(400);
    mysakura.y = random(400);
    //blossoms[i] = mysakura;
    blossoms.push(mysakura);
  }
}

function settarget(){
  ky = int(random(26));
  kx = int(random(5));
  target = rows[ky].getString(kx);  
}

function showkana(x,y){
  let val = radio.value(); 
  if (val === 'Katakana'){
      let img = katakana.get(x*100, y*100, 100, 100);
      image(img,width/2-50,50);
  }else if(val === 'Hiragana'){
      let img = hiragana.get(x*100, y*100, 100, 100);
      image(img,width/2-50,50);
  } 
}

function setup() {
  let mydiv; 

  //mydiv = createDiv(createCanvas(400, 400));
  //mydiv.text_align = (CENTER);

 createCanvas(400, 400);
  
  angleMode(DEGREES);
  createblossom();
  mysakura = new sakura(0, 0);

  
  canvas.position = (200,100); //= window.innerWidth * 0.8;
  // = window.innerHeight * 0.8;
  c1 = color(0, 102, 153);
  c2 = color(128, 102, 153);
  radio = createRadio();
  radio.option('Hiragana');
  radio.option('Katakana');
  radio.style('width', '60px');
  radio.selected('Hiragana');
  createP('');
  checkbox = createCheckbox('HINT',false);
  textAlign(CENTER);  
  //print(romanji.getRowCount() + ' total rows in table');
  //print(romanji.getColumnCount() + ' total columns in table');
  rows = romanji.getRows();
  background(220);
  textSize(32);
  shot = '';
  target = rows[2].getString(1);
  settarget();
}

function hittest() {
  if (shot === target) {
    //update score
    //print('hit');
    background(220);
    text(target, width / 2, 350);
    fill(255, 0, 0);
    text(target, width / 2, 350);
    fill(255, 255, 0);
    text(target, width / 2, 350);
    shot = '';
    settarget();
  }
}

function draw() {
  background(220);
  setGradient(0, 150, 540, 80, c1, c2);
  
    for(let i=0; i<10;i++){   
   mysakura = blossoms[i];
   mysakura.show();
  }
  
  showkana(kx,ky);
  if (checkbox.checked()){
      //show target
      text(target, width / 2, 200);
  }
  //show input
  text(shot, width / 2, 350);
  //underline shot
  stroke(128);
  line(width/2-50,350,width/2+50,350);
}

function keyTyped() {
  shot = shot + key;

  if (shot.length > target.length) {
    shot = '';
    background(220);
  } else if (shot.length === target.length) {
    text(shot, width / 2, 350);
    hittest();
  }
  // uncomment to prevent any default behavior
  // return false;
  fill(value);
}