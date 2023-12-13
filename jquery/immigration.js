$(document).ready(function () {
  let gender;

  $("#sub_newsletter").prop("checked", true);

  $(".gender").change(function () {
    gender = $(this).val();
  });

  $("#immig-form").submit(function (x) {
    let first_name = $("#first_name").val();
    let last_name = $("#last_name").val();
    let state = $("#state").val();
    let sub_newsletter = $("#sub_newsletter").prop("checked");

    // alert(`First Name: ${first_name} \nLast Name: ${last_name}`);
    $("#first_name_m").text(first_name);
    $("#last_name_m").text(last_name);
    $("#state_m").text(state);
    if (sub_newsletter) {
      $("#sub_newsletter_m").text("Yes");
    } else {
      $("#sub_newsletter_m").text("No. No? Ba't hindi? Gagi dapat yes.");
    }
    $("#gender_m").text(gender);

    x.preventDefault();
  });
});
