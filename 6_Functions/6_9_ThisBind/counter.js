function Counter(from, to, divElement) {
  this.currentCount = from;
  this.finishCount = to;
  this.element = divElement;

  this.decrementCounter = function () {
    this.currentCount -= 1;
    this.element.textContent = this.currentCount;
    if (this.currentCount > this.finishCount) {
      setTimeout(this.decrementCounter.bind(this), 1000);
    }
  };

  this.startCounter = function () {
    this.decrementCounter();
  };
}

const counter = new Counter(10, 0, document.getElementById("counterDiv"));

window.onload = function () {
  counter.startCounter();
};
