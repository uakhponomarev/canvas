class Rectangle {

  constructor(context, x, y, width, height, color) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    rectangels.push(this);

  }

  clear() {
    this.context.beginPath();
    rectangels = rectangels.filter((el) => !this.equals(el));
    this.context.clearRect(this.x, this.y, this.width, this.height);
  }

  moveDown() {
    this.clear();
    this.context.beginPath();
    this.y += randCanv.randomNumer(3);
    new Rectangle(this.context, this.x, this.y, this.width, this.height, this.color);
    if (this.y < 480) {
      requestAnimationFrame(this.moveDown.bind(this));
    }
  }

  isClickInRange(targetX, targetY) {
    if ((targetX >= this.x && targetX <= this.x + rectSize) &&
      (targetY >= this.y && targetY <= this.y + rectSize)) {
      return true;
    }
    return false;
  }

  equals(otherRect) {
    if (this.x === otherRect.x &&
      this.y === otherRect.y &&
      this.width === otherRect.width &&
      this.height === otherRect.height &&
      this.color === otherRect.color) {
      return true;
    }
    return false;
  }
}






