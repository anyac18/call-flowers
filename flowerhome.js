var table;
var slider;
var slideval;
var callid;
var flowers = [];
var buttons = [];
var squares = [];
var publicSans;
var sununix;
var satunix;
var num = 0;
var mysundate;
var mysatdate;
var guidename;
var aggregate;
var guiders;
var a;
var name = "all";
var x = 0;

function preload(){
  table = loadTable("frontenddev.php", "csv", "header");
  publicSans = loadFont("PublicSans-Regular.otf");
  neutralFace = loadFont("NeutralFace.otf");
  neueMetana = loadFont("NeueMetana-Regular.otf");
  modernist = loadFont("Sk-Modernist-Regular.otf");
  rigraf = loadFont("DXRigraf-SemiBoldExpanded.otf");
  spaceGrotesk = loadFont("SpaceGrotesk-Light.otf");
}

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
  //angleMode(DEGREES);

  let a = createA('https://webdev.iyaclasses.com/~aschung/acad280/frontenddev2.html', "Week by Week →", "_self");
  a.position(windowWidth-200, 50);
  a.addClass("link");

  mysundate = "Sun Jan 16 2022";
  mysatdate = "Sat Jan 22 2022";

  buttons.push(new Button((windowHeight/2)-300, 20, "mom", "rgba(79, 11, 92, 0.2)", "rgba(79, 11, 92, 1)", "Mom", false));
  buttons.push(new Button((windowHeight/2)-250, 20,"closefriend", "rgba(255, 139, 55, 0.2)", "rgba(255, 139, 55, 1)", "Close Friend", false));
  buttons.push(new Button((windowHeight/2)-200, 20,"mum", "rgba(255, 176, 212, 0.2)", "rgba(255, 176, 212, 1)", "Mum", false));
  buttons.push(new Button((windowHeight/2)-150, 20, "dad", "rgba(193, 39, 45, 0.2)",  "rgba(193, 39, 45, 1)",  "Dad", false));
  buttons.push(new Button((windowHeight/2)-100, 20, "friend", "rgba(52, 235, 95, 0.2)", "rgba(52, 235, 95, 1)", "Friend", false));
  buttons.push(new Button((windowHeight/2)-50, 20, "roommate", "rgba(187, 39, 193, 0.2)", "rgba(187, 39, 193, 1)", "Roommate", false));
  buttons.push(new Button((windowHeight/2), 20, "utility", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)", "Utility", false));
  buttons.push(new Button((windowHeight/2)+50, 20, "tristan", "rgba(107, 141, 240, 0.2)", "rgba(107, 141, 240, 1)", "Tristan", false));
  buttons.push(new Button((windowHeight/2)+100, 20, "all", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)", "All", true));

  squares.push(new Square((windowHeight/2)+250, 20, 2, "aggregate", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)", "Show aggregate calls", 1, 0));
  //squares.push(new Square((windowHeight/2)+300, 20, 2, "guide", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)", "Show guides", 0, 1));


  var petals = []; //holds one week worth of petals at a time
  var date = table.getString(0, 1).split("-");
  var time = table.getString(0, 2).split(":");
  var dateobj = new Date(date[0], date[1], date[2], time[0], time[1], time[2]);
  var lastday = dateobj.getDay();
  var color;
  var coloropaque;
  //var sundateobj;
  //var shortsat;

  var lastdate = table.getString(0, 1).split("-");
  var lasttime = table.getString(0, 2).split(":");
  var lastdateobj = new Date(date[0], int(date[1])-1, date[2], time[0], time[1], time[2]);

  for(var i=0; i<table.getRowCount(); i++){
    var id = table.getString(i, 0);
    var date = table.getString(i, 1).split("-");
    var mydate = table.getString(i, 1);
    var time = table.getString(i, 2).split(":");
    var who = table.getString(i, 3);
    var length = table.getString(i, 4);
    var distance = table.getString(i, 5);
    var dateobj = new Date(date[0], int(date[1])-1, date[2], time[0], time[1], time[2]);
    var hour = dateobj.getHours();
    var minute = dateobj.getMinutes();
    var linelength = ((Math.log(distance))*(windowWidth/50));
    var degree = ((dateobj.getDay()*(360/7))+(dateobj.getHours()*(360/168))+(dateobj.getMinutes()*(360/10080)));
    var radian = degree*(PI/180);
    //console.log(degree);
    console.log(dateobj);
    var unix = dateobj.getTime()/60000;
    //console.log(unix);


    var petal = new Petal(dateobj, who, length, distance, radian, unix, linelength, day);

    if(lastday == 6 && dateobj.getDay()< 5){
      flowers.push(new Flower(petals, num));
      //sundateobj = truncateString(String(dateobj), 16);
      //var satdateobj = new Date(date[0], int(date[1])-1, int(date[2])+6);
      //var shortsat = truncateString(String(satdateobj), 16);
      //console.log("sunday is "+sundateobj);
      //console.log("saturday is "+shortsat);
      petals = [];
    } else{
      petals.push(petal);
    }


    lastday = dateobj.getDay();
    //console.log(lastday, hour, minute, degree, linelength);

    if(i == 1){
      var firstdate = table.getString(1, 1).split("-");
      var firsttime = table.getString(1, 2).split(":");
      firstdateobj = new Date(firstdate[0], int(firstdate[1])-1, firstdate[2], firsttime[0], firsttime[1], firsttime[2]);
      //console.log("firstdateobj =" +firstdateobj);
      var firstunix = firstdateobj.getTime()/60000;
      console.log(firstunix);
    }

    var lastrow = int(table.getRowCount());
    //console.log("last row is " +lastrow);
    if(i == (lastrow-1)){
      var lastdate = table.getString(lastrow-1, 1).split("-");
      var lasttime = table.getString(lastrow-1, 2).split(":");
      lastdateobj = new Date(lastdate[0], int(lastdate[1])-1, lastdate[2], lasttime[0], lasttime[1], lasttime[2]);
      //console.log("lastdateobj =" +lastdateobj);
      var lastunix = lastdateobj.getTime()/60000;
      console.log(lastunix);
    }


    //flowers.push(new Flower(time, who, length, distance));
  }


  slider = createSlider(firstunix, lastunix, 0, 1); //(start, finish, default, step)
//  slider = createSlider(0, 360, 0, 1);
  slider.position((windowWidth/2)-300, 50);
  slider.style("width", "600px");
  //slider.style("transform", "rotate(90deg)");
  slider.input(updateSlider);
  slider.addClass("mySliders");


}


function draw(){


  var guideradian = (2*PI)/7;
  var radianfix = 90*(PI/180);
  var guidelength = (Math.log(3000))*(windowWidth/50);
  var guidelength2 = (Math.log(1000))*(windowWidth/50);
  var guidelength3 = (Math.log(200))*(windowWidth/50);

  background("#fafef8");
  fill(0);
  strokeWeight(0.25);
  //textFont(neueMetana);
  // textFont(spaceGrotesk);
  // fill(0);
  // textSize(22);
  // text("Flower Calls", 50, 50);

  noStroke();
  fill("#929292");
  textFont(publicSans);
  textSize(15);
  text("Sun", (windowWidth/2)+10, ((windowHeight/2)-guidelength)+25);
  text("Mon", (((windowWidth/2)+(guidelength*(Math.cos(guideradian-radianfix))))-20), (((windowHeight/2)+(guidelength*(Math.sin(guideradian-radianfix)))))+40);
  text("Tue", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*2)-radianfix))))-40), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*2)-radianfix)))))+20);
  text("Wed", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*3)-radianfix))))-50), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*3)-radianfix)))))-10);
  text("Thu", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*4)-radianfix))))-25), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*4)-radianfix)))))-30);
  text("Fri", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*5)-radianfix))))+10), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*5)-radianfix)))))-20);
  text("Sat", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*6)-radianfix))))+20), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*6)-radianfix))))));
  noFill();
  stroke("#929292");
  line((windowWidth/2), (windowHeight/2), (windowWidth/2), ((windowHeight/2)-guidelength));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos(guideradian-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin(guideradian-radianfix)))));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((2*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((2*guideradian)-radianfix)))));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((3*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((3*guideradian)-radianfix)))));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((4*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((4*guideradian)-radianfix)))));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((5*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((5*guideradian)-radianfix)))));
  line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((6*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((6*guideradian)-radianfix)))));
  circle((windowWidth/2), (windowHeight/2), (guidelength*2));
  circle((windowWidth/2), (windowHeight/2), (guidelength2*2));
  circle((windowWidth/2), (windowHeight/2), (guidelength3*2));
  fill("#929292");
  textSize(12);
  text("3000 mi", (windowWidth/2)+(guidelength*(Math.cos(0))), (windowHeight/2)+10);
  text("1000 mi", (windowWidth/2)+(guidelength2*(Math.cos(0))),( windowHeight/2)-20);
  text("200 mi", (windowWidth/2)+(guidelength3*(Math.cos(0))), (windowHeight/2)-30);

  stroke("#929292");
  noFill();
  //rect((windowWidth/10)-120, (windowHeight/2)+ 300, 250, 10);
  fill("#929292");
  textFont(publicSans);
  textSize(15);

  text("Length of a line = distance mapped \nto the natural log", (windowWidth/10)-100+10, windowHeight-350+50);
  text("Circle size = length of the call", (windowWidth/10)-100+10, windowHeight-350+130);
  text("Each full rotation is one week, \nwith Sunday at 0°", (windowWidth/10)-100+10, windowHeight-350+200);

  textFont(spaceGrotesk);
  fill(0);
  textSize(22);

  if(guidename == "aggregate"){
    text("Sun Jan 16 2022", (windowWidth/10)-100, 50);
    text("to", (windowWidth/10)-100, 75);
    text(mysatdate, (windowWidth/10)-100, 100);
  }
  else{
  text(mysundate, (windowWidth/10)-100, 50);
  text("to", (windowWidth/10)-100, 75);
  text(mysatdate, (windowWidth/10)-100, 100);
}

  for(var i=0; i<flowers.length; i++){
    flowers[i].display();
  }

  for(var i=0; i<buttons.length; i++){
    buttons[i].display();
  }

  for(var i=0; i<squares.length; i++){
      squares[i].display();
    }

  for(var i=0; i<27534380; i++){
    slider.value(x);
    x = x+1;
  }

}

function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit);
  } else {
    return string
  }
}



function updateSlider(){
  slideval = slider.value();
  console.log(slideval);
  var sunstring = "2022-01-16";
  var sundate = sunstring.split("-");
  var sundateobj = new Date(sundate[0], int(sundate[1])-1, int(sundate[2])+num, 0, 0, 0);
  var satdateobj = new Date(sundate[0], int(sundate[1])-1, int(sundate[2])+6+num, 23, 59, 0);
  sununix = sundateobj.getTime()/60000;
  satunix = satdateobj.getTime()/60000;
  console.log("first sunday "+sununix);
  console.log("first saturday "+satunix);


  // console.log("THE SUNDAY IS "+sundateobj);
  // console.log("SUNUNIX IS "+sununix);
  if(slideval>sununix && slideval<satunix){
    mysundate = truncateString(String(sundateobj), 15);
    mysatdate = truncateString(String(satdateobj), 15);
    //console.log("SUNDATE IS "+sundateobj);
    //console.log("SATDATE IS "+satdateobj);
  }
  else if(slideval>satunix){
    num = num+7;
  }
  else if(slideval<sununix){
    num = num-7;
  }
    }

function mouseClicked(){
  for(var i=0; i<buttons.length; i++){
    buttons[i].mouseClicked();
    // if(buttons[i].pressed){
    //   var name = buttons[i].name;
    // }
  }

}
function mousePressed(){
  for(var i=0; i<squares.length; i++){
    squares[i].mousePressed();
  }
  if(mouseY <50 && mouseX>=(windowWidth-200)){
    window.open("https://webdev.iyaclasses.com/~aschung/acad280/frontenddev2.html");
  }
}


function mouseReleased(){
  for(var i=0; i<squares.length; i++){
    squares[i].mouseReleased();
  }
}

function dataLoaded(){
  console.log(table);


}

function dataLoadError(){
  console.log("data load error");

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  for(var i=0; i<buttons.length; i++){
    buttons[i].x = windowWidth-(300);
  }
  for(var i=0; i<squares.length; i++){
    squares[i].x = windowWidth-(350);
  }
  slider.position((windowWidth - (windowWidth/4.5)), windowHeight/2);
}


class Button{
  constructor(y, diameter, name, color, coloropaque, displayname, clicked){
    this.x = windowWidth-(300);
    this.y = y+50;
    this.diameter = diameter;
    this.name = name;
    this.color = color;
    this.coloropaque = coloropaque;
    this.displayname = displayname;
    this.clicked = clicked;
  }



  display(){
    push();
      if(this.clicked == true){
        noStroke();
        translate(this.x, this.y);
        fill(this.coloropaque);
        strokeWeight(0.5);
        circle(0, 0, this.diameter);
      } else{
        noStroke();
        translate(this.x, this.y);
        fill(this.color);
        strokeWeight(0.5);
        circle(0, 0, this.diameter);
    }
  //  textAlign(LEFT);
    textFont(publicSans);
    fill(this.coloropaque);
    textSize(15);
    text(this.displayname, 30, 0+this.diameter/4);
    //rect(0, 0, this.w, this.h, 10);
  //  textAlign(CENTER);
  //  fill(0);
    //text(this.name, this.w/2, this.h/2);
    pop();
  }

  isOver(){
    if(mouseX > this.x-(this.diameter/2) && mouseX < this.x+(this.diameter/2)){
      if(mouseY > this.y-(this.diameter/2) && mouseY < this.y+(this.diameter/2)){ //checking to see if mouse in on the button
        return true; //return command with exit the function entirely
      //  console.log("over");
      }
      return false;
    }

  }


  mouseClicked(){
    if(this.isOver()){
      //console.log(this.name +" pressed");
      this.clicked = true;
      name = this.name;
      console.log("this name is "+name);
    }
    if(this.isOver() == false){
      this.clicked = false;
    }

  }

}




class Square{
  constructor(y, height, radius, guidename, color, coloropaque, displayname, aggregate, guiders){
    this.x = windowWidth-(350);
    this.y = y;
    this.height = height;
    this.length = length;
    this.radius = radius;
    this.guidename = guidename;
    this.aggregate = aggregate;
    this.guiders = guiders;
    this.color = color;
    this.coloropaque = coloropaque;
    this.displayname = displayname;
    this.pressed = false;
    this.oldpressed = false;
  }

  display(){
    var radianfix = 90*(PI/180);
    push();
      if(this.pressed == true){
        strokeWeight(0.5);
        translate(this.x, this.y);
        fill(this.coloropaque);
        rect(0, 0, this.height, this.height, this.radius);
      } else{
          strokeWeight(0.5);
        translate(this.x, this.y);
        fill(this.color);
        rect(0, 0, this.height, this.height, this.radius);
    }
  //  textAlign(LEFT);
    noStroke();
    textFont(publicSans);
    fill(this.coloropaque);
    textSize(15);
    text(this.displayname, 40, this.height-(this.height/4));
    //rect(0, 0, this.w, this.h, 10);
  //  textAlign(CENTER);
  //  fill(0);
    //text(this.name, this.w/2, this.h/2);
    pop();

    // if(guiders == 1){
    //   noStroke();
    //   fill("#929292");
    //   textFont(publicSans);
    //   textSize(15);
    //   text("Sun", (windowWidth/2)+10, ((windowHeight/2)-guidelength)+25);
    //   text("Mon", (((windowWidth/2)+(guidelength*(Math.cos(guideradian-radianfix))))-20), (((windowHeight/2)+(guidelength*(Math.sin(guideradian-radianfix)))))+40);
    //   text("Tue", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*2)-radianfix))))-40), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*2)-radianfix)))))+20);
    //   text("Wed", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*3)-radianfix))))-50), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*3)-radianfix)))))-10);
    //   text("Thu", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*4)-radianfix))))-25), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*4)-radianfix)))))-30);
    //   text("Fri", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*5)-radianfix))))+10), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*5)-radianfix)))))-20);
    //   text("Sat", (((windowWidth/2)+(guidelength*(Math.cos((guideradian*6)-radianfix))))+20), (((windowHeight/2)+(guidelength*(Math.sin((guideradian*6)-radianfix))))));
    //   noFill();
    //   stroke("#929292");
    //   line((windowWidth/2), (windowHeight/2), (windowWidth/2), ((windowHeight/2)-guidelength));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos(guideradian-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin(guideradian-radianfix)))));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((2*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((2*guideradian)-radianfix)))));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((3*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((3*guideradian)-radianfix)))));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((4*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((4*guideradian)-radianfix)))));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((5*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((5*guideradian)-radianfix)))));
    //   line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(guidelength*(Math.cos((6*guideradian)-radianfix)))), ((windowHeight/2)+(guidelength*(Math.sin((6*guideradian)-radianfix)))));
    //   circle((windowWidth/2), (windowHeight/2), (guidelength*2));
    //   circle((windowWidth/2), (windowHeight/2), (guidelength2*2));
    //   circle((windowWidth/2), (windowHeight/2), (guidelength3*2));
    //   fill("#929292");
    //   textSize(12);
    //   text("3000 mi", (windowWidth/2)+(guidelength*(Math.cos(0))), (windowHeight/2)+10);
    //   text("1000 mi", (windowWidth/2)+(guidelength2*(Math.cos(0))),( windowHeight/2)-20);
    //   text("200 mi", (windowWidth/2)+(guidelength3*(Math.cos(0))), (windowHeight/2)-30);
    // }
  }

  squareOver(){
    if(mouseX > this.x-(this.height) && mouseX < this.x+(this.height)){
      if(mouseY > this.y-(this.height) && mouseY < this.y+(this.height)){ //checking to see if mouse in on the button
        return true; //return command with exit the function entirely
      //  console.log("over");
      }
      return false;
    }
  }

  mousePressed(){
    if(this.squareOver() && this.oldpressed == false){
      //console.log(this.name +" pressed");
      this.pressed = true;
      if(this.aggregate == 1){
        aggregate = 1;
      }
      if(this.guiders == 1){
        guiders = 1;
      }
      // guidename = this.guidename;
      // console.log(guidename);
    }
    if(this.squareOver() && this.oldpressed == true){
      this.pressed = false;
      if(this.aggregate == 1){
        aggregate = 0;
      }
      if(this.guiders == 1){
        guiders = 0;
      }
      // guidename = undefined;
      // console.log(guidename);
    }
  }

  mouseReleased(){
    if(this.squareOver() && this.pressed == true){
      this.oldpressed = true;
    }
    if(this.squareOver() && this.pressed == false){
      this.oldpressed = false;
    }
  }
}

class Flower{
  constructor(petals, num){
    this.petals = petals;
    this.num = num;
    console.log("NEW FLOWER");
  }
  display(){
    //if(slideval-this.petals[0].unix>10080){
      // do not draw petals
    //}else{
      for(var i=0; i<this.petals.length; i++){
        this.petals[i].display();
      }
    //}
  }
}

class Petal{ //this is class petal, actually. class flower should be each week
  constructor(dateobj, who, length, distance, radian, unix, linelength, day){
    this.dateobj = dateobj;
    this.who = who;
    this.length = length*(windowWidth/850);
    this.distance = distance;
    this.radian = radian;
    this.unix = unix;
    this.linelength = linelength;
    this.day = this.dateobj.getDay();
    //console.log(this.day);


//flower loops petals, draw loops flower
  }

  display(){
    stroke(0);
    var radianfix = 90*(PI/180);
    //fill(20, 20, 60, 40);
      if(this.who == "mum"){
        fill('rgba(255, 176, 212, 0.2)')
      }
      else if(this.who == "mom"){
        fill('rgba(79, 11, 92, 0.2)')
      }
      else if(this.who == "tristan"){
        fill('rgba(107, 141, 240, 0.2)')
      }
      else if(this.who == "friend"){
        fill('rgba(52, 235, 95, 0.2)')
      }
      else if(this.who == "closefriend"){
        fill('rgba(255, 139, 55, 0.2)')
      }
      else if(this.who == "dad"){
        fill('rgba(193, 39, 45, 0.2)')
      }
      else if(this.who == "roommate"){
        fill('rgba(187, 39, 193, 0.2)')
      }
      else if(this.who == "utility"){
        fill('rgba(0, 0, 0, 0.2)')
      }



      if(aggregate == 1){
        if(this.unix<slideval && this.who == name){
            line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))));
            circle(((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
      }
      else if(this.unix<slideval && name == "all"){
            line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))));
            circle(((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
    }
      }

    else if(this.unix<slideval && this.who == name){
        //if(slideval-this.unix<10080){
          if(this.unix<satunix && this.unix>sununix){
          line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))));
          circle(((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
        }
        //}
    } else if(this.unix<slideval && name == "all"){
      if(this.unix<satunix && this.unix>sununix){
    //  if(slideval-this.unix<10080){
          line((windowWidth/2), (windowHeight/2), ((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))));
          circle(((windowWidth/2)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((windowHeight/2)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
          }
  //  }
  }


      }
  }
