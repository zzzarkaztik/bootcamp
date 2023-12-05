function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];

  while (true) {
    let fruit_name = prompt("What is the name of the fruit? (0) Stop");
    if (fruit_name == 0) {
      break;
    }
    let fruit_price = Number(prompt("What is the price of the fruit?"));

    if (fruit_price >= 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  for (let i = 0; i < fruit_names.length; i++) {
    console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
  }

  while (true) {
    let choice_name = prompt("What fruit would you like to buy? (0) Stop");
    let fruit_found = false;
    if (choice_name == 0) {
      break;
    }

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;

        let quantity = Number(prompt("How many would you like to buy?"));
        if (quantity >= 0) {
          console.log("Total Price: PHP " + fruit_prices[i] * quantity);
        } else if (quantity < 0) {
          console.error(
            "ERROR: Enter a valid quantity. Purchase unsuccessful."
          );
        }
      }
    }
    if (fruit_found == false) {
      console.error("ERROR: Item not found.");
    }
  }
}
