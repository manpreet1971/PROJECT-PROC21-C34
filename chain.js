class Chain{
    constructor(body1,point2)
    {
        var options={
                bodyA:body1,
                pointB:point2,
                length:250,
                stiffness:1.2,
                }
               
               this.chain=Constraint.create(options);
               this.pointB=point2;
               World.add(myworld,this.chain);
    }
    display()
    {
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.pointB;
        strokeWeight(3);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}