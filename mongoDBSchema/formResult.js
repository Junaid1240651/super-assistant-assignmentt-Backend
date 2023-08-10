const mongoose = require("mongoose");

const formRagisterSchema = new mongoose.Schema({
  categoryAnswers: { type: Object },
  fillInTheBlanksAns: { type: String },
  peragraphAns: { type: String },
});
module.exports = mongoose.model("formRagisterSchema", formRagisterSchema);
