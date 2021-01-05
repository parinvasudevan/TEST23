class Paper {
    constructor (x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body=Bodies.circle(x,y,radius,options)
    this.r=radius
    this.image=loadImage("Sprites/Paper.png")
      }
display() {
    
    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
            imageMode(CENTER)
            image(this.image,0,0,this.radius);
			ellipse(0,0,this.r, this.r);
			pop()

  }
    
}