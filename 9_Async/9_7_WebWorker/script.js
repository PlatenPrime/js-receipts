const start = document.getElementById("start");
const cancel = document.getElementById("cancel");

let worker;
function startSearch() {
  worker = new Worker("worker.js");
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "Searching...";

  worker.onerror = (error) => {
    statusDisplay.textContent = `Error: ${error.message}`;
  };

  worker.onmessage = (event) => {
    const primes = event.data;
    requestAnimationFrame(() => {
      document.getElementById("primeContainer").value = primes.join(", ");
      statusDisplay.textContent = "Search complete.";
    });
  };

  const fromNumber = parseInt(document.getElementById("from").value, 10);
  const toNumber = parseInt(document.getElementById("to").value, 10);
  worker.postMessage({ from: fromNumber, to: toNumber });
}

start.addEventListener("click", startSearch);
cancel.addEventListener("click", () => {
  if (worker) {
    worker.terminate();
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = "Search canceled.";
  }
});
