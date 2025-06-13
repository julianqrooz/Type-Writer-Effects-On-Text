let button = document.getElementById("button");
let restart = document.getElementById("restart");
let paragrah = document.getElementById("type");
let text = paragrah.textContent;
paragrah.textContent = "";
let i = 0;

button.onclick = function () {
  restart.style.display = "block";
  let time = setInterval(function () {
    if (i < text.length) {
      paragrah.textContent += text[i];
      i++;
    } else {
      clearInterval(time);
    }
  }, 100);
};
restart.onclick = function () {
  window.location.reload();
};
