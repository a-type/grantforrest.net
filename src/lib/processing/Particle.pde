class Particle {
  int radius;
  color c;
  float mass;
  PVector position, velocity, acceleration;
  boolean frozen; 
  float MAXSPEED = 12 * (width / 1000);
  float DAMPING = 0.99f;
   
  public Particle() {};
  public Particle(float x,float y,int radius,color c,float mass) {
    position = new PVector(x,y);
    velocity = new PVector(0,0);
    this.radius = radius;
    this.c = c;
    this.mass = mass;
    acceleration = new PVector(random(-10,10),random(-10,10));
    frozen = false;  
  }
  void display() {
      noStroke(); 
      fill(c);
      ellipse(position.x,position.y,radius,radius);
  }
  void update(float centerRad, float centerMass) {
    velocity.add(acceleration);
    velocity.limit(MAXSPEED);     
    velocity.mult(DAMPING);
    position.add(velocity);
    //bouncing
    if (position.x < 0 || position.x > width) {
      if (position.x < 0)
        position.x = 1;
      else if (position.x > width)
        position.x = width - 1;
      velocity.set(new PVector(-velocity.x, velocity.y));
      float magn = velocity.mag();
      velocity.normalize();
      velocity.mult(magn * (2f/3));
    }
    if (position.y < 0 || position.y > height) {
      if (position.y < 0)
        position.y = 1;
      else if (position.y > height)
        position.y = height - 1;
      velocity.set(new PVector(velocity.x, -velocity.y));
      float magn = velocity.mag();
      velocity.normalize();
      velocity.mult(magn * (2f/3));
    }
    PVector screenCenter = new PVector(width / 2, height / 2);
    screenCenter.sub(position);
    float distFromCenter = screenCenter.mag();
    screenCenter.normalize();
    float grav = 0.087384;
    screenCenter.mult(grav);
    acceleration.set(screenCenter);
    if (distFromCenter < centerRad - radius) {
      frozen = true;
    }
    else {
      frozen = false;
    }
  }
  void explode() {
    PVector screenCenter = new PVector(width / 2, height / 2);
    PVector pos = new PVector(random(width), random(height));
    pos.sub(screenCenter);
    float magn = pos.mag();
    magn = width / magn * 2;
    pos.normalize();
    pos.mult(random(0, 1) * magn * MAXSPEED);
   acceleration = pos; 
   frozen = false;
  }
  void setColor(color c) {
    this.c = c;
  }
  float getMass() {
    return mass;
  }
  PVector getPosition() {
    return position;
  }
  boolean getFrozen() {
    return frozen;
  }
  void setMomentum(PVector p) {
    p.mult(1f / mass);
    velocity.set(p);
    println("Velocity set to " + velocity);
    position.add(velocity); //get a head start
  }
  PVector getMomentum() {
    return new PVector(velocity.x * mass, velocity.y * mass);
  }
  boolean collidesWith(Particle other) {
    PVector myPos = new PVector(position.x, position.y);
    myPos.sub(other.position);
    float d = myPos.mag();
    if (d < radius + other.radius) {
      position.add(myPos);
      return true;
    }
    return false;
  }
}

