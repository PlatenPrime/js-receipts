const items = document.querySelectorAll("li");

items.forEach((item, i) => {
  item.style.color = "white";
  item.addEventListener("click", () => {
    console.log(i);
  });
  item.textContent = `Item ${i}`;
  item.style.cursor = "pointer";
  item.style.backgroundColor = `rgb(${i * 10}, ${i * 20}, ${i * 30})`;
  item.style.padding = "10px";
});
