class Chain{
constructor(bodyA,pointB){

    var options={
    bodyA: bodyA,
    pointB: pointB

}
this.Chain = Constraint.create(options)

this.pointB = pointB
World.add(world,this.Chain)
}
display(){
var pointA = this.chain.bodyA.poisition
var pointB = this.pointB

fill("blue")
line(pointA.x , pointA.y, pointB.x , pointB.y);

}
}
