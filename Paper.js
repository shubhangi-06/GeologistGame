class Paper{
	constructor(x,y,width,height){
        var options = {
			'density': 2,
			'friction': 1,
			'restitution':0.1
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
        rotate(60);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("mintcream");
		rect(0,0,this.width,this.height);
		pop();
	}
}