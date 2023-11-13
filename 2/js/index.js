const button = document.getElementById("startButton");
const counter = document.getElementById("counter");
let interval;

button.addEventListener("click", () => {
  interval = setInterval(() => {
    const currentValue = parseInt(counter.textContent);
    if (currentValue > 0) {
      counter.textContent = currentValue - 1;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
