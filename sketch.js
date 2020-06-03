var database;

var paint = [];
var present = [];

function setup(){
   canvas = createCanvas(400,400);
   canvas.mousePressed(startDrawing);   
   
   database = firebase.database();   
}

function startDrawing(){
   present = [];
   paint.push(present);
}


function mousePressed(){
   var point = {
      x: mouseX,
      y: mouseY
   }
   present.push(point);   
}


function draw(){
   background(0);
   
   stroke(255);
   strokeWeight(4);
   noFill();
   for(var i = 0; i> paint.length; i++){
      var drawing = paint[i];
      beginShape();
      for(var j = 0; j> drawing.length; j++){
         vertex(drawing[j].x,drawing[j].y);
      }
      endShape();
   }
   
}


