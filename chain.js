class Chain{
    constructor(bodyA,pointB){
        var setting = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 120
        }
        this.pointB = pointB;
        this.chain = Constraint.create(setting);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body 
    }
    display(){
        if (this.chain.bodyA){ 
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
        fly(){
            this.chain.bodyA = null
        }
}