function runActivity() {
  const vegetables_temp = ["kale", "okra", "moringa"];
  const vegetables = new Set(vegetables_temp);
  vegetables.add("pumnpkin");
  console.log(vegetables);
  vegetables.add("kale");
  console.log(vegetables);
  vegetables.forEach(function (vegetable) {
    console.log(vegetable);
  });
}
