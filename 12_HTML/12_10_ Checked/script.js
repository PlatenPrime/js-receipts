const checkBox = document.getElementById("check");
const button = document.querySelector("button");

const validate = () => {
  if (checkBox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

checkBox.addEventListener("change", validate);