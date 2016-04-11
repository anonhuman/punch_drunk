function Rectangle(tempx, tempy){

	this.x = tempx;
	this.y = tempy;

	this.speed = random(3);
	this.w = random(200);
	this.h = this.w;
	this.offset = 0;
	
	this.select = random(0,3);


	


	this.display = function(){
		stroke('rgba(255, 255, 255, .5)');
		strokeWeight(5);
		noFill();

		if(this.select < 1 ){
			fill(150, 0, 0, 70);
		} else if (this.select < 2){
			fill(100, 0, 0, 70);
		} else if(this.select < 3 ){
			fill(50, 0, 0, 70);
		}else {
			fill(0 ,0, 0, 70);
		}
		rectMode(CENTER);
	//	rect(this.x - this.offset/4, this.y + this.offset, this.w + this.offset, this.h + this.offset);
		rect(this.x, this.y, this.w + this.offset, this.h + this.offset);
	}




	this.move = function(){
		this.x = this.x - this.speed;

		}

	this.offScreen = function(){
		if(this.y < 0){
			return(true);
		} else {
			return(false);
		}
	}

	this.criteria = function(){
		var distance = dist(this.x, this.y, mouseX, mouseY);
		if(distance<30){
			return(true);
		}else {
			return(false);
		}
	}

	this.echo = function(){
		this.offset = 20;
		this.display();
		this.offset = 40;
		this.display();
		this.offset = 60;
		this.display();
		}


}