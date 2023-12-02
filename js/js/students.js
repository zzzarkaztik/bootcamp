function runActivity() {
  let s_name;
  let s_old_grade;
  let s_new_grade;

  for (let i = 0; i < 3; i++) {
    s_name = prompt("Student's Name:");
    s_old_grade = Number(prompt("Student's Previous Grade-level:"));

    if (s_old_grade >= 0 && s_old_grade < 12) {
      s_new_grade = s_old_grade + 1;
      console.log(s_name + " is now enrolled in Wadiya University.");
      console.log(
        "Previos Grade-level: " +
          s_old_grade +
          "\nNew Grade-level: " +
          s_new_grade
      );
    } else if (s_old_grade == 12) {
      console.log("Ay beh graduate ka na. 'wag ka na dito. NEXT!!!");
    } else {
      console.error("ERROR: Beh, walang ganyang grade! NEXT!!!");
    }
  }
}
