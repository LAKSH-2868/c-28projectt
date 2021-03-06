class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution':0,
            'density':1.2,
            'friction':1
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.Image = loadImage("stone.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.Image, 0,0,this.r,this.r);
        pop();
    }
}