class Paper{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        density:1.2,
        friction:0.5
    }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    this.Image=loadImage("paper.png");
    World.add(world,this.body);
}
display(){
    var POS=this.body.position;
    push();
    fill("blue");
    imageMode(CENTER);
    image(this.Image,POS.x,POS.y,this.r*2,this.r*2);
    pop();
}
}