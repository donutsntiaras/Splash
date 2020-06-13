var database;

var paint = [];
var drawing = [];
var position;

function setup(){
   canvas = createCanvas(400,400);
   //canvas.mousePressed(startDrawing);   
   
   database = firebase.database();  
      
}

/*function startDrawing(){
   present = [];
   paint.push(present);
}*/


function mouseDragged(){
   var point = {
      x: mouseX,
      y: mouseY
   }
   paint.push(point);  
   var dref = dtatabase.ref('drawing');
   dref.set({
      "d": paint
   })   
}

function draw(){
   background(0); 
   recordPos();
   stroke(255);
   strokeWeight(4);
   noFill();
   //beginShape();
   for(var j = 0; j> drawing.length; j++){
      vertex(drawing[j].x,drawing[j].y);
      endShape();
   }
      
    
}

function recordPos(){
   database.ref('drawing/').on('value', (data) => {
      paint = data.val().d
  })
}





