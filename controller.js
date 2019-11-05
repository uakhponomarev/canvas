
var animation,
  timeout,
  rectangels = [];

const rectSize = 50,
  score = document.getElementById('score');

class Controller {
  constructor(canvas) {
    this.canvas = canvas.link;
    this.context = this.canvas.getContext('2d');
    this.isStarted = false;
  }

  start() {
    this.isStarted = true;
    score.innerHTML = 0;
    this.animate.call(this);
  }

  stop() {
    this.isStarted = false;
    clearTimeout(timeout);
    cancelAnimationFrame(animation);
    setTimeout(() => this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientWidth), maxSpeed);
  }

  animate() {

    let ctx = this.context,
      x = randCanv.getPositionX(),
      y = randCanv.randomNumer(30),
      color = randCanv.getHexColor(),
      width = rectSize,
      height = rectSize;

    new Promise((resolve, reject) => {
      timeout = setTimeout(() => resolve(new Rectangle(ctx, x, y, width, height, color).moveDown()), randCanv.getSpeed());
    }).then(() => {
      if (this.isStarted) {
        animation = requestAnimationFrame(this.animate.bind(this));
      }
    });
  }
}

let controller = new Controller(_canvas);

controller.canvas.onclick = function (mouseEvent) {
  let x = mouseEvent.clientX;
  let y = mouseEvent.clientY;
  clickAction(rectangels, x, y);
};

function clickAction(arrOfRects, x, y) {
  arrOfRects.forEach(element => {
    if (element.isClickInRange(x, y)) {
      score.innerHTML = +score.innerHTML + 1;
      element.remove();
    }
  });
}
