class Black {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
       };
       this.image= loadImage("blackcoin.png");
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      var pos = this.body.position;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
      pop();
    }
  }
  