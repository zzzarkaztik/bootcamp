function runActivity() {
  class Human {
    constructor(n, a, h) {
      this.name = n;
      this.age = a;
      this.height = h;
    }

    odm() {
      return "bzzt bzzt";
    }
  }

  class TitanShifter extends Human {
    constructor(n, a, h, tp) {
      super(n, a, h);
      this.titanPower = tp;
    }

    selfHarm() {
      return "tatakae";
    }
  }

  let scouts = [];
  scouts[0] = new Human("Hange", 25, 1.65);
  scouts[1] = new Human("Levi", 28, 1.58);
  scouts[2] = new Human("Connie", 17, 1.65);
  scouts[3] = new Human("Sasha", 17, 1.65);
  scouts[4] = new TitanShifter("Eren", 17, 1.7, "Attack Titan");

  scouts[1].height = 2;

  console.log(
    scouts[0].name +
      " is a Scouting Legion Officer and is " +
      scouts[0].age +
      " years old"
  );

  console.log(
    scouts[4].name + "'s titan power is the " + scouts[4].titanPower + "."
  );

  console.log(scouts[1].name + "'s height is now " + scouts[1].height);

  console.log(scouts[4].odm());
  console.log(scouts[2].selfHarm());
}
