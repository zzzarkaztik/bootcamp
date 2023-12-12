$(document).ready(function () {
  $("#studentButton").click(function () {
    let count = Number($("#student-count").text());
    count++;
    $("#student-count").text(count);
  });

  $(".subject-item").click(function () {
    $(this).toggleClass("subject-selected");
  });
});
