class Iron{
	constructor(x,y,width,height){
        var options = {
			'density': 30,
			'friction': 3,
			'restitution':0.8
		};
		this.x=x;
		this.y=y;
        this.width=width;
        this.height=height;
		this.body = Bodies.rectangle(x, y, this.width, this.height, options);
		World.add(world, this.body);
	}
	display(){
        var pos = this.body.position;		
		push();
		translate(pos.x, pos.y);
		rotate(1.57);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("navajowhite");
        rect(0,0,this.width,this.height);
		pop();
	}
}