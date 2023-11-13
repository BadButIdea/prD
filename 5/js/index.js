const input = document.getElementById("numberInput");
const button = document.getElementById("startButton");
const countdown = document.getElementById("countdown");
let interval;

button.addEventListener("click", () => {
  let number = parseInt(input.value);

  if (!isNaN(number)) {
    countdown.textContent = number;
    interval = setInterval(() => {
      number--;
      countdown.textContent = number;
      if (number === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
});
