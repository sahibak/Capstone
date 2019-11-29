// setting up express
const express = require("express");
// setting up router
const router = express.Router();
// exporting router
module.exports = router;

// importing data
recipesData = require("../data/recipesData.js");

// GET request for recipes data
router.get("/",(request,response) => {
    response.send(recipesData);
})
