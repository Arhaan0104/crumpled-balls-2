class Box{
    constructor(x,y,width,height){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    }
display(){
    var POS= this.body.position;
    fill("red");
    rectMode(CENTER);
    rect(POS.x,POS.y,this.width,this.height);
}
show(){
    var POS= this.body.position;
    fill("red");
    imageMode(CENTER);
    image(this.image,600,580,280,400);
}
}