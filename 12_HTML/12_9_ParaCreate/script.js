/* eslint-disable no-alert */
// use getElementById to access the div element
const div = document.getElementById("target");

const button = document.createElement("button");
const txtBtn = document.createTextNode("Add");
button.appendChild(txtBtn);
div.appendChild(button);

button.addEventListener("click", () => {
  const txt = prompt("Enter new paragraph text", "");
  const para = document.createElement("p");
  const txtNode = document.createTextNode(txt);
  para.appendChild(txtNode);

  const oldPara = div.getElementsByTagName("p")[0];

  div.insertBefore(para, oldPara);
});


const test = document.createElement("progress");

const label = document.createElement("label");

label.appendChild(test);
div.appendChild(label);