class bin{
    constructor(x,y,width,height){
        var options={
            'isStatic': true,
            'restitution':0,
            'density':1.2
            
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    this.image=loadImage('dustbin.png')
 this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    
    
World.add(world,this.body);

    }
    display(){
push();
        imageMode(CENTER);
       // rect(this.x,this.y,this.width,this.height);
image(this.image,0,100,200,200);
pop();
    }
}