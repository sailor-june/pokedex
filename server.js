const PORT = 3000;

const methodOverride = require("method-override");

const express = require("express");
const pokemon = require("./models/pokemon.js");
const app = express();

app.use(express.static("public"));

app.use(methodOverride("_method"));

//Index

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    allPokes: pokemon,
  });
});

//Show

app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    id: pokemon[req.params.id],
  });
});
//New

app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

//Edit

app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    id: pokemon[req.params.id],
  });
});

///Create

app.post("/pokemon", (req, res) => {
  console.log("new");
});

//Update
app.put("/pokemon/:id", (req, res) => {
  
  pokemon[req.params.id] = req.body;
});

//Destroy
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon')
  });


app.listen(PORT, () => {
  console.log("port " + PORT + " I choose you!");
});
