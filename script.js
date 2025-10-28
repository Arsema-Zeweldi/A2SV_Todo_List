const myButton = document.querySelector("button");
const myInput = document.querySelector("input");
const myList = document.querySelector("ul");
const myItems = document.querySelector("ul");

myButton.addEventListener("click", function () {
  myList.innerHTML += `<li id=${myInput.value}>${myInput.value}</li>`;
  myInput.value = "";
});

myItems.addEventListener("click", function (e) {
  document.querySelector(`#${e.target.id}`).remove();
});
