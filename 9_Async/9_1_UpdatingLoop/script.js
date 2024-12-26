function doWork() {
  const statusElement = document.getElementById("status");

  const startTime = Date.now();
  let counter = 0;

  statusElement.innerText = "Processing started";

  while (Date.now() - startTime < 2000) {
    counter += 1;
  }

  statusElement.innerText = `Just generated number ${counter}`;
}

// doWork();

function doWorkInChunks() {
  const statusElement = document.getElementById("status");
  const countElement = document.getElementById("count");
  const alertButton = document.getElementById("alert");

  const throwAlert = () => {
    alert("Alert!");
  };

  alertButton.addEventListener("click", throwAlert);

  const startTime = Date.now();
  let counter = 0;

  statusElement.innerText = "Processing started";

  function doChunkedTask() {
    if (Date.now() - startTime < 10000) {
      counter += 1;
      statusElement.innerText = `Just generated number ${counter}`;
      setTimeout(doChunkedTask, 0);
    } else {
      statusElement.innerText = `Processing completed`;
      countElement.textContent = counter;
    }
  }

  doChunkedTask();
}

doWorkInChunks();
