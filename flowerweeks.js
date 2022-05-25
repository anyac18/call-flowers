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
var num;
var mysundate;
var mysatdate;
var guidename;
var aggregate;
var guiders;
var name = "all";



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

  let a = createA('https://anyac18.github.io/call-flowers/flowerhome.html', "← Back", "_self");
  a.position(50, windowHeight-100);
  a.addClass("link");
  num = 1;

  buttons.push(new Button((windowHeight/2)-300, 20, "mom", "rgba(79, 11, 92, 0.2)", "rgba(79, 11, 92, 1)", "Mom", false));
  buttons.push(new Button((windowHeight/2)-250, 20,"closefriend", "rgba(255, 139, 55, 0.2)", "rgba(255, 139, 55, 1)", "Close Friend", false));
  buttons.push(new Button((windowHeight/2)-200, 20,"mum", "rgba(255, 176, 212, 0.2)", "rgba(255, 176, 212, 1)", "Mum", false));
  buttons.push(new Button((windowHeight/2)-150, 20, "dad", "rgba(193, 39, 45, 0.2)",  "rgba(193, 39, 45, 1)",  "Dad", false));
  buttons.push(new Button((windowHeight/2)-100, 20, "friend", "rgba(52, 235, 95, 0.2)", "rgba(52, 235, 95, 1)", "Friend", false));
  buttons.push(new Button((windowHeight/2)-50, 20, "roommate", "rgba(187, 39, 193, 0.2)", "rgba(187, 39, 193, 1)", "Roommate", false));
  buttons.push(new Button((windowHeight/2), 20, "utility", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)", "Utility", false));
  buttons.push(new Button((windowHeight/2)+50, 20, "tristan", "rgba(107, 141, 240, 0.2)", "rgba(107, 141, 240, 1)", "Tristan", false));
  buttons.push(new Button((windowHeight/2)+100, 20, "all", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)", "All", true));

  var petals = [];
  var date = table.getString(0, 1).split("-");
  var time = table.getString(0, 2).split(":");
  var dateobj = new Date(date[0], date[1], date[2], time[0], time[1], time[2]);
  var lastday = dateobj.getDay();


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
    var linelength = ((Math.log(distance))*(10));
    var degree = ((dateobj.getDay()*(360/7))+(dateobj.getHours()*(360/168))+(dateobj.getMinutes()*(360/10080)));
    var radian = degree*(PI/180);
    //console.log(degree);
    console.log(dateobj);
    var unix = dateobj.getTime()/60000;
    //console.log(unix);


    var petal = new Petal(dateobj, who, length, distance, radian, unix, linelength, day);

    if(lastday == 6 && dateobj.getDay()< 5){
      flowers.push(new Flower(petals, num));
      num = num +1;
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
      //console.log(firstunix);
    }

    var lastrow = int(table.getRowCount());
    //console.log("last row is " +lastrow);
    if(i == (lastrow-1)){
      var lastdate = table.getString(lastrow-1, 1).split("-");
      var lasttime = table.getString(lastrow-1, 2).split(":");
      lastdateobj = new Date(lastdate[0], int(lastdate[1])-1, lastdate[2], lasttime[0], lasttime[1], lasttime[2]);
      //console.log("lastdateobj =" +lastdateobj);
      var lastunix = lastdateobj.getTime()/60000;
      //console.log(lastunix);
    }


    //flowers.push(new Flower(time, who, length, distance));
  }



}


function draw(){
  background("#fafef8");
  fill(0);
  strokeWeight(0.25);
  textFont(spaceGrotesk);
  fill(0);
  textSize(22);

  text("Flower Calls", 50, 50);


  for(var i=0; i<buttons.length; i++){
    buttons[i].display();
  }


  for(var i=0; i<flowers.length; i++){
    flowers[i].display();
  }

}

function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit);
  } else {
    return string
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
  if(mouseY >(windowHeight-200) && mouseX<100){
    window.open("https://webdev.iyaclasses.com/~aschung/acad280/frontenddev.html");
  }
}

class Button{
  constructor(y, diameter, name, color, coloropaque, displayname, clicked){
    this.x = 80;
    this.y = y+40;
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

class Flower{
  constructor(petals, num){
    this.petals = petals;
    this.num = num
    console.log("NEW FLOWER");
    console.log(this.num);
  }
  display(){
      for(var i=0; i<this.petals.length; i++){
        this.petals[i].display();
      }
    if(this.num % 5 == 0){
        translate(-4*(windowWidth/6), 200)
      }
    else{
      translate(windowWidth/6, 0);
    }
  }
}

class Petal{ //this is class petal, actually. class flower should be each week
  constructor(dateobj, who, length, distance, radian, unix, linelength, day){
    this.dateobj = dateobj;
    this.who = who;
    this.length = length;
    this.distance = distance;
    this.radian = radian;
    this.unix = unix;
    this.linelength = 3*(linelength/4);
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

      if(this.who == name){
        line((windowWidth/6), (200), ((windowWidth/6)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((200)+(this.linelength*(Math.sin(this.radian-radianfix)))));
        circle(((windowWidth/6)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((200)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
    }
    else if(name == "all"){
      line((windowWidth/6), (200), ((windowWidth/6)+(this.linelength*(Math.cos(this.radian-radianfix)))), ((200)+(this.linelength*(Math.sin(this.radian-radianfix)))));
      circle(((windowWidth/6)+(this.linelength*(Math.cos(this.radian-radianfix)))+((this.length/2)*(Math.cos(this.radian-radianfix)))), ((200)+(this.linelength*(Math.sin(this.radian-radianfix)))+((this.length/2)*(Math.sin(this.radian-radianfix)))), this.length);
  }



      }
  }
