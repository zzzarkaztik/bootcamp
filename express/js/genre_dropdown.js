$(document).ready(function () {
  let genre = sessionStorage.getItem("genre_select");
  $("#genre").text(genre);

  $(".genre").click(function () {
    let genre = this.text;
    sessionStorage.setItem("genre_select", genre);
  });
});
