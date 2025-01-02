const imgs = document.querySelectorAll("img");
console.log(imgs);

const articleImgs = document.querySelectorAll("article img");
console.log(articleImgs);

const articleStrictImgs = document.querySelectorAll("article > img");
articleStrictImgs.forEach((img) => {
  img.style.width = "400px";
});
console.log(articleStrictImgs);

const imgsPlusPara = document.querySelectorAll("img + p");
imgsPlusPara.forEach((p) => {
  p.style.color = "red";
});
console.log(imgsPlusPara);


const imgPlusPara = document.querySelector("img + p");
imgPlusPara.style.fontSize = "3rem";
console.log(imgPlusPara);