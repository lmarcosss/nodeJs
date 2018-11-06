const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://goweek:goweek123@ds051378.mlab.com:51378/goweek-back-end",
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
