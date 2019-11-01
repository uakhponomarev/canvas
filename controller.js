
var countAnimation,
  countTimeOut,
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
    clearTimeout(countTimeOut);
    cancelAnimationFrame(countAnimation);
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
      countTimeOut = setTimeout(() => resolve(new Rectangle(ctx, x, y, width, height, color).moveDown()), randCanv.getSpeed());
    }).then(() => {
      if (this.isStarted) {
        countAnimation = requestAnimationFrame(this.animate.bind(this));
      }
    });
  }
}

let controller = new Controller(_canvas);
const ctx = controller.context;

controller.canvas.onclick = function (mouseEvent) {
  let x = mouseEvent.clientX;
  let y = mouseEvent.clientY;
  clickAction(rectangels, x, y);
};

function clickAction(arrOfRects, x, y) {
  arrOfRects.forEach(element => {
    if (element.isClickInRange(x, y)) {
      score.innerHTML = +score.innerHTML + 1;
      deleteRect(ctx, element);
    }
  });
}

function deleteRect(context, rect) {
  let x = rect.x, y = rect.y, width = rect.width;
  let startTime = performance.now();
  let during = 2000;
  context.clearRect(x, y, width, 500);
  if (performance.now() - startTime < during)
    requestAnimationFrame(deleteRect.bind(this, context, rect));
}
