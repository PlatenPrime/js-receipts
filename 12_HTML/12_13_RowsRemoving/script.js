const values = new Array(3);
values[0] = [123.45, "apple", "true"];
values[1] = [123.45, "banana", "false"];
values[2] = [123.45, "orange", "true"];

const mixed = document.getElementById("mixed");
const tbody = document.createElement("tbody");

function pruneRow(event) {
    const row = event.currentTarget;
    const parent = row.parentNode;
    parent.removeChild(row);
  
    let dataString = "";
    row.childNodes.forEach((cell) => {
      dataString += cell.firstChild.data + " ";
    });
  
    const msg = document.createTextNode(`Removed: ${dataString.trim()}`);
    const p = document.createElement("p");
    p.appendChild(msg);
    document.getElementById("result").appendChild(p);
  }

values.forEach((value) => {
  const tr = document.createElement("tr");
  value.forEach((cell) => {
    const td = document.createElement("td");
    const txt = document.createTextNode(cell);
    td.appendChild(txt);
    tr.appendChild(td);
  });

  tr.onclick = pruneRow;

  tbody.appendChild(tr);

  
});


mixed.appendChild(tbody);