const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// Redirect the request from the server so as not to expose the API key
app.get("/:char", (req, res) => {
  let key = functions.config().marvel.key;
  let url = `https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${req.params.char}&apikey=${key}`;

  res.redirect(url);
});

exports.api = functions.region("europe-west1").https.onRequest(app);
