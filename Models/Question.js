const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: { type: String },
    type: { type: String },
    imagefield: { type: String },
    celltype: { type: String },
    point: { type: Number },
    n_answer: { type: Number },
    n_image: { type: Number },
});

module.exports = Question = mongoose.model("question", questionSchema);
