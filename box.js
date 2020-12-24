class Box
{
     constructor(x,y,width,height)
    {
        var options={
                    restitution:0.8,
                    friction:1.0,
                    density:1.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        
        World.add(myworld,this.body);
    }
display()
{
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    var colr=random(100,255);
    var colg=random(100,255);
    var colb=random(100,255);
    fill(colr,colg,colb);
    rect(0,0,this.w,this.h);
    pop();
}
}

// display(){
//     console.log(this.body.speed);
//     if(this.body.speed < 3){
//      super.display();
//     }
//     else{
//       World.remove(world, this.body);
//        push();
//        this.Visiblity = this.Visiblity - 5;
//       tint(255,this.Visiblity);
//       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
//        pop();
//     }
    