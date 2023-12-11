function runActivity() {
  const iterable = "Hello";

  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  const vowels = ["a", "e", "i", "o", "u"];

  char_array = Array.from(iterable);

  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  console.log(sum(3, 4, 12, 4, 123, 5, 123, 432));

  console.log(`Ulol ka ${people[0].name}`);
}
