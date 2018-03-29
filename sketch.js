var hue;
var pi;
var digitPi;
var nextDigitPi;
var index;



//var a = moment([2018, 2,14]);
// var b = moment(moment().toArray());
// b.diff(a, 'minutes');       // 1
function preload() {
  var millionPi = loadStrings('./data/million-pi.txt');
  pi = millionPi;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

}


function draw() {
  var a = moment([2018, 2,14]);
  var b = moment(moment().toArray());
  var c = moment([2019, 2,14]);
  index = b.diff(a, 'minutes');
  minutesToPiDay = c.diff(b, 'minutes');
  prevDigitPi = pi[0].substring(index-4, index).split('').join(' ');
  digitPi = pi[0][index];
  nextDigitPi = pi[0][(index+1)];
  nextNextDigitPi = pi[0].substring(index+1, index+5).split('').join(' ');pi[0][(index+2)];
  //var s = moment().format('s');
  var map1 = 36 * digitPi;
  var map2 = 36 * nextDigitPi;
  var huns =  (moment().format('s') * 10) + parseInt(moment().format('S'));
  hue = map(huns, 0, 599, map1, map2);

  var piText = pi[0].substring(index-2, index+2);


  background(hue, 100,100);

  textAlign(CENTER);
  textFont('IBM Plex Mono');
  fill(0);
  noStroke();
  textSize(120);
  fill(map2,100,100);
  stroke(0);
  strokeWeight(4);
  text(prevDigitPi + " " + "[" + digitPi + "] " + nextNextDigitPi, windowWidth/2, height/2.5);
  //text(moment().format("S"),windowWidth/2, 200);
  //text(map1 + " " + map2,windowWidth/2, 300);
  textSize(48);
  strokeWeight(2);
  text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),windowWidth/2, 500);
  textSize(24);
  text("every minute we step through a digit of pi until next pi day",windowWidth/2, 600);

  text(minutesToPiDay + " minutes to go!",windowWidth/2, 650);

}