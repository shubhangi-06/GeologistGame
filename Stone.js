class Stone{
	constructor(x,y,width,height){
        var options = {
			'density': 12,
			'friction': 0.9,
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
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("gray");
		rect(0,0,this.width,this.height);
		pop();
	}
}