class ground
{
constructor(width,height)
{
var options={
    isStatic:true
}
this.x=0;
this.y=670;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
    rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
    }
}                                                           