const express = require("express");
const mongoose = require("mongoose");
var logger = require('morgan')

const PORT = process.env.PORT || 3000;

const Workout = require("./models");
const API= require("./public/api.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});