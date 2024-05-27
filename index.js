const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const fs = require("fs");


app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  let text = req.body;
  console.log(text);

  fs.appendFileSync('data.json', JSON.stringify(text));


  res.json("aaa");
});

app.listen(3000, () => console.log("Сервер запущен..."));
