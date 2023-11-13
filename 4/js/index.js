const input = document.getElementById("numberInput");
const countdown = document.getElementById("countdown");
let interval;

input.addEventListener("blur", () => {
  const number = parseInt(input.value);
  if (!isNaN(number)) {
    let currentNumber = number;
    countdown.textContent = currentNumber;

    interval = setInterval(() => {
      currentNumber--;
      countdown.textContent = currentNumber;
      if (currentNumber === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
});
