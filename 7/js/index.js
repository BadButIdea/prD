const changingText = document.getElementById("changingText");
let isRed = true;

setInterval(() => {
  if (isRed) {
    changingText.style.color = "green";
  } else {
    changingText.style.color = "red";
  }
  isRed = !isRed;
}, 1000);
