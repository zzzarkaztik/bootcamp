function runActivity() {
  const fruit_prices = new Map([
    ["apple", 10],
    ["banana", 20],
    ["orange", 30],
  ]);
  console.log(fruit_prices.size);
  console.log(fruit_prices.has("apple"));
  console.log(fruit_prices.values());
  console.log(fruit_prices.get("apple"));
  console.log(fruit_prices.entries());

  fruit_prices.set("melon", 40);
  fruit_prices.forEach(function (value, key) {
    console.log(key + ": " + value + " each");
  });
}
