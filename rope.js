class Rope {
constructor (bodyA,bodyB) {

    Var_option = {
bodyA:bodyA,
bodyB:bodyB,
stiffness :0.04,
length:10

    }
    this.rope =constraint.create(option);
    World.add(worrld,this.rope);
}
display(){
var pointA=this.rope.bodyA.position;
var pointB= this.rope.bodyB.position;
line(pointA.x,pointA.y,pointB.x,pointB.y)


}

}