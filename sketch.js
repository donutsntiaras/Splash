var database;

var paint = [];
var present = [];
var position;

function setup(){
   canvas = createCanvas(400,400);
   canvas.mousePressed(startDrawing);   
   
   database = firebase.database();  
   
   var presentpos = database.ref('position');
   presentpos.on("value",readData);
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

function draw(){
   background(0); 
}

function recordPos(){
   database.ref('position').set({
      'x' : position.x + x,
      'y' : position.y + y
   });
}

function readData(data){
   position = data.val();
   paint.x = position.x;
   paint.y = position.y;
}



