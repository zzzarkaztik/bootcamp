let today = Date();
let name = "ARVS";

function greetings() {
  console.log(`Hello ${name},\ntoday is ${today}`);
}

module.exports = { greetings, today, name };
