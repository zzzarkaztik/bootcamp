function runActivity() {
  function toCelsius(f) {
    let c = ((f - 32) * 5) / 9;
    c = c.toFixed(2);
    return c;
  }

  function toFahrenheit(c) {
    let f = c * 1.8 + 32;
    f = f.toFixed(2);
    return f;
  }

  choice = Number(
    prompt("What conversion do you want? (1) °C to °F, (2) °F to °C")
  );
  if (choice == 1) {
    let c = Number(prompt("Give me a temperature in celcius:"));
    console.log(c + "°C in °F is " + toFahrenheit(c) + "°F");
  } else if (choice == 2) {
    let f = Number(prompt("Give me a temperature in fahrenheit:"));
    console.log(f + "°F in °C is " + toCelsius(f) + "°C");
  } else {
    console.error("No conversion found.");
  }
}
