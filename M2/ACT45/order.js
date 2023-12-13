$(document).ready(function () {
  const menu_prices = {
    burger: 60,
    steak: 80,
    fries: 50,
    salad: 70,
    sprite: 25,
    icecream: 25,
  };
  let total_price = 0;
  const menu_names = {
    burger: "Burger",
    steak: "Steak",
    fries: "Fries",
    salad: "Salad",
    sprite: "Sprite",
    icecream: "Ice Cream",
  };
  $("#food-order").submit(function (x) {
    let curr_items = $("#food-table-list").html();
    let item = $("#food-select").val();
    let itemName = menu_names[item];
    let amount = $("#food-amount").val();
    let price = menu_prices[item] * amount;

    total_price += price;

    let newEntry = `
      <tr>
        <td>${itemName}</td>
        <td>${amount}</td>
        <td>₱${price}</td>
      </tr>`;

    $("#food-table-list").html(curr_items + newEntry);
    $("#food-table-total").text(total_price);

    x.preventDefault();
  });

  $("#get_all").change(function () {
    if ($("#get_all").prop("checked")) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });

  $(".sauce").change(function () {
    if ($("#get_all").prop("checked")) {
      $("#get_all").prop("checked", false);
    }
  });
});
