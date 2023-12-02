function runActivity() {
  let shape = Number(
    prompt(
      "What shape would you like to solve the area of? Enter '1' for triangle, enter '2' for circle, enter '3' for rectangle"
    )
  );

  if (shape == 1) {
    let b = Number(prompt("What is the base(b) of this triangle?"));
    let h = Number(prompt("What is the height(h) of this triangle?"));

    let area = (1 / 2) * b * h;

    console.log("The area of the triangle is " + area + ".");
  } else if (shape == 2) {
    let r = Number(prompt("What is the radius(r) of this circle?"));

    let area = 3.1416 * r ** 2;

    console.log("The area of the circle is " + area + ".");
  } else if (shape == 3) {
    let l = Number(prompt("What is the length(l) of this rectangle?"));
    let w = Number(prompt("what is the width(w) of this rectangle?"));

    let area = l * w;

    console.log("The area of the rectangle is " + area + ".");
  } else {
    console.error(
      "ERROR: Unrecognized Entry. Enter '1' for triangle, enter '2' for circle, enter '3' for rectangle. "
    );
  }
}
