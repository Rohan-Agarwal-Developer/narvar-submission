const mongoose = require("mongoose");

const ENV = process.env.ENV;
var DB_URI = "";

if (ENV === "production") {
  const password = process.env.DB_PASSWORD;
  DB_URI = `mongodb+srv://admin:${password}@#@cluster0.35sqf.mongodb.net/shorten?retryWrites=true&w=majority`;
} else {
  DB_URI = "mongodb://localhost:27017/urlshortener";
}

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

module.exports = connection;
