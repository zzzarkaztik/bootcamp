function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  let fruit_name;
  let fruit_price;

  while (true) {
    fruit_name = prompt("Give me a fruit name: [0] to stop");

    if (fruit_name == 0) {
      break;
    }

    fruit_names.push(fruit_name);

    fruit_price = Number(
      prompt(
        "What is the price of 1 " + fruit_names[fruit_names.length - 1] + "?"
      )
    );
    if (fruit_price < 0) {
      console.error("ERROR: Enter a valid price. ENTRY FAILED.");
    }
  }
  for (i = 0; i < fruit_names.length; i++) {
    if (fruit_prices[i] >= 0) {
      console.log(fruit_prices[i] + " | PHP " + fruit_prices[i]);
    }
  }
}
