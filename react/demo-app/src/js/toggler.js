import $ from "jquery";

$(document).ready(function () {
  $("#hide_p").click(function () {
    $("p").slideToggle();
  });
});
