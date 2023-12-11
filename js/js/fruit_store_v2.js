function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit? (0) Stop");
    fruit_name = fruit_name.toLocaleLowerCase();
    let fruit_price = Number(prompt("What is the price of the fruit?"));

    if (fruit_price > 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
      fruit_stocks.push(0);

      console.log(
        fruit_name +
          " added as item for sale. Each " +
          fruit_name +
          " sells for " +
          fruit_price +
          ". Stock set to 0"
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let fruit_name = prompt("What would you like to add stock to?");
    fruit_name = fruit_name.toLocaleLowerCase();
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == fruit_name) {
        fruit_found = true;
        let addedStock = Number(
          prompt(
            "How many stock(s) of " + fruit_names[i] + " would you like add?"
          )
        );
        if (addedStock > 0) {
          fruit_stocks[i] += addedStock;
          console.log(
            addedStock +
              " stock(s) has been added to " +
              fruit_name +
              ". New stock: " +
              fruit_stocks[i]
          );
        } else {
          console.error("ERROR: Must enter a valid amount.");
          break;
        }
      }
    }
    if (fruit_found == false) {
      console.error("ERROR: No item named '" + fruit_name + "' found.");
    }
  }

  function checkPrice() {
    let fruit_name = prompt("What item would you like to check the price of?");
    fruit_name = fruit_name.toLocaleLowerCase();
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == fruit_name) {
        fruit_found = true;
        let quantity = Number(
          prompt(
            "How many " +
              fruit_names[i] +
              "(s) would you like to check the price of?"
          )
        );
        if (quantity > 0) {
          let totalPrice = fruit_prices[i] * quantity;
          console.log(
            quantity + " " + fruit_names[i] + "(s) is worth " + totalPrice
          );
        } else {
          console.error("ERROR: Must enter a valid amount.");
          break;
        }
      }
    }
    if (fruit_found == false) {
      console.error("ERROR: No item named '" + fruit_name + "' found.");
    }
  }
  function sell() {
    let fruit_name = prompt("What item is being sold?");
    fruit_name = fruit_name.toLocaleLowerCase();
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == fruit_name) {
        fruit_found = true;
        let quantity = Number(
          prompt("How many " + fruit_names[i] + "(s) are being sold?")
        );
        if (quantity > fruit_stocks[i]) {
          console.error("Not enough stock(s) of " + fruit_names[i]);
        } else if (quantity <= fruit_stocks[i] && quantity > 0) {
          let totalPrice = fruit_prices[i] * quantity;
          fruit_stocks[i] -= quantity;
          console.log(
            quantity +
              " " +
              fruit_name[i] +
              "(s) sold for " +
              totalPrice +
              ". Updated " +
              fruit_name[i] +
              " stock: " +
              fruit_stocks[i]
          );
        } else {
          console.error("ERROR: Must enter a valid amount.");
          break;
        }
      }
    }
    if (fruit_found == false) {
      console.error("ERROR: No item named '" + fruit_name + "' found.");
    }
  }

  alert("Fruit Mart");

  while (true) {
    let choice = Number(
      prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    switch (choice) {
      case 1:
        addItem();
        break;

      case 2:
        restock();
        break;

      case 3:
        checkPrice();
        break;

      case 4:
        sell();
        break;

      case 5:
        return;
        break;

      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
//   while (true) {
//     let fruit_name = prompt("What is the name of the fruit? (0) Stop");
//     if (fruit_name == 0) {
//       break;
//     }
//     let fruit_price = Number(prompt("What is the price of the fruit?"));

//     if (fruit_price >= 0) {
//       fruit_names.push(fruit_name);
//       fruit_prices.push(fruit_price);
//     } else {
//       console.error("ERROR: Invalid price! Enter a positive value.");
//     }
//   }

//   for (let i = 0; i < fruit_names.length; i++) {
//     console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
//   }

//   while (true) {
//     let choice_name = prompt("What would you like to buy? (0) Stop");
//     if (choice_name == 0) {
//       break;
//     }
//     let fruit_found = false; //up to you if you use

//     for (let i = 0; i < fruit_names.length; i++) {
//       if (fruit_names[i] == choice_name) {
//         fruit_found = true;
//         let amount = Number(
//           prompt("How many " + choice_name + " would you like buy?")
//         );
//         if (amount >= 0) {
//           let total = amount * fruit_prices[i];
//           console.log("Total price: PHP " + total);
//         } else {
//           console.error("ERROR: Can not have negative amount.");
//         }
//       }
//     }

//     if (fruit_found == false) {
//       console.error("ERROR: Fruit was not found.");
//     }
//   }
