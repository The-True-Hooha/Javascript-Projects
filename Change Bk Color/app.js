//Add script at the end of the body tag in the index.html document

const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];


colorBtn.addEventListener("click", changeColor);

function changeColor () {
  //bodyBg.style.backgroundColor = colors[2];
  colorBtn.addEventListener("click", changeColor);
  let random = Math.floor(Math.random() * colors.length);
  bodyBg.style.backgroundColor = colors[random];
}




