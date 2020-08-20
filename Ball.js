class Ball{
    constructor(x,y,radius){

        var ball_option = {
            'restitution':0.5,
            'friction':0.3,
            'density':1.2
           }
        this.body=Bodies.circle(x,y,radius,ball_option);
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
    var pos=this.body.position;
    push();
    translate (pos.x,pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();

    }
}