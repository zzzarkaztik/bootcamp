function runActivity() {
  let n = Number(prompt("Enter a whole number from 2 to 20: "));
  let i;
  let num;
  let npos = 0;
  let nneg = 0;
  let ndec = 0;
  let nint = 0;
  let nodd = 0;
  let nevn = 0;

  if (n >= 2 && n <= 20) {
    for (i = 0; i < n; i++) {
      num = Number(prompt("Give me a number: "));

      if (num % 2 == 0) {
        if (num != 0) {
          nevn++;
        }
      } else {
        nodd++;
      }
      if (num > 0) {
        npos++;
      } else if (num < 0) {
        nneg++;
      }
      if (num % 1 == 0) {
        nint++;
      } else if (num % 1 != 0) {
        ndec++;
      }
    }
    console.log("Number count: " + n);
    console.log("Even Numbers: " + nevn);
    console.log("Odd Numbers: " + nodd);
    console.log("Positive Numbers: " + npos);
    console.log("Negative Numbers: " + nneg);
    console.log("Integers: " + nint);
    console.log("Decimal Numbers: " + ndec);
  } else {
    console.error("ERROR: Enter a valid number.");
  }
}
