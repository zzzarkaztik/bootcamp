function runActivity() {
  class Car {
    constructor(name, manufacturer, acceleration) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
      this.started = false;
    }

    start() {
      if (this.started == false) {
        this.speed += 30;
        this.started = true;
        return this.name + " has started! Speed at " + this.speed + ".";
      } else {
        return this.name + " has already started.";
      }
    }

    accelerate() {
      if (this.started == true) {
        this.speed += this.acceleration;
        return this.name + " has accelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    decelerate() {
      if (this.started == true) {
        this.speed = this.speed / 2;
        if (this.speed < 1) {
          this.speed = 1;
          return this.name + " has reached its minimum speed.";
        } else {
          return this.name + " has decelerated! New speed: " + this.speed;
        }
      } else {
        return this.name + " has not started yet.";
      }
    }

    checkSpeed() {
      return "Current Speed: " + this.speed;
    }

    stop() {
      if (this.started == true) {
        this.speed = 0;
        this.started = false;
        return this.name + " has stopped.";
      } else {
        return this.name + " has not started yet.";
      }
    }
  }
  let i = 0;
  let name = prompt("Give me the car's name: ");
  let manufacturer = prompt("Give me the car's manufacturer: ");
  let acceleration = Number(prompt("Give me the car's acceleration: "));
  let myCar;
  if (acceleration > 0) {
    myCar = new Car(name, manufacturer, acceleration);
  } else {
    console.error("Car acceleration cannot be equal to or less than 0(zero)");
    i = 1;
  }

  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        console.log(myCar.start());
        break;

      case 2:
        console.log(myCar.accelerate());
        break;

      case 3:
        console.log(myCar.decelerate());
        break;

      case 4:
        console.log(myCar.checkSpeed());
        break;

      case 5:
        console.log(myCar.stop());
        break;

      case 6:
        i = 1;
        break;

      default:
        console.error("ERROR: Enter a valid input.");
        break;
    }
  }
}
