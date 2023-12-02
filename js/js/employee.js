function runActivity() {
  let employee_name;
  let employee_dept_code;
  let i = 0;
  let department;

  do {
    employee_name = prompt("Give me you employee name");
    employee_dept_code = Number(
      prompt("Give me your employee dept. code (1, 2, or 3)")
    );
    console.log("Employee data saved.");
    console.log("Welcome, " + employee_name);
    switch (employee_dept_code) {
      case 1:
        department = "Human Resources";

      case 2:
        department = "Marketing";

      case 3:
        department = "IT";

      case 0:
        department = "Secret Admiral General";
    }
    console.log("This employee is in the " + department + " department.");

    choice = Number(
      prompt("Would you like to add another employee? 1. Yes 2. No")
    );

    if (choice == 1) {
      console.log("Adding new employee...");
    } else if (choice == 2) {
      console.log("Stopping...");
      break;
    }
  } while (i == 0);
}
