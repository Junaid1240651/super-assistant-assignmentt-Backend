const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json({ limit: "50mb" }));
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
const FormRagisterSchema = require("./mongoDBSchema/formResult");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

mongoose
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"));

app.post("/", async function (req, res) {
  const formRagister = await FormRagisterSchema.create({
    categoryAnswers: req.body.categoryDragAndDropData,
    fillInTheBlanksAns: req.body.comprehensionData,
    peragraphAns: req.body.dropDownBlanksData,
  });
  res.status(201).json(formRagister);
});

app.listen(3000, () => {
  console.log("connected");
});
