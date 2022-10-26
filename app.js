const express = require("express");

const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3001, () => {
  console.log("Server Corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
