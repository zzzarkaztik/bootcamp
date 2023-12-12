function changeName() {
  let newName = prompt("What is your new username?");
  document.getElementById("userName").innerHTML = newName;
  document.getElementById("userName2").innerHTML = newName;
}
