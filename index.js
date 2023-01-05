const app = require("./app.js");
const express = require("express");
const path = require("path");
const app = require("./app");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000, () => {
app.listen(3000, () => {
  console.log("Started express server at port 3000");
});
});