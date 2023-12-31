$(document).ready(function () {
  $("#addItem").click(function () {
    let curr_table = $("#orderHistory").html();
    let itemName = prompt("What is the item?");
    let orderDate = prompt("When was the order placed?");

    let newEntry = `
    <tr>
    <td>${itemName}</td>
    <td>${orderDate}</td>
    </tr>`;

    $("#orderHistory").html(curr_table + newEntry);
  });

  $("#required").hide();
  $("#formAddress").blur(function () {
    if ($("#formAddress").val() == "") {
      $("#required").show();
    } else {
      $("#required").hide();
    }
  });

  $("#pwNoMatch").hide();
  $("#pwMatch").hide();
  $("#form-cpw").change(function () {
    if ($("#form-pw").val() == $("#form-cpw").val()) {
      $("#pwMatch").show();
      $("#pwNoMatch").hide();
    } else {
      $("#pwNoMatch").show();
      $("#pwMatch").hide();
    }
  });

  $(".wl-item").click(function () {
    $(this).toggleClass("bg-warning");
  });

  $("img.painting").mouseenter(function () {
    $(this).removeClass("painting-small");
    $(this).addClass("painting-large");
    let desc = $(this).prop("alt");
    $("#painting-caption").text(desc);
  });

  $("img.painting").mouseleave(function () {
    $(this).removeClass("painting-large");
    $(this).addClass("painting-small");
    $("#painting-caption").text("");
  });

  $("img.bag-preview").click(function () {
    let source = $(this).prop("src");
    $("#bag-display").prop("src", source);
  });
});
