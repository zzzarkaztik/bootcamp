const ex = require("express");
const fs = require("fs");
const ps = require("./pet_store");
const app = ex();

app.use(ex.json());
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
    let err = "No pet Found";
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

// Server Setup
app.listen(3070);
console.log("Starting server...");
