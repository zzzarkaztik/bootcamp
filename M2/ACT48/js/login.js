$(document).ready(function () {
  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");

  if (storedUsername) {
    $("#username").val(storedUsername);
  }
  if (storedPassword) {
    $("#password").val(storedPassword);
  }

  $("#submit").click(function (x) {
    let username = $("#username").val();
    let password = $("#password").val();

    if ($("#remember_me").prop("checked")) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.clear("username");
      localStorage.clear("password");
    }
    if (username === "user" && password === "pw123") {
      localStorage.setItem("loggedIn", 1);
      window.location.href = "home.html";
    } else {
      alert("Incorrect username and/or password!");
    }

    x.preventDefault();
  });

  //   $("#remember_me").click(function () {
  //     let username = $("#username").val();
  //     let password = $("#password").val();

  //     if ($("#remember_me").prop("checked")) {
  //       localStorage.setItem("username", username);
  //       localStorage.setItem("password", password);
  //     } else {
  //       localStorage.clear();
  //     }
  //   });
});
