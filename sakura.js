class sakura {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.p1 = createVector(-75, -100);
    this.p2 = createVector(6, -36);
    this.p3 = createVector(0, 0);
    this.p4 = createVector(-59, 50);
    this.p5 = createVector(0, -30);
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(255, 171, 246);
    stroke(128, 102, 153);
    for (let i = 0; i < 5; i++) {
      rotate(-72);
      curve(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y, this.p4.x, this.p4.y);
      triangle(this.p5.x, this.p5.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);

      curve(this.p1.x + 138, this.p1.y, this.p2.x - 12, this.p2.y, this.p3.x, this.p3.y, this.p4.x + 118, this.p4.y);
      triangle(this.p5.x, this.p5.y, this.p2.x - 12, this.p2.y, this.p3.x, this.p3.y);
    }
    for (let i = 0; i < 5; i++) {
      fill(255);
      rotate(-72);
      ellipse(10, 10, 5);
      fill(255, 171, 246);
    }
    pop();
  }
}