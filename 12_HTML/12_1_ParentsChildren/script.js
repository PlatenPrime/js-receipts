const demodiv = document.getElementById("demodiv");

const parent = demodiv.parentNode;
const parentElement = demodiv.parentElement;

const children = demodiv.childNodes;
const childrenElements = demodiv.children;

const type = demodiv.nodeType;

console.log(parent);
console.log(parentElement);
console.log(children);
console.log(childrenElements);
console.log(type);

let outputString = "";
if (demodiv.hasChildNodes()) {
  children.forEach((child) => {
    outputString += `has child ${child.nodeName}
    `;
  });
}

console.log(outputString);

let outputStringElements = "";
if (demodiv.hasChildNodes()) {
  Array.from(childrenElements).forEach((child) => {
    outputStringElements += `has child ${child.nodeName}
    `;
  });
}

console.log(outputStringElements);
