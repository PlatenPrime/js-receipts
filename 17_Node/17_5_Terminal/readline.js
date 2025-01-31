import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("What is your name? ", (answer) => {
    if (answer !== "Platen") {
      ask();
    } else {
      console.log(`Hello ${answer}`);
      rl.close();
    }
  });
}

ask();
