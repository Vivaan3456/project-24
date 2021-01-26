class Rubber{
    constructor(x,y,radius){
        var options={
            'density':1,
            'restitution':0.3,
            'friction':5
        }
        this.body=Bodies.rectangle(x,y,radius,options)
        this.width=width
        this.height=height
        this.radius=radius
        World.add(world,this.body)
    
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(3)
        stroke("white")
        fill("yellow")
        ellipseMode(RADIUS);
        radius(0,0,this.width,this.radius);
        pop()
    
    }
}