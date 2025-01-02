const box = document.querySelector(".box");
box.classList.add("blue");

const change = document.getElementById("change");
change.addEventListener("click", () => {
  box.classList.toggle("red");
  box.classList.toggle("blue");
  if (box.classList.contains("box")) {
    box.classList.remove("box");
  } else {
    box.classList.add("box");
  }
});


const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  box.classList.remove("red", "blue");

})