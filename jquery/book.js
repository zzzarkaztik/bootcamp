$(document).ready(function () {
  let dark_mode = false;
  $("#btn-dark").click(function () {
    if (dark_mode == false) {
      $("body").css({ "background-color": "dimgrey", color: "white" });
      $("div.card").css("background-color", "grey").css("color", "white");
      dark_mode = true;
    } else {
      $("body").css("background-color", "white").css("color", "black");
      $("div.card").css("background-color", "white").css("color", "black");
      dark_mode = false;
    }
  });

  $("div.card").mouseenter(function () {
    $(this).animate(
      {
        transform: scale(1.05),
      },
      500
    );
  });
});
