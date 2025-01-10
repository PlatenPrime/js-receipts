let sum = 0;

const cells = document.querySelectorAll("td:nth-of-type(2)");
console.log(cells);

cells.forEach((cell) => {
  sum += Number(cell.textContent);
  // cell.textContent = sum;
});

const p = document.createElement("p");
p.textContent = sum;
document.body.appendChild(p);

const newRow = document.createElement("tr");

newRow.style.backgroundColor = "white";
newRow.style.color = "black";
newRow.style.fontSize = "1.2rem";
newRow.style.fontWeight = "bold";


const firstCell = document.createElement("td");
firstCell.textContent = "Total";
newRow.appendChild(firstCell);

const secondCell = document.createElement("td");
secondCell.textContent = sum;
newRow.appendChild(secondCell);

const table = document.querySelector("table");
table.appendChild(newRow);
