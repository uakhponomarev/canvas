const maxSpeed = 3000,
      maxHexColorNumber = 255;

class CanvasRandom {

  constructor(canvasElement) {
    this.canvasElement = canvasElement;
  }

  getHexColor() {
    return '#' +
      this.randomNumer(maxHexColorNumber).toString(16) +
      this.randomNumer(maxHexColorNumber).toString(16) +
      this.randomNumer(maxHexColorNumber).toString(16);
  }

  getPositionX(targetElementWidth) {
    return this.randomNumer(this.canvasElement.offsetWidth);
  }

  getPositionY(targetElementHeight) {
    return this.randomNumer(this.canvasElement.offsetHeight);
  }

  getSpeed() {
    return this.randomNumer(maxSpeed);
  }

  randomNumer(range) {
    return Math.ceil(Math.random() * range);
  }

}

const canvEl = document.getElementById('canvas');
const randCanv = new CanvasRandom(canvEl);
