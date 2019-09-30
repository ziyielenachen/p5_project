var input1, button;
let height = 833;
let width = 1437;
var count = 0;
var rand = 0;
var output;
let x1,y1,x31,y31,x32,y32,x41,y41,x42,y42,x61,y61,x62,y62;
let out = 10000;


function ini() {
  draw();
}
function setup() {
  createCanvas(1437,833);
  background('#fad8c5');
  //in the beginning there is only 6:
  x1 = out;
  y1 = out;

  x31 = (1437-70)/2-3;
  y31 = 220+90/2-10;
  x32 =(1437-60)/2+65+3;
  y32 = 320+10;
  x41 = x31;
  y41 = y32;
  x42 = x32;
  y42 = y31;
  x61 = x31;
  y61 = (y32-y31)/2+y31;
  x62 = x32;
  y62 = (y32-y31)/2+y31;

  input = createInput();
  input.size(700,30);
  input.position((1437/2-355),480);

  button = createButton('Add Choice~');
  button.position(input.x + input.width, 485);
  button.style('background-color', color('#ffaaa6'));
  button.mousePressed(store);

  button2 = createButton('Tell me what to do!');
  button2.position((1437-119)/2,370);
  button2.style('background-color', color('#ffaaa6'));
  button2.mousePressed(rolloutput);}

function store() {
  let fwords = color('#84adab');
  if (count < 6) {
  count = count + 1;
  draw(fill(fwords),
  textFont('Kalam'),textSize(22),
  text(count, (1437/2-353),(505 + count * 50)),
  noStroke(),fill(color('white')),
  rect((1437/2-330),(480 + count * 50) ,680,30),
  textFont('Kalam'),
  fill(color('#84adab')),
  text(input.value(), (1437/2-323),(504 + count * 50)));}
  input = createInput();
  input.size(700,30);
  input.position((1437/2-355),480);
}

function draw() {
  let words = color('#84adab');
  let dicee = color('#f1828d');

  let blue = color('#CEECF5');
  let green = color('#D0F5A9');
  let purple = color('#ECCEF5');
  let yellow = color('##F5F6CE');
  let w = color('#FFFFFF');

  //dice
  noStroke();
  fill(dicee);
  rect((1437-141)/2,220,140,140,25);
  fill(color('#fae9de'));
  //dot for 1:
  circle(x1,y1,30);
  //add dots to become 3:
  circle(x31,y31,30);  //(upper left)
  circle(x32,y32,30);  //(bottom right)
  //add dots to become 5
  circle(x41,y41,30); //bottom left
  circle(x42,y42,30); //upper right
  //add dots to become 6
  circle(x61,y61,30); //left middle
  circle(x62,y62,30); //right middle


  //guide to enter options:
  push();
  fill(words);
  textFont('Kalam');
  textSize(25);
  text('Enter your choices below and let me help you choose what to do!', (1437/2-353),470);
  textFont('Kalam');
  pop();

  //title "this is how we roll"
  push();
  fill(words);
  textFont('Permanent Marker');
  textSize(62);
  text('This is how we rollll', (1437-650)/2, 100);
  pop();
}
function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while(ms_passed < ms) {
  var d = new Date(); // Possible memory leak?
  var ticks = d.getTime();
  ms_passed = ticks - cur_ticks;
  // d = null; // Prevent memory leak?
  }
  }

function rolloutput() {
  output = floor(random(0.1, (count+1)/10)*10);
  if (output === 1) {
    animate();
    roll1();}
  else if (output === 2) {
    roll2();}
  else if (output === 3) {
    roll3();}
  else if (output === 4) {
    roll4();}
  else if (output === 5) {
    roll5();}
  else if (output === 6) {
    roll6();}
  let out = 'Congrats! Definitely choose # '+output+" !";
  draw(
  fill(color('#f1828d')),
  textFont('Permanent Marker'),
  textSize(34),
  text(out, (1437-440)/2-40, 190));
}


function roll1() {
  x1 = 718.5;
  y1 = 292.5;
  x31 = x32 = y31 = y32 = x41 = x42 = y41 = y42 = y61 = y62 = x61 = x62 = out;
}
function roll2(){
  x31 = 680.5;
  y31 = 255;
  x32 = 756.5;
  y32 = 330;
  x1 = y1 = x41 = x42 = y41 = y42 = y61 = y62 = x61 = x62 = out;
}
function roll3(){
  x1 = 718.5;
  y1 = 292.5;
  x31 = 680.5;
  y31 = 255;
  x32 = 756.5;
  y32 = 330;
  x41 = x42 = y41 = y42 = y61 = y62 = x61 = x62 = out;
}
function roll4(){
  x31 = 680.5;
  y31 = 255;
  x32 = 756.5;
  y32 = 330;
  x41 = 680.5;
  y41 = 330;
  x42 = 756.5;
  y42 = 255;
  x1 = y1 = y61 = y62 = x61 = x62 = out;
}
function roll5(){
  x1 = 718.5;
  y1 = 292.5;
  x31 = 680.5;
  y31 = 255;
  x32 = 756.5;
  y32 = 330;
  x41 = 680.5;
  y41 = 330;
  x42 = 756.5;
  y42 = 255;
  y61 = y62 = x61 = x62 = out;
}
function roll6(){
  x31 = 680.5;
  y31 = 255;
  x32 = 756.5;
  y32 = 330;
  x41 = 680.5;
  y41 = 330;
  x42 = 756.5;
  y42 = 255;
  x61 = 680.5;
  y61 = 292.5;
  x62 = 756.5;
  y62 = 292.5;
  x1 = y1 = out;
}