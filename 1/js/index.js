const button = document.getElementById("startButton");
const counter = document.getElementById("counter");
let interval;

button.addEventListener("click", () => {
  interval = setInterval(() => {
    counter.textContent = parseInt(counter.textContent) + 1;
  }, 1000);
});
