const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
let interval;
let count = 1;

startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    timer.textContent = count++;
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
