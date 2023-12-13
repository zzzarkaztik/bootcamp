let hunger = 100;
let exercise = 100;
let sleep = 100;

const minHunger = 0;
const minExercise = 0;
const minSleep = 0;

function do_eat() {
  hunger = 100;
  sleep -= 5;
  if (hunger >= 100) {
    hunger = 100;
  }
  let hunger_p = hunger + "%";
  let sleep_p = sleep + "%";
  $("#hunger_bar").css("width", hunger_p);
  $("#sleep_bar").css("width", sleep_p);
  $("#last_activity").text(`Fed Tawanchai!`);
}

function do_exercise() {
  exercise = 100;
  sleep -= 10;
  if (exercise >= 100) {
    exercise = 100;
  }
  let exercise_p = exercise + "%";
  let sleep_p = sleep + "%";
  $("#exercise_bar").css("width", exercise_p);
  $("#sleep_bar").css("width", sleep_p);
  $("#last_activity").text(`Played with Tawanchai!`);
}

function do_sleep() {
  sleep = 100;
  if (sleep >= 100) {
    sleep = 100;
  }
  let sleep_p = sleep + "%";
  $("#sleep_bar").css("width", sleep_p);
  $("#last_activity").text(`Tawanchai took a nap`);
}

$(document).ready(function () {
  setInterval(degradeHunger, 500);
  setInterval(degradeExercise, 1000);
  setInterval(degradeSleep, 2000);

  function degradeHunger() {
    hunger--;
    if (hunger < minHunger) {
      hunger = minHunger;
    }
    let hunger_p = hunger + "%";
    $("#hunger_bar").css("width", hunger_p);
  }

  function degradeExercise() {
    exercise--;
    if (exercise < minExercise) {
      exercise = minExercise;
    }
    let exercise_p = exercise + "%";
    $("#exercise_bar").css("width", exercise_p);
  }

  function degradeSleep() {
    sleep--;
    if (sleep < minSleep) {
      sleep = minSleep;
    }
    let sleep_p = sleep + "%";
    $("#sleep_bar").css("width", sleep_p);
  }
});
