float centerMass;
float centerRadius;
ArrayList particles;
float defaultCM;
float timeSinceExplode = 0;
boolean collide = false;
PFont font;

void setup() {
  defaultCM = 20;
  centerMass = 0;
  centerRadius = 0;
  particles = new ArrayList();
  size(1920, 1080);
  background(0);
  frameRate(30);
  addParticles();
  font = loadFont("SegoeWP-12.vlw");
  textFont(font);
}

void addParticles(){
 for (int i = 0; i < 100; i++) {
    particles.add(new Particle(random(0, width), random(0, height), 3, color(200, 200, 200, 255), 1.3f));
  }
}

void draw() {
  timeSinceExplode += 0.1f;
  rectMode(CORNER);
  noStroke();
  fill(255,255,255,90);
  rect(0,0,width,height);
  fill(255);

  float frozenMass = 0;
   for (Object o : particles) {
     Particle part = (Particle)o;
     if (!part.getFrozen() || timeSinceExplode < 10f) {
       part.update(centerRadius, centerMass);
     }
     if (part.getFrozen()) {
       frozenMass += part.getMass();
     }
   } 
   if (collide) {
     ArrayList tempP = new ArrayList(particles);
     while (tempP.size() > 1) {
       for (int o = 1; o < tempP.size(); o++) {
         Particle a = (Particle)tempP.get(0);
         Particle b = (Particle)tempP.get(o);
         if (a.collidesWith(b)) {
           PVector aMom = a.getMomentum();
           a.setMomentum(b.getMomentum());
           b.setMomentum(aMom);
         }
       }
       tempP.remove(0);
     }
   }
   centerMass = defaultCM + frozenMass;
   if (centerMass > 130)
   {
     for (Object o : particles) {
       Particle part = (Particle)o;
       part.explode();
       timeSinceExplode = 0;
     }
   }
   centerRadius = centerMass / 2;
   for (Object o : particles) {
    Particle part = (Particle)o;
     part.display();
   }
   float shakeX, shakeY;
   float shakeFactor = (centerMass / 60) * (centerMass / 60);
   shakeX = random(-shakeFactor, shakeFactor);
   shakeY = random(-shakeFactor, shakeFactor);
   ellipse(width /2 + shakeX, height /2 + shakeY, centerRadius *2, centerRadius * 2);
   //println(((Particle)particles.get(0)).getPosition());
}
