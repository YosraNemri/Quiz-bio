const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    q_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    answer: {
        type: String,
    },
    definition: {
        type: String,
    },
});

module.exports = Answer = mongoose.model("answer", answerSchema);
