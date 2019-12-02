// setting up server
const express = require("express");
const cors = require("cors");
let port = process.env.PORT || 8080;

// init
const app = express();

// setting server to listen
app.listen(port, () => {
    console.log("server listening on port ",port);
})

// middleware
app.use(cors());
app.use(express.json());

// GET request for recipes
const recipesRoute = require("./routes/recipesRoute.js");
app.use("/recipes",recipesRoute);

// POST request for shopping cart
const shoppingCartRoute = require("./routes/shoppingCartRoute.js");
app.use("/shoppingcart",shoppingCartRoute);