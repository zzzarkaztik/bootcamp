function runActivity() {
  const actors = [
    {
      first_name: "Xyriel",
      last_name: "Manabat",
      years_acting: 6,
      movie_list: ["Sisterakas", "Amarosa", "24/7 In Love"],
    },
    {
      first_name: "Sue",
      last_name: "Ramirez",
      years_acting: 5,
      movie_list: ["Aswang", "Dead Kids"],
    },
    {
      first_name: "Ogie",
      last_name: "Diaz",
      years_acting: 12,
      movie_list: ["Pare Ko"],
    },
  ];

  //   console.log(actors[0].first_name);
  //   console.log(actors[0].last_name);
  //   console.log(actors[0].years_acting);
  //   for (i = 0; i < actors[0].movie_list.length; i++) {
  //     console.log(actors[0].movie_list[i]);
  //   }

  actors.push({
    first_name: "Kim",
    last_name: "Domingo",
    years_acting: 4,
    movie_list: [],
  });

  for (i = 0; i < actors.length; i++) {
    console.log(actors[i].first_name + " " + actors[i].last_name);
  }
}
