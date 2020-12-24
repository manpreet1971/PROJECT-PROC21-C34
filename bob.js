class Bob
{
    constructor(xpos,ypos,r)
    {
        var options={
            restitution:0.8,
            friction:0.3,
            density:0.8,
             }
        
        this.body=Bodies.circle(xpos,ypos,r,options);
        this.r=r;
        
        World.add(myworld,this.body);
    }
    display()
    {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.r,this.r);
     }

}