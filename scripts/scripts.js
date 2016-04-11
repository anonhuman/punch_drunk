var numRect = 200;
var rectangle = [];

var colvalue = 20;

var value = {
  r:60,
  g:colvalue,
  b:colvalue,
}


function setup() {
	

	var canvas = createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < numRect; i++){
		//'push' is adding a new value to the end of the array
		rectangle.push(new Rectangle(random(0, windowWidth), random(0, windowHeight)));
	}
}

function draw(){
	background(value.r, value.g, value.b);
  

	for(var i = 0; i < rectangle.length; i++){
		rectangle[i].display();
		rectangle[i].move();
	}
	
	for(var i = rectangle.length-1; i >= 0; i--){
		var aRect = rectangle[i];
		if(aRect.offScreen()== true){
			//'splice' instead of leaving an empty spot in the array it squishes it together
			rectangle.splice(i, 1);
		} else if(aRect.criteria() == true){
			aRect.echo();
	}
	
}
	console.log(rectangle.length);
}

function mouseMoved(){
	value.r = value.r + 3; 
  if (value.r > 255) {
    value.r = 10;
}
	colvalue = 	colvalue + 1;
	if(colvalue > 100){
		colvalue = 20;
	}

}



function windowResize(){
	resizeCanvas(windowWidth, windowHeight);
}
