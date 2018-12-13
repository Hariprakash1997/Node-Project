const express = require("express");
const path = require("path");

const app = express();

const publicRoute = require("./routes/public");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(publicRoute);

app.listen(3000);
