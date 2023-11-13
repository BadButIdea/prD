const input = document.getElementById("numberInput");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const number = parseInt(input.value);
  if (!isNaN(number)) {
    input.value = number * number;
  }
});

// Обновление каждую секунду
setInterval(() => {
  const number = parseInt(input.value);
  if (!isNaN(number)) {
    input.value = number * number;
  }
}, 1000);
