const ex = require("express");
const ps = require("./pet_store");
const app = ex();
const cors = require("cors");

app.use(ex.json());
app.use(cors());
const p = ps.pets;

// API
app.get("/api/pets", (req, res) => {
  res.send(p);
});

app.get("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }
  if (pet) {
    res.send(pet);
  } else {
    let err = "No pet found.";
    res.status(404);
    res.send("ERROR: " + err);
    console.error("ERROR: " + err);
  }
});

app.get("/api/pets/list/species", (req, res) => {
  const species = [];
  for (let i = 0; i < p.length; i++) {
    if (!species.includes(p[i].species)) {
      species.push(p[i].species);
    }
  }

  res.send({ species });
});

app.put("/api/pets", (req, res) => {
  let new_pet = {
    id: p.length,
    species: req.body.species,
    eating_habit: req.body.eating_habit,
    pet_name: req.body.pet_name,
    image: "empty.jpg",
  };

  console.log(new_pet);
  p.push(new_pet);
  res.send(new_pet);
});

app.put("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    if (req.body.species) {
      pet.species = req.body.species;
    }

    if (req.body.eating_habit) {
      pet.eating_habit = req.body.eating_habit;
    }

    if (req.body.pet_name) {
      pet.pet_name = req.body.pet_name;
    }

    console.log(pet);
    res.send(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    console.error(err);
    res.send(err);
  }
});

app.delete("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < p.length; i++) {
    if (p[i].id == Number(req.params.id)) {
      pet = p[i];
      break;
    }
  }

  if (pet) {
    let index = p.indexOf(pet);
    console.log(pet);
    p[index] = {};
    res.send(pet);
  } else {
    let err = "Pet not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

// Server Setup
app.listen(3070);
console.log("Starting server...");
