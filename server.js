const PORT = 3000;

const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const express = require("express");
const pokemon = require("./models/pokemon.js");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));

app.use(methodOverride("_method"));

//Index

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    allPokes: pokemon,
  });
});

//New

app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {});
});

//Destroy
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon");
});

//update

app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    id: pokemon[req.params.id],
    index: req.params.id,
  });
});

///Create

app.post("/pokemon/", (req, res) => {
  let newPoke = {
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    id: parseInt(pokemon.length),
    misc: {classification:req.body.classification},
    
  }
  console.log(newPoke)
  pokemon.push(newPoke)
  res.redirect('/pokemon')
  })
//edit

  app.put("/pokemon/:id", (req, res) => {
    console.log(req.body);
    pokemon[req.params.id].type = req.body.type;
    pokemon[req.params.id].name = req.body.name;
  });

  //show

  app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
      id: pokemon[req.params.id],
    });
  });


app.listen(PORT, () => {
  console.log("port " + PORT + " I choose you!");
});
