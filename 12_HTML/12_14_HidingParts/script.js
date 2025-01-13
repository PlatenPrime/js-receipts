const msg = document.getElementById("msg");

const hide = document.getElementById("hide");

const remove = document.getElementById("remove");

const show = document.getElementById("show");

hide.addEventListener("click", () => {
  msg.style.visibility = "hidden";
});

remove.addEventListener("click", () => {
  msg.style.display = "none";
});

show.addEventListener("click", () => {
  msg.style.visibility = "visible";
  msg.style.display = "block";
});

function redize() {
  this.style.color = "red";
}

const blueize = () => {
  console.log(this);
  
  this.style.color = "blue";
};

const blueize2 = blueize.bind(show);

msg.addEventListener("click", redize);
hide.addEventListener("click", redize);
remove.addEventListener("click", redize);
show.addEventListener("click", () => {
  this.style.color = "red";
});

show.addEventListener("click",  blueize2 );

