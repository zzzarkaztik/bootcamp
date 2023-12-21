const dt = require("./datetime.js");
const cl = require("./calc.js");
const bk = require("./books.js");

console.log(dt.today);
dt.greetings();
console.log(cl.getSum(4, 8));
console.log(bk.books[2].title);
