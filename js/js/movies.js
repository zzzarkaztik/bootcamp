function runActivity() {
  //   const movie_names = [
  //     "The Hows of Us",
  //     "She's Dating the Gangster",
  //     "Barcelona",
  //     "2 Good 2 Be True",
  //     "Crazy Beautiful You",
  //   ];

  //   movie_names[2] = "Barcelona: A Love Untold";
  //   //   movie_names.push("Can't Help Falling In Love");
  //   //   movie_names.push("Hello, Love, Goodbye");
  //   movie_names[3] = null;
  const movie_names = [];
  const movie_budgets = [];

  while (true) {
    let movie_name = prompt("What is the movie name?");
    let movie_budget = prompt("How much did the movie cost to produce?");

    movie_names.push(movie_name);
    movie_budgets.push(movie_budget);

    let choice = Number(
      prompt("Would you like to add more? Enter 1 for YES, enter 2 for NO ")
    );
    if (choice === 1) {
      console.log("Adding more movies...");
    } else if (choice === 2) {
      break;
    }
  }

  for (let i = 0; i < movie_names.length; i++) {
    console.log(i + ". " + movie_names[i] + " | Budget: " + movie_budgets[i]);
  }
}
