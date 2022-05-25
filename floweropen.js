

function preload(){
  table = loadTable("callflower.php", "csv", "header");
  publicSans = loadFont("PublicSans-Regular.otf");
  neutralFace = loadFont("NeutralFace.otf");
  neueMetana = loadFont("NeueMetana-Regular.otf");
  modernist = loadFont("Sk-Modernist-Regular.otf");
  spaceGrotesk = loadFont("SpaceGrotesk-Light.otf");
}

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);

  let a = createA('https://anyac18.github.io/call-flowers/floweropen.html', "Explore the Data", "_self");
  a.position((windowWidth/2)-(100), (windowHeight/2) + (200));
  a.addClass("link");


}

function draw(){

  var r = random();
  var l = random(0, 60);

  background("#fafef8");
  fill(0);
  strokeWeight(0.5);

  textAlign(CENTER, CENTER);
  textFont(spaceGrotesk);
  textSize(40);
  text("Call Flowers", windowWidth/2, (windowHeight/2) -100);
  textFont(publicSans);
  textSize(20);
  text("For 16 weeks, I recorded data about my calls; who they were with, where that person was, where I was, the length of the call, and more. \nI compiled the data into a garden of flower wheels, with each petal representing a single call.", windowWidth/2, windowHeight/2);

  xpos = 50;
  ypos = 50;
  linelength = 200;
  radian = 1;
  diameter = 80;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian - 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian - 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(79, 11, 92, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength - 10;
  radian = radian + 0.9;
  diameter = diameter + 40;

  pop();


  xpos = windowWidth;
  ypos = 200;
  linelength = 150;
  radian = 0.8;
  diameter = 80;
  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian - 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian - 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(79, 11, 92, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength - 10;
  radian = radian + 0.9;
  diameter = diameter + 40;

  pop();

  xpos = 800;
  ypos = windowHeight+50;
  linelength = 100;
  radian = 1.8;
  diameter = 80;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian - 0.4;
  diameter = diameter - 8;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian - 0.3;
  diameter = diameter + 10;



  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;



  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
    fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(52, 235, 95, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 10;
  radian = radian + 0.3;
  diameter = diameter + 10;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(107, 141, 240, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.4;
  diameter = diameter - 8;


  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(79, 11, 92, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.9;
  diameter = diameter + 0;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(255, 139, 55, 0.2)");
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength + 30;
  radian = radian + 0.01;
  diameter = diameter + 20;

  push();

  line((xpos), (ypos), ((xpos)+(linelength*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))));
  fill("rgba(187, 39, 193, 0.2)")
  circle(((xpos)+(linelength*(Math.cos(radian)))+((diameter/2)*(Math.cos(radian)))), ((ypos)+(linelength*(Math.sin(radian)))+((diameter/2)*(Math.sin(radian)))), diameter);
  linelength = linelength - 10;
  radian = radian + 0.9;
  diameter = diameter + 40;

  pop();

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
