const myButton = document.querySelector("button");
const myInput = document.querySelector("input");
const myList = document.querySelector("ul");

myButton.addEventListener("click", function () {
  myList.innerHTML += `<li id=${myInput.value}>${myInput.value}</li> <a href="#" class=${myInput.value}>Edit</a>`;
  myInput.value = "";
});

myList.addEventListener("click", function (e) {
  if (e.target.tagName == "A") {
    const newTask = prompt("Edit your task:", e.target.className);
    if (newTask != null && newTask != "") {
      document.getElementById(`${e.target.className}`).innerText = newTask;
      document.getElementById(`${e.target.className}`).id = newTask;
      document.getElementsByClassName(`${e.target.className}`)[0].className =
        newTask;
    }
  } else {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      document.getElementById(`${e.target.id}`).remove();
      document.getElementsByClassName(`${e.target.id}`)[0].remove();
    }
  }
});
