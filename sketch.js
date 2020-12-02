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
let checkbox;

function preload() {
  romanji = loadTable("romanji.csv", "csv");
  katakana = loadImage('KATAKANA-TABLE.png');
  hiragana = loadImage('HIRAGANA-TABLE.png');
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
  createCanvas(400, 400);
  radio = createRadio();
  radio.option('Hiragana');
  radio.option('Katakana');
  radio.style('width', '60px');
  radio.selected('Hiragana');
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