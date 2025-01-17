const myForm = document.getElementById("my-form");
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

myForm.addEventListener("submit", async (event) => {
event.preventDefault();

const formData = await new FormData(myForm);
console.log(formData);

const data = Object.fromEntries(formData);
console.log(data);

const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});

const result = await response.json();
console.log(result);

});