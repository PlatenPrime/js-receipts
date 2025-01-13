window.onload = () => {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    img.addEventListener(
      "mouseover",
      () => {
        showWindow(img.id, "some text");
      },
      false
    );

    img.addEventListener("mouseout", () => {
      () => {
        removeWindow();
      },
        false;
    });
  });
};

const getInfo = (id) => {
  console.log(id);
};

const removeWindow = () => {
  const popup = document.querySelector("popup");
  if (popup) {
    popup.parentNode.removeChild(popup);
  }
};


function compPos(obj) {
    const rect = obj.getBoundingClientRect();
    let height;
    if (rect.hight) {
        height = rect.hight;
    } else {
        height = rect.bottom - rect.top;
    }
    const top = rect.top + height + 10;
    return [rect.left, top];
}


function showWindow (id, response) {
    const img = document.getElementById(id);
    console.log(img);
    
    const loc = compPos(img);
    console.log(loc);
    const left = `${loc[0]}px`;
    const top = `${loc[1]}px`;

    const popup = document.createElement("popup");
    popup.id = "popup";
    const text = document.createTextNode(response);
    popup.appendChild(text);

    popup.setAttribute("style", `left: ${left}; top: ${top}`);

    document.body.appendChild(popup);
}