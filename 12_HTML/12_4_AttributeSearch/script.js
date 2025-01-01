const elems = document.querySelectorAll("p[class='red']");
const elem = document.querySelector("p[class='red']");

const blueElems = document.querySelectorAll("p[class='blue']");
const notRedElems = document.querySelectorAll("p:not(.red)");


const allElements = document.querySelectorAll("*");
const allTags = document.getElementsByTagName("*");

console.log(elems.length);
console.log(elems);
console.log(elem);

console.log(blueElems);
console.log(notRedElems);

console.log(allElements);
console.log(allTags);
