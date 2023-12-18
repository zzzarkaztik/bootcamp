$(document).ready(function () {
  let loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn != 1) {
    window.location.href = "login.html";
  }

  $("#logout").click(function () {
    localStorage.setItem("loggedIn", 0);
  });
});
