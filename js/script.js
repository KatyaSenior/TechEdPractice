const form = document.getElementById("uwu");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const myObj = Object.fromEntries(formData);
  console.log(myObj);
});
