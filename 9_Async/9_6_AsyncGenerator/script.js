const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

async function justAsyncFunc() {
  const result = await promise;
  console.log(result);
  return result;
}


const data = await justAsyncFunc();
console.log(data);