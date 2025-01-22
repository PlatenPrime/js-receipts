function offAudio() {
  const off = "ВЫКЛЮЧИ!!!";

  const txt = document.createTextNode(off);
  const div = document.createElement("div");
  div.appendChild(txt);
  document.body.appendChild(div);
}

function onAudio() {
  const on = "ВКЛЮЧИ!!!";
  const txt = document.createTextNode(on);
  const div = document.createElement("div");
  div.appendChild(txt);
  document.body.appendChild(div);
}

const meadow = document.getElementById("meadow");
meadow.addEventListener("play", offAudio);
meadow.addEventListener("pause", onAudio);

