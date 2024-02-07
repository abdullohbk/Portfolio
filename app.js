const btn = document.getElementById("btn");

let isDarkMode = false;

btn.onclick = function () {
  if (isDarkMode == false) {
    btn.textContent = "☀";
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "white"));
  } else {
    btn.textContent = "🌙";
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "black"));
  }
  isDarkMode = !isDarkMode;
};
