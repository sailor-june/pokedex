const PORT = 3000;

const express = require("express");
const pokemon = require("./models/pokemon.js");
const app = express();

app.use(express.static("public"));

//Index

app.get("/pokemon", (req, res) => {
  res.render('index.ejs', {
    allPokes:pokemon
  });

});

//Show

app.get("/pokemon/:id", (req, res) => {
  res.render('show.ejs')
});
//New

app.get("pokemon/new", (req, res) => {
  console.log("new");
});

//Edit

app.get("pokemon/:id/edit", (req, res) => {
  console.log("edit");
});

///Create

app.post("/pokemon", (req, res) => {
  console.log("new");
});

//Update

app.put("/pokemon/:id", (req, res) => {
  console.log("update");
});

//Destroy

app.delete("/pokemon/:id", (req, res) => {
  console.log("del");
});

app.listen(PORT, () => {
  console.log("port " + PORT + " I choose you!");
});
